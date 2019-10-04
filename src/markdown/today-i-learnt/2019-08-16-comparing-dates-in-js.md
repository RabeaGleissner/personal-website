---
date: "2019-08-16"
title: "Comparing dates in JS"
path: "/til/comparing-dates-in-js"
tags: ["til"]
---

I’ve recently done a lot with dates and times. And I found it really fiddly. Comparing dates, comparing times of days… and I learnt a few things about that.

Firstly, moment.js is a life saver. It has so many cool functions for dates… whoever created it, thank you.
Other things I figured out:

It’s really hard to compare dates. I tried converting them into milliseconds so I could sort the dates. If you have a JavaScript date object, you can call `dateObject.date.getTime()` on it, which gives you milliseconds.

The annoying thing is that you’re probably going to have to covert the milliseconds back into date objects later, which you can do with `new Date(milliSecondDate)`. 

For comparing if one date equals another, I used the cool moment function `isSame`. It can be called on a moment date, so something like this `moment(date).isSame(new Date(someDate))`. The date that you’re comparing it to doesn’t have to be a moment date though. It can also be a date object, a string or milliseconds. And the really cool thing is that you can specify what you want to compare! A date object normally looks like this, with really specific time included. `2019-08-16T06:56:49.703Z`
So if you want to compare two dates but only care about the hour of day but nothing more granular than that, you can do this: `moment(date).isSame(new Date(someDate), ‘hour’)`. It will compare everything from year up to the hour, but nothing after that.

Here are the docs: https://momentjs.com/docs/#/query/is-same/
