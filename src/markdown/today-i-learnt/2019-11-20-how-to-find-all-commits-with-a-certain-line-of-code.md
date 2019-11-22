---
date: "2019-11-20"
title: "How to find all commits with a certain line of code"
path: "/til/how-to-find-all-commits-with-a-certain-line-of-code"
tags: ["til"]
---

This is an awesome one. Let me explain.

Today our whole team at work is spending a day of paying off technical debt.
Ok, that’s not the awesome part.
The awesome part is what my colleague just showed me.

He wanted to see all the commits which contain a certain string in the diff.
So not in the commit message but in the actual code changes.
Specifically he was looking for the usage of an npm package.
It seemed to be totally unused and it was unclear why it was there, so finding the commit that introduced it might have given us a clue.

And what he showed me was this:

You can pass `-S` and a string to `git log`.

So for example, if I wanted to see all the commits which contain changes related to axios, I could run this.

```
git log -Saxios
```

(No space between the capital 'S' and the search string... this is not a typo!)

Very useful, isn't it?
