![Logo](https://svgshare.com/i/63u.svg)


## Background

In 2011 Alexander Chen, creative director at Google Creative Lab, asked the question: what if we could make music out of a subway map? Chen took a simplified version of the NYC subway map and animated the trains according to real train schedules. Each time a train crosses the path of another it plucks the other train line as if it were a cello string. See the live site.
http://www.mta.me/

Play MTA runs with the idea of the New York Subway map as music. Using Vanilla JavaScript, the Web Audio API, and the Canvas API, Play MTA allows users to play the subway map like an instrument. Users can dispatch trains all at once, or by line, can zoom and pan, and can select, clear and mute trains. The trains run at accurate speeds relative to one another. When they arrive at stations, trains play notes that are determined by the subway line.

## Interactive Controls

Play MTA features interactive controls that allow users to dispatch trains all at once:

![Dispatch  Demo](https://media.giphy.com/media/2fyq3SWH6wcBZRdOoU/giphy.gif
  )

Or line by line by pressing the corresponding key on the keyboard. A keypress with control held down dispatches the same train uptown.

![Bullet  Demo](https://media.giphy.com/media/6nZLzvqCx8PbtQjcZU/giphy.gif
  )

Users can also click on subway lines to isolate the sound to that particular line. Play MTA makes use of click and mouse move event handlers on the canvas to iterate through the relevant objects on the map and detect a click.

Play MTA uses different collision detection depending on browsers. For browsers that don't support the `Canvas2DRenderingContext#isPointInStroke` method play MTA uses math to determine whether a user has clicked a path.

![Select  Demo](https://media.giphy.com/media/3kvZSoi9ETU1ODys7K/giphy.gif
)

## Object Oriented Design

Play MTA was engineered using an object oriented approach. The `Map` object stores `Path` objects that are made up of `PathSegment` objects that keep track of `Train` objects' positions. Rendering logic is separated out into the `MapView` class.

Because of Play MTA's object oriented design, dispatching train is as simple as instantiating a `Train` object on a `Path` object. `Path` objects store references to their trains in two storage queues: `fwdTrainsQueue` and `bwdTrainsQueue`. The use of two queues instead of a simple array allows constant time O(1) deletion of trains when they reach the end of their paths, which is particularly important when there are hundreds of trains on the map.

```` JavaScript
const train = new Train(this, dir, initialTrainPos, originSegment);
storageQueue.unshift(train);
originSegment.shouldBeDrawn = true;
originSegment.receiveTrain(train);
````

## Immersive UI

Play MTA features intuitive UI that allows scroll zooming centered on the cursor and trackpad panning on the canvas element.

![Zoom  Demo](https://media.giphy.com/media/RL4LC20CxMTol8E9EI/giphy.gif
)

This was accomplished without libraries by using vector math inside JavaScript event handler callbacks. The view logic has been refactored out of the `Map` class and into a `MapView` class to uphold the single responsibility principle. The `scale` method of canvas scales from the origin so to engineer zoom centered on the cursor Play MTA translates the canvas to position the cursor at the origin, scales the canvas, and then translates the canvas back by the same amount.

To achieve seamless zoom and pan the `MapView` object, instantiated on startup, keeps track of the scale factor and the vector to translate the screen by between each animation frame.

The canvas scales to fit the screen automatically and uses responsive design to maintain the correct aspect ratio across different devices.


## Data

Play MTA uses publicly available data pulled from a plaintext file from the MTA and cleaned using a ruby regular expression script to write JSON to a file. The script shapes the data into a usable format and adds information like the corresponding color of the subway line. See below for a snippet of the code and a sample of the text file. Subway stop coordinates where then projected onto the canvas using a web mercator projection library.

````
File.readlines('stops.txt').each_with_index do |line, i|
  m = line.match(
    /,,(?<stop_nm>.*),,(?<lat>\d{2}.\d*),(?<lng>.*),,,\d,(?<stn_id>.{3})/
  )
````

`Stops.txt`

`101,,Van Cortlandt Park - 242 St,,40.889248,-73.898583,,,1,
103,,238 St,,40.884667,-73.90087,,,1,
103N,,238 St,,40.884667,-73.90087,,,0,103`


## Sounds!

Play MTA uses the Web Audio API to instantiate `Oscillator` objects and then wraps these objects in an `OscillatorSound` class to allow `PathSegment` objects to play these sounds when a train arrives at a station.

`oscillator_sound.js`

```` JavaScript
this.oscillator.frequency.setValueAtTime(freqValue, this.audioCtx.currentTime);
this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
this.gainNode.gain.linearRampToValueAtTime(
  1,
  this.audioCtx.currentTime + 0.01
);
````

`path_segment.js`

```` JavaScript
oscSound.play(this.frequency);
oscSound.stop();
````

## Future Directions

* Live trains using the MTA API
* increased control over the sounds of trains, minor scale
