# Play MTA

### Background

In 2011 Alexander Chen, creative director at Google Creative Lab, asked the question: what if we could make music from a subway map? Chen took a simplified version of the NYC subway map, animated the trains according to real train schedules and then added music. Each time a train crosses the path of another they pluck the straight portion of the path the train is on as if it were a cello string. See the live site.
http://www.mta.me/

### Functionality & MVP  

My version of musical MTA will feature

- [ ] An animated subway map with moving trains that trace subway paths
- [ ] A clock in the corner showing train departures and simulated time.
- [ ] Sound played by the intersection of the trains

In addition, this project will include:

- [ ] A modal pointing to Alexander Chen's project
- [ ] Links to my github and linkedin
- [ ] A production README

### Wireframes

This app will consist of a single screen filled with a subway map with a clock in the corner, and nav links to the Github, my LinkedIn, and the About modal.

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for subway logic.
- `Canvas` for subway path rendering,
- `Webpack` to bundle js files.

In addition to the entry file, there will be four scripts involved in this project:

`train.js`: this script will handle the logic for a trains velocity and when it crosses the path of another train.

`map.js`: this script will handle the logic for when a train should turn and read data in from a train schedule to dictate when a train should start.

`render.js`: this will be responsible for drawing the trains on the map with canvas.

`pitch.js`: this will be responsible for determining which pitch to play on intersection based on the
length of the straight path of the train.

### Implementation Timeline

**Day 1**:

- Setup all necessary Node modules, including getting webpack up. Write a basic entry file and the bare bones of all 4 scripts outlined above.
- Gather sounds from [free sounds](https://freesound.org/people/tarane468/sounds/371280/)
- Review the basics of `Canvas`.

**Day 2**:

- Complete the `train.js` script
- Complete the `map.js` script
- Use canvas to get trains moving

**Day 3**:

- Add sound from free sounds
- Do some basic math to determine string pitch
- Implement the `pitch.js` script

**Day 4**:
- Add clock with subway departures
- Add simple pluck animation
- Style the frontend, making it polished and professional.

### Bonus features

- [ ] Add options for different instruments
- [ ] Allow user to control train speed


## Notes

https://codepen.io/rachsmith/post/animation-tip-lerp

graphics coords

0,0      10,0


0,10     10,10


need 17 sounds for 17 lines

investigate this data feed?? different cleaning methods ??
https://data.cityofnewyork.us/Transportation/Subway-Stations/arq3-7z49/data


You could use this: How to make clickable points in html5 canvas?

and while the mouse is in that area, you can set: $('#canvasID').css('cursor','pointer') and $('#canvasID').css('cursor','auto') when it's not over it.

TODO TRAINS delete themselves, should they also add themselves??

TODO PATH segment stores train origin and destination, shouldn't this be the other way around

## Sounds
pentatonic

c d e g a
c d e g a
c d e g a
c d

### ideas
play percussive sound at every station ?
--> different sound for each line ?? cymbal, cowbell, clap, kickdrum?
http://nycpulse.herokuapp.com/api


resize screen w/ #clientHeight, also see custom resize function
https://webglfundamentals.org/webgl/lessons/webgl-anti-patterns.html

# TODO
- [ ] hover train cursor pointer
- [ ] run trains in both directions
- [ ] add map
- [ ] clean up subway data to run actual lines
- [ ] add express and local trains
- [ ] sync to live schedule?
- [ ] feed in accurate schedule?
- [ ] scale canvas to client screen
- [ ] style

# BUGS
- [ ] backward and forward train colliding probs
- [ ] fast play and move when come back to page
- [ ] fix background map image ?? needed?
- [ ] conditional check on keypress


# Backwards train
## CURRENTLY
### TO START TRAIN

* 1) MAP
  * a) Map constructor calls Map#setupMap() which creates path objects for each set of subway line vertices
  * b) Map calls Map#startPaths() in constructor which calls Path#startPath() for each path

* 2) Path
  * a) Path#startPath()
  * b) which calls Path#addTrain() instantiates new train
  * c) Pushes new train to map's trains array
  * d) Calls Segment#receiveTrain() on its first segment

* 3) Segment
  * a) Segment#receiveTrain(train) sets train ivar to train argument
  * b) segment sets itself to be drawn (this.shouldBeDrawn = true)
  * c) segment sets its terminus to the position of the train

* 4) Train
  * a) train moves every time delta
  * b) updates the position of its segment by calling this.currSegment.trainAdvanced();
  * c) currentSegment sets its position to the updated position of the train

### TO END TRAIN

* 1)  Train
  * a) in Train#move() train checks if there is a nextSegment
  * b) if not it sets this.isMoving to false and returns null

* 2)  PathSegment
  * a) in PathSegment#releaseTrain segment checks if its parent path has any more segments
  * b) if not segment calls Path#restartPath();

* 3) Path
  * a) in Path#restartPath() path sets each of its segments to hidden
  * b) path calls Path#addTrain
---

## TO IMPLEMENT BI DIRECTIONAL TRAINS

### TO START TRAIN

* 1) Map
  * a) Map constructor calls Map#setupMap() which creates path objects for each set of subway line vertices
  * b) Map calls Map#startPaths() in constructor which calls Path#startPath() for each path

* 2) Path
  * a) Path#startPath()
  * **b) which calls Path#addTrain(DIR) (-1 or +1) instantiates new train W/ DIR**
  * c) Pushes new train to map's trains array
  * **d) runs conditional w/ direction, if + origin Seg is first, else last**
  * e) Calls Segment#receiveTrain(train) on its origin segment

* 3) PathSegment
  * a) Segment#receiveTrain(train) sets train ivar to train argument
  * b) segment sets itself to be drawn (this.shouldBeDrawn = true)
  * **c) segment needs to set train origin depending on DIR**
  * d) segment sets its terminus to the position of the train

* 4) Train
  * a) train moves every time delta
  * b) updates the position of its segment by calling this.currSegment.trainAdvanced();
  * c) currentSegment sets its position to the updated position of the train

### TO END TRAIN

* 1) Train
  * **a) to determine next segment need conditional based on DIR**
  * b) in Train#move() train checks if there is a nextSegment
  * c) if not it sets this.isMoving to false and returns null

* 2) PathSegment
  * a) in PathSegment#releaseTrain segment checks if its parent path has any more segments
  * b) if not segment calls Path#restartPath();

* 3) Path
  * a) in Path#restartPath() path sets each of its segments to hidden
  * b) path calls Path#addTrain


# Production ReadMe notes
used data cleaning script to pull lat lng and stop id from mta data
`line.match(/,,(?<lat>\d{2}.\d*),(?<lng>.*),,,\d,(?<stn_id>.{3})/)`

`101,,Van Cortlandt Park - 242 St,,40.889248,-73.898583,,,1,
101N,,Van Cortlandt Park - 242 St,,40.889248,-73.898583,,,0,101
101S,,Van Cortlandt Park - 242 St,,40.889248,-73.898583,,,0,101
103,,238 St,,40.884667,-73.90087,,,1,
103N,,238 St,,40.884667,-73.90087,,,0,103`

wrote to json file
