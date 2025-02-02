---
title: Web Development
description: Overview of Level 2 Resources
sidebar:
    order: 3
---


Todo: add steps, better organise page

This page will walk you through setting up a basic webpage using Jinja2 templating and FastAPI

You should already have installed UV, created a project directory, CD'd into the directory, and setup a Virtual Env. If you haven't, take a look at the Development Environment pages todo: link

For more information, and help with Jinja, take a look at the [Official Documenation](https://jinja.palletsprojects.com/en/stable/)

## Installing FastAPI/Jinja2

The first thing we'll want to do is install FastAPI so we can use it in our project, which will also install Jinja2

```sh
uv add "fastapi[standard]"
```

## Setting up directories

Let's create two folders inside our project directory, one called "static" and the other called "templates"

You can also delete **hello.py** and replace it with a new file called **main.py**

Which should leave you with a project that looks something like this:

![Project Structure](/src/assets/ncea2web/projectstruct.png)

## Getting a server response

Creating a FastAPI app that'll get us a response and allow us to test that we're set up correctly only requires us to add two lines to **main.py** 

```python
from fastapi import FastAPI

app = FastAPI()
```

in the terminal we can now launch a dev server by running

```sh
fastapi dev
```

You'll notice that fastAPI has now launched a dev server, and given us two links:

**Server started at http://127.0.0.1:8000**
**Documentation at http://127.0.0.1:8000/docs**

We'll want to click the server link, it should open up a JSON file in your browser, that simply displays: "detail: not found"

That's fine as we just wanted to test! 

Great! You can shut the development server down by returning to the terminal and pressing CTRL + C


:::note[Dev Server]
Note that you don't need to stop and restart the dev server whenever you make changes. It will automatically watch for changes, and update as you make them. So once you've started the Dev server, you don't need to start it again unless it crashes.
:::


## Creating a simple html page

Great! we now know how to run the Dev Server. Let's start by creating a very basic HTML page, and then integrating Jinja templating!

In your **Templates** folder, create a new file called "blog.html"

Set it up something like this, an extremely basic html page: 

```html
<!DOCTYPE html>
<html>
<head>
    <title>This is my blog</title>
</head>
<body>
    <h1>This is my blog</h1>
    Here is where my posts will go
</body>
</html>
```

Back in our **main.py** we'll need a few more import statements, altogether your imports should be:

```python
from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
```

Everything that follows should be written *below* **app = FastAPI()**

Finally, we'll write the code that loads our page. 

First, let's load the templates directory we created

```python
templates = Jinja2Templates(directory="templates")
```

Then, let's load the page we created earlier:

```python
@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request})
```

Run the Dev server, and you should now have a very *very* simple page loaded! 


## Integrating Jinja templates

What we've just created works, but it could done more easily by just making a .html file. So let's integrate Jinja and see the power of templating!

Jinja allows us to create reusable templates that can easily be slotted into pages, without the need to rewrite the html. Jinja can do much much more than this (Which we'll get to) but at its core, it allows us to create resuable and dynamically filled templates for our pages.

Think of how this might apply to a blog! We don't want to have to manually edit the html for each new blog post, instead our site should dynamically populate the site with blog posts stored in a database!

To start with, let's turn our current html into something reusable. Create a new file called **base.html** and copy the content from **blog.html** to it.

Instead of having this manually typed text, let's replace it with fields that Jinja can populate!

Jinja fields are written like this:

```html
{% block title %}

{% endblock %}

```
with **title** being replaced with the name of the content block!

So we can convert **base.html** to something that looks like this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}{% endblock %}</title>
</head>
<body>
    <h1>{% block head %}{% endblock %}</h1>

    {% block content %}
    {% endblock %}

</body>
</html>

```
This will now serve as the *base* from which our pages can *extend*

Speaking of, let's go to **blog.html** and delete our old work, as it's now replaced by **base.html.** this should leave us with an empty file.

To extend our **base.html** we'll start with 


```html
{% extends "base.html" %}
```

This tells Jinja that we're building on this as a template, and we can then refer to the fields within that page.

We can then refer to the *title* and *head* fields to populate them with what we want.

```html
{% block title %}My Blog{% endblock %}

{% block head %}My Blog{% endblock %}

```

Take a look at your site, and you should now see these fields filled by "My Blog" 

This is the power of Templating, once we've created a template, we don't need to write it again. If a template is used in multiple pages, we only need to edit it in one place!

### Blog posts

Filling the content block is slightly more complicated, as there's two things we need: 1. Blog posts to load 2. Interpreting and displaying of these posts using Jinja.

Generally your blog posts would be in something like an SQL database, which is something you'll be shown how to set up later. But for now, we'll just store them in our Python script using a list of dictionaries.

Let's go back to **main.py** and create some dummy blog posts in a temporary "database" that we can load.

There's a few things we'll want in a blog post: 

1. A title
2. The content of the blog post itself
3. The date the post was made

We'll define it like this, creating three fake posts:

```python
post_database = [{
    'title': 'First post on my blog',
    'content': 'Welcome to my blog! This is my first post!',
    'publication_date': '10/01/2025'
},{
    'title': 'Second post on my blog',
    'content': 'This is the second post im making on my new blog!',
    'publication_date': '12/01/2025'
},{
    'title': 'Third post on my blog',
    'content': 'This is the third post on my blog',
    'publication_date': '15/01/2025'
}]

```
We'll send this List of posts to our page by modifying the **load_blog** function to this:

``` python
@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": post_database})

```
This will pass the list as a variable that our template can use to populate its fields dynamically.

our **main.py** should look like this: 

``` python

from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

app = FastAPI()
templates = Jinja2Templates(directory="templates")

post_database = [{
    'title': 'First post on my blog',
    'content': 'Welcome to my blog! This is my first post!',
    'date_posted': '10/01/2025'
},{
    'title': 'Second post on my blog',
    'content': 'This is the second post im making on my new blog!',
    'date_posted': '12/01/2025'
},{
    'title': 'Third post on my blog',
    'content': 'This is the third post on my blog',
    'date_posted': '15/01/2025'
}]

@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": post_database})

```

### Loading the posts

A lot can be done with Jinja statements, which is covered in it's own page. For now, we'll just use what we need to create our blog.

Now we'll return to our **blog.html** and populate the **Content block**

Let's tell Jinja that we want to fill the Content block, and start iterating through the Posts

``` html
{% block content %}

    {% for post in posts %}

```
Let's create a "post" div to allow us to style the posts later using css.

```html
<div class="post">
```

Then, let's get the title and the date of posdting of the blog post from the python dictionary:

``` html
<h2>{{ post.title }}</h2>
<p>Originally posted: {{ post.date_posted }}</p>
```

Then let's get the content of the post:

```html
<p>
{{ post.content }}</p>
```

and finally close out our statements


```html
</div>
    {% endfor %}
{% endblock %}

```
giving us a file that looks like this:

``` html

{% extends "base.html" %}

{% block title %}My Blog{% endblock %}

{% block head %}My Blog{% endblock %}

{% block content %}

    {% for post in posts %}
        <div class="post">
                <h2>{{ post.title }}</h2>
                <p>Originally posted: {{ post.date_posted }}</p>
                <p>{{ post.content }}</p>
        </div>
    {% endfor %}
{% endblock %}

```

Take a look at the page on the Dev Server, and you'll notice now that all three blog posts should be displayed dynamically!

## Adding style using CSS

Adding CSS to our page is fairly simply, though slightly different then how we'd normally do it 

Create a file inside the **static** directory you created earlier called **style.css** which will be the stylesheet for our blog.

Then, we'll need to tell Jinja where to find this. Let's head back to **base.html** (This will also mean this style is used by anything that extends the base)

in our <head> tag, we'll add a new line

```html
<link href="{{ url_for('static', path='/style.css') }}" rel="stylesheet">
```

giving us a <head> that looks like this

``` html
<head>
    <title>{% block title %}{% endblock %}</title>
    <link href="{{ url_for('static', path='/style.css') }}" rel="stylesheet">
</head>

```
Before our stylesheet will work, we'll need to mount the static directory so that it can be accessed at runtime. Head back to **main.py**  and below where we return the Templates, we'll add a new line

``` python
app.mount("/static", StaticFiles(directory="static"), name="static")
```

meaning the bottom of **main.py** should look like this:


```python
@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": post_database})

app.mount("/static", StaticFiles(directory="static"), name="static")
```

Now we can go ahead and add a simple style to our website! Though it's a good idea to run the site now and make sure it works.

I made a very simple stylesheet that makes the website look a little nicer, use it to test that your stylesheet works, but afterwards, feel free to make your blog look however you wish!

```css
body {
    font-family: 'Times New Roman', Times, serif;
    background-color: #423a3a;
}

h1, h2, h3, h4 {
    color: #e45353;
}

.post {
    background-color: #382424;
    color: #b9adad;
    font-size: large;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
}

```

If everything has been set up correctly, your site should look something like this:


![Site with CSS](/src/assets/ncea2web/sitecss.png)

