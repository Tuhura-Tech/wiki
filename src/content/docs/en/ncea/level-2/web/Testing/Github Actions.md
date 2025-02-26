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

This file is where we'll specify and configure the actions we want Github to execute.