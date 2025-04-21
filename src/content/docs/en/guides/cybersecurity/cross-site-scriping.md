---
title: Cross-Site Scripting (XSS)
description: Simple introduction to injecting malicious JavaScript into a website
sidebar:
   order: 4
---

Cross-site scripting (XSS) is a very common and wide-reaching web vulnerability.

Modern websites are often a culmination of HTML, CSS and JavaScript with all web browsers supporting the execution of JavaScript within a website provided some criteria are met. In essence, XSS abuses this ability to execute an attacker provided JavaScript snippet within the context of the victim's domain.

In 2017 the Open Web Application Security Project ([OWASP](https://owasp.org/)) [rated Injection as the most common web application vulnerability](https://owasp.org/www-project-top-ten/), and third most common in 2021. XSS is a notable part of this Injection category.

## What is Cross-Site Scripting?

Simply put, Cross-Site Scripting (XSS) occurs when malicious [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is run on a victim's domain. The addition of malicious JavaScript into a website falls into three separate categories of execution and persistence. These categories are summarised below and contain specific injection related information.

### Reflected Cross-Site Scripting

Reflected Cross-Site Scripting (XSS) occurs when malicious JavaScript is reflected into a response through non-persisted means. Often this takes the form of the victim clicking a URL sent to them which contains a malicious payload which is then reflected into the rendered response and executed by the victim's browser.

This can be seen through the following example. In this example we can imagine a website which takes in a [query parameter](https://en.wikipedia.org/wiki/Query_string) called `message`. When the server receives a request with this parameter present, it returns an HTML response which contains the value of our `message` parameter somewhere within the page.

As the website developer, we'd expect this functionality to be used for purposes such as notifying the user their password was incorrect during an authentication attempt. For a task like this, our URL would look like this: 

```text
https://example.com?message=Your%20username%20or%20password%20was%20incorrect.
```

:::note[URL encoding]
Note that the value of the message parameter has been [URL encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) so that special characters can be transmitted without interrupting the expected browser flow. This would be displayed to the end user as the following string: `Your username or password was incorrect.`
:::
