---
date: "2019-08-06"
title: "Vim snippet for console logging"
path: "/til/vim-snippet-for-console-logging"
tags: ["til"]
---

I did another one today to easier debugging in JavaScript.

`nmap cll yiwocll<Esc>pF(a'<Esc>lyiwea', <Esc>p<Esc>`

When your cursor is on a word in normal mode, you can type `cll` and it will insert a console.log statement with the word you’re on on the next line.
And that’s not all…
it will also add that word as a string in front of it!

Example:

```javascript
const someMysteriousData = something
console.log('someMysteriousData', someMysteriousData)
```

Someone also told me about a trick for console logging where you put curly braces around the logged data.

`console.log({ someMysteriousData })` - that will turn it into an object with the key of `someMysteriousData`.
So if there's no mysterious data, you still see the key and an empty object.
I did that for a while but it's a bit confusing if the data is an object and then you don't know which object is which and I didn't like it because it was too confusing basically.

So now I have `cll` and it's awesome.
