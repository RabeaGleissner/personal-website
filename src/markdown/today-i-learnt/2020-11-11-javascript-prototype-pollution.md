---
date: "2020-11-11"
title: "JavaScript Prototype Pollution"
path: "/til/javascript-prototype-pollution"
tags: ["til"]
---

Prototype pollution seems to come up quite a lot when `npm audit` tells me to upgrade packages.
It's a vulnerability that has to do with the way inheritance is done in JavaScript.

Any object that is created in JavaScript, automatically inherits from the Object prototype, which has some inbuilt functions like `toString` or `valueOf`.

Because the prototype chain is mutable, we can modify not only the current objects properties but also its parent's properties.
The parent can be accessed using the `__proto__` property.

Here's an example:

```javascript

// create a new object
const dog = { language: 'bark', hobby: 'walks' };

// modify the parent prototype like this:
dog.__proto__.toString = 'broken!!';

// calling `toString` on any object from now on will always return "broken!!"

const newObject = {}
newObject.toString 

// > 'broken!!'

```

Not only can you override existing keys on the parent object as shown above, but you could also add new key / value pairs.

This can be quite a dangerous vulnerability, provided that your application allows modifying objects using the bracket notation with data that could potentially be malicious - so for example user data that isn't validated correctly or unsanitised request params.
