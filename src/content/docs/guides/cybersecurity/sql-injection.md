---
title: SQL Injection
description: Simple introduction to injecting SQL into a website
---

SQL injection is one of the most common web vulnerabilities.
It's one of the easiest attack vectors for a website, and it's even easiest to prevent.

In essence SQL injection is when a user uses a text box that searches a database and gets something they weren't meant to.

## What is SQL?

SQL, or Structured Query Language, is a language used to interact with databases.  
It's used to create, modify, and retrieve data in the database.

SQL is a very simple language to pick up, and it's very easy to learn the basics.  
Take this example:

```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'password';
```

- `SELECT *` is used to select everything from a table.
- `FROM users` is used to select the table `users` from the database.  
So `SELECT * FROM users` selects everything from the users table.

`WHERE` is used to filter the results to only include the conditions following `WHERE`.  
In this case the conditions are the username must be `admin` and the password must be `password`

Altogether this will get all of the users with the username `admin`, and the password `password`. And since it's a login page, it'll likely only return one user.

SELECT, FROM, and WHERE are the main keywords a programmer would use in all of SQL, it's a simple enough language.

### Simple injection

The simplest way to inject SQL is to use a single quote `'`.  
In an example like the one before, instead of putting `admin` as the username, we're putting `'`, which would make the query look like this:

```sql
SELECT * FROM users WHERE username = ''' AND password = 'password';
```

This is an incorrect queary since there are three single quotes, it'll likely throw an error at the user.

We can use this to our advantage though, if we put `' OR 1=1--` as the username, the query would look like this:

```sql
SELECT * FROM users WHERE username = '' OR 1=1--' AND password = 'password';
```

Unlike `'`, this is a valid query.
The `--` is used to comment out the rest of the query, so the `AND password = 'password'` is ignored.

When SQL goes to the database, then goes to the users table, then gets all of the users with the conditions after `WHERE` it'll get all of the users with the username `'' OR 1=1`. Since 1 is always equal to 1, it'll always return true for the queary from users.

So, depending on how the surrounding code is setup, it'll either return all of the users or the first user, which is often the admin if the database is sorted by how recently the users were added.

If we try this on [the Juice Shop login page](https://demo.owasp-juice.shop/#/login) by placing `' OR 1=1--` into the username field, we get signed into the admin account.

## Sqlmap

Sqlmap is a tool that automates SQL injection. There are many, many more injections to try than `' OR 1=1--`, and there are many different types of databases each with their own vulnerabilities.  
Helpfully, sqlmap will identify the type of database and test everything for you.