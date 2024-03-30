---
title: SQL Injection
description: Simple introduction to injecting SQL into a website
sidebar:
   order: 3
---

SQL injection is one of the most common web vulnerabilities.
It's one of the easiest attack vectors for a website, and it's even easier to prevent.

In essence SQL injection is when a user uses a place that accepts user input that searches a database, and then gets something they weren't meant to.

In 2017 the Open Web Application Security Project ([OWASP](https://owasp.org/)) [rated Injection as the most common web application vulnerability](https://owasp.org/www-project-top-ten/), and third most common in 2021. SQL injection is a large portion of injection.

## What is SQL?

SQL, or Structured Query Language, often pronounced like sequel, is a language used to interact with databases.  
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

### Simple injection

The simplest way to perform SQL injection is to use a single quote ' in a field that accepts user input.  
In an example like the one before, instead of putting `admin` as the username, we're putting `'`, which would make the query look like this:

```sql
SELECT * FROM users WHERE username = ''' AND password = 'password';
```

This is an incorrect query since there are three single quotes, it'll likely throw an error at the user.

We can use this to our advantage though, if we put `' OR 1=1--` as the username, the query would look like this:

```sql
SELECT * FROM users WHERE username = '' OR 1=1--' AND password = 'password';
```

Unlike `'`, this is a valid query.
The `--` is used to comment out the rest of the query, so the `AND password = 'password'` is ignored.

When SQL goes to the database, then goes to the users table, then gets all of the users with the conditions after `WHERE` it'll get all of the users wgeb the following condition is true: the username is `''`, or when `1=1`. Since 1 is always equal to 1, and only it has to be correct due to the OR, it'll always return true for the query from users.

So, depending on how the surrounding code is setup, it'll either return all of the users or the first user, which is often the admin.

Juice Shop is a website designed to be hacked. If we try this on [the demo Juice Shop login page](https://demo.owasp-juice.shop/#/login) by placing `' OR 1=1--` into the username field, we get signed into the admin account.

In case you don't understand try [this hacksplaining exercise on SQL injection](https://www.hacksplaining.com/exercises/sql-injection).

## Sqlmap

There are many, many more injections to try than `' OR 1=1--`, and there are many different types of databases each with their own vulnerabilities.  
Which is where sqlmap comes in, to automate finding the type of database, and testing of different injections.

### Installation

Sqlmap is a python script, so it requires python to run.  
[Download the latest version of python here](https://www.python.org/downloads/), and install it.

Sqlmap is available through pip and can be installed using the command python3 -m pip install sqlmap in your operating system's terminal.

Alturnatively, you can download it [from sqlmap.org](https://sqlmap.org/).  
If you do this you'll need to extract the file and navigate to it with `cd`. Run it with `python sqlmap.py` or `python3 sqlmap.py` instead of `sqlmap`.

### Usage

Sqlmap is a command line tool, so it's used in the terminal.

To use sqlmap, you need to know the URL of the website you're testing and the field that accepts user input.

The simplest way to run sqlmap is to use `sqlmap -u <URL> --data=<input values>`.

#### Juice Shop login page

This will not work on the demo Juice Shop login page. You need to run your own Juice Shop instance.  
[Follow the setup instructions and then return.](https://github.com/juice-shop/juice-shop#setup)

Go to the Juice Shop login page, and open your browser's developer tools. Most browsers use F12 or Ctrl+Shift+I to open the developer tools.

Go to the network tab in the developer tools, and try to login with some random word as the email and password, it doesn't matter.

Here is what the login request looks like in Firefox-based browser LibreWolf:
![Juice Shop login request](/assets/sql-injection/LoginHeader.png)
Here we can see the real request is being made to `http://localhost:3000/rest/user/login` and not `http://localhost:3000/#/login`.

If we go to the Request tab on Firefox-based browsers and toggle Raw, or the Payload tab on Chromium-based browsers and press view source, we can see the important data:
![Juice Shop login request payload where the email is Tūhura and the password is Tech!](/assets/sql-injection/LoginPayload.png)
Here we can see the data is being sent as `{"email":"<email>","password":"<password>"}`.

Sqlmap only needs the names of the data and an example of valid input, and it seperates values with `&`, so `--data` should be `email=test@example.com&password=test`.

Now we can run sqlmap with the URL and data:

```bash
sqlmap -u "http://localhost:3000/rest/user/login" --data="email=test@example.com&password=test"
```

There's a problem with this. Sqlmap will exit as soon as it gets the 401 error resonse from the site, similar to the one we got when we tried to login with a random email and password. Let sqlmap know to ignore this with `--ignore-code 401`:

```bash
sqlmap -u "http://localhost:3000/rest/user/login" --data="email=test@example.com&password=test" --ignore-code 401
```

Go ahead and just press enter whenever sqlmap asks a question, it'll use the default option which is good enough.

It won't find anything.

This is because we aren't going deep enough with the injection. To become more invasive use `--level 5` and `--risk 3` option. Level's max is 5, and risk's max is 3.

While we're at it let's add --batch to just automatically accept the default options.

```bash
sqlmap -u "http://localhost:3000/rest/user/login" --data="email=test@example.com&password=test" --ignore-code 401 --level 5 --risk 3 --batch
```

Now it'll find something. First it finds the DBMS (database management system), SQLite. In the future use `--dbms SQLite` with Juice Shop to skip this step since we already know the DBMS.

Near the end it'll find the HTTP request with successful injection, which should look something similar to:

```text
---
Parameter: email (POST)
    Type: boolean-based blind
    Title: OR boolean-based blind - WHERE or HAVING clause (NOT)
    Payload: email=test@example.com' OR NOT 6173=6173-- QuXO&password=test
---
```

The important part of this is the payload. For [an interesting reason](https://medium.com/@christophelimpalair/bypass-admin-login-with-sql-injections-sqlmap-bb60d447a1e2) it's using OR NOT instead of OR, so remove the NOT to make it valid and suddenly it found almost the exact same query as `' OR 1=1--`.

This isn't very useful, we already knew to try `' OR 1=1--`. So let's try it on something more useful.

#### Search

Open up your local version of Juice Shop in a new tab, and then search something. It might not show in the network tab if you use the same tab.

Here's what the search request looks like in LibreWolf:
![Juice Shop search request](/assets/sql-injection/SearchHeader.png)

This time it's a GET request, which makes this whole process so much easier.

First just check out what's at `http://localhost:3000/rest/products/search?q=test` in your browser. It's just a JSON array of products with the word test in them.

Here's what it looks like in LibreWolf:
![Juice Shop search request](/assets/sql-injection/SearchJSON.png)

All in all, this isn't very useful. We could have just searched "" and gotten this all on the regular page.

Let's try getting the database schema.

### Schema

The schema is the structure of the database, including its tables, columns, and relationships.  
It is how you know of all of the different types of data in the database.

To get the schema, use `--schema` with sqlmap.  
It's very slow to get the schema so it's best to use `--threads` and then the amount of threads you want to use to speed it up.

```bash
sqlmap -u "http://localhost:3000/rest/products/search?q=test" --level 5 --risk 3 --schema --threads 3 --dbms SQLite --batch
```

This is going to take a while, so go make a hot chocolate or something.

When it's done, it'll tell you where in your file system it saved the schema.

Here's what I got:

```text
back-end DBMS: SQLite
Database: <current>
Table: Memories
[6 columns]
+-----------+----------+
| Column    | Type     |
+-----------+----------+
| caption   | VARCHAR  |
| createdAt | DATETIME |
| id        | INTEGER  |
| imagePath | VARCHAR  |
| updatedAt | DATETIME |
| UserId    | INTEGER  |
+-----------+----------+
```

Let's go back and try this on the login page this time! Actually, this time let's try to dump all the data from the database with `--dump-all`.

```bash
sqlmap -u "http://localhost:3000/rest/user/login" --data="email=test@example.com&password=test" --ignore-code 401 --level 5 --risk 3 --batch --dbms SQLite --threads 6 --dump-all
```

This will take a while, so go get some marshmallows to go with your hot chocolate.

When it's done, it'll tell you where in your file system it saved the data.

...

Okay this is taking too long.

I left this going with 10 threads for 8 hours and it didn't finish. Even using just --dump instead of --dump-all didn't work.

These are the challenges with enumerating through a database. It's very slow, and it's very easy to get blocked by the website. Use `sqlmap -hh` to see all the enumeration commands so you can narrow it down to exactly what you need.
