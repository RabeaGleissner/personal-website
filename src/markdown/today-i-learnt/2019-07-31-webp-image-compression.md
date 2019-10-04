---
date: "2019-07-31"
title: "WebP image compression"
path: "/til/webp-image-compression"
tags: ["til"]
---

I’m really not keeping up with the latest web development trends… Today was the first time that I heard about WebP.
It’s an image format which is superior to PNG and JPEG in terms of file size and quality.

There are two ways of compressing the image file: lossless and lossy.

The lossy way of doing it uses predictive coding to encode an image - neighbouring blocks of pixels are used to predict the values in a block and then only the difference is encoded. I don’t quite understand how that’s done - but I can see why you lose some of the quality here.

The lossless compression can exactly reconstruct new pixels because it uses images fragments that it has already seen… hm… again, not really sure what that means but hey - if I memorise this sentence I can at least talk sound smart at the next web developer dinner party.

I’m sure you can’t wait to sit next to me.
