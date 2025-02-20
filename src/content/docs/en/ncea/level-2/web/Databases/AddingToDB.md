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

### Blog post Form

First, let's create the page to display the form, and link to it from our main page. We won't be doing any CSS for this page, btu you're welcome to add some yourself if you wish.

Inside our **templates** folder lets create a new file called **form.html**

As with our main page, we'll first want to tell Jinja that we're using our base page using:

```html
{% extends "base.html" %}
```

Let's also do our header and title quickly 

```html
{% block title %} Create a post {% endblock %}
{% block head %} Create a new post {% endblock %}
```

Let's then start on the form itself, we'll create a series of fields, one for the title, one for the date, and one for the content. As well as a button to submit the post.

**Maybe break this up into multiple steps?**

```html
{% block content %}
<div class="container">
    <div class="post_form">
        <form method="POST">

          <div class="input_field">
            <input type="text" placeholder="Post Title" name="post_title" class="form-control" value="{{post_title}}" >
          </div>
          <div class="input_field">
            <input type="text" placeholder="Post Date" name="post_date" class="form-control" value="{{post_date}}" >
          </div>
          <div class="input_field">
            <textarea  placeholder="Post Content" name="post_content" class="form-control" value="{{post_content}}" rows="4"></textarea>
          </div>

          <button type="submit" class="submit_button">Submit</button>
        </form>
      </div>
</div>

{% endblock %}
```

We'll also need to go to our main.py file and add a binding to access this page. This will also allow us to get and pass variables to the form later.

```python
@app.get("/form")
async def load_other_page(request: Request): 
    return templates.TemplateResponse("form.html", {"request" : request})
```

Finally, as the last line in our **blog.html** file we'll add a link to the page as the last line in the content block.

```html
<a href="{{url_for('load_other_page')}}">Add a blog post</a>
```

Run your dev server, and make sure you're able to access the page. If you wish, add some nice CSS!

### Validating the input


Next we'll create a class that validates the form, and ensures all the inputs are as we want them to be.
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







