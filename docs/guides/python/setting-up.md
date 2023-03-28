# Setting up
There are many ways to set up your Python environment with different advantages and disadvantages. This guide will help you get fully setup to start coding in Python.

Your options are:
- [Local development](#local-development) - the most flexible option, but requires some setup
- [GitHub Codespaces](#github-codespaces) - a cloud-based IDE that gives you a full development environment
- [Replit](#replit) - a cloud-based IDE that gives you simplified access to a Python environment
- [IDLE](#idle) - a simple Python IDE that comes pre-installed with Python

## Local development
This is the most flexible option as you can use any IDE you want and does not rely on an internet connection. This option also has the most complexity and learning due to all advanced features being available immediately. To use this option you will need to install Python and a code editor. You can download Python from the [Python website](https://www.python.org/downloads/). You can use any code editor you want, but we recommend [Visual Studio Code](https://code.visualstudio.com/).

### Installing Python
There are multiple ways to install Python, but the easiest way is to download the latest version from the [Python website](https://www.python.org/downloads/). Once you have downloaded the installer you can run it and follow the instructions to install Python.

You can also install python using a package manager for a more advanced setup. If you are using macOS you can use [Homebrew](https://brew.sh) to install Python. If you are using Linux you can use your package manager to install Python. If you are using Windows you can use [Chocolatey](https://chocolatey.org) to install Python.

::: code-group

```sh [Homebrew]
$ brew install python
```

```sh [Linux]
$ sudo apt install python3
```

```sh [Chocolatey]
$ choco install python
```

```sh [asdf]
$ asdf plugin add python
$ asdf install python latest
```

:::

Once you have installed Python you can check that it has installed correctly by running the following command:
```sh
$ python --version
```

### Setting up a project
To set up a project you will need to create a new folder for your project. You can then open this folder in your code editor. You will also need to setup the virtual environment for your project. You can do this by running the following command:
```sh
$ poetry init
```

This will create a `pyproject.toml` file in your project folder. This file contains all the information about your project and is used by Python Poetry to manage your project. You can then install libraries using Python Poetry.

### Adding libraries
You can add libraries to your project by running the following command:
```sh
$ poetry add <library>
```

## GitHub Codespaces
[GitHub Codespaces](https://github.com/features/codespaces) is a cloud instance of Visual Studio Code connected directly to a Git repository. This allows you to have a full development environment in the cloud. To use GitHub Codespaces you will need to have a GitHub account and a repository. You can sign up for a free account [here](https://github.com).

### Setting up a project
To set up a new project all you need to do is create a new repository on GitHub. You can choose to have it either public (everyone in the world can see) or private (only you can see). You can then create a new Codespace by clicking the `Code` button on the repository page and selecting `New codespace`. You can then start coding in Python.

As GitHub Codespaces is a cloud instance of Visual Studio Code the instructions for adding libraries are the same as for [Local development](#local-development).

## Replit
[Replit](https://replit.com) is an online IDE similar to GitHub CodeSpaces but has a simplified interface and is useful for small quick projects. To use Replit you will need to sign-up for a free account [here](https://replit.com/signup). Once you have an account you can create a new Python project by clicking the `+` button in the top left and selecting `New repl`. You can then select `Python` as the language, you can then start coding in Python.

### Adding libraries
Replit has support for pyproject.toml and [Python Poetry](https://python-poetry.org) for managing libraries. To add a library you can run the poetry command in the terminal. You can also use the builtin package manager to install libraries.

```sh
$ poetry add <library>
```

## IDLE
To install IDLE, you will need to install Python. You can download Python from the [Python website](https://www.python.org/downloads/). Once you have installed Python, you can open IDLE by searching for it in the start menu on windows or in your applications on macOS or Linux.

### Adding libraries
With IDLE it is not recommended to install libraries and instead you should use one of the other development environments.


## Next steps

### Using Python Poetry

### Useful libraries
There are several libraries that are useful when programming in Python and can help with either style/formatting or type checking.

#### Style and formatting
These libraries help with formatting and style of your code, they can be used to automatically format your code to a standard style and can also be used to check your code for style errors. They should be added to your `[tool.poetry.group.style.dependencies]` group in your `pyproject.toml` file.

- [Black Formatter](https://black.readthedocs.io/en/stable/)
- [Flake8](https://flake8.pycqa.org/en/latest/)

You can add into your `pyproject.toml` file by running the following commands:
```sh
$ poetry add black flake8 --group test
```

##### Using Black Formatter
Black is a Python formatter that will automatically format your code to a standard style. You can run Black by running the following command:
```sh
$ poetry run black .
```

##### Using Flake8
Flake8 is a Python linter that will check your code for style errors. You can run Flake8 by running the following command:
```sh
$ poetry run flake8 .
```

#### Type checking
These libraries help with type checking your code, they can be used to check your code for type errors. They should be added to your `[tool.poetry.group.test.dependencies]` group in your `pyproject.toml` file.

- [MyPy](https://mypy.readthedocs.io/en/stable/)

You can add into your `pyproject.toml` file by running the following commands:
```sh
$ poetry add mypy --group test
```

##### Using MyPy
MyPy is a Python type checker that will check your code for type errors. You can run MyPy by running the following command:
```sh
$ poetry run mypy .
```

## Useful resources
- [Python documentation](https://docs.python.org/3/)
- [Python Poetry](https://python-poetry.org)
- [Black Formatter](https://black.readthedocs.io/en/stable/)
- [Flake8](https://flake8.pycqa.org/en/latest/)
- [MyPy](https://mypy.readthedocs.io/en/stable/)
