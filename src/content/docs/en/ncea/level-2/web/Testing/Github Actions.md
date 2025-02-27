---
title: Github Actions
description: Overview of Level 2 Resources
sidebar:
    order: 4
---

Github Actions is an extremely powerful tool that directly integrates into your Github repository! It allows us to automate many things, though we're going to be focusing on the automation of Testing. Github actions are run each time a new commit is made to your repository, so it's a great way to make sure everything is **actually** working after the changes you made! (This again, is especially important in bigger projects, who knows what side-effects your small change may have had!)


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
run-name: Run tests
```

Then, we tell Github when we want the actions to be run. In this case, we want them to run when a new Push is recieved.

```yml
on: [push]
```


We then start defining our jobs, choosing what we want it to run on:

```yml
jobs:
    Github-Actions:
        runs-on: ubuntu latest
```

The commands we ask Github actions to run are broken up into **steps** defined by us, this helps us to know *where* the problem is if there is one!

Our actions are going to have two main steps: Installing our dependancies, and running our tests. Though first we always want to checkout our repository

```yml
jobs:
  Github-Actions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4.2.2
```
Then, we can move on to installing our dependancies

```yml
- name: install deps
        run: |
          python -m pip install --upgrade pip
          pip install pytest
          pip install pytest-playwright
          pip install "fastapi[standard]"
          pip install sqlmodel
          pip install jinja2
```

You'll notice we define the **name** of the action, and then what the action actually does. If the main project of your directory is different than the main directory of your repositry, you'll want to point Github actions to the right file using:

```yml
working-directory: my_project
```

Which when used would look something like this:

```yml
- name: install deps
        working-directory: my_project
        run: |
          python -m pip install --upgrade pip
          pip install pytest
          pip install pytest-playwright
          pip install "fastapi[standard]"
          pip install sqlmodel
          pip install jinja2
```

Once we've got our dependancies in, we can run our test!

We'll do this simply by running our test file (Again, if needed you'll need to specify the directory here):

```yml
- name: run tests
        run: pytest test_main.py
```

Giving us full file that looks like this:

```yml
name: Github actions
run-name: testing out Github actions!
on: [push]
jobs:
  Github-Actions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4.2.2

      - name: install deps
        run: |
          python -m pip install --upgrade pip
          pip install pytest
          pip install pytest-playwright
          pip install "fastapi[standard]"
          pip install sqlmodel
          pip install jinja2

      - name: run tests
        run: pytest test_main.py
      
```

Commit your changes, and open your repository on the Github website. You'll notice some stuff is happening in the Actions tab. Take a look, and see what all the different actions we've created are doing by expanding them.

If you want to learn more about Github actions, and what else you can use them for, take a look at the [official documentation](https://docs.github.com/en/actions)