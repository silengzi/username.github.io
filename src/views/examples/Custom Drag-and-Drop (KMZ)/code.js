const title = 'Custom Drag-and-Drop (KMZ)'

const html_str = `
  <div id="map" class="map"></div>
  <br />
  <div>
    <a id="download" download></a>
    <button id="download-kmz">Download sample</button>
  </div>
  <br />
  <div id="info">&nbsp;</div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.6.1/jszip.min.js"></script>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  #info {
    width: 100%;
    height: 24rem;
    overflow: scroll;
    display: flex;
    align-items: baseline;
    border: 1px solid black;
    justify-content: flex-start;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {
    DragAndDrop,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  // Create functions to extract KML and icons from KMZ array buffer,
  // which must be done synchronously.

  const zip = new JSZip();

  function getKMLData(buffer) {
    let kmlData;
    zip.load(buffer);
    const kmlFile = zip.file(/\.kml$/i)[0];
    if (kmlFile) {
      kmlData = kmlFile.asText();
    }
    return kmlData;
  }

  function getKMLImage(href) {
    const index = window.location.href.lastIndexOf('/');
    if (index !== -1) {
      const kmlFile = zip.file(href.slice(index + 1));
      if (kmlFile) {
        return URL.createObjectURL(new Blob([kmlFile.asArrayBuffer()]));
      }
    }
    return href;
  }

  // Define a KMZ format class by subclassing ol/format/KML

  class KMZ extends KML {
    constructor(opt_options) {
      const options = opt_options || {};
      options.iconUrlFunction = getKMLImage;
      super(options);
    }

    getType() {
      return 'arraybuffer';
    }

    readFeature(source, options) {
      const kmlData = getKMLData(source);
      return super.readFeature(kmlData, options);
    }

    readFeatures(source, options) {
      const kmlData = getKMLData(source);
      return super.readFeatures(kmlData, options);
    }
  }

  // Set up map with Drag and Drop interaction

  const dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [KMZ, GPX, GeoJSON, IGC, KML, TopoJSON],
  });

  const map = new Map({
    interactions: defaultInteractions().extend([dragAndDropInteraction]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  dragAndDropInteraction.on('addfeatures', function (event) {
    const vectorSource = new VectorSource({
      features: event.features,
    });
    map.addLayer(
      new VectorLayer({
        source: vectorSource,
      })
    );
    map.getView().fit(vectorSource.getExtent());
  });

  const displayFeatureInfo = function (pixel) {
    const features = [];
    map.forEachFeatureAtPixel(pixel, function (feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      const info = [];
      let i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        const description =
          features[i].get('description') ||
          features[i].get('name') ||
          features[i].get('_name') ||
          features[i].get('layer');
        if (description) {
          info.push(description);
        }
      }
      document.getElementById('info').innerHTML = info.join('<br/>') || '&nbsp';
    } else {
      document.getElementById('info').innerHTML = '&nbsp;';
    }
  };

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel);
  });

  // Sample data download

  const link = document.getElementById('download');

  function download(fullpath, filename) {
    fetch(fullpath)
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      });
  }

  document.getElementById('download-kmz').addEventListener('click', function () {
    download('data/kmz/iceland.kmz', 'iceland.kmz');
  });
`

const package_str = `
  {
    "name": "drag-and-drop-custom-kmz",
    "dependencies": {
      "ol": "8.2.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`
export {
  title, 
  html_str,
  css_str,
  js_str,
  package_str
}