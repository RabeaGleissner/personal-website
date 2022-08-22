---
date: "2022-05-24"
title: "Passing options to listEntities in Azure Data Tables Node SDK"
path: "/til/passing-options-to-listentities-in-azure-data-tables-node-sdk"
tags: ["til"]
---

There's a [Node / TypeScript SDK](https://www.npmjs.com/package/@azure/data-tables) for interacting with Azure Table Storage tables.

The query capabilities of an Azure Table Storage table aren't great, but I found out that you can at least pass some options into the `listEntities()` function for the `@azure/data-tables` Node SDK.

I wanted to find all entities with a certain RowKey.
I was worried that I'd have to iterate over all the rows in the table and then filter those that I needed in JavaScript.

Luckily it's possible to pass queryOptions!
To me this wasn't obvious from the documentation, so I thought I'd share here how it works:

```
// Create the client with your config

const tableClient = new TableClient(
  ...some parameters based on your config...
);

// Filter only those rows with the row key "generic"
const listEntitiesOptions = {
    queryOptions: { filter: "RowKey eq 'generic'" },
};


// Pass options into the function  
let entitiesIter = tableClient.listEntities(listEntitiesOptions);
```

Maybe this will help someone trying to query these tables...
