---
date: "2022-05-22"
title: "Querying data in Azure Table storage"
path: "/til/querying-data-in-azure-table-storage"
tags: ["til"]
---

Today I learnt about Azure Table storage.

At work I needed to find out how many users prefer one UI setting over another.
This data was saved in an Azure Table storage database table.

## What is Azure Table storage?

Table storage is a basic NoSQL database.
Each data set can be uniquely identified and queried by a row id and a partition id.
However, it doesn't have any advanced query capabilities like for example MongoDB.
So why would you use it?
Access to the data in Table storage is very fast and cost effective.
Apparently it can save a lot of money over using a database with more advanced query capabilities.
It's totally sufficient if you really only need to query by row id or partition id.
As soon as you need more functionality, it gets a bit more difficult.

## The structure of Table storage

Each Azure Storage account can have many Tables.
Inside a Table there are Entities, which are the data sets, similar to a database row.
There's no schema, so each entity can have different properties.
A property is a key-value pair.
There are three system properties which each data set has: partition key, row key and timestamp.

## Usage example

At work we use such a Table to store the user settings for our application.
For example we save accessibility settings or which view a user wants to see for certain content.
When a user logs in with their profile, we can retrieve this data for them and show them the UI according to their previously chosen preferences.

## My use case

I wanted to find out if the list view or the grid view was more popular on a certain page, so I thought I would query the table.

Each user has a contentViewMode property, which can be null, 'list' or 'grid'.
Querying this turned out a bit more difficult than expected.
Unfortunately it's not possible with Tables to create a query that automatically finds all the content view modes that are not null and then counts the 'grid' and the 'list' settings.

However, with the use of the [Node SDK](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/tables/data-tables#getting-started) I was able to connect to the UserSettings table and then iterate over each entity and get the properties on the entity. 

I decided to log the partition key, row key and contentViewMode whenever the contentViewMode property was not undefined.
Then I used the command line to pipe the output into a csv file. I imported the csv file onto Google Sheets and analysed the data.

Probably not the most elegant way but it worked!
