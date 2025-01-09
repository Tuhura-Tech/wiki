---
title: Version Control
description: Overview of Level 2 Resources
---

Obligatory [xkcd](https://www.xkcd.com/1597/).



Version Control is an extremely important and powerful tool used in every kind of development. In simple terms it, as the name suggests, allows us to keep track of and control the different versions of our project. Think of it as saving a snapshot of your project as it stands. 

todo: discuss git/github

## Commits

Saving a state using Version Control is called a **Commit.** If something goes wrong, or you accidently save something after breaking things, you can rollback to any of those snapshots you've created.

When you make a **Commit** you'll add a message that describes what was changed, this helps keeps track of what you did when! And makes it easier to rollback to the correct version if needed. 


### When should you make a **Commit?**

A commit should be made whenever something major is changed in your project, or if a new feature is added. A commit's message is limited to 72 characters, but a good rule of thumb is that the changes made in a commit should *easily* fit in this limit. If you find yourself struggling for room, it likely should be multiple commits!

A commit should also generally **work.** This doesn't mean it needs to be feature complete, or be perfect, or 100% bug free. But if the code doesn't function at all, there'd be little reason to want to rollback to this version. 

todo: good commit examples (description of changes + example commit message)



## Branches

Version Control also allows for lower risk experimentation, allowing you create a **Branch** based on the current state of your project, any changes made to this branch, won't effect the main branch. This branch has it's own **Commits** totally seperate from the main branch. If you decide the changes on the branch are ready for the main project, you can merge the Branch into your main project. If the branch breaks everything, you can just discard the changes and go back to your main branch!

### When should you add a branch? 

You should create a branch whenever you want to make **major** overhauls, or changes that could potentially totally break the functionality of the project, or if you just want to experiment risk free while also allowing for commits to be made.

todo: examples of when to create a new branch 


## How to set up Version Control in VSCode

todo
1. Sign up for GH
2. Login to GH in VSCode
3. Navigate to "Source Control Menu"
4. create a repository
5. make a commit

Section will cover the basics of Version control, based on its use through VScode integration. As well as why it needs to be used. Links will be provided to commandline Git information, as well as maybe basic commmands