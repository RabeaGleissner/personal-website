---
date: "2019-06-23"
title: "MongoDB lookups"
path: "/til/mongodb-lookups"
tags: ["til"]
---

As part of the MongoDB University course that I’m doing, I had to write an aggregation with a $lookup 😱

And I learnt that lookups are effectively left joins, as we know them from relational databases.
We have one table and to each row we add data from another table, based on a matching field in that row.
But somehow I find that much harder to visualise in a no-sql database where there are no tables and rows. 

The course uses the example of a movies application.
It has a movies collection and a comments collection.
The task was to retrieve the comments matching a movie id.

This was what the query looked like in the end:

```javascript
   const pipeline = [
     {
       $match: {
         _id: ObjectId(id)
       },
     },
     {
       $lookup: {
         from: 'comments',
         let: {'id': '$_id'},
         pipeline: [
           { '$match':
             { '$expr': { '$eq': ['$movie_id',  '$$id'] }
             }
           },
           {  '$sort': { 'date': -1 } }
         ],
         as: 'comments'
       },
     },
   ]

 return await movies.aggregate(pipeline).next()
```

An aggregation pipeline can have several stages. 

### Match stage
To filter the movies collection to find one particular movie.
The `id` was given so I could filter by that.

### Lookup stage
Here we’re specifying to get the data from the comments collection.
The `let` object defines the variables from the input document that we want to use in the lookup.
We want to check if the movie id from the comment matches the movie id from the movie that we’re looking at.
That’s what happens in the `match` object.
And when we found all the comments with the movie id, we sort them by data order. 
The `as` value is the name of the output array field.

This looks so much more complicated than an sql join query!
But maybe it’s just a matter of getting used to it…
I signed up for the aggregation framework course next, so I’m sure I’ll get lots more practise soon…
