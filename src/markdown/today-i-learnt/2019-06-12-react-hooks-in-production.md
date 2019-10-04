---
date: "2019-06-12"
title: "React Hooks in production"
path: "/til/react-hooks-in-production"
tags: ["til"]
---

Today I used React Hooks for the first time in a production project. Boom! Modern JavaScript.
I used the state hook which replaces `this.setState` and `this.state`.
You no longer need a class component to keep track of state but you can use a function component. In fact, you have to.
And at the top of the function component you specify the name of the variable that you want to keep the state in.

In my case, I had to keep track of a list of suggestions. So before I had set in the constructor:

`this.state({suggestions: []})`

And when I had fetched some new suggestions, I could update them with `this.setState({ suggestions: someNewSuggestions })` and I could use them all around the class with `this.state.suggestions`.

That’s a lot of boilerplate and Hooks make it much simpler.

First I had to import the state hook like this:

`import React, { useState } from 'react’;`

At the top of the function component I specified:

`const [suggestions, setSuggestions] = useState([]);`

The argument to `useState` is the equivalent of the default state that I would have set in the constructor.

And the first variable in the destructured array, `suggestions` is the equivalent of `this.state.suggestions`.
If I want to update those suggestions, I can just use the second variable `setSuggestions(newSuggestions)`. 

Pretty straight forward!
But it turns out though that I couldn’t just replace my code one for one. 

I received a warning from React saying that I was potentially breaking the “Rules of Hooks”. Whoops! So strict!
I looked up the docs and I had broken rule number 1! I’m such a rebel.
Rule number 1 says that you can only call hooks at the top level of a function - not inside loops or if conditions.
I had called them inside a ternary, so basically an if condition. 
Yeah, better refactor that.
