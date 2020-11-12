---
date: "2020-11-07"
title: "setTimeout and setInterval can be a security risk"
path: "/til/settimeout-and-setinterval-can-be-a-security-risk"
tags: ["til"]
---

Today I learnt that both of those function could potentially make your code vulnerable to remote code execution!
I only knew that the `setTimeout` and `setInterval` functions can take another function as an argument, which would then run after a certain amount of specified time.

For example this bit of code would log after 500 milliseconds because we gave it a function and specified 500 milliseconds as the timeout.

```javascript
window.setTimeout(() => { console.log('hey') }, 500)
```

Turns out, you can also pass it a string which will be evaluated as code!

This will do exactly the same thing as the above example:

```javascript
window.setTimeout("console.log('hey')", 500)
```

It could become a serious risk if we allowed user input or query params to be passed directly as the function callback. A malicious actor could inject code that way, which our application would evaluate. Scary!

The same goes for the `eval()` function and the Function constructor to which you can both pass a string as an argument that gets evaluated as code.

Examples

(both of these code snippets will log "hey" to the console)

```javascript
eval("console.log('hey')")
```

```javascript
const sum = new Function("console.log('hey')");
sum()
```

Morale of the story: try not to use these functions.

And if you must, don't pass them any user input or data from the database.

And if you must, make sure you validate and sanitise this data.
