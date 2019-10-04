---
date: "2019-07-30"
title: "Private and public browser cache"
path: "/til/private-and-public-browser-cache"
tags: ["til"]
---

One of the many wondrous things you can inspect in the Chrome developer console are the cache-control settings.

The first value it specifies is either “private” or “public”. And then it shows the max-age. It seems like mostly this age is set to 3153600 - which is the number of seconds in a year. Most browsers won’t cache assets for that long but I guess it’s some sort of standard or default setting that people use.

More interesting is the first value:
“Public” specifies that the resource should be cached in the client and in the CDN cache. While as “Private” cache should only be storing resources in the client.
So, if there are assets or pages behind authentication, then caching those in a CDN would be bad - because it might be information that is specific to a user. Hence, the private option, so that those resources are only cached in the users browser.
