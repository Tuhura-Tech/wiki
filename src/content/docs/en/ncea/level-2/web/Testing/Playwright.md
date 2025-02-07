---
title: PlayWright
description: Overview of Level 2 Resources
sidebar:
    order: 3
---

Playwright is another powerful testing tool that works as part of pytest, which we can use to test the content of a webpage itself. This can include clicking links, checking the heading of a page, and reading the text of (As well as much more)

While we might think of something like our SQL and Fastapi tests as testing the *behind the scenes* aspects of our website, something like Playwright tests what the user actually *sees* and interacts with, to make sure the *front end* of our website behaves as expected.

Thankfully we don't need to create a new testing document, as playwright works as part of pytest. We will need to install it though.

Making sure we're inside our project directory and our Venv, run:

```sh
uv pip install pytest-playwright
```

followed by

```sh
playwright install
```

and then insied our testing file, we'll want to add a new import so we can use playwright


```python
from playwright.sync_api import Page, expect
```

And we're good to start writing tests!

### Playwright tests

Playwright test functions should be formatted the same way as other tests you've been writing, starting with **test_**

Generally, the first thing we want to do in a playwright test is navigate to a page, we do this using

```python
page.goto("url")
```

So for our development server we would use

```python
page.goto("http://127.0.0.1:8000/")
```

We can then check if the page has the title we would expect it to (For our blog, this would me "My Blog")

```python
expect(page).to_have_title(re.compile("My Blog"))
```

We can also use Playwright to click a link. Say for example we had a link with the text "Click here" which leads us to a page with the title "Secret Page"
writing a test for this page would look like this:


```python

def test_secret_page(page: Page):
    page.goto("http://127.0.0.1:8000/")

    page.get_by_role("link", name="Click Here").click()

    expect(page).to_have_title(re.compile("Secret Page"))

```


