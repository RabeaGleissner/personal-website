---
date: "2022-03-28"
title: "Converting a codebase from Flow to TypeScript"

path: "/blog/converting-flow-to-typescript"
tags: ["blog"] 
readTime: 6
---

A colleague and I were tasked with transforming a legacy Flow codebase to TypeScript.
I thought I'd share what I learnt during this project and what I'd do differently next time.

To give a bit of context, we were waiting for another project to start and didn't know how much time we would have for this refactor. So we needed to get the codebase into a working state as quickly as possible in case we suddenly needed to switch over to the other project. We wanted to avoid having a half done job which would have meant not being able to merge our changes and therefore wasting our time.

## Our strategy

Originally we thought that we could make Flow and TS work side by side inside the same project. But that wasn't easily possible.
So we decided to create a feature branch in which we would convert the entire codebase to TS and then merge that into the main branch when it was ready.

We decided to first get the codebase into a state where the TypeScript compiler would be able to give us feedback. Next we tackled all the errors that the compiler reported. We also installed Prettier and configured ESLint for TS so that we could make the code more consistent. Lastly we removed any Flow config files and custom types.

## Automating changes with a code mod tool 

There are a lot of small and easy to implement changes between Flow and TypeScript. They're not difficult to do, there's just a lot of them. For example changing the file extensions from `.js(x)` to `.ts(x)`. Or changing Flow "Maybe" types to optional types in TS. This involves changing the position of the question mark next to a parameter. So having an automated script to do all that for you can be useful.
Based on my research it seems like the `flow-to-ts` [package developed by Khan Academy](https://github.com/khan/flow-to-ts) is currently the best choice.

We tried it but didn't actually use it in the end becase we weren't happy with some of the transformations it made. However, I have to admit that I didn't spend a lot of time looking into all the configuration options for this package. In hindsight it might have been useful to give this tool another go with some more granular options. That might have minimise some of the repetitive manual work we did.

## Flow to TS playground

A tool that I used quite a lot was [this playground](https://flow-to-ts.netlify.app/). It is also created by Khan Academy and uses the same rules as the `flow-to-ts` package. It was handy for pasting Flow code snippets into it and seeing how the code would look in TS. I didn't always go with the suggestion but not knowing Flow very well, it was very helpful for me to see the TS translations.

## Improving the existing code

When working on a legacy codebase it's very tempting to refactor the code here and there, while you're working in the file. And this is generally considered good practise, right? Some people call it the "Scout Rule" - leave the campsite cleaner than you found it.

Well, in this case, I'd recommend not doing that. Our goal was to get the switch to TS done as quickly as possible and I think trying to improve the codebase at the same time ended up slowing us down.

Here's an example of a change we made.

```js
// before
const report = state.report || {}

// after
const report: ReportApiResult = state?.report
```

This change had a knock on effect in other parts of the file where `report.id` and `report.data` was accessed.
We had to change those to `report?.id` and `report?.data` as well. Luckily we had enough tests to feel safe making those changes. But the downside was that it made the PR diff even bigger.

## Prettier / lint changes

While we were working on the code conversion, we also installed Prettier and adjusted ESlint to work with the TS syntax. However, running Prettier introduced a load of additional changes. These made our PR bigger than necessary. TypeScript would have worked perfectly fine without consistent code formatting.

I definitely think that consistent code formatting is important but it didn't help us achieve our goal of a working TS codebase. We should have merged the TS changes first and then made any formatting changes in a separate PR.

## Implicit `any` types

TypeScript works even when no types are specified. For missing types, it automatically assumes that the type will be `any`.
This was very useful for us in the beginning, because we had quite a few areas in the code, where type definitions were missing.
So initially we turned off the type check for `noImplicitAny` in the `tsconfig.json`. 

However, why use TypeScript when not using the type checker to its full potential?
So once we got the code to compile and we didn't have any further TS errors, we then decided to incrementally add any missing types.

## Flow's optional parameter names in function types  

When defining types that are functions in Flow, it's possible to [leave out the parameter names](https://flow.org/en/docs/types/functions/#toc-function-types). However, TypeScript does not allow this.

In TypeScript you would define a function type like this for example:

```js
(myThings: Array<string>) => any
```

While in Flow, it's perfectly fine to just use:

```js
(Array<string>) => any
```

In our original Flow codebase, this pattern was used a lot, so we ended up having quite a few function definitions with missing parameter names. 

We didn't know the domain or the codebase very well, so it would have been quite an effort to figure out what the parameter names should be. Instead, we decided to agree on a placeholder name and then replace those with the actual parameter names as part of a separate PR, if we still had time. Luckily we ended up having a bit more time to do this!

## Optional function parameters

There were quite a few cases in the original Flow codebase where optional function parameters were followed by non-optional ones. 

Here's an example:

```js
// Flow
changeStepId(currentStepId: ?string, delta: number):void {
  // ...
}
```

This means that the current step id could be a string, null or undefined. TypeScript doesn't allow this - an optional parameter needs to be at the end.

One way to resolve this would be to reverse the arguments.
However, you'd need to be careful to adjust the argument order of any other calling code.
To keep the amount of changes as small as possible, I'd recommend typing it like this instead:

```js
// TypeScript
changeStepID(currentStepID: string | null | undefined, delta: number):void {
  // ...
}
```


## Summary

We did what we set out to do and managed to merge our changes before having to switch to our next project.

However, we could have been slightly more efficient by being stricter about sticking to changes absolutely necessary for a working TS codebase and making any other improvements afterwards.

Make it work first and then make it better!

The PR that we raised and reviewed became huge, especially due to the code formatting changes we did. 
Next time I'd definitely leave that for later and try and even more incremental approach.
