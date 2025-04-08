---
title: Jinja
description: Jinja Reference
sidebar:
    order: 4
---

This page will provide a brief overview of some of the most commonly used features of Jinja, however will not cover everything. For more information, read the [official Jinja documentation](https://jinja.palletsprojects.com/en/stable/)


### Loops

You can loop over an array of items in Jinja by defining a loop

```html
{% for item in list %}
{{item}}
{%end for%}
```
replacing *list* with what you wish to iterate over.

This loop simply adds the item to the webpage as is, the functionality in your loop should of course be different.


###  Ifs 

Ifs are defined and structured similarly to what you should be used to from python, and can be used to alter what is done based on a boolean.

```html
{% if item.good %}
    item is good
{% elif item.bad %}
    item is bad
{% else %}
    item is neither good or bad!
{% endif %}

```
Again replacing the conditions and the executed code with what you want to do.


### Linking 

Linking between pages can be done in the standard html way, however, this prevents information from being passed between pages using Jinja.

To link to another page using Jinja, we first need to create a function that loads this page, this would generally be done in your main.py.

Here we create the function for a link to a page that takes no variable inputs

```python
@app.get("/otherpage")
async def load_other_page(request: Request): 
    return templates.TemplateResponse("otherpage.html", {"request" : request})
```

in one of your pages, you would link to this page like this:

```html
<a href="{{url_for('load_other_page')}}">Link to the other page</a>
```

What if we want to pass a variable to the page? We would define the function like this:

```python
@app.get("/otherpage", response_class=HTMLResponse)
async def load_page_with_variable(request: Request):
    return templates.TemplateResponse("otherpage.html", {"request": request, "variableName": variable})
```

and we would link to this like this:

```html
<a href="{{url_for('load_page_with_variable')}}">Link to the other page</a>

```


What if we want to pass a variable to our Fastapi function using a link?

Here's an example function:

```python
@app.get("/otherpage", response_class=HTMLResponse)
async def recieve_variable_from_page(request: Request, variableinput):
    return templates.TemplateResponse("otherpage.html", {"request": request})
```

And link to it like this:

```html
<a href="{{url_for('recieve_variable_from_page', 'variableinput = varValue')}}">Link to the other page</a>
```

