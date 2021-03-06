# History of Rock Visualization by The Geologists

D3 Project by Alessando Cartegni, Karina Ionkina, Shannon Lau, and Helen Ye

## Running the Project

To run this project, you will need `python 2.7` and `Flask`.

1. Clone the repository

```
$ git clone https://github.com/yhelen-stuy/the-geologists.git ~/the-geologists
```

2. Install `Flask` (We recommend using a python virtual environment. We have provided instructions for this.)

Click [here](https://virtualenv.pypa.io/en/stable/installation/) for instructions to install `virtualenv`, and [here](https://virtualenv.pypa.io/en/stable/reference/#virtualenv-command) for instructions to create a virtual environment.

Activate your virtual environment with:

```
$ . <name of virtualenv>/bin/activate
```

Install `Flask`.
```
$ pip install flask
```

3. Launch

```
$ python ~/the-geologists/app.py
```
Navigate to `localhost:5000` in a browser and enjoy!

## Data

1. [This link](https://adammarxsmind.com/2015/03/29/almost-every-rock-poster-sticker-reference-and-list-in-school-of-rock/) is a page that lists all the genres and artists in the School of Rock blackboard, which displays a web of genres/artists, with artists listed under each. This displays the evolution and progress of rock music.
2. [This dataset](https://docs.google.com/spreadsheets/d/1mwATkBV2e_JT3FUEJtcGNU9QrYYMWvhFutpzk0dlP2E/edit?hl=en_US&hl=en_US#gid=0) contains the title, release date, and artist of 100 songs that are representative of rock, since the mid-1900s. We will be using this to create a timeline of the music of certain bands and what type of rock was prevalent during certain time periods.
3. [This website](svds.com/rockandroll/) gives information about the who has influenced an artist and who they influenced. This may be used to draw relationships between artists.

## Overall Visualization

The user will be presented with two main parts: the web of genres and a timeline of band activity. The genres will show the relationships between the influences of genres. The timeline will have a hoverable label that shows the artists that the hovered artist label has influenced.

The user can interact with the visualization in a few ways. In the web, genres can be selected and will display artists that represent that genre on the timeline to highlight relationships. Timeline peaks can be selected, which will highlight the corresponding artist in the web and any other peaks of the same artist on the timeline.

## The Purpose

This visualization will allow the user to explore the evolution of rock bands and songs, and examine relationships between artists that they may have never considered previously. This interface will prompt the user to consider the complexity of rock music and how it has shaped music today.

## D3 Features

Using enter, a node on the web will be generated for every dataset point on genres as well as on the timeline. The project may resemble [another d3 project](http://mbostock.github.io/d3/talk/20111116/force-collapsible.html). This visualization will resemble a web diagram similar to this (without the bounce and directed forces). Related nodes are connected (artists connected to a genre, artists influencing each other). Nodes will be static upon entering the page.

The timeline plugin we used was found [HERE](https://github.com/jiahuang/d3-timeline).

## Sketch

![sketch](/softdev.png)
