---
date: "2019-10-17"
title: "You can temporarily ignore vulnerabilities"
path: "/til/you-can-temporarily-ignore-vulnerabilities"
tags: ["til"]
---

At work we have a pre-push hook on our repos that doesn’t allow us to push if we have npm vulnerabilities.
That’s great for security, of course, and I see why that’s necessary.
It’s not much fun if you really want to get your feature out and then it turns out you have 39 new vulnerabilities from who knows where.
But anyway, that’s part of a JavaScript developer life. 

What I learnt today is that you can use [npm audit resolver](https://www.npmjs.com/package/npm-audit-resolver) to defer fixing those vulnerabilities.
For example we recently had a vulnerability in a package that depends on a package that depends on a package and probably a few more in between.
All open source libraries that we don’t control.
So these libraries would have all needed to update before we received the benefit of the vulnerability fix.
As this vulnerability wasn’t super critical for us because the code didn’t actually run in production, we are able to ignore it for a while.
But how to remember to check it again after some time?

That’s a feature that npm audit resolver can help with.
You can temporarily ignore an issue and be reminded again after 24 hours.
Of course you should only do that when you have a good reason why you can’t or don’t want to fix the vulnerability right now. 
