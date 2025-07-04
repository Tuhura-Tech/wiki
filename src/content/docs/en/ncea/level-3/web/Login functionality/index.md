---
title: login functionality
description: Adding logging in to our blog
sidebar:
    order: 3
---

Adding login functionality to our blog is going to be significantly more complicated than adding a search. But it'll use pretty similar things to what we've already done!

The primary new considerations will be:
1. Storing that a user is logged in (Cookies)
2. Keeping our logins secure (This is a huge topic - and we'll only be covering the basics)

Everything else is just variations on things we've done before! Which becomes pretty apparent when we break down our steps to having a login system:
1. Registration form (Similar to our post creation form)
2. Storing our registered users (Database)
3. Logging in (Comparing a form to a database)

We'll build things in the order above, as that's the order a user would experience them, an it'll make them easier to understand.

## Signup Form

We'll start by making the form the user will use to register an account.

For this, as we've done before, we'll create a new Template in our **templates** folder call it **register.html**

We'll of course want to extend from our base template and create some headings

```html
{% extends "base.html" %}

{% block title %} Register {% endblock %}

```
Then, let's make the form the user will fill in to register.

The user needs to provide an email address and a password when registering. We could, if we wanted, also allow the user to provide a username, which would be added the same way as the username (Though maybe with additional checking to ensure it's a valid email)

```html
{% block content %}
<div class="container">
  <div class="register_form">
        <form method="POST">
          <div class="input_field">
            <label>Email</label>
            <input type="text"  placeholder="email" name="email" value="{{email}}" class="form-control">
          </div>
          <div class="input_field">
            <label>Password</label>
            <input type="password" placeholder="password" name="password" value="{{password}}" class="form-control">
          </div>
          <button type="submit" class="submit_button">Submit</button>
        </form>
      </div>
    </div>
  
```

Let's also do what we did with our post creation form, and have a field that will display any errors with the users input (e.g password too short/not secure enough)

```html
    <div class="row">
      <div class="error text">
          {% for error in errors %}
            <li>{{error}}</li>
          {% endfor %}
      </div>
    </div>
  </div>
{% endblock %}
```

Giving us a **register.html** that looks like this:

```html
{% extends "base.html" %}

{% block title %} Register {% endblock %}

{% block content %}
<div class="container">
  <div class="register_form">
        <form method="POST">
          <div class="input_field">
            <label>Email</label>
            <input type="text"  placeholder="email" name="email" value="{{email}}" class="form-control">
          </div>
          <div class="input_field">
            <label>Password</label>
            <input type="password" placeholder="password" name="password" value="{{password}}" class="form-control">
          </div>
          <button type="submit" class="submit_button">Submit</button>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="error text">
          {% for error in errors %}
            <li>{{error}}</li>
          {% endfor %}
      </div>
    </div>
</div>
{% endblock %}
```
## Verifying the data

Next, similarly to what we did for the post creation form, we should verify the data and ensure that it's been filled out correctly, and display return errors to be displayed by our form otherwise.

We'll again be defining the rules for our email and password very loosely, if you want to find out how to define proper requirments (such as needing and '@' symbol, or requiring a number in the password) have a read up on [Regex](https://regexr.com/)

Let's first create a new python filled called "login_validation.py" 

and start by importing:

```python
from fastapi import Request
from typing import List
from typing import Optional
```

Then we'll start by defining our variables

```python
class NewLogin:
    def __init__(self, request: Request):
      self.request: Request = request
      self.errors: List = []
      self.email: Optional[str] = none
      self.password: Optional[str] = none
```

Then we'll decide if the users inputs are valid, adding any issues to the Errors list, and returning True if there are no errors.

```python
  def valid_input(self):
    if not self.email or not len(self.email) >=5:
      self.errors.append("Invalid email address")
    if not self.password or not len(self.password) >= 6:
      self.errors.append("Your password must be at least 5 characters long")
    
    if not self.errors:
      return True
    else: 
      return False
```

And finally, we'll write a function that loads in the data from the form.

```python
  async def load_data(self):
    login = await self.request.form()
    self.email = form.get("email")
    self.password = form.get("password")
```

For a full script that looks like this:

```python
from fastapi import Request
from typing import List
from typing import Optional

class NewLogin:
    def __init__(self, request: Request):
      self.request: Request = request
      self.errors: List = []
      self.email: Optional[str] = none
      self.password: Optional[str] = none


  def valid_input(self):
    if not self.email or not len(self.email) >=5:
      self.errors.append("Invalid email address")
    if not self.password or not len(self.password) >= 6:
      self.errors.append("Your password must be at least 5 characters long")
    
    if not self.errors:
      return True
    else: 
      return False

  async def load_data(self):
    login = await self.request.form()
    self.email = form.get("email")
    self.password = form.get("password")
```
