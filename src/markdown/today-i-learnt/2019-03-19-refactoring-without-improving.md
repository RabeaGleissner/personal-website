---
date: "2019-03-19"
title: "Refactoring without improving the code can be ok"
path: "/til/refactoring-without-improving-the-code"
tags: ["til"] 
---

Refactoring usually means that you’re changing existing code without changing its behaviour - with the intention to make it better. One of my colleagues did a presentation yesterday in which he shared his ideas on how to write good code. "Good" meaning: easy to understand and to change.

One of the points he made was that refactoring doesn’t always have to result in better, cleaner code. Instead, sometimes an attempt at refactoring can make problems obvious. And maybe the next person, who looks at the code, will find a way to improve the code, once the problems are there for everyone to see. 

I thought that this was quite an interesting idea. I’ve worked on a few projects where I knew that something was wrong and tried to refactor it, but in the end just felt that the code was worse than before. So I reverted all the changes and just left it how it was. Maybe I should have left the refactoring and checked in the worse code to see what my team members would have done with it? Or maybe during the PR review someone else would have had a good idea on how to actually make the code better. 
