---
title: Adding content to our Database using a form
description: Overview of Level 2 Resources
sidebar:
    order: 5
---

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


Before our final closing **</div>** tag, let's also add a place where any errors will appear if the users input is invalid (We'll set these up later) But we'll assume they're in a list. So all we need to do is display every item in that list.

```html
<div class = "row">
    <div class = "error text">
        {% for error in errors %}
        <li>{{error}}</li>
        {% endfor %}
    </div>
</div>

```

Meaning our full Jinja page looks like this:

```html
{% extends "base.html" %}

{% block title %} Create a post {% endblock %}
{% block head %} Create a new post {% endblock %}

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

      <div class = "row">
        <div class = "error text">
          {% for error in errors %}
          <li>{{error}}</li>
          {% endfor %}
        </div>
      </div>


</div>

{% endblock %}
```

We'll also need to go to our main.py file and add a binding to access this page. This will also allow us to get and pass variables to the form later.

```python
@app.get("/form")
def new_post(request: Request): 
    return templates.TemplateResponse("form.html", {"request" : request})
```

Finally, as the last line in our **blog.html** file we'll add a link to the page as the last line in the content block.

```html
<a href="{{url_for('new_post')}}">Add a blog post</a>
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
        return True
    else: return False
```

If all our inputs are valid, we can continue, otherwise, we can display the relevant error messages.

Finally, let's create a function that gets the values from the fields of our form.

This function will wait for us to press submit, then look for fields with the names we defined in our jinja template, and extract the data fom them.

```python
async def load_data(self):
            form = await self.request.form()
            self.post_title = form.get("post_title")
            self.post_date = form.get("post_date")
            self.post_content = form.get("post_content")
```


This gives us a full script that looks like this:

```python

from fastapi import Request
from typing import List
from typing import Optional

class NewPost:
    def __init__(self, request: Request):
        self.request: Request = request
        self.errors: List = []
        self.post_title: Optional[str] = None
        self.post_date: Optional[str] = None
        self.post_content: Optional[str] = None

    def valid_input(self):
        if not self.post_title or not len(self.post_title) >=3:
            self.errors.append("Please provide a title")
        if not self.post_date or not len(self.post_date) >=9:
            self.errors.append("Please provide a date in format DD/MM/YYYY")
        if not self.post_content or not len(self.post_content) >=15:
            self.errors.append("Please provide valid post content")

        if not self.errors:
            return True
        else: return False

    async def load_data(self):
            form = await self.request.form()
            self.post_title = form.get("post_title")
            self.post_date = form.get("post_date")
            self.post_content = form.get("post_content")
```

### Adding the input data to the database

We've created our form, we can navigate to the page, and we're able to pull the information from it. Which means it's time to actually add the data to our Database.

We'll head back to our **main.py** script.

The first thing we'll want to do is get a reference to our newly created script:

```python
from post_validation import NewPost
```

Then, we'll create a function underneath our **@app.get("/form")** 

```python
@app.post("/form")
async def new_post(request: Request):
```

First, let's pass our page to our validation class:

```python
form = NewPost(request)
    await form.load_data()
```

Then, let's confirm the post is valid, if it is, let's extract the data from the dictionary and add it to our DB!


```python
if form.valid_input():
        post = form.__dict__
        add_post(post["post_title"], post["post_content"], post["post_date"])
```

Then, let's redirect back to our home page so we can see our new post.

```python
return RedirectResponse(request.url_for('load_blog'), status_code=status.HTTP_303_SEE_OTHER)
```
However, if our input **isn't** valid (Doesn't meet the conditions we set up in valid_input()) we want to return to our input form page, and display the error messages.
So we'll redirect to the form page, except we'll pass it the output of the NewPost() class. Which we can do like this:

```python
return templates.TemplateResponse("form.html", form.__dict__)
```

Meaning our two functions should look like this:

```python
@app.get("/form")
def new_post(request: Request): 
    return templates.TemplateResponse("form.html", {"request" : request})

@app.post("/form")
async def new_post(request: Request):
    form = NewPost(request)
    await form.load_data()
    if form.valid_input():
        post = form.__dict__
        add_post(post["post_title"], post["post_content"], post["post_date"])
        return RedirectResponse(request.url_for('load_blog'), status_code=status.HTTP_303_SEE_OTHER)
    return templates.TemplateResponse("form.html", form.__dict__)
```

Test your post sumbition page! See if you can add a new post, check that the redirect works, and try submitting invalid posts!

If everything works, congratulations! You've:

1. Create a blog page using FastAPI and Jinja
2. Connected it to an SQL database
3. Added to that database using an input form




