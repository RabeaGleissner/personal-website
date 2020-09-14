---
date: "2020-09-10"
title: "Learnt a new German word - Datensparsamkeit"
path: "/til/learnt-a-new-german-word-datensparsamkeit"
tags: ["til"]
---

Who would have thought that I'd learn a new German word at a conference in Australia - from Martin Fowler!
My first language is German. I haven't lived in Germany for over a decade now so I'm somewhat out of touch with the latest German words.
Especially when it comes to tech - I never worked as a programmer in Germany and have a really hard time speaking about these concepts in German.

## So how did I learn about Datensparsamkeit?

I attended XConf Australia today (remotely), a conference organised by ThoughtWorks.
The topics on that day revolved around data - storing it, moving it around, making it big, teaching it to machines... You know, trendy subjects.

In his opening talk, Martin Fowler mentioned that especially Germans are very careful about storing data and that there's the German word "Datenshshwslisd". Excuse me?
I didn't understand what he was saying and had to ask in the conference Slack channel if someone could write it down.

## What is Datensparsamkeit?

Turns out this word was already thrown around in 2013 - which is when (Martin's blog post)[https://www.martinfowler.com/bliki/Datensparsamkeit.html] about it came out. So I'm well behind the curve.
I would directly translate it as "data frugality".
Apparently these days it's often called "data minimisation".

Datensparsamkeit means that you are careful about the data that you're storing and you only store what you really need.
Kind of the opposite of the big data approach of saving every single user interaction that you can possibly find - and figure out what to do with it later.

An example of Datensparsamkeit that Martin gives in his blog post is instead of storing the complete user's IP address, you just store the first part.

I guess it's an overall mindset of just being careful about the data you're saving and not just hovering up as much as you can at all times.
And also being mindful of the risk that having this kind of data on your servers brings with it.

Alright, thanks for that German (and data) lesson, Martin!
