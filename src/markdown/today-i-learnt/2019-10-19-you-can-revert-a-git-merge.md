---
date: "2019-10-19"
title: "You can revert a git merge"
path: "/til/you-can-revert-a-git-merge"
tags: ["til"]
---

We had a little bit of an issue in live today, resulting from a large refactoring that was done this week.
We had to urgently fix this issue.
It was hard to debug, so we ended up reverting the code that created the issue.
It was part of a pull request with loads of commits though and we couldn’t just revert one commit.

I didn’t think that reverting each commit one by one was a good solution.
We also didn’t want to do a git reset hard on master because we didn’t want to rewrite history.

Well, it turns that you can roll back a git merge by reverting the merge commit!
You need to run `git merge` with the flag `-m`.
Slight confusing that `-m` doesn’t stand for “message” in this case, like it would on `git commit -m “my commit message”`.
Here it stands for “merge”. 

The command we used was this:

```
git revert -m 1 SHA_OF_MERGE_COMMIT
```

The interesting bit was the `-m 1`.
The one means that we want to revert to the first parent of the merge commit, which was the master branch.
Let’s say this commit was first on a develop branch before it was merged into master.
If we wanted to revert back to that commit on the develop branch, we would have had to specify `-m 2`.
Luckily we only have feature branches and merge those directly into master, so no confusion there.
