# Contributing 
This is a document outlining how to contribute to the Tūhura Tech wiki.

There are two main ways of contributing:  
- Suggesting - this involves creating a new [issue on Github](https://github.com/Tuhura-Tech/Wiki/issues) and informing us of a way to improve the wiki. Alturnatively, you can notify the team directly on our [Discord server](https://github.com/Tuhura-Tech/Wiki/issues)
- Directly - to do this you need to [fork our repository](https://github.com/Tuhura-Tech/Wiki/fork) and editing it, then creating a pull request to merge with the main site

## Issues and suggestions
If you have a suggestion or an issue you have found with the wiki please go to our [Github issues](https://github.com/Tuhura-Tech/Wiki/issues) page and start a new issue

### Creating an issue
For a new issue on the [Github issues](https://github.com/Tuhura-Tech/Wiki/issues) issues page, press 'New issue'   
From there decide which issue you would like to raise:
- Docs Request - this is for if you have information that you would like to be documented on the Tūhura Tech wiki, or you have a request for something you would like us to look into and document
- Report a security vulnerability - if you have seen a security vulnerability, let us know privately here

### Documentation request

#### Title
Try and keep the title for what you want to be request short and simple.  
A good title is no more than a few words, for example "Python Introduction" or "Database backend" are good titles.

#### Short description
This is to expand your request into a full sentence or two. Try and keep this simple without going into detail.  
A good example of a short description is "Please write a guide on how to use markdown"

#### Detailed/additional information 
This is optional.  
If you have information you would like to be cut down and added to the wiki add it here. 

Or, if you have screenshots to help explain what you would like to be added paste them here.  
The easiest way to add an image is to `right click > copy image` on most platforms like Google Chrome or Discord, and then using `ctrl + v` in the issue to paste it as a markdown link

## Directly writing documentation
It's awesome you want to help us document and create resources for people to learn from! To get started you will need to set a few things up

### Setting up
To contribute you first need to hold a copy of our wiki on your device to edit it. First off, create a [fork of the repository](https://github.com/Tuhura-Tech/Wiki/fork)

The simplest way to clone [the repository](https://github.com/Tuhura-Tech/Wiki) is to use [Github Desktop](https://desktop.github.com).   

Github Desktop is available for [Windows](https://central.github.com/deployments/desktop/desktop/latest/win32) and [macOS](https://central.github.com/deployments/desktop/desktop/latest/darwin)  

Open the installer and let it run. Then "Clone a repository from the Internet", which can also be reached from `File > Clone repository...` or `ctrl + shift + o`. Go to the third tab and paste in the link to your cloned branch and choose an empty local path, then press 'Clone'.

From here you can open it in your file explorer or preferred code editor via the buttons or manually in those programs

### Writing in markdown 
[markdownguide.org](https://www.markdownguide.org) has a wonderful [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for writing in markdown. All of the documentation is written in markdown so knowing this is crucial. If you would like to see examples of how to format your documentation go to the documentation we have already written and look at the raw markdown. The most commonly used syntax are # to indicate titles and subtitles so be sure to get familiar with that.

### Testing your version of the site
The site is written in [vitepress](https://vitepress.dev), which is a simlpe way to write documentation. They have a simple [getting started guide](https://vitepress.dev/guide/getting-started) which will help you install and use vitepress.

To summarize what you most likely need to know:
- Open the console for your operating system and run the command `npm install -D vitepress`. The [getting started guide](https://vitepress.dev/guide/getting-started) has alturnatives to npm if your system does not recognize it as a command
- Use the `cd` command to navigate to the install location of our wiki's root folder
- Use the command `npm run docs:dev` to start the site at http://localhost:5174/  
If you run into an error, read it and try to understand what's wrong. If you cannot find a solution consult the [vitepress documentation](https://vitepress.dev/guide/getting-started)

### Adding to documentation
In the `/docs/` folder you will find many files.  
You can ignore any `index.md` files, and any `.vitepress` files.

From here navigate to the documentation you would like to add to and add what you would like to. Try and keep in line with the style already used in other documentation.

Once you have made your changes [test how the markdown will look](https://markdownlivepreview.com) and look at the changes on a local host of the site. 

Finally, back on Github Desktop make sure the file(s) you have changed are ticked in the changes tab on your Wiki branch repository, give them a summary, and then commit them. 

### Adding new documentation

#### New page in a present topic
Adding a new page is more complex than adding to a page that is already there. First, navigate to the file where you would like to make a new page that corrosponds to the location on the site. For example if you wanted to write about an NCEA standard go to `docs/ncea/` and then the level it is for. There, create a new markdown file named `your documentation name.md`.

Then, in `/docs/.vitepress/config/sidebar.ts` add your page.
This is an example of adding `example.md` to the cybersecurity topic
```
"/guides/cybersecurity": [
    {
      text: "Cyber Security",
      link: "/guides/cybersecurity/",
      items: [{ text: "Example", link: "/guides/cybersecurity/example"}],
    },
  ],
```
The only changed part of the code was `items: [],` to `items: [{ text: "Example", link: "/guides/cybersecurity/example"}],`

#### New page in a new topic
If you need to create a new topic folder for your documentation, make the new folder in `/docs/guides` and add the markdown file there. Also add an `index.md` file there, this file is the home page for your topic so describe the topic here briefly. 

Then, in `/docs/.vitepress/config/sidebar.ts` add your topic and page.  
This is an example of a topic called `example` with a file called `example.md`
```
  "/guides/example": [
    {
      text: "Example",
      link: "/guides/example/",
      items: [{ text: "Example", link: "/guides/example/example.md" }],
    },
  ],
```
You must also change `/docs/.vitepress/config/nav.ts`   
This is that same example for nav.ts
```
{
  text: "Example",
  link: "/guides/example/",
  activeMatch: "/guides/example/"
},
```
Finally, back on Github Desktop make sure the file(s) you have changed are ticked in the changes tab on your Wiki branch repository, give them a summary, and then commit them. 

### Merging your changed
Finally, to add your documentation to the main site. To do this create a [new pull request](https://github.com/Tuhura-Tech/Wiki/compare)