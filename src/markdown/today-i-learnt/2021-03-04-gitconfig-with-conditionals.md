---
date: "2021-03-04"
title: ".gitconfig with conditionals"
path: "/til/gitconfig-with-conditionals"
tags: ["til"]
---

Today I learnt that you can have conditional statements in your .gitconfig file.

This was useful because I now have a second Github account for a client project in addition to my usual public account.

So if I commit to the client's repo, I don't want to be committing with my public user details but with the account that the client has set up for me on their Github enterprise installation.

I added a conditional to my `.gitconfig` based on the directory that I'm working in. In this case, if I'm in the client work directory, the config for my second account will be used.

```bash
[includeIf "gitdir:~/work/client-work/"]
	path = ~/.gitconfig-second-account
```

And then in the `.gitconfig-second-account` I am able to specify a different user and whatever other things I need for that second Github account.

```bash
[user]
  email = the email I use for the client project
```
