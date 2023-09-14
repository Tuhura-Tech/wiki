---
title: Basics
description: This is a page in my Starlight-powered site
---

## Installing Git

::: code-group

```sh [Chocolatey]
choco install git
```

```sh [Homebrew]
brew install git
```

```sh [Debian]
sudo apt install git
```

:::

## Creating a git repository

You can create a local git repo by running `git init` in the folder of your code. This local repository can be used with all of git's features.

## Adding files

With git you have control over what files you commit ("save") in version control and when, this can be done at any time with any files.

### Staging

Git has a concept called staging which means changes you want to save. To save a change you first need to add it to staging using `git add`. Some examples are shown below.

- Add all files with changes to staging: `git add .`
- Add one file with changes to staging: `git add file1`
- Add multiple files with changes to staging: `git add file1 file2 file3`
- Add all files in a folder with changes to staging: `git add folder1`

### Committing

Once a change has been saved to staging we can commit ("save") that change to version control through the commit command. When saving a change we also need to add a message explaining what the change does. The command to commit changes is: `git commit -m "commit message"`. Good commit messages should explain what has been done, a good format is Conventional Commits which can be found [here](https://conventionalcommits.org).

## Git Remotes (GitHub/GitLab/ForgeJo)


## Reverting Changes

## Branches and Pull Requests

## More info
