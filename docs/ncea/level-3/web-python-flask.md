# Flask Database Website

## What is Flask? What are we doing?

Flask is a web framework that can be used in Python to build websites or other web applications. It is a very popular framework and is used by many large companies such as Pinterest, LinkedIn and Netflix. Flask is very easy to use and is a great way to learn how to build websites. It is used as a library in Python which means its a bundle of code you can use and customise in your own code.

This project builds on the concepts and skills from Level 2 and the related [flask project](./../level-2/web-python-flask.md).

## Expectations/Requirements

This set of resources expects an understanding of Python programming and experience working with flask and databases. It is recommended that you have completed the [level 2 flask project](./../level-2/web-python-flask.md) before starting this project.

## Expanding our app


### Adding forms

In order to send data back to our server or update existing data we need to use forms. Forms are a way of sending data back to the server and can be used to update the database or for advanced queries. Forms are built into the HTML standard and are easy to use in flask through the use of `flask_wtf` which simplifies the process of creating forms.

#### Flask-WTF

```py
from flask_wtf import FlaskForm

class MyForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    submit = SubmitField('Submit')
    
```

### Adding Authentication

### Better databases with SQLAlchemy
