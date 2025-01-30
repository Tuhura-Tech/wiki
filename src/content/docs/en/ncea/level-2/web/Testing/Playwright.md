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