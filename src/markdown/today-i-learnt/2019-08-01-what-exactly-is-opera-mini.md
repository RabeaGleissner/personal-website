---
date: "2019-08-01"
title: "What exactly is Opera Mini?"
path: "/til/what-exactly-is-opera-mini"
tags: ["til"]
---

I feel like every time I look at caniuse.com to see what the browser support is for certain CSS or JS features, there’s usually a mix of green and red - but there’s always one that’s red and nothing ever seems to work on it: Opera Mini.

Well… I never worked anywhere where I had to support it and I didn’t really care about it. It was more something in my peripheral vision, that I more or less ignored.

But today I came across an article on web performance and it explained what Opera Mini does! And this time it caught my eye.

Opera Mini is considered a proxy browser. When the server sends it HTML, it transcodes it into Opera Binary Markup Language which is then progressively rendered on the device. Interesting! It also compresses images and apparently doesn’t execute all JavaScript as it comes but deals with it selectively. 

Basically, what Opera Mini renders in the end is more of a snapshot of the website rather than the actual website. The article described as a “PDF with Hyperlinks”!

So that explains why the support for a lot of features is so bad.
