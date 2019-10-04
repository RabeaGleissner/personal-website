---
date: "2019-06-05"
title: "Upgrade to Neovim"
path: "/til/upgrade-to-neovim"
tags: ["til"]
---

As a modern woman, I’d been thinking about upgrading to Neovim for a while. (OK, you might argue, that as a modern woman I should have upgraded to Neovim a long time ago. Or that I  would not be using Vim at all but anyway…). 

So finally, after the [security vulnerability](https://github.com/numirias/security/blob/master/doc/2019-06-04_ace-vim-neovim.md) in older versions of Vim was made public, this was the final push to make me do it. 
I would have had to upgrade my Vim anyway, so why not switch to Neovim.

I started googling how to get Neovim to understand my .vimrc and guess what - it was easy!
Who would have thought?!

Steps to move from Vim to Neovim:

`brew install nvim`

Create the nvim directory in config:

`mkdir ~/.config/nvim/`

Then add three lines to the init.vim file in this directory.

`vim ~/.config/nvim/init.vim`

The three lines are:

```bash
set runtimepath^=~/.vim runtimepath+=~/.vim/after 
let &packpath = &runtimepath 
source ~/.vimrc
```

And these three lines of code make sure that nvim uses your previous Vim setup. 

And that’s all I had to do!
