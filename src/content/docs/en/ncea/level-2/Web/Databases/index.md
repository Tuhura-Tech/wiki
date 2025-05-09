---
title: Databases
description: Overview of Level 2 Resources
sidebar:
    order: 4
---
**todo: link**
In this section, we'll be adding an SQL database to the blog site created previously, if you haven't done that, take a look at the **Web Development** section

### Setting up

The first thing you'll want to do is install SQL model, after making sure your Virtual Env is activated

```sh
uv pip install sqlmodel
```

next we'll want to add imports to the top of **main.py** 

```python
from typing import Annotated
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request, status
from fastapi.responses import HTMLResponse, RedirectResponse

from sqlmodel import Field, Session, SQLModel, create_engine, select

```


### Database structure

Next, we'll want to define the structure of our database. If we consider the types of the items we have in our 'fake' database, we have:

- title (String)
- content (String)
- Date (String)

We'll also want to have a unique ID for each post, which will be an int.

When we define this in our script, i'll look like this:

```python
class Post(SQLModel, table = True):
    id: int | None = Field(default = None, primary_key= True)
    title: str = Field(index= True)
    content: str
    date_posted: str

```

For now we should keep our current fake 'database' for testing purposes. 

We then want to create an engine. Think of this as the intermediary between our database and our functions.

```python
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)
```

Then we can create a function that uses the engine and creates a table for the model we just defined.

```python
def create_table():
    SQLModel.metadata.create_all(engine)
```

Finally, we actually call the function to create the table when we start our FastAPI app:

```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
```

We'll also want to modify 

```python 
app = FastAPI()
```

to be 

```python
app = FastAPI(lifespan= lifespan)
```

make sure the lifespan() function we just created is above the app creation.

Our fastAPI app now launches with a defined SQLModel database! However it's completely empty, and there's not really any way to interact with it.


### Interacting with our database

:::Note[SQL Errors]
If at any point in the following steps, you're having errors like "contains no coloumn with *name*" even though you've definitely named the coloumn that when defining your database, try deleting the Database.SQL file in your project files. Then run the dev server again and the database will be automatically created again with the updated names.

Deleting the database file is totally fine, as a new one will be created automatically if it doesn't exist. So we should be doing this every time we make changes to the structure of our Database.
:::

To interact with our Database, we'll need to set up some functions that allow us to do things like add a post, get all posts, or get an individual post.

Let's first create a function that adds a post to the database.

It'll take, as an input, data to fill all the fields we defined earlier. (except for ID as this is generated automatically.) 

We'll then create a new post object, create a session, add it to our database, and then refresh it.

```python
@app.post("/posts/")
def add_post(post_title: str, post_content: str, post_date: str) -> Post:
    post = Post(title=post_title, content = post_content, date_posted = post_date)
    with Session(engine) as session:
        session.add(post)
        session.commit()
        session.refresh(post)

    return post
```

Let's also create a function that gets all the posts (This is something we'll want to display the posts on our blog)

This function will get all of the posts starting from an index of 0, up to a maximum index of 100. If we wanted to limit the posts per page, this is how we would do that. We'd set the starting index higher, and have a lower limit, based on what page we're on.

```python
@app.get("/posts/")
def get_posts() -> list[Post]:
    with Session(engine) as session:
        posts = session.exec(select(Post).offset(0).limit(100)).all()

    return posts
```

### The Script so far

Here's is how the script is looking altogether at this point:

```python


from typing import Annotated
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request, status
from fastapi.responses import HTMLResponse, RedirectResponse

from sqlmodel import Field, Session, SQLModel, create_engine, select




templates = Jinja2Templates(directory="templates")

class Post(SQLModel, table = True):
    id: int | None = Field(default = None, primary_key= True)
    title: str = Field(index= True)
    content: str
    date_posted: str
    
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


fakePosts = [{
    'title': 'First post on my blog',
    'content': 'Welcome to my blog! This is my first post!',
    'date_posted': '10/01/2025'
},{
    'title': 'Second post on my blog',
    'content': 'This is the second post im making on my new blog!',
    'date_posted': '12/01/2025'
},{
    'title': 'Third post on my blog',
    'content': 'This is the third post on my blog',
    'date_posted': '15/01/2025'
}]

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

app = FastAPI(lifespan= lifespan)

@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": get_posts()})



@app.post("/posts/")
def add_post(post_title: str, post_content: str, post_date: str) -> Post:
    post = Post(title=post_title, content = post_content, date_posted = post_date)

    with Session(engine) as session:
        session.add(post)
        session.commit()
        session.refresh(post)

    return post

@app.get("/posts/")
def get_posts() -> list[Post]:
    with Session(engine) as session:
        posts = session.exec(select(Post).offset(0).limit(100)).all()

    return posts



app.mount("/static", StaticFiles(directory="static"), name="static")


```

### Adding test posts and displaying them on our page

To fully switch over to using our fancy new SQL databse, rather than our fake python 'database' we'll need to create a test post, and pass our SQL database to our Jinja template.

Thankfully both of these are super easy!

To create a test post, we can add a line underneath

```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
```

and before

```python
yield
```

that's simply 

```python
add_post("test title", "test content", "test date")
```
or whatever you want it to say 

To test that your database has been populated with your test posts, when you launch the dev server, instead of clicking the **server started** link, instead click the **documentation at** link to open the autogenerated documentation. There you should see your **Get Posts** function.

Open that section, click **Try it out** and then **Execute** and you should see the raw data of your database. 

![Image displaying try it out button on documentation](/src/assets/ncea2web/tryitout.png)
![Image displaying execute button on documentation](/src/assets/ncea2web/execute.png)

Finally, to have your blog page display your created test posts, rather than the fake database, simply replace where the fake database is being passed to the Jinja templates.

This would mean simply changing

```python
@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": fakePosts})
```

to

```python
@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": get_posts()})
```

Thankfully we named the fields in our SQL Database the same as those in our fake database, so we don't need to change our Jinja template at all!

This also means we can delete our fakePosts database, as it's no longer used.

### Clearing posts

:::Note[Clearing posts]
This step is entirely optional, and should only be done if you want your database to be cleared each time your app is shut down. This is useful to stop test posts clogging your database, but shouldn't be used when you want your database to remain between running your app. While we're adding posts manually using our script, we'll want to clear it. But once we're adding posts from our website itself, we'll want the post databse to remain between runs.
:::

To clear your database without deleting the file itself, we can add the following to the **lifespan** function beneath yield:

```python
with Session(engine) as session:
        for p in get_posts():
            session.delete(p)
            session.commit()
```

making the function look like this: 

```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    add_post("test title", "test content", "test date")
    yield
    with Session(engine) as session:
        for p in get_posts():
            session.delete(p)
            session.commit()
```

The code before the **yield** is run as the app starts, and the code after the **yield** is run as it shuts down.


At this point, the code for your main.py should look like this:

```python

from typing import Annotated
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request, status
from fastapi.responses import HTMLResponse, RedirectResponse

from sqlmodel import Field, Session, SQLModel, create_engine, select



templates = Jinja2Templates(directory="templates")

class Post(SQLModel, table = True):
    id: int | None = Field(default = None, primary_key= True)
    title: str = Field(index= True)
    content: str
    date_posted: str
    
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
    


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    add_post("test title", "test content", "test date")
    yield
    with Session(engine) as session:
        for p in get_posts():
            session.delete(p)
            session.commit()

app = FastAPI(lifespan= lifespan)

@app.get("/", response_class=HTMLResponse)
async def load_blog(request: Request):
    return templates.TemplateResponse("blog.html", {"request": request, "posts": get_posts()})



@app.post("/posts/")
def add_post(post_title: str, post_content: str, post_date: str) -> Post:
    post = Post(title=post_title, content = post_content, date_posted = post_date)

    with Session(engine) as session:
        session.add(post)
        session.commit()
        session.refresh(post)

    return post

@app.get("/posts/")
def get_posts() -> list[Post]:
    with Session(engine) as session:
        posts = session.exec(select(Post).offset(0).limit(100)).all()

    return posts



app.mount("/static", StaticFiles(directory="static"), name="static")




```