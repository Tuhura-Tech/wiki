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
