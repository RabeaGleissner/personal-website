---
date: "2019-03-20"
title: "Empty string is not a string in Joi validation"
path: "/til/empty-string-is-not-a-string-in-joi-validation"
tags: ["til"]
---

We’re using [Joi validation](https://github.com/hapijs/joi) to ensure that we’re saving the data of the correct types and with the correct fields into our database.

I had created a new field which was a string, so I added this to the validation:

```
validate({
  body: Joi.object({
   // some other stuff
    infoForSchool: Joi.string(),
  })
})
```

However, when I submitted the form with the info for school field empty, I got an error saying that `infoForSchool is not allowed to be empty`.
If the field was left empty in the UI it would submit an empty string, which is a string! I didn't consider this field to be empty. 
I mean, an empty string is also a string, right?
Well, turns out that Joi doesn't allow empty strings when you put `Joi.string()` - even though I didn't specifically make it a required field and all validations are optional by default.
I hadn't specifically put `Joi.string().required()`. Strange.
Well, turns out that string is the only primitive in Joi that doesn't allow an empty value.
There a reason for that: a request that includes `q=` for example will be submitted as an empty string. And in most cases this is not an expected result. 
That's why you explicitly have to allow empty strings like this: `Joi.string().allow(‘’)`. Good to know.
