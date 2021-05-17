---
date: "2021-05-17"
title: "You can't nest describe blocks in ExUnit"
path: "/til/you-cannot-nest-describe-blocks-in-exunit"
tags: ["til"]
---

...and I think that's a good thing!
Let me explain why.

I write JavaScript in my day job and nesting describe blocks in my tests is such common practise, that I hardly even think about it anymore.

I'm currently working on a small Elixir side project and tried to do the same thing. And what did I get?

```bash
** (RuntimeError) cannot call "describe" inside another "describe".
```

Well, that was unexpected! But it ended up making my code design better.

## Here's my example

To give some context, I'm working on a Connect Four game.
Specifically I'm writing the logic to figure out a winner.
I started with simple test cases for a Connect One or Connect Two game to get going.
Later I added the logic for finding a winner horizontally and vertically.

What I tried to do with my nested describe blocks, was this:

```ruby
  describe "connect < 4" do
    # tests for smaller connect targets
  end

  describe "connect four" do
    describe "horizontally" do
      # tests for finding a four adjacent coins horizontally
    end

    describe "vertically" do
      # tests for finding a four adjacent coins in a column 
    end
  end
```

The "no nesting describes" rule forced me to think about this slightly differently. I ended up splitting the tests out into three different files: one for connecting less than four, one for connecting four horizontally and one for connecting four vertically.

Now my test files are less than 60 lines long each. Smaller files are easier to work with.
Thanks, ExUnit!
