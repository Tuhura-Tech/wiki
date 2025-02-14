---
title: Adding content to our Database using a form
description: Overview of Level 2 Resources
sidebar:
    order: 5
---

**Page will cover adding content to the database using a page created using Jina templating. This is the page that will need the most looking over to ensure it's accurate and follow best practice.**

TODO: 
Create form, 
access form from main page, 
add to DB using button, 
reload DB




We'll start by creating a class that validates the form, and ensures all the inputs are as we want them to be.
As a reminder, our inputs for a blog post are:

1. Post title
2. Post date
3. Post content

:::Note[Current Date]
While we could get the current date using libraries, this is out of scope for this tutorial, and we'll be doing a simple text input field. However implementing this would not be difficult. If you'd like to do so. Take a look at the [DateTime Library](https://docs.python.org/3/library/datetime.html)
:::

As we're simply writing validation logic, we don't need this to be in our main.py. So we'll create a new file called "postvalidation.py"

Which we'll start with some simple imports 

```python
from fastapi import Request
from typing import List
from typing import Optional
```

Next let's define a class with an init function that creates the variables our form will populate (Our fields)

We'll also create a list of Errors which we'll use to determine if the users input is valid or not

```python
class NewPost:
    def __init__(self, request: Request):
        self.request: Request = request
        self.errors: List = []
        self.post_title: Optional[str] = None
        self.post_date: Optional[str] = None
        self.post_content: Optional[str] = None
```

Next let's create a function to define if what the user has input into our form is valid or not.

```python
def valid_input(self):
    
```

We'll check to see if the user as input a value inside the field, and then we'll check if it fits whatever criteria we want it to.

For example, for our post title, we might do something like:

```python
    if not self.post_title or not len(self.post_title) >=3:
        self.errors.append("Please provide a title")
```

We can then continue on with our other fields.

```python
def valid_input(self):
    if not self.post_title or not len(self.post_title) >=3:
        self.errors.append("Please provide a title")
    if not self.post_date or not len(self.post_date) >=9:
        self.errors.append("Please provide a date in format DD/MM/YYYY")
    if not self.post_content or not len(self.post_content) >=15:
        self.errors.append("Please provide valid post content")

    if not self.errors:
        return true
    else return false
```

If all our inputs are valid, we can continue, otherwise, we can display the relevant error messages.







