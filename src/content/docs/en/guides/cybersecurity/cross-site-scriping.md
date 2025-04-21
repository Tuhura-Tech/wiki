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

### Stored Cross-Site Scripting

Stored Cross-Site Scripting (XSS) is a form of XSS which is persistent, usually through storage in the server's database. As our malicious payload is going to be stored and served directly from the server's database, any user who navigates to a page which loads the malicious payload from the database will automatically fall victim to the malicious JavaScript.

For this scenario, let's imagine we have a website with the following functionality:
- Firstly, the website allows user's to modify their username at any time via a settings page.
- Secondly, there is a page on the website (`/users`) which displays a list of all users who have an account on the website. Each user in the list contains their username as well as a link to navigate to the users profile page.

In order to exploit this vulnerability, a malicious user may be able to set their username to the same payload used for [Reflected Cross-Site Scripting](#reflected-cross-site-scripting) (`<script>alert(1)</script>`). If the website does not sanitize or reject the username change, any legitimate user who now navigates to `/users` will receive a pop-up containing the content `1`.

When comparing Reflected XSS and Stored XSS, we can recap that the primary differences are as follows:
- Reflected XSS often comes directly from an input source such as the URL clicked and is non-persistent.
- Stored XSS is often a multistep process where malicious payloads are first stored on server before being returned on URL's which otherwise appear legitimate until loaded. Further, as this is stored on the server it will persist between users and page views without requiring user input.

### DOM Based Cross-Site Scripting

TODO

## Alternative Example Malicious Payloads

Among XSS attacks, the following types of payloads are common to enable JavaScript execution. We use these various types of payloads as some websites may prevent XSS via one type, but still be vulnerable to another.

### Payloads Within HTML Page Responses

The following payloads are all common first indicators of vulnerability which would then be later built upon. In this first payload we are inserting an [HTML script tag](https://www.w3schools.com/tags/tag_script.asp). This tag tells the browser that the content contained within the tags is JavaScript and should be executed. 
```html
<script>alert(1)</script>
```

If this does not work, another payload we can try is as follows:
```html
<img src="x" onerror="alert(1)"/>
```
In this payload we are using an [HTML img tag](https://www.w3schools.com/tags/tag_img.asp) which will attempt to load an image located at a given location. In this tag we have provided the location as `src="x"`, which is an image that does not exist. As this image does not exist, the browser will throw an error while attempting to load the tag which will result in the `onerror` handler being called. As we have specified the `onerror` attribute in our `img` tag, the victims browser will call this and execute our malicious JavaScript.

---

Alternatively, when reviewing websites for XSS vulnerabilities we may sometimes notice that our user input is being reflected inside an existing HTML tag. A common example of this is when a website renders an [HTML form](https://www.w3schools.com/html/html_forms.asp) which contains the current URL and all provided parameters. An example excerpt of this can be seen below:
```html
 <form action="/my_custom_page?parameter=value">
  <!-- [...] -->
  <input type="submit" value="Submit">
</form> 
```

In order to execute malicious JavaScript we will first need to break out of the `form` tag before we can provide our own malicious input. To do this we simply need to prefix our malicious payload with `">` in order to break out of the `form` tag. As such, an example exploitation of the provided form would look as follows. Note we aren’t URL encoding this in order to make reading it easier.
```text
https://example.com/my_custom_page?paramter="><script>alert(1)</script>
```

If a victim were to navigate to this URL they would observe a popup containing the content `1`.

### Payloads Within Images

Images are an often overlooked area of websites which may be vulnerable to XSS. While not always possible, sometimes websites will allow users to upload images which could contain malicious JavaScript when viewed. 

Typically, websites will allow the following file formats when allowing images:
- [PNG](https://en.wikipedia.org/wiki/PNG)
- [JPEG](https://en.wikipedia.org/wiki/JPEG)
- [SVG](https://en.wikipedia.org/wiki/SVG)

TODO: Example SVG, when exploitable and when not (img tag vs embed tag)

## Limitations

Often our ability to find and exploit an XSS vulnerability in a given website will not be as straight forward as outlined above. The following subsections outline some common mitigations that websites employ in an attempt to ensure XSS is not possible.

### Handling A Content Security Policy

Exploiting XSS in the wild often comes with further drawbacks which must be worked around. One such mitigation is addition of a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)(CSP) in server responses. When configured, this response header tells browser explicitly which JavaScript can and cannot be executed.

When confronted with a CSP, a common first step is using a tool such as [Google's CSP Evaluator](https://csp-evaluator.withgoogle.com/) to review the configuration specified in the websites CSP. Through this we will be able to determine what attack avenues are available before tailoring our payloads to exploit those attack avenues.

### Handling When Special Characters Are Escaped

TODO

## Further Reading

This guide has covered the basics of XSS within websites. If your interested in furthering your knowledge on the topic we would recommend the following URL's. These URL's contain things such as handy cheatsheets, learning resources as well as vulnerable labs to practice against:
- [PortSwigger: Cross-site scripting](https://portswigger.net/web-security/cross-site-scripting)
- [HackTricks: XSS (Cross Site Scripting)](https://book.hacktricks.wiki/en/pentesting-web/xss-cross-site-scripting/index.html)
- [Hack The Box: Cross-Site Scripting Module](https://academy.hackthebox.com/course/preview/cross-site-scripting-xss)


