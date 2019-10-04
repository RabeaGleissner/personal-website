---
date: "2019-06-19"
title: "Edit view vs read-only view"
path: "/til/edit-view-vs-read-only-view"
tags: ["til"]
---

At work we’re aiming to build a new system in the most Lean way possible.
Which basically means that we’re trying to get it up and running with the most minimum amount of work and code written. 
The goal is that users will start using it as soon as possible and we'll get feedback early on.
I learnt an interesting trick of Lean design today - about a read only view of data. 

I was working on a story to display some data for a specific use case on a new page in our application.
However, I was told later, that this wasn’t the most minimal approach that I could have taken. The reason was that we will also need an editable view for exactly that data later. 
So instead of creating the read only view first and making it editable later, I should have only created the edit view. 
It will still serve the purpose of displaying the data but at the same time the data can be changed. 
And usually an editable form is more difficult to build than a page which displays data.
We're trying to tackle all tasks that seem more complex first in order to reduce any risk.

From a UX point of view I don’t really like this approach…
I find it weird if a completed form loads when I just want to see the data.
But in order to write as little code as possible to make the system usable as soon as possible, I totally see why this is a good idea.

In the end, our product manager said that the user experience is more important for him and he would like to go ahead with the read only view and build the editable view later.
But now I will definitely consider this!
