---
date: "2019-10-25"
title: "How to find a key with a null value in MongoDB"
path: "/til/how-to-find-a-key-with-a-null-value-in-mongodb"
tags: ["til"]
---

Today I had an error because I was trying to set some data on a nested object in MongoDB, except that the parent key was null in one case.
So I got an error because Mongo didn't know how to set null to an object.
It seemed quite unusual that the value for that particular key would be null.

So I wanted to figure out how many documents we had in the database which had the null value for this particular key.
So I did a query like this

```javascript
{thisParticularKey: null}

```

And that returned loads of results. So I thought "Wow! Must be quite common to have a null value for that particular key!".
It was pretty weird though, so I looked a bit more closely and realised that this query also returned all documents on which `thisParticularKey` doesn't even exist.

The correct way to do this would have been to do a type check instead.
Each data type in Mongo has a number and null has the number 10.
So once I checked for this, I only got 5 documents back, which seemed much more realistic.

```javascript
{thisParticularKey: { $type: 10 }}

```
