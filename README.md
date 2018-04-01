# Play MTA

## Background

In 2011 Alexander Chen, creative director at Google Creative Lab, asked the question: what if we could make music out of a subway map? Chen took a simplified version of the NYC subway map and animated the trains according to real train schedules. Each time a train crosses the path of another it plucks the other train line as if it were a cello string. See the live site.
http://www.mta.me/

Play MTA runs with the idea of the New York Subway map as music. Using Vanilla JavaScript, the Web Audio API, and the Canvas API, Play MTA allows users to play the subway map like an instrument. Users can dispatch trains all at once, or by line, can zoom and pan, and can select, clear and mute trains. The trains run at accurate speeds relative to one another. When they arrive at stations, trains play notes that are determined by the subway line.

## Object Oriented Design

## Interactive Controls

## Data

Play MTA uses publicly available data pulled from a plaintext file from the MTA and cleaned using a ruby regular expression script to write JSON to a file. See below for a snippet of the code and a sample of the text file. Subway stop coordinates where then projected onto the canvas using a web mercator projection library.

````
File.readlines('stops.txt').each_with_index do |line, i|
  m = line.match(/,,(?<stop_nm>.*),,(?<lat>\d{2}.\d*),(?<lng>.*),,,\d,(?<stn_id>.{3})/)
````

`Stops.txt`

`101,,Van Cortlandt Park - 242 St,,40.889248,-73.898583,,,1,
103,,238 St,,40.884667,-73.90087,,,1,
103N,,238 St,,40.884667,-73.90087,,,0,103`

## Immersive UI

Play MTA features intuitive UI that allows scroll zooming centered on the cursor and trackpad panning on the canvas element. This was accomplished without libraries by using vector math inside JavaScript event handler callbacks. The canvas scales to fit the screen automatically and uses responsive design to maintain the correct aspect ratio across different devices.

## Browser Support

Play MTA uses different collision detection depending on browsers. For browsers that don't support the `Canvas2DRenderingContext#isPointInStroke` method play MTA uses math to determine whether a user has clicked a path.
