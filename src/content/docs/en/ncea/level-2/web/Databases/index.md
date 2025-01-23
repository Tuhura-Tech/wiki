---
title: Databases
description: Overview of Level 2 Resources
sidebar:
    order: 4
---

In this section, we'll be adding an SQL database to the blog site created previously, if you haven't done that, you can find the instructions here. (link)


### Setting up

The first thing you'll want to do is install SQL model, after making sure your Virtual Env is activated

```sh
uv add sqlmodel
```

next we'll want to add imports to the top of **main.py** 

```python
from typing import Annotated
from contextlib import asynccontextmanager
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

Though you should keep your current fake databse for testing purposes. 

We then want to create an engine. Think of this as the intimediary between our database and our functions.

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

We *then* want to create a function that creates a **Session** when we want to request the database. A session stores the changes we want to make to the database, and used the engine to communicate them.

```python
def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]
```

Finally, we actually call the function to create the table when we start our FastAPI app:

```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
```

Our fastAPI app now launches with a defined SQLModel database! However it's completely empty, and there's not really any way to interact with it.\


### Interacting with our database