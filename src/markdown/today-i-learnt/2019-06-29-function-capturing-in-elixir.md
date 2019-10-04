---
date: "2019-06-29"
title: "Function capturing in Elixir"
path: "/til/function-capturing-in-elixir"
tags: ["til"]
---

In Elixir you sometimes need an anonymous function instead of a named function.
The difference is that an anonymous function has access to anything that is around it, while a named function only has access to the arguments that it is given.
A named function also needs to be defined inside a module, while as an anonymous function can be defined anywhere.
But anyway, that’s by the by.
Let’s just agree on that sometimes we need anonymous functions.

But what if you want to use a named function in a case where you need an anonymous function?
Let’s say we want to use `Map.get/3` as a call back in the `Agent.get` method. 

Firstly, we can transform the named `Map.get` function into an anonymous function by capturing it.
The syntax is as follows

```elixir
 captured_get = &Map.get/2
```

If you want to call this captured function, you have to add a `.` after the name like this `captured_get.(%{a: 2}, :a)`. 

You can also create an anonymous function using the capturing method.

But first, here’s how we create anonymous function without capturing:

```elixir
subtract = fn first_number, second_number -> first_number - second_number end
```

You can call it with:
`subtract.(10,2)` returns 8

And here’s how to create an anonymous function with capturing:

```elixir
captured_subtract = &(&1 - &2)
```

Then we can call it with `captured_subtract.(10, 3)` and it will return 7.

The `&1` and `&2` represent the function arguments in their order.
So we could also subtract the other way around by defining this:

`subtract_first_number = &(&2 - &1)`

If we called it with `subtract_first_number.(20, 2)`, then it would return `-18` because we’re subtracting 20 from 2.

So let’s create another anonymous function but this time it needs to use the `Map.get/3` function in its body. 
`&Map.get($1, key)` 

The first argument is passed into the anonymous function and the second argument is defined in the surrounding area of the anonymous function.

This is what the whole function looks like.

```elixir
def get(bucket, key) do
  Agent.get(bucket, &Map.get(&1, key))
end
```

And guess what, it’s the same as this:

```elixir
def get(bucket, key) do
  Agent.get(bucket, fn items -> Map.get(items, key) end)
end
```

Just much shorter. And much harder to understand.
I’m not sure if the function capturing way of creating this anonymous function is used that much.
I think for now I’d rather write a bit more code and create the function more explicitly. 
