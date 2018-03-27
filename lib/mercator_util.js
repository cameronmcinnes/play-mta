import TRAIN_DATA from '../sub_data_merc.json';
import WebMercatorViewport from 'viewport-mercator-project';

const mapData = Object.values(TRAIN_DATA)

const viewport = new WebMercatorViewport({
  width: 800,
  height: 800,
  longitude: -73.971248,
  latitude: 40.794136,
  zoom: 11
});

mapData.forEach(linObj => {
  linObj['vertices'].forEach(vert => vert[1] = viewport.project(vert[1]))
})

export default mapData;
