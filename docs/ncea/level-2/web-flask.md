# Flask Database Website
This is a set of resources that cover 3 internals and is implemented in Python. The covered internal are:
- Programming [AS91896]() (6 credits)
- Database [AS91892]() (4 credits)
- Media (Web) [AS91893]() (4 credits)

## What is Flask? What are we doing?
Flask is a web framework that can be used in Python to build websites or other web applications. It is a very popular framework and is used by many large companies such as Pinterest, LinkedIn and Netflix. Flask is very easy to use and is a great way to learn how to build websites. It is used as a library in Python which means its a bundle of code you can use and customise in your own code.

Over this project we will build a Website using Flask and Python. The website will be able to connect to a database to store data and then display the data on the website.


## Expectations/Requirements
This set of resources expects a basic understanding of Python programming.

## Software
There are 2 potential ways to do this course. The first uses your own device and runs everything locally, the alternative is to ue an online IDE such as GitHub CodeSpaces (recommended) or Replit.

### General Requirements
- [GitHub](https://github.com) Account - this is used to store a history of your code and also can function as a backup for your code.

### Device Requirements
If you are doing local development you will need a modern computer running either Linux, Windows 10/11 or MacOS (Chromebooks do not work).

- [Python](https://python.org/downloads) v3.8+ (the latest version is always recommended as its faster and has better error messages)
- [SQLiteStudio](https://sqlitestudio.pl/) is used to edit your SQLite Database
- An IDE or editor - We recommend Visual Studio Code but people have been known to use Atom and even IDLE or VIM.

### Online IDE
If you are using an online IDE the main thing you need is your GitHub account as everything should be handled for you.

You will also need:
- [SQLiteStudio](https://sqlitestudio.pl/) is used to edit your SQLite Database

## Getting Setup
To setup your python project you should follow the guide [here](../../guides/python/setting-up) and install these dependencies:
- flask (Web server)


## Basic Flask
To start your flask journey we can create a basic program and save it to a python file (we recommend calling it `main.py`). A basic Flask program is below:

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
   return "Hello World!"

@app.route("/about")
def about():
   return "This is a basic Flask website"

if __name__ == "__main__":
   app.run(debug=True)
```

### What does this all mean????
There is a lot going on here already and its only a basic program but while it might look confusing it doesn't do too much. We have a walkthrough of each line below:

```python
from flask import Flask
app = Flask(__name__)
```
This imports the Flask library and creates a new Flask application. The `__name__` variable is used to determine the path of the application. The path is the location of the application on your computer and is used to determine where to look for files such as html files. In this case we are telling Flask to look in the same directory as the `main.py` file.

```python
@app.route("/")
def hello():
   return "Hello World!"

@app.route("/about")
def about():
   return "This is a basic Flask website"
```
This is a decorator that is used to tell Flask what URL should trigger the function. In this case we are telling Flask that when the user goes to the root of the website (e.g. `https://example.com/`) it should run the `hello()` function. The `hello()` function returns the string `"Hello World!"` which is then displayed to the user. The `about()` function is similar but is triggered when the user visits the `/about` page.

```python
if __name__ == "__main__":
   app.run(debug=True)
```
This is the last line of the program and is used to start the Flask application. The `debug=True` argument is used to tell Flask to restart the application when a file is changed. This is useful for development but should be removed when the application is deployed. This is needed to make sure the application only runs when the file is run directly and not when it is imported by another file which could cause issues.



If you run your program `python main.py` you should see something like this:
```bash
 * Serving Flask app 'main'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 994-410-986
```

If you visit [`http://127.0.0.1:5000`](http://127.0.0.1:5000) you should be able to see you webpage.

## Expanding on basic Flask

### Multiple Routes
With Flask you can have multiple routes in your application and each route will do something different. For example, we can add a new route that will display a different message when the user visits it. We can do this by adding the following code to our `main.py` file:

```python
import random
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
   return "Hello World!"

@app.route("/about")
def about():
   return "This is a basic Flask website"

@app.route("/fact")
def fact():
   facts = ["The first computer bug was an actual bug", "The first computer virus was created in 1983", "The first computer virus was created in 1983"]

   return random.choice(facts)

if __name__ == "__main__":
   app.run(debug=True)
```
This can now be accessed at [`http://127.0.0.1:5000/fact`](http://127.0.0.1:5000/fact). You can add as many routes as you want to your application and flask will use the string in the decorator to determine which function to run.

#### Wildcards
As more complex webpages are added to your application you will need to be able to access different parts of the URL. For example, you might want to have a page that displays a specific user's profile. To do this you can use wildcards in your URL. For example, if you wanted to display a user's profile you could do something like this:

```python
@app.route("/user/<username>")
def username(username):
   return f"Hello {username}"
```

This would allow you to change the information you display based on the URL which is especially important once you add a database to your application.

### Jinja Templates
This section assumes you have basic knowledge of HTML and CSS. If you don't know what these are you can learn more about them [here](https://www.w3schools.com/html/).

[Jinja](https://jinja.palletsprojects.com/en/3.1.x/) is a templating language that is used to create HTML pages. It can be combined with Flask to create dynamic webpages. To use Jinja you need to create a folder called `templates` and put all your HTML files in there. You can then use the `render_template()` function to render your HTML files. For example, if you had a file called `index.html` you could render it like this and have it automatically fill in some details:

Your folder structure should look like this:
```
.
├── main.py
└── templates
    └── index.html
```

main.py
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello():
   return render_template("index.html", name="John Doe")
```

index.html
```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <h1>Hello {{ name }}!</h1>
   </body>
</html>
```

With Jinja it has a special syntax that uses `{{   }}` to insert variables into your HTML. In this case we are inserting the `name` variable into the HTML. This is useful for displaying information from a database or other sources. This can be seen from the HTML of the page which will look like this:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <h1>Hello John Doe!</h1>
   </body>
</html>
```

#### Splitting files and using structure
Jinja also allows you to split your HTML files into multiple files. This is useful for when you have a lot of HTML code and want to keep it organised. To do this you can use the `include` function. This allows you to generate a base template that can be used for all your pages. For example, you could have a base template that contains the header and footer of your website and then include it in all your other pages. This would allow you to change the header and footer of your website in one place and have it update everywhere.

To do this you can create a file called `base.html` and put it in your `templates` folder. This will be the base template that all your other pages will use. You can then use the `include` function to include it in your other pages. For example, if you had a page called `index.html` you could do something like this:

base.html
```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <h1>My Website</h1>
      {% block content %}
      {% endblock %}
   </body>
</html>
```

index.html
```html
{% extends "base.html" %}
{% block content %}
   <h1>Hello {{ name }}!</h1>
{% endblock %}
```

This will render the `base.html` file and then insert the `index.html` file into the `content` block. This allows you to have a base template that can be used for all your pages and then add extra content to each page. The final HTML will be:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <h1>My Website</h1>
      <h1>Hello John Doe!</h1>
   </body>
</html>
```

You can go even further and split your HTML into multiple files. For example, you could have a file called `header.html` and `footer.html` and then include them in your `base.html` file. This allows you to keep everything organised and make it easier to change things in the future.

base.html
```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <h1>My Website</h1>
      {% include "header.html" %}
      {% block content %}
      {% endblock %}
      {% include "footer.html" %}
   </body>
</html>
```

header.html
```html
<nav>
   <h1>This is the header</h1>
   <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
   </ul>
</nav>
```

footer.html
```html
<footer>
   <h1>This is the footer</h1>
</footer>
```

You can then use this in your page `index.html` like this:

index.html
```html
{% extends "base.html" %}
{% block content %}
   <p>Hello {{ name }}!</p>
{% endblock %}
```

This will render the `base.html` file and then insert the `index.html` file into the `content` block. This allows you to have a base template that can be used for all your pages and then add extra content to each page. The final HTML will be:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <h1>My Website</h1>
      <nav>
         <h1>This is the header</h1>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
         </ul>
      </nav>
      <p>Hello John Doe!</p>
      <footer>
         <h1>This is the footer</h1>
      </footer>
   </body>
</html>
```

#### Fancy Jinja loops
Jinja has support for more expressive features such as loops. This allows you to loop through a list of items and display them in your HTML. For example, you could have a list of names and then loop through them and display them in your HTML. This is done using the `for` loop. For example, if you had a list of names called `names` you could do something like this:

```html
{% for name in names %}
   <p>Hello {{ name }}!</p>
{% endfor %}
```

```python
names = ["John", "Jane", "Joe"]

@app.route("/")
def hello():
   return render_template("index.html", names=names)
```

This will loop through the list of names and display them in your HTML. This is useful for displaying information from a database or other sources. This can be seen from the HTML of the page which will look like this:

```html
<p>Hello John!</p>
<p>Hello Jane!</p>
<p>Hello Joe!</p>
```

### Other Jinja features
As a template engine, Jinja has many other features that can be used to make your life easier. These can be found in the [Jinja documentation](https://jinja.palletsprojects.com/en/3.0.x/templates/).


## Databases
Databases are a very important part of any web application. They allow you to store information that can be accessed by your application. This is useful for storing information such as user accounts, blog posts, and other information. There are many different types of databases but we will be using [SQLite](https://www.sqlite.org/index.html). SQLite is a lightweight database that is easy to use and doesn't require a server to run. This makes it a good choice for small applications. An understanding of SQL is expected for this section and you can find a tutorial [here](https://www.w3schools.com/sql/).

### sqlite3
To use SQLite in Python you can use the builtin `sqlite3` module. This module allows you to create a database and then run SQL queries on it. An example of how to use this module is shown below:

```python
import sqlite3

conn = sqlite3.connect("users.db")
c = conn.cursor()

c.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)")
c.execute("INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com')")

conn.commit()

c.execute("SELECT * FROM users")
users = c.fetchall()

for user in users:
   print(user)
```

To create a database you can use the `connect` function. This will create a new database file if it doesn't exist or open an existing one. For example, if you wanted to create a database called `users.db` you could do something like this:

```python
conn = sqlite3.connect("users.db")
```

This will create a new database file called `users.db` in the current directory. You can then use the `cursor` function to create a cursor object. This object allows you to run SQL queries on the database. For example, you could do something like this:

```python
c = conn.cursor()
```

To run a SQL query you can use the `execute` function. This function takes a string containing the SQL query and then executes it. For example, you could create a table called `users` like this:

```python
c.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)")
```

This will create a table called `users` with three columns: `id`, `name`, and `email`. The `id` column is the primary key and will be automatically incremented for each new row. The `name` and `email` columns are both text columns. You can then use the `commit` function to save the changes to the database. For example, you could do something like this:

```python
conn.commit()
```

To insert a new row into the database you can use the `execute` function again. This time you will need to pass in the values that you want to insert. For example, you could insert a new user like this:

```python
c.execute("INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com')")
```

This will insert a new row into the `users` table with the name `John Doe` and email `john.doe@example.com` and then commit the changes to the database. You can then use the `fetchall` function to get all the rows from the database. For example, you could do something like this:

```python
c.execute("SELECT * FROM users")
users = c.fetchall()
```

This will get all the rows from the `users` table and then store them in the `users` variable. You can then loop through the rows and display them in your HTML. For example, you could do something like this:

```python
for user in users:
   print(user)
```

This will print out the rows in the `users` table. This will look something like this:

```python
(1, 'John Doe', 'john.doe@example.com')
```

To close the connection to the database you can use the `close` function. For example, you could do something like this:

```python
conn.close()
```

### Combining with Flask
With our database setup we will need to combine it with our Flask application. This will allow us to access the database from our routes. To do this we will need to create a new file called `database.py`. This file will contain all the code for interacting with the database. This will allow us to keep our code clean and easy to read. An example of how to do this is shown below (taken from the flask documentation [here](https://flask.palletsprojects.com/en/2.0.x/patterns/sqlite3/)):

```python
import sqlite3
from flask import g, Flask

app = Flask(__name__)

def get_db():
   db = getattr(g, "_database", None)
   if db is None:
       db = g._database = sqlite3.connect("users.db")
   return db

@app.teardown_appcontext
def close_connection(exception):
   db = getattr(g, "_database", None)
   if db is not None:
       db.close()


@app.route("/")
def index():
   db = get_db()
   c = db.cursor()
   c.execute("SELECT * FROM users")
   users = c.fetchall()
   return users
```

There is a lot of things going on here to get this database connection so let break them down below.

```python
def get_db():
   db = getattr(g, "_database", None)
   if db is None:
       db = g._database = sqlite3.connect("users.db")
   return db
```
This function first checks if the database already exists on the requests using `getattr(g, "_database", None)`. If the database doesn't exist it adds it to the `g` object using `g._database = sqlite3.connect("users.db")`. The `g` object is a special object in Flask that is unique for each request. This means that we can store data on the `g` object and then access it later in our application.

```python
@app.teardown_appcontext
def close_connection(exception):
   db = getattr(g, "_database", None)
   if db is not None:
       db.close()
```

The next thing we need to do is close the connection to the database when the request is finished. This is done using the `teardown_appcontext` decorator. This decorator allows us to specify a function that is called after the request is finished. This function will then close the connection to the database. If we didn't do this we would have a lot of open connections to the database which would eventually cause the database to crash.

```python
@app.route("/")
def index():
   db = get_db()
   c = db.cursor()
   c.execute("SELECT * FROM users")
   users = c.fetchall()
   return users
```

Finally, we need to use the `get_db` function to get the database connection in our route. This will allow us to access the database from our route. An example of this is shown above. We can then use our database connection to get the users from the database and return them in our route.

## Further Resources
A copy of all the code used as a working Flask application can be found [here](https://github.com/Tuhura-Tech/ncea-lvl2-web-flask-example). Below is a set of useful resources and links to help you learn more about Flask and how to use it.

- [Flask Documentation](https://flask.palletsprojects.com/en/2.2.x/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [sqlite3 Documentation](https://docs.python.org/3/library/sqlite3.html)
- [Jinja Documentation](https://jinja.palletsprojects.com/en/3.0.x/templates/)
- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)
