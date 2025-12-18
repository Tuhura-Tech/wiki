---
title: Tips and Tricks
description: Tips and tricks for using Git.
---

## How to write good commit messages?

Writing good commit messages is important as it allows others to easily understand what you did and why. It also helps you to understand what you did in the past. There are many different conventions and styles for writing commit messages. The most popular one is the [Conventional Commits](https://www.conventionalcommits.org/en/) specification. It is a specification for adding human and machine-readable messages and provides an easy, standard way to see what happened. It is also used by many tools like [release-please](https://github.com/googleapis/release-please) which Google uses to automatically release their packages.

The commit structure looks like:
```
<type>(optional scope): <description>
```

With the available types being (taken from the AngularJS commit message guidelines):
```
feat: A new feature
fix: A bug fix
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests
build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
perf: A code change that improves performance
```

With small projects and for school, you would normally only be doing `feat` and `fix`. The scope can be used to specify what part of the project the commit targets, e.g.: `feat(auth): add login pages`. The description should be a short summary of what you did.

## Should I use GitLab, GitHub, Forgejo or something else?

All of these are Git repositories and offer both public and private repositories, so can all host your code. GitHub is the largest and is the easiest to use. GitLab used to be extremely popular, but can be complicated to use. Forgejo is the easiest to use and looks after your data, however if you do not have a Forgejo server available you will have to host it yourself which can be difficult. We recommend using the repository that you are most comfortable with or that you have been told to use.
