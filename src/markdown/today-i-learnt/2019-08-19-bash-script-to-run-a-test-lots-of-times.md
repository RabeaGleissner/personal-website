---
date: "2019-08-19"
title: "Bash script to run a test lots of times"
path: "/til/bash-script-to-run-a-test-lots-of-times"
tags: ["til"]
---

This is probably more a note for myself rather than anything else… but why not make it public? Maybe someone else is looking for just that.

We had a test that was randomly failing when we were running the whole test suite.
So we decided that to run it 50 times by itself, to check if it was related to the test setup in combination with all the other tests (e.g. database not being cleaned up properly or some other state being shared) or if it was a problem with our code. 

It turned out that it was a problem with our code - we didn't sort the data that was returned from the database in the correct order.

Anyway, we couldn't find a mocha functionality that allowed us to run the test loads of times, so we wrote a bash script instead.

Well, we googled it. But anyway, here it is.
Ready to be reused next time I want to do this again.

```shell
COUNTER=0
  while [  $COUNTER -lt 50 ]; do
  npm t
  let COUNTER=COUNTER+1
done
```
