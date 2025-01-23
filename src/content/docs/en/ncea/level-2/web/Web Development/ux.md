---
title: User Experience
description: Overview of Level 2 Resources
---


You've likely heard the term 'UX' thrown around, but what is it, and how does it differ from UI (User Interface.)

UX stands for User Experience, and while UI is a factor, UX extends far beyond having nice looking website/application with flashy buttons and UI. As the name implies, for our website to have good UX, it should be nice and intuitive to use. This means something that the average user can sit down and use to its intended purpose, with minimal/no guidance.


## UX Design

There are two rules that are important to remember when parsing UX feedback: 
1. If the average user struggles to intuitively use your website, this is a problem with your UX, and not a problem with the users.
2. Users are always right that a problem exists, they are not always right about what the problem is, or what causes it, figuring this out is your job as a UX designer.

But how do we figure out how to create a good UX? 

### Research

The best way, is to look at examples of other websites/applications of the same type as yours. I.e if you're making a blog site, look at other blog sites, see what they have in common, see what variations exist. Note what works, and what doesn't, as well as the things you do and don't like!

This is mainly because people have preconcieved ideas of what a blog looks like, and how you interact with it (Posts are ordered by date, they have a title and content, you can likely comment)

If you make a great totally new blog design, while it may be a feat of aesthetic novelty, and the most 'optimal' UI, you may find users struggle to navigate it! Because it doesn't fit expectations. There is room for experimenation and uniqueness, but the point of research is to know where the experimentation can be done.


### Testing

Once we've created our website/application, and we have a UX we want to test. The best way to find what works and what doesn't, is to have real people from a variety of backgrounds use it! You'll come up with a list of tasks to ask the tester to complete. I.E: Navigate to the oldest post on the blog, log in, leave a comment, search the "video games" tag.

You'll observe the testers attempt to complete these tasks, without intervening, noting down the things they do while trying to complete the task (Especially the things they do "wrong") If a user asks for help you can provide it, but do not complete the task for them, you want to give guidance to allow for more information.

After the user has attempted to complete each task, you can ask for their feedback on your UX, what they liked and what they didn't. Using this information to refine your UX.

It's also a good idea to, rather than build a final version of your whole application, is to make a mockup, even in something as simple as paint and ask the user things like "Where would you click to login"


## Accessibility

Another important factor to consider when designing your UX, is the accessibility of your website/application. You should be designing to ensure that the most people are able to use and engage with your website. This means designing for disability accessibility, as well as ensuring your website is not generally "uncomfortable" to use.

Some changes that are easily implemented, and can vastly improve accessibility:

1. Avoiding colours that are too similar, using colours with good contrast, and that don't cause eyestrain. Tools like [Coolors](https://coolors.co/) make this easy, allowing testing for colourblindness.

2. Ensuring text is large enough to be easily read. While small text can let you fit more on the screen, it can make things hard to read depending on device and user.

3. Ensuring all images have alt-text, especially those that are necessary for navigation. The alt text should describe the content of the image. For images with links, the alt text should describe where the link goes. Alt text is necesarry for those who use screen readers to navigate your website. While this may not be a concern for your project website. It's a good thing to get into the habit of, especially if something you design ends up on the internet.

Alt text can be added like this:

```html
<img src="img.jpg" alt = "Here you describe the image" >
```

For more information on writing good alt text, take a look at the guide by [Web Accessibility In Mind](https://webaim.org/techniques/alttext/)

4. Your buttons and interface should not require perfect precision to click, and should be large enough that someone with limited fine motor control would still be able to click it.

There are of course more things to consider and impliment, and this is only a short list of particularly easy changes that can be made to increase accessibility. This is also why testing UX with people that have a wide variety of backgrounds is vital to ensuring good UX.