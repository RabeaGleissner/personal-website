---
date: "2020-11-09"
title: "Clickjacking explained"
path: "/blog/clickjacking-explained"
tags: ["blog"] 
readTime: 3
---

Clickjacking means that a user's click is highjacked for a different purpose.
The user thinks they’re clicking on one thing, but in reality, their click is used to trigger something completely different.

How's this possible? Let me explain.

<!--break-->

## An example for a clickjacking attack

A malicious actor Alison creates a landing page with a very attractive offer for clueless user Ursula.
It's so attractive that Ursula can't help but click the “Get offer now!” button.

What Ursula doesn't know is that Alison has rendered Ursula's Paypal account page in an iFrame on top of the landing page.
User Ursula is unaware of this because malicious actor Alison has reduced the opacity of the Paypal page to zero using CSS.
It's invisible.

However the button which will trigger a request to transfer money into Alison's account is perfectly aligned with the “Get offer now!” button.

User Ursula is already logged into Paypal because they were making some payments earlier.
So when Ursula clicks the button the money is transferred into Alison's Paypal account.

Scary, isn't it? 

Luckily this is just a hypothetical example.
This is a very well known hacking attempt and in reality Paypal has implemented various defence mechanisms against it.

## Some approaches to prevent clickjacking 

### Use the right HTTP headers

You can ensure that your page cannot be embedded into an iFrame on a different website by setting the `Content-Security-Policy: frame-ancestors <source>;` header.
You can set the source to `none`, meaning that no websites at all can render your page in an iFrame.
If you need to render that content in an iFrame on your own website, you can set it to `self`.
It is also possible to specify a domain like this `Content-Security-Policy: frame-ancestors https://www.example.com;`

This header is not recognised by Internet Explorer.
So if you’re supporting IE, you can use the `X-Frame-Options` HTTP header instead.

### Check if your page is being framed

If you’re supporting very old browsers, which don't understand either of these HTTP headers, you can hide all your page content when it's in an iFrame.
How can we detect that?
We can check if `window.self` and `window.top` are the same.
If they’re not, that means that your content is in an iFrame and you can use CSS `body{display:none !important;}` to hide your entire content.

### Use SameSite Cookies
 
This is a useful defence against clickjacking attempts that require the user to be logged in, like in the example above.
Had the `SameSite` attribute been added to a cookie with the value `Strict`, Ursula wouldn't have lost any money, because the cookie wouldn't have been sent along with the request to transfer funds.
There's also the option to set `SameSite` to `Lax` which means that cookies will be sent along with GET requests only.
This is a default option in modern browsers. 

It's worth noting that any clickjacking attempts that don't require a valid cookie to execute a request would not be prevented with this measure.

## How do I know if my site is clickjackable?

You can test it easily by creating an html page with an iFrame with the `src` set as your site.

```html
<html>
  <body>
    <iframe src="https://www.url-to-your-website" width="500" height="500"></iframe>
  </body>
</html>
```

Save it as `clickjack-testing.html` and serve the page using a local server.
If you have Python installed, you can use a simple python server like this: `python -m http.server 8000`.

Then go to `localhost:8000/clickjack-testing.html` and have a look to see if the website in the iFrame renders.
If it does, then it's susceptible to clickjacking.

### Further reading

- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [Same site cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [OWASP Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)


<small>I also published this post on the [Tes Engineering Blog](https://engineering.tes.com/post/what-is-currying)</small>

