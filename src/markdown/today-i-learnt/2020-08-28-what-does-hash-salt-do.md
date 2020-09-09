---
date: "2020-08-28"
title: "What does hash salt do?"
path: "/til/what-does-hash-salt-do"
tags: ["til"]
---

Adding salt to a password before hashing it makes it more secure. Recently I learnt exactly why that is.

When you save a password in your database, you don't want to save it in plain text. In case there's a data breach and a nasty hacker manages to see the data in your database, they can just see all the passwords and that's that. Users not happy, reputation of your website gone down the drain... A bad day.

To make it a bit more difficult for the hacker, we can hash the password. Hashing means that we use an algorithm to transform the password into a new string that - on first glance - looks like totally random scrambled up characters.

And here comes the crux: hashing can not be reversed. It's a one way thing. So when a user logs in and enters their password, the password is hashed again, with the same algorithm, and then compared to the scrambled up string in the database to see if the password is correct. Cool! That seems pretty secure.

Except... What if the nasty hacker went ahead and found the world's 100,000 most common passwords, hashed them with various common algorithms and now has a map of those passwords with their hashed versions? Then it would be pretty easy for them to take that data from our database that they just hacked into and figure out some of the passwords by comparing the hashed versions in their mapping table and the strings in our database.

We can't rely on users using really hard to guess passwords or a password manager. A lot of users will probably just use a memorable password out of convenience, which unfortunately means that it's likely to be easily guessable and the nasty hacker will have already got those passwords in their mapping table.

And this is where the salt comes in!

Instead of hashing the password as it is, we can add a randomly generated string to the end of the password and then hash it.
We need to store that salt in our database along with the passwords. That means hackers can still find it. But what they can't do is just go to their existing look up table and figure out what the passwords are.

In theory they'd have to take each salt one by one, add it to aaaallll of those most commonly used passwords, hash those and then compare all of those newly hashed ones to that one password which is linked to the one salt. It's possible but it takes a lot of computing power and would take a long time to figure out all the passwords in our database.
