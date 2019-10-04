---
date: "2019-06-17"
title: "Formatting dates with toLocaleString in JavaScript"
path: "/til/formatting-dates-with-tolocalestring-in-javascript"
tags: ["til"]
---

I’ve worked with JavaScript for a while now but somehow I had never come across the function `toLocaleString` to display dates in the front end. The function is called on a date object and takes a language and country as a first argument and then an options object for how the date and time should be displayed.

To display a date with day, month, year you need to pass it these options as keys. Values can be things like “long” for month, which means that the month is spelled out. Or “numeric”, in which case it shows the number for the month. 

In order to show the date like this 17 June 2019 you need to do something like this:

```javascript
date.toLocaleString(‘en-GB’, {
  year: ’numeric’,
  month: ‘long’,
  day: 'numeric’,
})
```
At least that’s what I thought! Apparently the British formatting convention states that the month should come before the day. Looks more American than British to me, but maybe I’m wrong?

I tried out a few more options in the node console:

```javascript
|> date.toLocaleString('de-DE', {weekday: 'long', month: 'numeric'})
'6 Saturday'
|> date.toLocaleString('en-GB', {weekday: 'long', month: 'numeric'})
'6 Saturday'
```

Soo… err… that’s working well?! Not? We definitely don’t call it “Saturday” in German!
Let’s try it in the Chrome console… 


```javascript
|> date.toLocaleString('en-US', {weekday: 'long', month: 'numeric'})
"6 Saturday"
|> date.toLocaleString('de-DE', {weekday: 'long', month: 'numeric'})
"6 Samstag"
```

That’s better. So I guess it’s not implemented correctly in Node?!
Weird!! Unfortunately that means that I can’t use it because it doesn’t work in our code like it does in the browser console.
So I guess I’ll just do the old date.getDay() and date.getMonth() and display it in the order that I want to.
So maybe that would explain why I had never come across the toLocaleString function!
Because it doesn’t work with Node?
