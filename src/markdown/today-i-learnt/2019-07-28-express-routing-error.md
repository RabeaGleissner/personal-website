---
date: "2019-07-28"
title: "Express routing error"
path: "/til/express-routing-error"
tags: ["til"]
---

```javascript
Uncaught Error: Route.post() requires a callback function but got a [object Undefined]
```
What Express is trying to tell you is that your route is calling a controller function that doesn’t exist… 
Because you renamed it in the controller… and then you went and updated some other things… and then you forgot to rename the function in the routes file. Cool. 🤷
