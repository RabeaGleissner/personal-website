---
date: "2019-04-29"
title: "Changing an index to a sparse index in MongoDB"
path: "/til/changing-an-index-to-a-sparse-index-in-mongodb"
tags: ["til"]
---

An index on a specific fields means that when we do a query using that field, it will be more performant.
But what happens when not all documents in the db have that field? Then we can use a sparse index.
That means that the query will only use that index on those documents that has the field.

When changing an existing index to a sparse index, we need to manually delete the index in the database and then the sparse index can be recreated.
Otherwise we get errors like I did recently. 

I had deployed some code that was saving some new documents that didn’t the field that the index was on.
My colleague had changed it to be created a sparse index in our code, but it wasn’t updated.
So the first time I saved a new document without the field, it was created with the field as a null value.
It tried to do it again for the second time and then I got an error saying that I can’t save duplicate keys - because it tried to save it as null again.
No more documents were saved after.
