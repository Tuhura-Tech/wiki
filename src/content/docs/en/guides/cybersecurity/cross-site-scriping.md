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

As a malicious user, we could construct a payload which when included in the URL looks as follows. If a victim were to click on this link, their browser would pop up with an alert that contained the content `1`. Note we aren't URL encoding this in order to make reading it easier.

```text
https://example.com?message=<script>alert(1)</script>
```

Contained in this payload are two unique sections which are of note:
- The tags `<script>` and `</script>` are used to tell the victims web browser that the text contained between the tags is actually JavaScript and requires execution.
- The value between the script tags, `alert(1)` in this case, is the JavaScript which the web browser will execute.
  - We often use simple payloads such as `alert(1)` to prove that XSS is present before crafting website specific payloads to achieve goals such as the retrieval of a CTF flag or the victim's cookies.

This works as our example website is including the value of the `message` parameter directly in the HTML response. If the content was instead used in an HTML tag or another more complicated way we would need to first break out of that before providing our malicious payloads. Example's of more complicated XSS attacks will be discussed later in this document.

