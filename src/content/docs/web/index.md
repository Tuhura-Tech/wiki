---
title: Basic HTML
description: This is how to set up a JavaScript environment.
sidebar:
  # Make this always the first
  order: 1
<<<<<<< HEAD

---

| | Contents |  |
|---|---|---|
| [HTML](#html) | [Tags](#tags) | [Elements](#elements)|
| [Attributes](#attributes) |  [Structure](#structure) | [Comments](#comments) |
| [Heading & paragraphs](#headings-and-paragraphs) | [Links](#links) | [Images](#images) |
| [Lists](#lists) |[Div & Sections](#div-section--grouping-and-organizing) | [Style](#style) |
| | [Cheat Sheet](#cheat-sheet) | |

## HTML

HTML stands for Hypertext Markup Language, this is the standard langue for web page development. HTML’s basic structure is made of tags, elements, and attributes.

> Note: Don't forget to save your work, Your browser page will only change if your work has been saved.

## Tags

Tags are the key to all of HTML. Tags create Titles, Headings, Paragraphs, embolden words and much more.
A tag should look like this ` <br> ` with an angle bracket opening the tag, required charters inside, and a final angel bracket to close. The "br" tag produces a line break like pushing enter in a writing document.
One tag is not always enough to complete the desired effect; some require a closing tag as well. A closing tag should look like this `</title>`, to make a tag again open with an angle bracket but this time add a slash before your characters then close with the appropriate angle bracket.

## Elements

Tags and the content they contain produce elements. For example when making a heading element you start with an opening heading tag, add the content for that title and end with a closing title tag this should look like the following

```html
<h1>This is a heading or title size one the is largest</h1> 
```

Not all elements have a closing tag, but if they do don’t skip them or your content won’t display properly.

> Note: No space is required between the tag and the content, in fact if added to this tag the space will show up before the words potentially messing up your delicately placed, hand crafted positioning.

## Attributes

Well not necessary all elements can have Attributes added to the starting tag, they add extra information to the element such as what dimensions the image should have or where the image location can be obtained.
For example in the image tag

```html
 <img src=“<https://i.insider.com/602ee9ced3ad27001837f2ac?width=2000&format=jpeg&auto=webp”> alt=‘click for a great photo’> 
```

The link source or "src" is the attribute giving extra information, where the webpage is finding the image to display. Just the source attribute should look like this `src=“…”`
"alt" gives a description of the image in case the image failed to load. alt attribute should look like this `alt=‘…’`

> Notes:
>
> - The … is to show where a link goes, not part of the src but the ‘’ are required.
> - All attributes should be in the opening or starting tag.
> - Standard HTML does not require Attributes to be upper or lower case however other languages such as XHTML does require lower case attributes, so just keep your attributes lowercase.

## Structure

Structure and formatting are the skeleton of HTML, it holds up the code allowing the browser to properly display our web pages. It also helps us or others to follow what’s been coded and where our problems might be. The basic structure should look like this:

```html
<HTML>
 
     <head>
 
         <title>this is what will be shown in the browsers tab</title>

         <meta name="keywords" content="Web, tutorials, HTML, free, pumpkin">
 
    </head>
     <body>
 
         <h1>My heading</h1>
 
         <h3>another heading but smaller</h3>
 
         <p>these are my paragraphs. Don’t be like me do a grammar…</p>
 
     </body>
 </HTML> 
```

The fist line should be a starting tag for HTML. This declares a document type and should make the program we are using to code run better and help us make ending tags. Everything should then be indented *(in most cases this is done by pressing tab)* after all everything is in HTML.

*The head element* is for the unseen parts of your webpage like what character sets are used, or the key words search engines are trying to find. This is the meta data, it will not be displayed but will be used by browsers and search engines to "correctly" display or promote your webpage *(unless like me you add false information like pumpkin).*
Every new element should be indented in the section they belong. As you can see the title and meta elements are indented from the opening head tag.
The body element is not part of the head element and holds a similar level of use. The body holds all the information that will be displayed on the webpage like images, paragraphs and headings.

> Note:
>
> - Unfortunately this part is important, making code that others can read is important for group works and employers so start the habit now.
> - if your worried about coding programmes or applications I use the free software visual studio code, but notepad works too.
> - Seriously, please indent the work this is most commonly done using tab.

## comments

Comments ` <!-- a comment --> ` can be use to communicate what is happing in your code without adding it in to the code itself, this is very useful for group projects and work environments. You can comment out valid code that you want to keep available but not functioning in the projects current state.

```html
    <!--<p>a paragraph that will no longer be seen</P>-->
```

 Comments open with an angled bracket, a exclamation mark and two dashes followed by your statement or code, two dashes and an angled bracket to close.

## Headings and Paragraphs

There are six different sized headings `<h1>` size one is the largest and `<h6>` six is the smallest. The tag for headings is simple an angled bracket with ‘h’ and the size listed by a number and finished with an angled bracket. A heading element looks like this

```html
<h3>heading element size 3</h3>
```

Paragraphs `<p>` are opened with an angle bracket with a ‘P’ before the final angle bracket.
# `<h1>…</h1>`

# `<h2>…</h2>`

## `<h3>…</h3>`

## `<h4>…</h4>`

### `<h5>…</h5>`

### `<h6>…</h6>`

`<p>…</p>`

> Note: I used a trick here as this page is in markdown the headings are not the same size as they would be with HTML. Sizes 1 & 2 / 3 & 4 / 5 & 6 are the same on this page!

## Links

Adding links uses the `<a>` tag with an attribute labelled `href=‘…’` *Remember that attributes are always in the starting tag.* Between the starting tag `<a href=‘…’>` and the closing tag `</a>` you can add in words that will show up on your webpage like a paragraph, but become the hyperlink to the location in the "href" attribute. Here is an example with a link to google

```html
<a href=‘https://www.google.com/'>a helpful link to google</a>
```

> Note: you could have a full paragraph that works as your link, don’t. Make your links easy to read and follow *(this also means not telling people is a link to google and giving them a link to a Rick roll)*.

## Images

Images require the `<img>` tag, and does not contain a closing tag. A source attribute `src=‘…’` is needed to tell our webpage were to find the image, this can be linked from our own folders, or ones sourced from the internet. Images also uses an "alt" attribute `alt=‘…’` this gives the photo a brief description in the case the image fails to load, or the user requires a screen reader. The image element should look like this

```html
<img src=‘<https://upload.wikimedia.org/wikipedia/commons/c/c0/Biohazard_symbol.svg’> alt=‘The bio hazard sign’>
```

## lists

There are two main types of lists ordered `<ol>` and unordered `<ul>`. List elements are made of two tags working together, a list item 'li' tag and either an ordered list 'ol' or unordered list 'ul' tag.

> 1. The first is an ordered list.
> 2. This creates numbers
> 3. thus ordered, like a recipe
> 4. or a scientific method.

The ordered list element should look like is:

```html
<ol>
    <li>first item</li>
    <li>second</li>
    <li>third</li>
</ol>
```

the `<ol>` tag takes the initials from 'Ordered list', opening with an angled bracket 'ol' and finished with an angled bracket. Place as many "li" elements inside as needed.

> - The second is the unordered list
> - This creates bullet points.
> - Shopping list are a great
> - example of a list that utilizes this format.

`<li>` elements open with an angled bracket 'li' and finished with an angled bracket.

the `<ul>` tag takes the initials from 'Unordered list', opening with an angled bracket 'ul' and finished with an angled bracket. Place as many "li" elements inside as needed.

The unordered list element should look like is:

```html
<ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
</ul>
```

> note: This element requires many closing tags, for each use of "li" as well as closing tags for either "ol" or "ul".

## Div/ Section -Grouping and organizing

The "section" element defines a thematic section of the webpage. A section element would be used to divide up different topics such as how to make a list, or how to add links in html. Both are about the main subject HTML but very different parts of the code and with there own headings.

The "div" element is a more generic container used to group related elements for ease of styling.

the code for "div" `<div>`
opens with an angled bracket with "div" inside closed with another angled bracket

the code for "section" `<section>` opens with an angled bracket the word "section" inside and closed with another angled bracket

```html
    <section>
        <h2>My boss</h2>
        <p>their name is...
        they are ... years old
        and they will probably make me change this example<p>
        <img src=“<https://i.insider.com/602ee9ced3ad27001837f2ac?width=2000&format=jpeg&auto=webp”> 
    </section>

    <div>
        <P>Bobs burgers is a cartoon</p>
        <P> joe biden became the 46th president of america since the founding of the U.S.A.</p>
    </div>
```

> note: the "section" element is an example of a semantic element for more information on those please visit the website W3schools.

## Style

Styling in HTML is a mixture of HTML and CSS, 'cascading style sheets' for example HTML is used for "div" and then the div is styled in CSS.

CSS can change the font family, font colors, background color or image, and set out page layouts.

for more in depth information about CSS please visit W3schools.

## Cheat Sheet

| Element | Description |  Syntax |
|---| ---|---|
| Doc type | HTMl document  | ` <html>...</html> `|
|Comments| Comment out work or leave notes for others| `<!--...-->`|
| Head | A container for data about data| `<head>...</head>`|
| Title| Displayed title in browsers tab| `<title>...</title>`|
| Body| Contains content of the webpage| `<body>...</body>`|
| Headings | The heading of webpage or section of paragraphs in 6 sizes | `<h1>...</h1>` Though to `<h6>...</h6>`|
| Paragraphs| Makes a Paragraph| `<p>...</p>`|
| emphasis| Displays text in italics and with emphasis using a screen reader | `<em>...</em>`|
|Strong| Emboldens words | `<strong>...</strong>`|
|Div| defines a part HTML| `<div>...</div>`|
|Link | Adding in a hyperlink | `<a href='...'>...</a>`|
|Images| Add an image onto your page| `<img src='...'>`|
|Unordered list| A bullet pointed list|`<ul> '<li>...<li>' </ul>`|
|Ordered list| A list with numbers in place of bullet points|`<ol> '<li>...<li>' </ol>`|

> Remember attributes are inside the first tag of an element.

| Attribute | Description | Syntax|
| --- | --- | --- |
|alt| A text alternative for images that failed to load |`alt="..."`|
|src| Defines an img's location or url | `src="..."`|
|href| Defines were the hyperlink goes to | `href="..."` |
|ID|Gives an area of html a unique identifier|`id="..."`|
|class|Gives an element a unique identifier|`class="..."`|

> For a more extensive list of HTML syntax please check out W3schools.
=======
---

## This is basic HTML

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
>>>>>>> 96d9786fb78953d521dee11f3114cb95e3452d0a
