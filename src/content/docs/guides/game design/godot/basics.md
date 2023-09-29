---
title: Basics
description: This is a page in my Starlight-powered site
---

[Godot](https://godotengine.org/) is a free and open source game engine that supports game design for 2D and 3D games. It is a great tool for beginners and experts alike. It is also a great tool for teaching game design and programming. This guide will help you get started with Godot and teach you how to make a simple 2D game.

This guide is up-to-date with Godot 4.1.1 stable official release.
# Getting started
There are several options for developing with Godot. The recommended way is to download the latest version from the [downloads page](https://godotengine.org/download/) for Windows/macOS/Linux. It will be what we use for this guide.

- Run the engine in a web browser with the [Godot Web Editor](https://editor.godotengine.org/releases/4.1.1.stable). This is the easiest way to get started, but it has [documented limitations](https://docs.godotengine.org/en/stable/getting_started/editor/web_editor.html#limitations) and is not recommended for large projects.
- Download the android app from the [Google Play Store](https://play.google.com/store/apps/details?id=org.godotengine.editor.v4), while functional it is in early access and may not be stable.
- (Recommended) Download the latest version from the [downloads page](https://godotengine.org/download/) for your platform to run locally. Extract the zip file and run the executable. You should see a window similar to this:
![Godot project manager](./ProjectManager.png)

## Creating a project
### Making a new project
Click the **New Project** button to create a new project, the following window will appear:
![New project window](./NewProject.png)

**Project Name:**
This is the name of your project, it can be anything you want. For this guide, we will use **Godot Is Awesome!**.
You can use the **Create Folder** button to create an empty folder with the name of your project at the project path.  
**Project Path:**
This is the path to the folder where your project will be stored.
You can use the **Browse** button to select a folder or type in the path manually.
It is recommended you use an empty folder for your project.  
**Renderer:**
Godot has three renderer presets: Forward+, Mobile, and Compatibility.
For this guide, we will use the **Forward+** preset.
Forward+ is only good for desktop platforms and has the most features.
Mobile is best for mobile platforms, but supports desktop, and has fewer features with better performance.
Compatibility supports desktop, mobile, and web platforms, it has the fewest features and the best performance. It is not recommended to use compatibility for 3D projects.  
**Version Control Metadata:**
This is used to store version control information in the project folder. It is recommended to leave this on Git even if you are not using version control. It is also recommended to use version control for your projects, but it is not required.  

### 2D or 3D?
The next window that'll open is the meat of the game engine, it is where you make your actual game. At first, it can be a little daunting, all the buttons and tabs, but it's simple to understand once you've used it a bit.
![Empty Godot project](./EmptyEngine.png)
For now, decide if your project will be 2D or 3D. You can change this later, but it's easier to start with the right one for your project.
For this guide, we will use 2D to introduce all the key concepts.  

## Components of a game
In the top left under **Create Root Node:** click the **2D Scene** button. This will create a new scene with a **Node2D** root node.
![Empty scene with Node2D as scene route](./BaseProject.png)

This should be the core scene of your game, or the scene that you do the core of your development in.  
At any time save your scene with **Scene > Save Scene** or save all scenes with **Scene > Save All Scenes**, we saved the scene as **main.tscn**.

### Nodes
Nodes are the building blocks of your game. They are the objects that make up your game. They can be anything from a sprite to a camera.
Nodes are organized in a tree structure, with the root node at the top and child nodes below it. Nodes can have any number of child nodes, but only one parent node.
You can see all the types of nodes with the Add Child Node button in the top left of the Scene tab, or by right-clicking any node in the Scene tab and selecting **Add Child Node**.  
It's worth taking a look at your options, but for now we'll start with CharacterBody2D. It can be hard to find since it's nested inside several nodes, but you can search for it in the bar. 

The CharacterBody2D is a node designed for objects that interact with physics that will be controlled by the player.
You'll notice it has a warning icon next to it, go ahead and add both the Sprite2D and CollisionShape2D nodes as children to the CharacterBody2D node.  
Now the CollisionShape2D node has a warning icon, this is because it needs a shape to define it's collision. On the right side of the screen you'll see the Inspector tab, this is where you can edit the properties of the selected node. Select the CollisionShape2D and change the first property, the shape, to a **New CircleShape2D**.
![Drop-down of shape property on CollisionShape2D node highlighting New CircleShape2D](./CircleShape.png)

Similarly, on the Sprite2D node, you can change the texture property to a new texture. Save the little birdie image below to your device and drag it into the FileSystem tab in the bottom left of the screen, alternatively you can make your own image and use that. Once it's in the FileSystem tab, you can drag it into the texture property of the Sprite2D node. 
![Cute pixel art circular sprite](./LilBirdie.png)

Your scene should now look something like this:
![Scene with tiny texture in the viewport](./UpdatedScene.png)

In the viewport, the largest area of the screen that shows the scene, you can move around with the middle mouse button and zoom in and out with the scroll wheel.
Zooming into the small circle where the red and green lines meet, you might notice the pixelated texture is fuzzy. This is because the texture is being scaled up to fit the size of the sprite. To fix this, go to the Sprite2D node and change the property **CanvasItem > Texture > Filter** to **Nearest**. Only do this for pixel art textures.
In the future if you do not want to change the Filter property for every Sprite2D node, you can change any parent node's Filter property to Nearest and all child nodes will inherit it if their Filter property is set to Inherit.