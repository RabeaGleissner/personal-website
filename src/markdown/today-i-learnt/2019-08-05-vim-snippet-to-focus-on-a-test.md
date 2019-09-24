---
date: "2019-08-05"
title: "Vim snippet to focus on a test"
path: "/til/vim-snippet-to-focus-on-a-test"
tags: ["til"]
---

The amount of times that I've finished writing the expectation of a test, then navigated up to the description of the test (usually using `%` to match the closing bracket), then added a `.only` after the `it` to run only that specific test… yes… a large amount of times. 

So finally I made a vim snippet to do this for me.

`map <leader>fit <Esc>/^\s*it(<cr>N0f(i.only<Esc>`

Now, all I need to type is `<leader> + fit` to achieve the same thing.

How it works:

First it searches for the next line beginning with `it(`, which is how the tests always start.
But I don’t want to next line, I want the previous line, because I will probably have just finished typing the test assertion or something else in the body of the test.
So after it found the beginning of the line, I'm using `N` to find the previous one. 
Then I'm using `0` to go to the beginning of the line, find the opening bracket and type `.only`. 

In Jasmine, you could focus a test with adding an `f` in front of the `it`.
I'm not using Jasmine now, but in my previous job we had a lot of fun with this letter combination ("fit tests"... I won't go into detail because, you know… you *had* to be there really).
But that's why I called the shortcut "fit".

I also created a snippet to remove the focus from the test, which we used to call "unfit a test". I told you, you had to be there…

Unfitting works like this:
`map <leader>unfit <Esc>/^\s*it.only(<cr>fodiwhx<Esc>`

Find lines beginning with `it.only(`, then find the letter 'o', delete the whole word and also remove the dot by moving left with `h` and typing `x` for deleting.
Well fit.
