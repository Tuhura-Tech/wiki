---
title: Search functionality
description: Adding searching to our blog
sidebar:
    order: 3
---

Adding search functionality to our blog is fairly easy! But there's a few things we need to do: 
1. Add an interface for search input (Textbox and button)
2. Get the users input from this textbox 
3. Display all the posts that contain the query

Let's start by creating the search input field. We'll want to add the html to the Jinja template shared by the pages we want the user to be able to search from.

## Input field

We'll create a class containing a form similar to what we did for adding new posts, and we'll link it to an action we'll create later.

```html
<form class="search-form" action="/search/">
  <!-- Code will go here -->
</form>
```
The **action** we define here will link to the fastapi call with the same name, so make sure you take note of the name you give it!

Now lets add a field and a button.

```html
<form class="search-form" action="/search/">
  <input class="search-input" name="query" type="search" placeholder="Search" aria-label="Search">
  <button class="btn" type="submit">Search</button>
</form>
```

If we test the application, we should now see a search form!

I've added this to my **blog.html** template, which now looks like this:

```html
{% extends "base.html" %}

{% block title %}My Blog{% endblock %}

{% block head %}My Blog{% endblock %}

{% block content %}

<form class="search-form" action="/search/">
  <input class="search-input" name="query" type="search" placeholder="Search" aria-label="Search">
  <button class="btn" type="submit">Search</button>
</form>

    {% for post in posts %}
        <div class="post">
                <h2>{{ post.title }}</h2>
                <p>Originally posted: {{ post.date_posted }}</p>
                <p>{{ post.content }}</p>
        </div>
    {% endfor %}
<a href="{{url_for('new_post')}}">Add a blog post</a>
{% endblock %}
```
## Getting the input and displaying posts

Let's now get what the user has typed in when they hit the search button!

We'll start by creating a new function that takes a string and returns all the posts with titles that contain this string. I'm doing this as this is the type of thing we'd be likely to want to do again in the future, so having it as its own function is useful!

```python
def search_post(query: str, session: Session):
    posts = session.exec(select(Post).where(Post.title.contains(query)))
    return posts
```
Fairly simple! Gets a list of posts from our database, selecting for those whose title contains the query.

Great, next, let's create the function that our forms calls, and use this to display the resulting posts.

This'll be a **get()** function as its "get"-ing information from the user!

```python
@app.get("/search/")
def search_post(request: Request, query = None):
```

Note that the string passed to **.get()** matches the action of our form.

Right, the things we actually need this to do are fairly simple:
1. Call our **search_post** function, then
2. Display those posts (We can just use our post display template!)

Giving us a function that looks like this:

```python
@app.get("/search/")
def search_post(request: Request, query = None):
    with Session(engine) as session:
        posts = search_post(query, session)
        return templates.TemplateResponse("blog.html", {"request": request, "posts": posts})
```

Great! Our search field should now work, and allow us to search based on post titles! Try adding a new post, and searching for it using its title.

## Further Considerations

Our search works, but it could be much better. 

Some things that could be improved are: 
1. Displaying text when the search yields no response
2. Being able to easily return displaying all blog posts, not just the search results
