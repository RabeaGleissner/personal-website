---
date: "2019-07-05"
title: "Elixir - you can pattern match on strings?!"
path: "/til/elixir-you-can-pattern-match-on-strings"
tags: ["til"]
---

Wow, maybe this should have been obvious but I didn’t realise that until now. That’s so cool!

I’m working on a slack bot and need to parse people’s commands to the bot. So I’ll be dealing with a lot of strings - and knowing that pattern matching works for this data type is cool!!

You have to use the concatenation operators. 

```elixir
iex(1)> ex_string = "hello elixir"
"hello elixir"
iex(2)> "hello" <> language = ex_string
"hello elixir"
iex(3)> language
" elixir"
```

I guess it’s like matching on a list… you have the head and the rest.

So this one won’t work:

```elixir

iex(4)> greeting <> " elixir" = ex_string

🧨

```
