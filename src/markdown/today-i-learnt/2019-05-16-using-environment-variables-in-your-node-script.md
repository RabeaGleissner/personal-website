---
date: "2019-05-16"
title: "Using environment variables in your node script"
path: "/til/using-environment-variables-in-your-node-script"
tags: ["til"]
---

It’s as easy as this. 
In your code, use `process.env.SOMETHING`. And when you run your script with `node theScript.js` set the environment variables first. So it’ll be something like:

`SOMETHING=the-secret-password node theScript.js`

That’s it! Oh, don’t put spaces around the equals sign. Doesn’t work.
