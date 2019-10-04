---
date: "2019-07-19"
title: "Elixir module not available"
path: "/til/elixir-module-not-available"
tags: ["til"]
---

I’m working on a small side project in Elixir and last time I worked on it, I got stuck because I got this error.

`The module #{ModuleName} was given as a child to a supervisor but it does not exist`

I had just written a Supervisor for the first time and created an Agent as a child of the Supervisor. Not available! I thought I’d done something wrong with creating the Supervisor or the Agent and read the docs 100 times… nothing!

I mean, the module name was correct, no typos, the module was in the correct directory, I was using the full name so hadn’t forgotten an alias… What else could it be? The module is clearly there!

Finally I checked the beam files in `"_build/#{MIX_ENV}/lib/#{APP_NAME}/ebin"` And yes… the Agent module was indeed not there.

And why was it??? Because I had used the wrong file extension! I had used `.exs` instead of `.ex`. Argh…!! 

.ex is for compiled code, .exs is for interpreted code.
