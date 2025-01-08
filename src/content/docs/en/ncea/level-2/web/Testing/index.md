---
title: Testing
description: Overview of Level 2 Resources
sidebar:
    order: 5
---

Section will cover how to set up testing files, when and why testing should be done, and how to execute tests (Manualy, as well as with GH actions)


**Testing** is an important practice used in development. It allows us to ensure that code is doing what it's meant to, and giving the results we expect, without having to manually test ourselves. Testing becomes more important as our projects become more complicated, as more variables and functions are introduces, so are more chances for bugs and errors, with an icreased time to track them down.

As a very simple example, if we have a function that capitalises a String, we could have a test that passes this function a string, with an expected result of that string capitalised. If we don't get that expected result, our tests will tell us. 

 
Using a testing library, like Pytest (link), allows us to automate this process, and allows us to easily and quickly run many different tests at the same time.

We'll be covering a few different testing libraries for Python:

Pytest, which allows us to execute tests on our python scripts, checking if things like function return values, and variable values, are what we expect them to be.

Playwright, an extension for pytest, which allows us to test the content on webpages. Checking whether the content of the page is what we expect it to be.

And Github actions, which is a powerful tool integrated into the Github Version control pipeline, which can do things like automatically run all of our tests written using the above two libraries, whenever we push a new commit.


