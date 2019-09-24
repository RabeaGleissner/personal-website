---
date: "2019-08-29"
title: "Assert that an object has keys with expect.js"
path: "/til/assert-that-an-object-has-keys-with-expectjs"
tags: ["til"]
---

We’re using expect.js at work for our test assertions.
And today I learnt that you can have an assertion on whether an object has a key or not. 
I needed to assert that an object was not saved with a certain key in our database.
So I was able to use `expect(savedObject).to.not.have.key('dates')` which was very handy!

Docs for expect.js: https://github.com/Automattic/expect.js
