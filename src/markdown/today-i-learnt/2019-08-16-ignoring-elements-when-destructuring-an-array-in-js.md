---
date: "2019-08-16"
title: "Ignoring elements when destructuring an array in JS"
path: "/til/ignoring-elements-when-destructuring-an-array-in-js"
tags: ["til"]
---

Recently, while I was pairing with Federico, he wrote some code like this:

```javascript
 const [, personalInfo] = userData;
```
And my reaction was: "You have a rogue comma there!"
But no… he left it on purpose!

If you’re familiar with destructuring in JavaScript, you will have figured that `userData` is an array.
And Federico was trying to get the second element of the array.
Turns out, in JavaScript you can just leave the first space blank.

I would have suggested using an underscore instead, as this is what I'm familiar with from Elixir, for example:

```javascript
 const [_, personalInfo] = userData;
```

But our linter complains about one letter variables.
Also, in JavaScript, simply leaving a blank space [is a thing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Ignoring_some_returned_values)!
For any position in the array.
If you just care about the number 3 and 5, you can do this:

```javascript
const [,,three,,five] = [1,2,3,4,5];
```

I find that very odd.
But then I guess I won't really need to do something like this very often.
Also - just because you *can* do it, it doesn't mean that have to do it that way.
It seems a bit hard to understand.
On the other hand, if this is idiomatic for JavaScript then I should be using this.
I'm undecided… 
Well, at least next time Federico leaves a rogue comma sitting around, I know what's going on!
