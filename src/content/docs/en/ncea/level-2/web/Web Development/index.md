---
title: Web Development
description: Overview of Level 2 Resources
sidebar:
    order: 3
---

This page will walk you through setting up a basic webpage using Jinja2 templating and FastAPI

You should already have installed UV, created a project directory, CD'd into the directory, and setup a Virtual Env. If you haven't, take a look at the Development Environment pages todo: link

## Installing FastAPI/Jinja2

The first thing we'll want to do is install FastAPI so we can use it in our project, which will also install Jinja2

```sh
uv add "fastapi[standard]"
```

## Setting up directories

Let's create two folders inside our project directory, one called "static" and the other called "templates"

You can also delete **hello.py** and replace it with a new file called **main.py**

Which should leave you with a project that looks something like this:

![Project Structure](/src/assets/ncea2web/projectstruct.PNG)

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



## Adding style using CSS

