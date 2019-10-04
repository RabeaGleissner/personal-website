---
date: "2019-05-09"
title: "Writing a bash function for find and replace"
path: "/til/writing-a-bash-function-for-find-and-replace"
tags: ["til"]
---

I wanted to have a shortcut to find and replace words in the whole project.
There’s this command that I googled and thought it was a bit long to type, let alone remember.

`git grep -l 'original_text' | xargs sed -i '' -e 's/original_text/new_text/g'`

I could see myself re-googling it every time. 

So instead I wrote a bash function with two arguments.
Firstly I had to figure out how to pass arguments in shell script. 

Turns out you don’t place them inside the brackets but they are automatically stored in $1, $2, $3, etc.
The very first argument, which would be $0, seems to be the function name itself (based on my trial and error echo experiments).

Here’s the code:

```bash
 find_and_replace_in_project() {
   current_text=$1
   new_text=$2
   git grep -l $current_text | xargs sed -i "" -e "s/${current_text}/${new_text}/g"
 }
 ```

For better readability I assigned the two variables to something more useful. And then I can use those variables in the command. 

I was struggling with interpolating the variables in the string…
I had to google around quite a lot and couldn’t figure out why it wasn’t working.
Well, turns out it doesn’t work if you use single quotes, which is what I had done to begin with.

But yeah, that’s the first function that I wrote in bash.
And it wasn’t too bad! Maybe I can do it again some time.

Oh, and I also aliased the function name to a shortcut.
`alias fr=find_and_replace_in_project`

So all I need to type now is `fr currentText newText`.
