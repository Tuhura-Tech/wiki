---
title: Python Turtle
description: This is how to use the Turtle extension in python.
sidebar:
  order: 5

---

## setting up turtle for use

Turtle is a visual extension for python, but its still python code, utilising the same python rules and syntax. Although the principles behind turtle graphics can be extended to include three-dimensional space this page will be focusing on two-dimensional graphics.
Turtle is a pre installed python library  however a pip install might be needed.

when first starting a new file, the turtle library must be called. There are two options for calling the turtle library. 

``` python
    from turtle import *
# or 
    from turtle import Turtle
 ```

> Note: that naming the file turtle.py will confuse the import command and cause it and the turtle library to fail.


## basic movement 

when moving your turtle avatar there are two directions your turtle will move, forwards and backwards. 

``` python
forward (100)
backward (100)
```

The above code would move your turtle by 100 pixels. whatever number is in the brackets will be the amount of pixels your turtle moves. 
To move left or right your turtle will rotate its angle on the spot by up to 360 degrees. With 360 being a full circle some basic math can be added to find the right degree for you.

``` python
left(360/6)
right(90)
```

The syntax for the left angle in the above code would make a six sided object, if forward and left was applied 6 times, or just once to change the angle at 60 degrees. The syntax for the right angle will change the direction of the turtle avatar by 90 degrees or a perfect square angled right turn.

to move a turtle to a set location the syntax go to can be used with the X and Y locations in the brackets serrated by a comma, first X then Y.

``` python
goto(180, -82) 
```

(0,0) is the very center of the screen X is left and right, Y is up and down.
The above code is positive on the x axis which is to the right on screen,
negative on the Y axis which is down on the screen.

> note: turtle is very visual, as you try new movement run the program and see what happening.
    If using goto() syntax a line may still be drawn between last location and the goto location, penup() may be advised.

## turtle attributes

By naming your turtle you can make multiple instances, giving each unique attributes. When coming up with a name I suggest using short or one letter name as these will be repeated a lot. Remember when naming your turtle that capitals matter.

``` python
t = Turtle()
u = Turtle()
r = Turtle()
l = Turtle()
e = Turtle()
```

Each turtle is its own pen and each can be given their own version of a state/ appearance/ attribute. 
My favorite functions: ``` pendown(), penup(), width(), color(), fillcolor(), speed(), shape(). ```
the pen will draw a line behind the turtle as it moves, bring the pen up removes this line. By default the pen is down. 
Width changes the thickness of the line the pen draws this is in pixels and does not change the size of the turtle drawing the line. for this use ``` turtlesize() ```. color will change the colour of both the line and turtle. fillcolor will change the colour inside the lines but must be used with ``` begin_fill() and end_fill() ```. speed ranges from the slowest speed of 1 to the fast speed of 0, which confusingly enough is a stand in for 10, with 9 being the next highest speed. shape refers to the look of your turtle. The shapes in turtle include circle, square, triangle, arrow and turtle.

``` python
t.penup()
t.width(30)
r.width(10)
l.shape("circle")
e.speed(0)
u.speed(9)
u.color("green") 
```

> note: once your turtle has been named its name must be used to register code to that turtle. Without spaces the turtles name is followed by a fullstop and then the syntax for your required code. Instances such as the turtle and screen require capitals like pronouns in english.


## window setup / control

setting up a window can help you understand the parameters. For example knowing the edges of your screen means knowing how far you can add assets before they are lost beyond the edges of your screen.
window set up also allows for adding background colours and clearing the screen.
when calling the screen you create an instance, only one screen instance can be active at a time. 
This instance is called Screen, the function comes after a fullstop. setup(), resetscreen(), bgcolor() are what I have found to be the most used screen functions. Setup dictates screen width, height, starting x position, starting y position in that order. resetting the screen clears all drawing and changes made to the turtle i.e. color, shape, speed. reset dose not wipe the changes made to the screen just to the other instances.

```python
#setup(width, height, x, y)
Screen.setup(600,600,0,0)
#this can also be done without setting the starting x, y positions.
Screen.setup(600,600)
Screen.color("black")
```

## loops
loops work the same way in base python as in turtle. for loops can be particularly useful for graphic application. With loops its import to add a colon at the end of the function line, and an indent to the following lines, so the code registers what is part of the loop.

This loop will draw a square without having to type out forward and left syntax 4 times.
the words i and range are both words that can be changed not something thats recommend though, whatever you change out i or range, for will need to be changed out in other examples.

``` python
for i in range (4):
    forward (100)
    left(90)

# adding in extra detail such as a verbile number of sides
# this example would run the loop 7 times and divide 360 by 7 to find the right angle

num_sides = 7
for i in range(num_sides):
    t.forward(100)
    t.left(360/num_sides)

# for spiral shapes you can change out the forward value for i.
# this will make a square shaped spiral as it goes the value of forward increases by one more in the list, the list being i, its max value in this example is 40

for i in range (40):
    forward (i)
    left(90)
```
This loop will draw a square without having to type out forward and left syntax 4 times.
the words i and range are both words that can be changed not something thats recommend though, whatever you change out i or range for will need to be changed out in other examples.


## lists

lists in turtle are the same as in base python. 
Name the list and use square brackets, separate the different items out with commas and add quotation marks before and after each word. 
the list can then be called later in the code.

``` python
list = ["red", "orange", "yellow", "green", "blue", "purple"]

t = Turtle()

for i in range(6):
    t.color(list[i])
    t.forward(100)
    t.left(360/6)

#this above code works well with its range being 6 and the number of colors in the list equalling 6. however if the list is shorter then the loops value the loop will end with the end of the list. To fix this we add in i (from i in range) and % which takes whats left over in the length (len) of i (the loop) and repeats the list for the remainder of the length of i (the loop). 


t = Turtle()

for i in range(20):
    t.color(list[i % len(list)])
    t.forward(100)
    t.left(360/20)
```
In the example above the color of the turtle is being changed to the info on the list.
first t.color() is used to change the turtles colour. then the list name is added in. 


## colours
bgcolor, fillcolor, turtle color

## making life easer

turtles aren't the only thing you can "name", naming as I have called it, is just the syntax for assigning a value to a variable. To shorten a instance, class or functions name you can assign it a new name. For example the screen class can create an instance with a shorted name.

```python 
wn = Screen()
# changes 
screen.bgcolor("black")
# to
wn.bgcolor("black")
```


python can do math for you why work out calculations when you can leave the equation in the code.
work smarter not harder
``` python
# making a five sized shape
for i in range (5):
    forward (100)
    left(360/5)
```


For a good list of turtle syntax check out Turtle methods on the webpage at https://docs.python.org/3/library/turtle.html#turtle-methods