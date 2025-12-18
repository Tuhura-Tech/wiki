---
title: Testing
description: Overview of Level 2 Resources
sidebar:
    order: 5
---

**Testing** is an important practice used in development. It allows us to ensure that code is doing what it's meant to, and giving the results we expect without having to manually test ourselves. Manual testing wsould involve doing something putting a print statement at the end of a function to see what it's doing. This is an apprroach to testing most of us have used. The problem with this is that it has very poor coverage (Wht's actually being tested) and doesn't scale to larger projects. (It also clogs your output!)
Proper testing becomes more important as our projects become more complicated. As more variables and functions are introduced, so are chances for bugs and errors, with an increased time to track them down using methods like print. When our projects have large amounts of moving parts, it's imporant to know exactly what's working and what's not, so we can pinpoint the error!

Most testing libraries allow us to test something for an expected outcome. Say we have a function, we can test its correctness in isolation. We'd specify inputs, and specify the output we'd expect. When we run our test file *all* test files will run at once. Any that fail will tell us what the *actual* output they recieved was. So we want to build up a robust list of tests with different combinations of input and expected outputs, to make sure everything is working correctly!

As a very simple example, if we have a function that capitalises a String, we could have a test that passes this function a string, with an expected result of that string capitalised. If we don't get that expected result, our tests will tell us. 
 
To do this, we use a testing library like [Pytest.](https://docs.pytest.org/en/stable/) Take a look at their documentation for some more examples of tests, and how to write effective tests!

We'll be covering a few different ways of testing our code:

Pytest, which allows us to execute tests on our python scripts, checking if things like function return values, and variable values, are what we expect them to be.

Playwright, an extension for pytest, which allows us to test the content on webpages. Checking whether the content of the page is what we expect it to be.

And Github actions, which is a powerful tool integrated into the Github Version control pipeline, which can do things like automatically run all of our tests written using the above two libraries, whenever we push a new commit.


