import{V as b,F as y}from"./Vector-163f0152.js";import{M as C,K as I,V as x}from"./Layer-3211d6ef.js";import{c as V}from"./TileProperty-f0a52f17.js";import{_ as T,i as E,o as M,c as S,b as o,t as i,g as s,F as D,j as L,p as j,k as B}from"./index-8e73cb60.js";import{D as k,G as F,I as X,T as G}from"./TopoJSON-e4f2ca72.js";import{G as O}from"./GeoJSON-a3eacfc4.js";import{K as Y}from"./KML-c4ac6c3a.js";import{T as Z}from"./Tile-d932c51d.js";import{O as A}from"./OSM-39b8e613.js";import{V as P}from"./Vector-2de0a908.js";import{M as N}from"./MVT-18c483b0.js";import"./featureloader-4f961e27.js";import"./Style-22e788f3.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./Feature-5a984f38.js";import"./TextFeature-89415c76.js";import"./JSONFeature-2245ccdf.js";import"./GeometryCollection-03015b2a.js";import"./string-30bf5402.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./_commonjsHelpers-39b5b250.js";const J="Custom Drag-and-Drop (MVT preview)",K=`
  <div id="map" class="map"></div>
  <br />
  <div class="tileCoord">
    <a id="download" download></a>
    <span>Tile coordinate&nbsp;&nbsp;</span>
    <span>&nbsp;z: <input type="number" id="tileCoordZ" value="6" /></span>
    <span>&nbsp;x: <input type="number" id="tileCoordX" value="30" /></span>
    <span>&nbsp;y: <input type="number" id="tileCoordY" value="20" /></span>
    <span>&nbsp;&nbsp;</span>
    <button id="download-mvt">Download sample</button>
  </div>
  <br />
  <div id="info">&nbsp;</div>
`,z=`
  .map {
    width: 100%;
    height: 400px;
  }
  .tileCoord input {
    width: 60px;
  }
`,H=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {
    DragAndDrop,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {GPX, GeoJSON, IGC, KML, MVT, TopoJSON} from 'ol/format.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {createXYZ} from 'ol/tilegrid.js';

  // Define a custom MVT format as ol/format/MVT requires an extent

  const tileCoordZ = document.getElementById('tileCoordZ');
  const tileCoordX = document.getElementById('tileCoordX');
  const tileCoordY = document.getElementById('tileCoordY');

  class customMVT extends MVT {
    constructor() {
      super({featureClass: Feature});
    }
    readFeatures(source, options) {
      options.extent = createXYZ().getTileCoordExtent([
        parseInt(tileCoordZ.value),
        parseInt(tileCoordX.value),
        parseInt(tileCoordY.value),
      ]);
      return super.readFeatures(source, options);
    }
  }

  // Set up map with Drag and Drop interaction

  const dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [customMVT, GPX, GeoJSON, IGC, KML, TopoJSON],
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
          features[i].get('name') ||
          features[i].get('_name') ||
          features[i].get('layer');
        if (description) {
          info.push(description);
        }
      }
      document.getElementById('info').innerHTML = info.join(', ') || '&nbsp';
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

  document.getElementById('download-mvt').addEventListener('click', function () {
    const fullpath =
      'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/' +
      tileCoordZ.value +
      '/' +
      tileCoordY.value +
      '/' +
      tileCoordX.value +
      '.pbf';
    const filename =
      tileCoordZ.value + '-' + tileCoordX.value + '-' + tileCoordY.value + '.mvt';
    download(fullpath, filename);
  });
`,R=`
  {
    "name": "drag-and-drop-custom-mvt",
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
`;const m=d=>(j("data-v-31e88a09"),d=d(),B(),d),U={id:"title"},W=L('<div id="map" class="map" data-v-31e88a09></div><br data-v-31e88a09><div class="tileCoord" data-v-31e88a09><a id="download" download data-v-31e88a09></a><span data-v-31e88a09>Tile coordinate  </span><span data-v-31e88a09> z: <input type="number" id="tileCoordZ" value="6" data-v-31e88a09></span><span data-v-31e88a09> x: <input type="number" id="tileCoordX" value="30" data-v-31e88a09></span><span data-v-31e88a09> y: <input type="number" id="tileCoordY" value="20" data-v-31e88a09></span><span data-v-31e88a09>  </span><button id="download-mvt" data-v-31e88a09>Download sample</button></div><br data-v-31e88a09><div id="info" data-v-31e88a09> </div><p data-v-31e88a09>Example of using the drag-and-drop interaction with a custom format to preview MVT tiles. In addition to the formats used in the <code data-v-31e88a09>Drag-and-Drop</code> example individual MVT tiles can be previewed. There is no projection transform support, so this will only work with data in EPSG:4326 and EPSG:3857.</p><h5 class="source-heading" data-v-31e88a09>html</h5>',7),q={class:"language-html"},Q=m(()=>o("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},ee=m(()=>o("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},oe=m(()=>o("h5",{class:"source-heading"},"package.json",-1)),ae={class:"language-json"},ne={__name:"index",setup(d){return E(()=>{const l=document.getElementById("tileCoordZ"),c=document.getElementById("tileCoordX"),p=document.getElementById("tileCoordY");class w extends N{constructor(){super({featureClass:y})}readFeatures(e,a){return a.extent=V().getTileCoordExtent([parseInt(l.value),parseInt(c.value),parseInt(p.value)]),super.readFeatures(e,a)}}const f=new k({formatConstructors:[w,F,O,X,Y,G]}),n=new C({interactions:I().extend([f]),layers:[new Z({source:new A})],target:"map",view:new x({center:[0,0],zoom:2})});f.on("addfeatures",function(t){const e=new b({features:t.features});n.addLayer(new P({source:e})),n.getView().fit(e.getExtent())});const v=function(t){const e=[];if(n.forEachFeatureAtPixel(t,function(a){e.push(a)}),e.length>0){const a=[];let r,g;for(r=0,g=e.length;r<g;++r){const h=e[r].get("name")||e[r].get("_name")||e[r].get("layer");h&&a.push(h)}document.getElementById("info").innerHTML=a.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};n.on("pointermove",function(t){if(t.dragging)return;const e=n.getEventPixel(t.originalEvent);v(e)}),n.on("click",function(t){v(t.pixel)});const u=document.getElementById("download");function _(t,e){fetch(t).then(function(a){return a.blob()}).then(function(a){u.href=URL.createObjectURL(a),u.download=e,u.click()})}document.getElementById("download-mvt").addEventListener("click",function(){const t="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/"+l.value+"/"+p.value+"/"+c.value+".pbf",e=l.value+"-"+c.value+"-"+p.value+".mvt";_(t,e)}),Prism.highlightAll()}),(l,c)=>(M(),S(D,null,[o("h4",U,i(s(J)),1),W,o("pre",null,[o("code",q,i("  "+s(K).trim()),1)]),Q,o("pre",null,[o("code",$,i("  "+s(z).trim()),1)]),ee,o("pre",null,[o("code",te,i("  "+s(H).trim()),1)]),oe,o("pre",null,[o("code",ae,i("  "+s(R).trim()),1)])],64))}},Xe=T(ne,[["__scopeId","data-v-31e88a09"]]);export{Xe as default};