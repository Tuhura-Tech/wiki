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
- Secondly, there is a page on the website (`/users`) which displays a list of all users who have an account on the website. Each entry in the list contains a users username as well as a link to navigate to their profile page.

In order to exploit this vulnerability, a malicious user may be able to set their username to the same payload used for [Reflected Cross-Site Scripting](#reflected-cross-site-scripting) (`<script>alert(1)</script>`). If the website does not sanitize or reject the username change, any legitimate user who now navigates to `/users` will receive a pop-up containing the content `1`.

When comparing Reflected XSS and Stored XSS, we can recap that the primary differences are as follows:
- Reflected XSS often comes directly from an input source such as the URL clicked and is non-persistent.
- Stored XSS is often a multistep process where malicious payloads are first stored on server before being returned on URL's which otherwise appear legitimate until loaded. Further, as this is stored on the server it will persist between users and page views without requiring user input.

### DOM Based Cross-Site Scripting

In the previous two categories we have discussed what occurs when an attacker can provide malicious input to an HTML response served by the server through the usage of content such as `script` tags. DOM based XSS takes a different approach to this by instead exploiting the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) for a given website. 

In short, the DOM for a website provides a JavaScript API which lets us interact with the web page programmatically. If you are able to identify an area of the website that uses the DOM to write user input to an area of the website then this may be vulnerable to DOM based XSS.

For example, the following code taken from the [OWASP Dom Based XSS](https://owasp.org/www-community/attacks/DOM_Based_XSS) page provides a form which allows users to choose their preferred language. As a part of this functionality, a default language is provided in the URL as a query string as the parameter `default`.
```html
Select your language:

<select>
  <script>
  document.write("<OPTION value=1>"+decodeURIComponent(document.location.href.substring(document.location.href.indexOf("default=")+8))+"</OPTION>");
  document.write("<OPTION value=2>English</OPTION>");
  </script>
</select>
```

A legitimate usage of this page can be seen in the URL below:
```text
https://example.com/languages?default=Māori
```

In contrast to the legitimate usage, the following URL when loaded by the victims browser would achieve XSS as our malicious payload is written into the document as is.
```text
https://example.com/languages?default=<script>alert(1)</script>
```
In the example provided above, the server does see our malicious payload as a part of the URL requested however it is not written into the HTML response by the server. Instead, the earlier code block is returned as HTML content, which then loads our malicious payload client-side.

As payloads are loaded client-side, we may be able to use parts of the URL such as [URI fragment's](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment) to conduct Dom based XSS attacks where the server never sees our malicious payloads, effectively bypassing all server-side implemented mitigations and controls. 



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
In this payload we are using an [HTML img tag](https://www.w3schools.com/tags/tag_img.asp) which will attempt to load an image located at a given location. 

In this tag we have provided the location as `src="x"`, which is an image which does not exist and will cause the victims browser to throw an error. As our `img` tag defines an `onerror` attribute, the browser will then call this content resulting in the execution of our malicious JavaScript.

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

If the website allows SVG file uploads, then it is potentially vulnerable to XSS. This occurs because SVG files can contain JavaScript which the victims web browser will execute. 

Assuming certain criteria is met, this can often be just as powerful as the standard methods of XSS we've already covered in this guide. Some common limitations with this type of XSS can also be found in this guides limitation section which is located at [Limitations: Handling embedded SVG images](#handling-embedded-svg-images).

A simple SVG file which will execute malicious JavaScript can be seen below:
```svg
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
   <script type="text/javascript">
      alert(1);
   </script>
</svg>
```

## Limitations

Often our ability to find and exploit an XSS vulnerability in a given website will not be as straight forward as outlined above. The following subsections outline some common mitigations that websites employ in an attempt to ensure XSS is not possible.

### Handling A Content Security Policy

Exploiting XSS in the wild often comes with further drawbacks which must be worked around. One such mitigation is addition of a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) (CSP) in server responses. When configured, this response header tells browser explicitly which JavaScript can and cannot be executed.

When confronted with a CSP, a common first step is using a tool such as [Google's CSP Evaluator](https://csp-evaluator.withgoogle.com/) to review the configuration specified in the websites CSP. Through this we will be able to determine what attack avenues are available before tailoring our payloads to exploit those attack avenues.

Alternatively, a simple way to check if the CSP is blocking your payloads is to open your browsers console window ([Chrome](https://developer.chrome.com/docs/devtools/console/reference#open), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)). If the CSP is the reason your XSS is not executing, an error message will be displayed here mentioning it has been blocked and by which part of the CSP.

### Handling When Special Characters Are Escaped

When attempting to get XSS on a website, you may sometimes observe that your payload appears within the HTML as expected but is not executing as expected. One cause of this may be that the website is sanitizing your input and replacing special characters such as `<` with `&lt;`. When viewed in a web browser, these characters appear the same however functionally they are different which means you will be unable to get XSS via this method.

An easy way to confirm if your payload is being sanitized is to use a tool such as [Burp Suite Community](https://portswigger.net/burp/communitydownload) to intercept all requests between yourself and the website in question. While using this tool, you will be able to view the raw responses before your web browser has rendered the content. In doing this, you will be able to easily confirm if your payloads are being sanitized before being returned within HTML responses.

---

It is worth noting that even if characters such as `<`, `>`, `"` and `'` are escaped it may still be possible to get XSS within a website. For example, lets imagine that the previously mentioned characters are correctly escaped by our website and the website returns the following HTML response:
```html
<a href="USER_INPUT">Click Me</a>
```

In this example where we control what is provided to the `href` attribute of the `a` tag, we are still able to achieve XSS using the [JavaScript URI Scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes). For example, if we provide the payload `javascript:alert(1)` to the prior example, our malicious JavaScript will be executed when the victim clicks the text "Click Me".

### Handling Embedded SVG Images

When attempting to gain XSS using SVG images, there are a few considerations which we must consider on top of typical attack vectors. Generally these considerations relate to how the website is using SVGs as only certain methods of loading SVGs will result in XSS. 

If the website we are attempting to find an XSS vulnerability in only loads SVGs within `img` tags, then XSS will not be possible. This is because when a web browser attempts to load images within an `img` tag, only image data is parsed and used. As such, any JavaScript present is not executed. An example HTML excerpt which showcases this is as follows:
```html
<img src="https://example.com/xss.svg">
```

As an alternative to `img` tags, if you wish to embed an SVG within a page and have it execute then the following HTML tags are applicable replacements. These tags function differently to an `img` tag and will execute any JavaScript present provided other mitigating controls are not in place.
```html
<embed src="https://example.com/xss.svg">
Or:
<object data="https://example.com/xss.svg">
```

---

If the prior steps are not possible, but the website serves the uploaded SVG from within the same domain then XSS is still possible. By directly navigating to the link of the SVG, we will still be able to load the SVG and execute any malicious JavaScript present within the file. 

The common and easiest way to test this functionality is to right-click your uploaded SVG and click "Open Image in New Tab". If the domain for this image is the same as the websites domain, then XSS will be possible in the context of the website and will only require a victim to click the link to your uploaded SVG file.


## Further Reading

While this guide has covered the basics of XSS within websites, there are many other techniques and types of payloads used to conduct XSS attacks within websites. If your interested in furthering your knowledge on the topic we recommend the following content as a starting point. These URLs contain content such as handy cheatsheets, learning resources as well as vulnerable labs to practice against:
- [PortSwigger: Cross-site scripting](https://portswigger.net/web-security/cross-site-scripting)
- [HackTricks: XSS (Cross Site Scripting)](https://book.hacktricks.wiki/en/pentesting-web/xss-cross-site-scripting/index.html)
- [Hack The Box: Cross-Site Scripting Module](https://academy.hackthebox.com/course/preview/cross-site-scripting-xss)
- [MDN Web Docs: Cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS)

