---
date: "2019-11-19"
title: "JavaScript and CSS can communicate"
path: "/til/css-custom-properties"
tags: ["til"]
---

The first thing I learnt today was about CSS custom properties, also called CSS variables.
I might be a bit late to the game here but today was the first time I actually saw these in use - in a PR that I was reviewing.

CSS variables can be declared on an element like this

```css
element {
  --my-new-variable: pink;
}
```

And then they can be used like this:

```css
element {
  background-color: var(--my-new-variable);
}
```

When they are declared, they are automatically scoped to the element that they are declared on.
So if you want to use a variable all over the shop, then you can declare in on the `:root` pseudo element.

Oh yeah, the second thing I learnt today is that there is a pseudo element called `:root`.
MDN says it is the same as using the `html` selector but its specificity is higher.
So I guess you could declare the variable on `html` too, couldn't you?
Maybe it's too risky in case you have a lot of other styling on `html` which could clash?
Hm, let's park this mystery for another day.

Anyway, back to the variables.
They're looking pretty useful to me!

But what my colleague did in her PR was using these variables to communicate some information from a React component to the CSS.
Mind = blown.

We needed to highlight the current day in a calendar view.
And JavaScript can of course tell us what the current day is.

So my colleague set a CSS variable as an inline style in the React component, using the day of the week.
And she was able to access that variable in the CSS file and then style the current day accordingly.

It was the first time I'd seen that and I thought it was pretty clever!
But maybe a bit too clever?
I was googling around and apparently another way to pass information from JavaScript code to CSS is using an HTML data attribute.

Declaring an attribute like this with the prefix "data":

```HTML
<p data-current-day="wednesday">The calendar header could be here</p>

```

Then you can use `attr()` to access it in CSS.

```CSS
div {
  content: attr(data-current-day);
}
```

And you could declare a CSS variable with it, maybe scoped to the element that contains the calendar.

```CSS
.calendar {
  --my-new-variable: attr(data-current-day);
}
```

I find this option better because the CSS variable is declared in roughly the same area that it is used.
I personally think it's a bit confusing to declare the variable in a JavaScript file and then use it in the CSS.
But either way works of course!
