---
date: "2019-03-21"
title: "MongoDB compound indexes"
path: "/til/mongodb-compound-indexes"
tags: ["til"]
---

I picked up a story at work today which is related to indexes in MongoDB.
Basically, one of my colleagues had run a query to evaluate the usage of our existing indexes for a specific collection and found out that we are using one particular index a lot but the others not so much.

The query he ran was this 
`db.getCollection(“theCollectionName").aggregate( [ { $indexStats: { } } ] )`

The resulting story was that we should change the mostly used index into a compound index and delete all the others to increase performance.

So today I learnt what a compound index is.

Indexes are created to speed up read and writes in the database. If we create an index on a specific field, any queries for this field will be faster because the database already knows where to look and doesn’t need to go through every document to see if the value is there.

The definition of “compound” is “a thing that is composed of two or more elements”. So this index is a mix of several fields. 
The order of the fields of which it is composed is important. 

`db.products.createIndex( { "item": 1, "stock": 1 } )`

In this example the documents are sorted by the item field first and then within that they’re sorted by stock.
The compound index can also support queries that just use the item field or queries that use both fields. However, queries that just used “stock” aren’t supported.

Another useful query to analyse the performance of MongoDB is this

`db.getCollection(“theCollectionName").explain({}).find({})`

You can append various different query methods (e.g. count, remove) to see how they perform. 
