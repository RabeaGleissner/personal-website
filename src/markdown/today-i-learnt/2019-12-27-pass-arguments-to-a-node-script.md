---
date: "2019-12-27"
title: "Pass arguments to a Node script"
path: "/til/pass-arguments-to-a-node-script"
tags: ["til"]
---

We're migrating our old Hugo blog at work to use Gatsby.
Mostly the markdown pages can stay the same - except the frontmatter sections at the top of each blog post.
In Hugo we were using JSON and Gatsby only understands markdown.

I wrote a script today to change the JSON to markdown.

The script takes one argument, which is the file name of the existing blog post.
And I learnt that in Node, there's a `process.argv`. It's an array out of which the third element is the argument that you can pass when running the Node script.
Something like this:

```javascript
node myScript.js myArgument
```
The first element in the `process.argv` array is the path in which Node is installed.
The second element is the file name of the script you're running.
And any other elements are the arguments that you can pass when running the script.
