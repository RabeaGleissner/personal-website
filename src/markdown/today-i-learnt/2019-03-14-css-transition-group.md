---
date: "2019-03-14"
title: "CSS Transition Group"
path: "/til/css-transition-group"
tags: ["til"]
---

I read [this interesting article](https://dev.to/winduptoy/a-javascript-free-frontend-2d3e) this morning in bed (great excuse to stay in bed longer). It's about how someone refactored their frontend to use no (ok, minimal) JavaScript. One of the things the author mentioned was that he wasn’t using ReactCSSTransitionGroup. I sort of dismissed it because I didn’t know what it was.

Two hours later I  come across it in our codebase!
So I decided to have a little look at what it does.

It's an add on to React, which is maintained by the community. 
It tracks when an element enters or exists the DOM and you can specify to animate it. 

To use it, the elements that should be animated, need to be children of the ReactCSSTransitionGroup component. And the properties of the component allow you to specify how you want to animate the child elements. For examples something like this:

```
transitionEnterTimeout={300}
transitionLeaveTimeout={250}
```

You also have to specify a `transitionName`, which can be used in the CSS to further style or animate the elements.

I must have seen this transition group component in our codebase before but I never consciously noticed it, probably because I was too busy figuring other stuff out. But because I heard it mentioned in the article this morning, I actually noticed it properly today. Good thing I stayed in bed a bit longer!
