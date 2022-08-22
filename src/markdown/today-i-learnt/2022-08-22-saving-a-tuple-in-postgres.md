---
date: "2022-08-22"
title: "Elixir: Saving a tuple in Postgres"
path: "/til/saving-a-tuple-in-postgres"
tags: ["til"]
---

You can sort of get it working - but should you?

I'm writing a Connect Four game application in Elixir.
I wrote game logic which expects to receive the coordinates of a coin position as a tuple.
Something like this `{0, 1}` would mean that the coin is in the first row and second column.

I am saving this information in my Postgres database but of course Postgres does not support the data structure of a tuple.
Luckily, Stackoverflow came to the rescue and I learnt that Erlang has a function which converts a term to binary and back again.
Great!
I can save binary data in Postgres.
I decided to convert the coordinates tuple to binary with `:erlang.term_to_binary(coordinates)` and save it in the database like that.

It works - but the more I'm working with this, the more I realise that this was not the best solution.

## Debugging is harder

When I query the database to see which coordinates are saved, I see stuff like this:

```
connect_game_dev=# select * from moves;

 id | player |       coordinates        
----+--------+--------------------------
 18 | red    | \x83680261016104         
 19 | red    | \x83680261006d0000000130 
 20 | red    | \x83680261006d0000000131 
(3 rows)
```

Not super useful when I want to find out if the right coordinates were created!

## Input validation

Using Ecto changesets is slightly harder.

Ecto comes with various handy validation functions, for example `validate_number`.
This function allows you to check if a number is greater or less than a specific value.
Before saving the coordinates into the database, I want to make sure that the column number isn't less than 0 or more than the size of the game grid.
And for rows, I could do a similar check.
However, with my tuple data structure I'll need to write a custom validation function.
It's possible, but using a provided function is much more convenient!

## Improving my data storage

In the end I decided to change my database table and save the two coordinates separately instead.
I created two new columns in my database, one for `x_coordinate` and one for `y_coordinate`.
Each of those can save the coordinate integer.
Now it's easy to see the coordinates in the database and I can make use of the validation function provided by Ecto!
