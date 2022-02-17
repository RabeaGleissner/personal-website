---
date: "2021-12-22"
title: "Default method arguments in C# and compile-time constants"
path: "/til/default-method-arguments-in-c-sharp"
tags: ["til"]
---

As in many other languages, it is possible to have default method arguments in C#.

Today I came across a use case for default method arguments in the unit tests. When I tried to implement the default argument, I stumbled across an error message that I hadn't seen before.

`Default parameter value for 'some variable' must be a compile-time constant`

I decided to dig a little bit deeper into this and really understand what this is about.

## Why did the error appear?

Let me show you some code. But first, here's some context:

I was writing tests for our API which returns invitations saved in our database.
For those tests I needed to create an invitation, save it in our database and then retrieve it again.
That way I could compare the invitation data returned from the API with the data saved in our database and write test assertions for that.

So as not to repeat too much code, I extracted a method that creates the invitation in the database.
Here's the method.

```java
private async Task<Invitation> CreateInvitation(
    Guid userId,
    int invitationStatusId,
    string email,
    DateTime createdUtc,
    string invitationMessage = ""
)
{
    var invitation = new Invitation
    {
        CreatedUtc = createdUtc,
        EmployeeId = userId,
        InvitationStatusId = invitationStatusId,
        Email = email,
        InvitationMessage = invitationMessage,
    };
    // add invitation to DB
    // get invitation from DB and return
    return invitation;
}
```

I needed to create the invitation with specific properties, depending on what the tests were asserting.
So I'm passing those properties into the method.
The new invitation object is instantiated with those properties, added to the database, retrieved again and then returned.

For some of the tests the `createdUtc` didn't matter.
The tests were testing other things and that date wasn't relevant.
The only thing that mattered was that the argument satisfied the interface of the `DateTime` class.
Otherwise the code wouldn't have compiled.
So I just used `DateTime.Now` as the easiest option here.

Calling the method looked something like this:

```java
var userId = Guid.NewGuid();
var invitationStatusInvited = 2;

await CreateInvitation(userId, invitationStatusInvited, "test@example.com", DateTime.Now);
```

But I figured it might be even better to make this method argument optional and then default it to `DateTime.Now` in the method implementation.
That way, when reading the test, only the important data would be visible and the reader would not be overloaded with additional, irrelevant information.

So I tried to follow the example of the argument for `invitationMessage`, simply defaulting to a value in the method signature.
That way, the caller could either pass in the date or not.

```
private async Task<Invitation> CreateInvitation(
    Guid userId,
    int invitationStatusId,
    string email,
    DateTime createdUtc = DateTime.Now,
    string invitationMessage = ""
)
{
    var invitation = new Invitation
    {
        CreatedUtc = createdUtc,
        EmployeeId = userId,
        InvitationStatusId = invitationStatusId,
        Email = email,
        InvitationMessage = invitationMessage,
    };
    // add invitation to DB
    // get invitation from DB and return
    return invitation;
}
```

And this is when I came across this compiler error:

Default parameter value for 'createdUtc' must be a compile-time constant

## A compile-time constant?

A constant is a variable with a fixed value that will never change.
In this case, the variable is processed at compile-time, which means it's replaced with its actual value when the code is compiled.
C# also has the concept of a `readonly` variable, which is a run-time constant.
That gets resolved at runtime, meaning that the variable only gets replaced with the actual value when the code runs.
So if `DateTime.Now` was a compile-time constant, then it would give us the current time of whenever the code was compiled.
Let's say I compiled the code last week and deployed it - so every time the code runs, it would give us last week's date and time.

## Why do default arguments have to be compile-time constants?

I guess this has to do with the type safety that C# gives us.
It wants to know at compile-time that the default method argument actually exists and is of the right data type.
If we set the default arguments to a dynamic value, it would be possible that it would evaluate to null, which would then not satisfy the `DateTime` type.
The default value of an empty string works for the `invitationMessage` parameter, because it is known at compile time.
It won't change, no matter when the code is compiled.

## How to implement default arguments for non-compile-time constants?

### Option 1: Making the DateTime type optional

One option that would work is to specify the argument of the `DateTime` type as optional and default it to `null`.

```java
private async Task<Invitation> CreateInvitation(
    Guid userId,
    int invitationStatusId,
    string email,
    // make the type optional and default to null here
    DateTime? createdUtc = null,
    string invitationMessage = ""
)
{
    var invitation = new Invitation
    {
        // return createdUtc if it's there, otherwise return DateTime.Now
        CreatedUtc = createdUtc ?? DateTime.Now,
        EmployeeId = userId,
        InvitationStatusId = invitationStatusId,
        Email = email,
        InvitationMessage = invitationMessage,
    };
    // add invitation to DB
    // get invitation from DB and return
    return invitation;
}
```

### Option 2: Use method overloading

C# supports method overloading, which means that you can define several methods with the same name but with different parameters.
So I could define the `CreateInvitation` method with the `createdUtc` parameter, which I'd use in the tests where it matters and another method with the `createdUtc` parameter, which I can use in all the other tests.

```java
// method signature without createdUtc
private async Task<Invitation> CreateInvitation(
    Guid userId,
    int invitationStatusId,
    string email,
    string invitationMessage = ""
)
{
    // calling the original method with DateTime.Now
    var invitation = await CreateInvitation(userId, invitationStatusId, email, DateTime.Now, invitationMessage);
    return invitation;
}

// method signature with createdUtc
private async Task<Invitation> CreateInvitation(
    Guid userId,
    int invitationStatusId,
    string email,
    DateTime createdUtc,
    string invitationMessage = ""
)
{
    var invitation = new EmployeeInvitation
    {
        CreatedUtc = createdUtc,
        EmployeeId = userId,
        InvitationStatusId = invitationStatusId,
        Email = email,
        InvitationMessage = invitationMessage,
    };
    // add invitation to DB
    // get invitation from DB and return
    return invitation;
}
```

### Which is better?

Making the `createdUtc` argument optional and defaulting it to null seems like an easier option with less code to implement.

However the downside of this is that you have to put any default method arguments at the end of the parameter list.
Otherwise how would the compiler know which one is which?

In my case, the method had a few more arguments which I omitted for these examples. And in some tests I wanted to specify certain arguments but not others, which meant that the ordering of the default arguments just didn't work out and method overloading was the better option.

Here's the simplified example of my situation:

Imagine you wanted to call the method with a specific invitation message but you didn't care about the date.

Having a method signature like in option 1 wouldn't work:

```
private async Task<Invitation> CreateInvitation(
    Guid userId,
    int invitationStatusId,
    string email,
    DateTime? createdUtc = null,
    string invitationMessage = ""
)
```

If you called this method without the `createdUtc` but with the `invitationMessage` arguments, then the invitation message would be the fourth argument, but the fourth argument is expected to be the created date.

With method overloading I was able to achieve the desired API, whereby the caller can be flexible with specifying the `createdUtc` or the `invitationMessage`.

I guess, at the end of the day, it depends on the individual use case which option is better - but it's good to know that both options are available!
