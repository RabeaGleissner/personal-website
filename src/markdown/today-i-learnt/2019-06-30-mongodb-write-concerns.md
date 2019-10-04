---
date: "2019-06-30"
title: "MongoDb write concerns"
path: "/til/mongodb-write-concerns"
tags: ["til"]
---

I’ve been doing the MongoDB for JavaScript developers course by MongoDB University.
Today I learnt about write concerns.

Let’s say we are saving something in the database, but instead of just one node, we have decided to add two back-up nodes, in case the first node goes down.
That’s a total of three nodes. One primary, and two secondary. 

By default, MongoDB will return an acknowledgment back after writing to the primary node only.
So how do we know that it successfully wrote to the other nodes?

You can specify the write concern with the `w` option.
By default the write concern is `{ w: 1 }`, which means an acknowledgement is returned after it wrote to the primary node.
If we want to make sure that it the data was written to all of our three nodes, we would specify `{ w: 3 }`. 

But we can also specify `{ w: ‘majority’ }` - in this case we would receive an acknowledgment after the data was written to the primary node and one of the secondary nodes.

And where exactly do we specify this option? When we connect to MongoDB using the MongoClient.

```javascript
 MongoClient.connect(
   process.env.MFLIX_DB_URI,
   { poolSize: 50,
     wtimeout: 2500,
     useNewUrlParser: true },
 )
```

Or we can also specify it as a second argument when we insert data.

It’s important to note though, that we also need to specify a write timeout if we specify “majority” as a write concern.
According to the MongoDB documentation, if the write concern that is set is unachievable, then the write operation will block indefinitely.
In my example, the “majority” concern could become unachievable if the primary node goes down.
