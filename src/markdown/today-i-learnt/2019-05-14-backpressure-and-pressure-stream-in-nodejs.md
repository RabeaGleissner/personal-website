---
date: "2019-05-14"
title: "Backpressure and pressure-stream in Node.js"
path: "/til/backpressure-and-pressure-stream-in-nodejs"
tags: ["til"]
---

I’m working on a story to take some data from one database, transform it and then save it in another database. So I need to write a script that does this. Luckily I’m not the first person to have solved this problem… it’s been done before!
My colleague has recently done something similar, so I looked at her script as an example. 

I noticed that she gets the data, converts it into a steam and then pipes it using the node module `pressure-stream`. I hadn’t come across that before, so I read up on it. 

This all has to do with the issue when data is piped from one place to the next too quickly. So, when the receiving end cannot deal with the data at the speed that it comes in, it will back up and will need to be stored in memory. This accumulation of data is usually called backpressure. 

Node.js streams resolve this issue out of the box, so we should get any backpressure when we’re piping the data through the transformation function and into its new database home.
So why do we need `pressure-stream`? It allows us to call an asynchronous function while we’re streaming. Ok, so the insertion into the new database is an asynchronous function. I guess that’s why we need it!

I just did a search for pressure-stream in our work Github organisation and, while the npm module only has 29 weekly downloads, it seems like it’s a popular repository for us!
