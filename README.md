## Musical MTA

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
- Style the frontend, making it polished and professional.  Goals for the day:

### Bonus features

- [ ] Add options for different instruments
- [ ] Allow user to control train speed
