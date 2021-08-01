---
date: "2021-08-01"
title: "Working (mostly) asynchronously"
path: "/blog/working-async"
tags: ["blog"] 
readTime: 6
---

Remote working is pretty common these days.
I mean, a lot of us don't have a choice in a global pandemic.

But what about asynchronous working?

I think it's becoming more prevalent. However it's a lot harder than remote working with people who are all online at the same time. I've done it for a while now and thought I'd write down my experiences.

## Async working

By "asynchronous working" I mean that not all team members work during the same time.
It could be that they live in different timezones, made certain life style choices or have other responsibilities.

I've worked asynchronously for over two years. During my first experience, it all worked pretty smoothly. And I assumed that it would always be like that. But then I joined other teams and found out that working asynchronously is not something that "just works"™. It's a skill that teams need to cultivate and it takes effort.

My first experience of async working was when I moved from London to Singapore. I continued working with the same team I'd already been part of. Most of my colleagues were in or around GMT time. Singapore is 8 hours ahead.
Later I worked with a team in GMT-7 and in GMT+10 while living in Singapore.

So what did I learn during this time? 

## You need some synchronous time

Let's just get it out of the way... I know this post is meant to be about asynchronous working but I honestly believe that you need some hours of overlap to be effective as a team.

There are companies which claim that they work asynchronously all the time. I can only imagine that this works if you've got a really established and mature team.

In my experience, you always need some amount of sync time. Some discussions are just easier verbally rather than in writing. And I'm not just talking about technical or product discussions. Socialising and bonding with other team members is also much easier when you're on the same call.

Team members need to commit to being online and working during certain hours. In my first team we had a policy that everyone needed to overlap at least three hours per day with UK time. So when I moved to Singapore I would shift my hours to work later in the day and cram all my meetings into my early evening time. This way of working can be intense but on the plus side, it gives you a lot of uninterrupted coding time as well! Later I worked with a team in the US and had all my meetings very early in the Singapore morning. Now I'm working with a team which is 4 hours ahead of me, so I've committed to start work at 7am every day.

## Be efficient in your sync meetings

For those precious hours of overlap that you have, try to be efficient. You won't have the luxury to let meetings overrun or simply schedule part 2 a bit later in the day... You need to be clear on what you want to achieve during the meeting and then get to that outcome as quickly as possible. (I mean, ideally you should do that for every meeting but that's a whole different blog post).

Here's an example. You're leading a meeting on ways of working. When you have lots of time you might start with a blank Miro board and give people some time to add sticky notes for all their ideas on the topic. Then all of you go through each point and discuss. Then you record the decisions. This kind of meeting takes a long time. It's almost more of a workshop! 

Instead, if you're the facilitator of the meeting, take some time to prepare. Write down your suggestions for ways of working. Chances are, you'll probably come up with a lot of the suggestions that would have been raised anyway had you taken the first approach. Briefly talk through the suggestions in the meeting and then give people a few minutes to add their own ideas. Only then have a discussion together. Make some rough notes about decisions and then do the pretty write-up after the meeting.

Be firm if someone tries to derail your format! I've been in a situation where someone started questioning my prepared approach. Remind them of the meeting's goal and ask them if they think your approach will achieve that goal. Most likely it will because you've already spent time preparing for it. It's important to have strict facilitation in meetings when you don't have a lot of time.

If there are technical topics to discuss, share the topics before the meeting. That way everyone can form an opinion on them beforehand. Of course during the discussion these opinions might change. But it's good to spend some time to research and think first. Make sure you share the agenda with ample time before the meeting, so all your colleagues with their various different working hours will have enough time for review.

If you want to show code, have the files ready and open, so you don't need to spend time finding what you want to demo. 

If you're having a synchronous standup, don't fall into the trap of simply going through each ticket on the wall. There might not be any news on some of them and you might repeat the same update every day. Also don't get everyone on the call to give an update just because they're there. Sometimes not everyone has important news that need to be shared synchronously.

Instead create a standup channel in Slack and get people to post their daily updates in it. Then during your sync standup you can focus on speaking about the important topics. Maybe you'll even have time left for some social chat! Better to do that synchronously then spend your time listening to several long versions of "progressing well with my story, will do more later". 


## Use your async time to prepare for your sync time

Use the non-overlap time to prepare for meetings so that they don't turn into workshops. Spend it researching and forming an opinion about topics that you're going to discuss synchronously. Also use this time to read through and contribute to Slack discussions. Allow yourself to actually use up time for that! Think about it this way - if you weren't working async, you'd probably spend a lot more of your time in sync meetings or in one to one conversations. 


## Document decisions and conversations as much as possible

It's important to keep records so people who work at different times, can review and contribute to discussions at their leisure. This also means recording any important synchronous meetings. Things like epic kick-offs, town halls, product updates... or even a walk through of a piece of code or an explanation for how a system works. 

For tech decisions, I think it works well to add them to the code repository that the decisions are about. Otherwise you can use wikis or even Slack posts (pin them to the channel!). Use whatever tools your team prefers (or your company policy dictates) but make sure that the records are easy to find. 

If someone has a question, it's best to ask it in the team channel rather than having a one to one conversation. That way, every team member can see the discussion. They can contribute and also learn from it. Slack also has a really good search functionality. If you keep your channels public it might be that your team discussion turns up in someone else's search and you'll help someone outside of your team.

## Async pair-programming is hard

I tried a couple of ways of async pairing and one worked better than the other.

The first was for a pair to own a story together, like you would during synchronous pair programming. We paired in our overlap time, then my pair continued while I logged off. When my pair finished their solo time, they would send me a Slack message and sometimes a video of what they'd done and suggest how to continue. The next morning I picked up from where they left off and once they were online again, we paired again.

It didn't always worked super well... I think the key is to get the asynchronous handover right. It really depends on the type of story that you're working on and how much new context you need. If your pair gains more context while you're offline it might be hard to fully share it and you continue coding with some outdated knowledge.

This second approach worked better:

One person owns a story and during the overlap time, another person joins them for a few hours as a "consultant". They pair for a few hours every day but during the non-overlap time the story owner would just continue. The consultant pair will have enough context to not block progress but the story owner will ultimately be responsible for the story.

## Need some help? Get it now!

When I first started working in an async team, I made the mistake of waiting too long to ask for help. I thought I'll try alone for a little longer, I'll figure it out, I'll ask soon... and by that time people were offline again. If you need to talk to someone and you see they're online, grab them now! Don't wait, because they might be gone again and you'll be left with noone else around.

## Create social connections

I think that teams work better if the team members connect in other ways than work. Fun Slack channels are a great way to do that. I loved being part of the running Slack channel at Tes. We talked about our runs and goals, be it for a couch to 5k program or ultramarathons. It was a great community. 

Organisations should let people create channels for whatever topics they want: recipes, dad jokes, whatever. Personal connection helps to create empathy.

## Async working isn't for everyone

I've always felt comfortable working asynchronously and at first I didn't understand that not everyone feels that way. (Yes, spoiler alert, not everyone thinks like me!!).

It became clear to me on a recent project. I had posted various questions or ideas into Slack that I wanted us to discuss as a team: process improvements, technical decisions... And some of my posts were just completely ignored. I thought it was my writing style and tried to write in a very succinct and simple format. Then I started adding emojis so my posts would be more eye catching.
But that didn't help either.

When I referred to some of those posts in our synchronous meetings, some people had no idea what I was talking about. They hadn't even seen the posts! It was frustrating.
But later I found out that not everyone likes to communicate in writing. Some people just don't read Slack messages or read them and forget to reply. They don't feel comfortable expressing themselves in a written format.

It's fine, people have different communication preferences... but some are not suited very well to asynchronous teams. You have to be comfortable with discussions in written format.

I've also worked with people who don't like having their video recorded. That would make recording meetings very hard!

Another thing is that the overlap time can be quite intense sometimes. You need people who don't mind having back to back meetings with different teams and stakeholders during a few hours each day.

Lastly I think that people also need to be willing and able to adjust their working hours to allow for overlap. If you can only work 9 to 5, then that might not work if your team members are 8 hours away!


## How to make it successful? 

In summary I think success is made by a mix of the right processes and the right people.
It's ok that not everyone will enjoy working async - there are enough teams around which work synchronously.
But it's really important that the team has the right processes in place to share knowledge and to make use of any overlap time efficiently.
