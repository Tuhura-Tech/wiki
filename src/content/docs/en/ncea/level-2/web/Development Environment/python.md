---
title: Setting Up Python
description: Overview of Level 2 Resources
---

For our project we will be using Python with [Uv](https://docs.astral.sh/uv/) as the package manager.

## Setting Up Python

If it wasn't installed during your installation of VSCode, Python is most easily added using the built in extensions manager in VSCode.

The extension manager can be found on the sidebar to the left, with the image of four boxes.

Search "Python" and install the Python package. This will add support for the Python Language. If the install button isn't visible, you'll already have it installed and can move on.

![Installing Pythong](/src/assets/ncea2web/pythonInstall.png)

### Installing UV

**Needs discussion of how to use Terminal and where to input these commands**

To install UV, we can follow the instructions on the [official documentation](https://docs.astral.sh/uv/).

Then we can create our projects

```sh
uv init my_project
```

### Virtual ENv

We can create a virtual environment using the following command

```sh
uv venv
```

### Running scripts

Instead of interacting with the Virtual Env directly it is easier to run scripts using the following command

```sh
uv run my_script.py
```

## Adding dependencies

### Style

For style we will be using [Ruff](https://docs.astral.sh/ruffle/)

```sh
uv add ruff
```
