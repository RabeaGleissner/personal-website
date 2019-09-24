---
date: "2019-09-06"
title: "Orthogonality"
path: "/til/orthogonality"
tags: ["til"]
---

I'm reading The Pragmatic Programmer at the moment and they explain what orthogonal systems are.
I feel like I had heard about it before but never really knew what it meant.

Orthogonality is a term that comes from geometry.
Two lines are considered orthogonal if they meet at right angles.
Like at the corner of a square, for example.
If one line gets longer or a point on the line moves further away from the corner, the other line is completely unaffected. 

For software systems this means basically that things should be decoupled.
The example that's given in the book is that the database should be orthogonal to the user interface.
For example, if the database is swapped out, the UI should not be impacted.
Fair enough, I think that was usually the case in all the codebases that I've worked in so far.

I've used the repository pattern before, where other parts of the code call a method in a repository class that would then interact with the database.
So if we were to swap out the database, only the repository classes would need to change and any other places in the code can stay as they are.
Where I work now, we’re calling it a “store” but it's basically the same thing. 

The advantages of an orthogonal system are that it's easier to maintain and easier to make changes to. 

I guess it's just a another way of saying that a system should be modular and entities should adhere to the single responsibility principle.
