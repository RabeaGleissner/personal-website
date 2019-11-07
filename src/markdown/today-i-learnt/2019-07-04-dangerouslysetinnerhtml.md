---
date: "2019-07-04"
title: "dangerouslySetInnerHTML"
path: "/til/dangerouslysetinnerhtml"
tags: ["til"]
---

Sounds pretty wild and like something you probably don’t want to touch with a bargepole! Au contraire. I’ve seen it all over our Tes codebase and now I’ve come across it again when I was setting up my Gatsby blog.

So why is this so dangerous and why does everybody still do it?

`dangerouslySetInnerHTML` is a React property. It’s used instead of `innerHTML`. 
`innerHTML` is a property on a DOM element and it’s used to replace everything within that element with whatever string you give it.
Ok, so that’s cool. Why not just use that? Why do we have to use the dangerous version?

Well, turns out that using `innerHTML` can create a security risk.
Because not only can you insert HTML content with it but you could potentially insert HTML that executes JavaScript.
MDN uses the example of an image tag with an `onerror=‘alert(1)’`. 

React wants to remind us of this problem and therefore chose this scary property name. We should, for example, never set user input directly as inner HTML. The HTML that we use to set it, should always be sanitised. To make it a little harder to directly set user input, you have to assign an object with the key of `__html`. Otherwise it won’t work. 

So this is fine:
`dangerouslySetInnerHTML={{ __html: html }}`

But something like this wouldn’t work:
`dangerouslySetInnerHTML={{ getUserInput() }}`

I mean, you could just call the `getUserInput()` function as the value of the `__html` key… But I guess that’s why they chose the scary name: to remind us that we have to be careful with this property.
