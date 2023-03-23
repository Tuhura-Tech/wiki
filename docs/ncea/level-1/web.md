# Flask Database Website
This is a set of resources that cover 3 internals and is implemented in Python. The covered internal are:
- Programming [AS91896]() (6 credits)
- Database [AS91892]() (4 credits)
- Media (Web) [AS91893]() (4 credits)


## Expectations/Requirements
This set of resources expects a basic understanding of Python programming.

## Software
There are 2 potential ways to do this course. The first uses your own device and runs everything locally, the alternative is to ue an online IDE such as GitHub CodeSpaces (recommended) or GitPod.io.

### General Requirements
- [GitHub](https://github.com) Account - this is used to store a history of your code and also make sure you don't lose it.

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
To setup your python project you should follow the guide [here]() and install these dependencies:
- flask (Web server)

You can also install these for more advanced projects:
- flask-sqlalchemy (used to interact with the Database)
- flask-wtf (used to handle HTML forms)


## Basic Flask
To start your flask journey we can create a basic program and save it to a python file (we recommend calling it `main.py`). A basic Flask program is below:

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
   return "Hello World!"

if __name__ == "__main__":
   app.run(debug=True)
```

### What does this all mean????
There is a lot going on here already and its only a basic program but while it might look confusing it doesn't do too much. We have a walkthrough of each line below:

```python
from flask import Flask
app = Flask(__name__)
```
This imports the Flask library and creates a new Flask application. The `__name__` variable is used to determine the path of the application. This is used to find templates and static files.

```python
@app.route("/")
def hello():
   return "Hello World!"
```
This is a decorator that is used to tell Flask what URL should trigger the function. In this case we are telling Flask that when the user goes to the root of the website (e.g. `https://example.com/`) it should run the `hello()` function. The `hello()` function returns the string `"Hello World!"` which is then displayed to the user.

```python
if __name__ == "__main__":
   app.run(debug=True)
```
This is the last line of the program and is used to start the Flask application. The `debug=True` argument is used to tell Flask to restart the application when a file is changed. This is useful for development but should be removed when the application is deployed.



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
