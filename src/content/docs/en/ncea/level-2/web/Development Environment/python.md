---
title: Setting Up Python
description: Overview of Level 2 Resources
---

For our project we will be using Python with [Uv](https://docs.astral.sh/uv/) as the package manager.

## Setting Up Python

### Installing UV

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
