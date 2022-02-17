---
date: "2021-04-28"
title: "Passing props into styled components"
path: "/til/passing-props-into-styled-components"
tags: ["til"]
---

I only just started working with [styled components](https://styled-components.com/) and they seemed pretty straight forward to use.
You can use any HTML tag of your choice and pass it your CSS as a JavaScript object.
Styling a div, would look something like this:

```javascript
const StyledContainer = styled.div({
  color: "black",
  background: "white"
})
```

Or you can also give a style to your own React component by passing it to the `styled()` function like this:

```javascript
const StyledContainer = styled(Container)({ // <Container /> is my own React component here.
  color: "black",
  background: "white"
})
```

Today I found out that you can pass props into those styled elements, just like you can into a React component.
Which is, of course, extremely handy!

Let's imagine we want to have an inverted colour scheme, for example when a user chooses to see our website in dark mode.
We can pass the inverted state as a prop and access it in a function that needs to return the JavaScript object with the styling instructions.

Here's a TypeScript example (prop types specified in the angle brackets):

```javascript
const StyledContainer = styled.div<{ inverse: boolean }>((props) => ({
  color: props.inverse ? "white" : "black",
  background: props.inverse ? "black" : "white"
}))
```

and you can use it in your code like this:

```javascript
const MyElement = () => <StyledContainer inverse />
```

Very useful indeed!
