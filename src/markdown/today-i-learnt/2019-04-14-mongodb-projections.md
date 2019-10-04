---
date: "2019-04-14"
title: "MongoDB projections"
path: "/til/mongodb-projections"
tags: ["til"]
---

Every time I have to do a MongoDB query I feel a bit uneasy… I know how to make some basic queries but the rest I always have to google. So I decided to start the Mongo University course for JavaScript developers. 
I did the first week of lectures and labs and it is really fun!
And now I finally understand what projections are. 
Basically, if you don’t want to return all the fields of the document, you can specify the fields you want as a projection.
I’m explaining myself the name ‘projection’ as something like a prediction.
We’re predicting which fields should exist.
A projection is another argument to the query function.


`db.inventory.find( { status: "A" }, { item: 1, status: 1 } )`

In this query we’re looking at all the inventory items where status is A but we only want to see the item and status fields.
The `_id` fields is returned automatically.
If we don’t want to see that, we can switch it off by specifying 0 as the value

`db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )`
