---
title: Github Actions
description: Overview of Level 2 Resources
sidebar:
    order: 4
---

Github Actions is an extremely powerful tool that directly integrates into your Github repository! It allows us to automate many things, though we're going to be focusing on the automation of Building and Testing. Github actions are run each time a new commit is made to your repository, so it's a great way to make sure everything is **actually** working after the changes you made! (This again, is especially important in bigger projects, who knows what side-effects your small change may have had!)

Testing building allows us to ensure our project builds/compiles with no errors (Even if it builds on your device, it may not be working!) and running our tests obviously allows us to ensure all of our tests are completing as we expect.

To start setting up Github actions, we'll need to create a new directory in our project. This directory is most easily setup inside github itself. Open the repo on the github website, making sure you're signed in, and **add a new file** calling it.

```
.github/workflows/github-actions.yml
```

This file is where we'll specify and configure the actions we want Github to execute whenever a new commit is made!

In your local version of the repository, make sure to **pull** the changes so that they appear on your local device.

This new .yml file is where we'll write our actions. In its simplest form, our actions will basically tell Github to run console commands, the same way we run console commands to build and test our project.

For now, lets create a test action to make sure everything is set up correctly.

The first thing we'll want to do is give our actions a name, we do this simply by typing something like this:

```yml
name: Github actions
run-name: testing out Github actions!
```

Then, we tell Github when we want the actions to be run. In this case, we want them to run when a new Push is recieved.

```yml
on: [push]
```