import{M as O,V as B,af as l,cZ as _,c_ as I,L as z,P as N}from"./Layer-3211d6ef.js";import{_ as A,i as H,o as W,c as Z,b as r,t as u,g,F as q,j as J,p as K,k as Q}from"./index-8e73cb60.js";import{T as R}from"./Tile-d932c51d.js";import{O as U}from"./OSM-39b8e613.js";import{V as X}from"./Vector-163f0152.js";import{a as F,F as w,S as V,C as M}from"./Style-22e788f3.js";import{V as Y}from"./Vector-2de0a908.js";import{M as k}from"./Modify-16614c1f.js";import{D as $}from"./Draw-3837a0e3.js";import{S as ee}from"./Snap-c3076181.js";import{G as te}from"./GeometryCollection-03015b2a.js";import"./BaseTile-47530170.js";import"./TileProperty-f0a52f17.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";import"./featureloader-4f961e27.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./Circle-60dfd31b.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";const oe="Draw and Modify Geodesic Circles",re=`
  <div id="map" class="map"></div>
  <form>
    <label for="type">Geometry type &nbsp;</label>
    <select id="type">
      <option value="Point">Point</option>
      <option value="LineString">LineString</option>
      <option value="Polygon">Polygon</option>
      <option value="Circle">Circle Geometry</option>
      <option value="Geodesic" selected>Geodesic Circle</option>
    </select>
  </form>
`,ne=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ie=`
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
  import {Draw, Modify, Snap} from 'ol/interaction.js';
  import {GeometryCollection, Point, Polygon} from 'ol/geom.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {circular} from 'ol/geom/Polygon.js';
  import {getDistance} from 'ol/sphere.js';
  import {transform} from 'ol/proj.js';

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource();

  const style = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: '#33cc33',
      width: 2,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: '#ffcc33',
      }),
    }),
  });

  const geodesicStyle = new Style({
    geometry: function (feature) {
      return feature.get('modifyGeometry') || feature.getGeometry();
    },
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: '#ff3333',
      width: 2,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: 'rgba(0, 0, 0, 0)',
      }),
    }),
  });

  const vector = new VectorLayer({
    source: source,
    style: function (feature) {
      const geometry = feature.getGeometry();
      return geometry.getType() === 'GeometryCollection' ? geodesicStyle : style;
    },
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [-11000000, 6600000],
      zoom: 3,
    }),
  });

  const defaultStyle = new Modify({source: source})
    .getOverlay()
    .getStyleFunction();

  const modify = new Modify({
    source: source,
    style: function (feature) {
      feature.get('features').forEach(function (modifyFeature) {
        const modifyGeometry = modifyFeature.get('modifyGeometry');
        if (modifyGeometry) {
          const modifyPoint = feature.getGeometry().getCoordinates();
          const geometries = modifyFeature.getGeometry().getGeometries();
          const polygon = geometries[0].getCoordinates()[0];
          const center = geometries[1].getCoordinates();
          const projection = map.getView().getProjection();
          let first, last, radius;
          if (modifyPoint[0] === center[0] && modifyPoint[1] === center[1]) {
            // center is being modified
            // get unchanged radius from diameter between polygon vertices
            first = transform(polygon[0], projection, 'EPSG:4326');
            last = transform(
              polygon[(polygon.length - 1) / 2],
              projection,
              'EPSG:4326'
            );
            radius = getDistance(first, last) / 2;
          } else {
            // radius is being modified
            first = transform(center, projection, 'EPSG:4326');
            last = transform(modifyPoint, projection, 'EPSG:4326');
            radius = getDistance(first, last);
          }
          // update the polygon using new center or radius
          const circle = circular(
            transform(center, projection, 'EPSG:4326'),
            radius,
            128
          );
          circle.transform('EPSG:4326', projection);
          geometries[0].setCoordinates(circle.getCoordinates());
          // save changes to be applied at the end of the interaction
          modifyGeometry.setGeometries(geometries);
        }
      });
      return defaultStyle(feature);
    },
  });

  modify.on('modifystart', function (event) {
    event.features.forEach(function (feature) {
      const geometry = feature.getGeometry();
      if (geometry.getType() === 'GeometryCollection') {
        feature.set('modifyGeometry', geometry.clone(), true);
      }
    });
  });

  modify.on('modifyend', function (event) {
    event.features.forEach(function (feature) {
      const modifyGeometry = feature.get('modifyGeometry');
      if (modifyGeometry) {
        feature.setGeometry(modifyGeometry);
        feature.unset('modifyGeometry', true);
      }
    });
  });

  map.addInteraction(modify);

  let draw, snap; // global so we can remove them later
  const typeSelect = document.getElementById('type');

  function addInteractions() {
    let value = typeSelect.value;
    let geometryFunction;
    if (value === 'Geodesic') {
      value = 'Circle';
      geometryFunction = function (coordinates, geometry, projection) {
        if (!geometry) {
          geometry = new GeometryCollection([
            new Polygon([]),
            new Point(coordinates[0]),
          ]);
        }
        const geometries = geometry.getGeometries();
        const center = transform(coordinates[0], projection, 'EPSG:4326');
        const last = transform(coordinates[1], projection, 'EPSG:4326');
        const radius = getDistance(center, last);
        const circle = circular(center, radius, 128);
        circle.transform('EPSG:4326', projection);
        geometries[0].setCoordinates(circle.getCoordinates());
        geometry.setGeometries(geometries);
        return geometry;
      };
    }
    draw = new Draw({
      source: source,
      type: value,
      geometryFunction: geometryFunction,
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);
  }

  /**
   * Handle change event.
   */
  typeSelect.onchange = function () {
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    addInteractions();
  };

  addInteractions();
`,se=`
  {
    "name": "draw-and-modify-geodesic",
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
`;const P=p=>(K("data-v-3249d065"),p=p(),Q(),p),ce={id:"title"},ae=J('<div id="map" class="map" data-v-3249d065></div><form data-v-3249d065><label for="type" data-v-3249d065>Geometry type  </label><select id="type" data-v-3249d065><option value="Point" data-v-3249d065>Point</option><option value="LineString" data-v-3249d065>LineString</option><option value="Polygon" data-v-3249d065>Polygon</option><option value="Circle" data-v-3249d065>Circle Geometry</option><option value="Geodesic" selected data-v-3249d065>Geodesic Circle</option></select></form><p data-v-3249d065>Example of using the ol/interaction/Draw interaction with a custom geometry function together with the ol/interaction/Modify interaction to draw and modify geodesic circles (a ol/geom/Polygon#circular polygon representing a circle on the surface of the Earth&#39;s sphere). The polygon is placed in a ol/geom/GeometryCollection together with a ol/geom/Point which allows the Modify interaction to adjust the circle center as well as the radius. Custom style functions ensure the correct final geometry is displayed throughout. ol/geom/Circle projected (planar) geometries can also be drawn and modified. The difference between geodesic and projected circles can be seen when their centers are moved between northern and southern latitudes in the Web Mercator projection. The ol/interaction/Snap interaction can be used to create concentric circles.</p><h5 class="source-heading" data-v-3249d065>html</h5>',4),le={class:"language-html"},me=P(()=>r("h5",{class:"source-heading"},"css",-1)),de={class:"language-css"},ye=P(()=>r("h5",{class:"source-heading"},"js",-1)),fe={class:"language-js"},ue=P(()=>r("h5",{class:"source-heading"},"package.json",-1)),ge={class:"language-json"},pe={__name:"index",setup(p){return H(()=>{const C=new R({source:new U}),m=new X,D=new F({fill:new w({color:"rgba(255, 255, 255, 0.2)"}),stroke:new V({color:"#33cc33",width:2}),image:new M({radius:7,fill:new w({color:"#ffcc33"})})}),T=new F({geometry:function(e){return e.get("modifyGeometry")||e.getGeometry()},fill:new w({color:"rgba(255, 255, 255, 0.2)"}),stroke:new V({color:"#ff3333",width:2}),image:new M({radius:7,fill:new w({color:"rgba(0, 0, 0, 0)"})})}),L=new Y({source:m,style:function(e){return e.getGeometry().getType()==="GeometryCollection"?T:D}}),d=new O({layers:[C,L],target:"map",view:new B({center:[-11e6,66e5],zoom:3})}),x=new k({source:m}).getOverlay().getStyleFunction(),h=new k({source:m,style:function(e){return e.get("features").forEach(function(t){const o=t.get("modifyGeometry");if(o){const n=e.getGeometry().getCoordinates(),i=t.getGeometry().getGeometries(),y=i[0].getCoordinates()[0],c=i[1].getCoordinates(),s=d.getView().getProjection();let f,a,v;n[0]===c[0]&&n[1]===c[1]?(f=l(y[0],s,"EPSG:4326"),a=l(y[(y.length-1)/2],s,"EPSG:4326"),v=_(f,a)/2):(f=l(c,s,"EPSG:4326"),a=l(n,s,"EPSG:4326"),v=_(f,a));const b=I(l(c,s,"EPSG:4326"),v,128);b.transform("EPSG:4326",s),i[0].setCoordinates(b.getCoordinates()),o.setGeometries(i)}}),x(e)}});h.on("modifystart",function(e){e.features.forEach(function(t){const o=t.getGeometry();o.getType()==="GeometryCollection"&&t.set("modifyGeometry",o.clone(),!0)})}),h.on("modifyend",function(e){e.features.forEach(function(t){const o=t.get("modifyGeometry");o&&(t.setGeometry(o),t.unset("modifyGeometry",!0))})}),d.addInteraction(h);let G,S;const j=document.getElementById("type");function E(){let e=j.value,t;e==="Geodesic"&&(e="Circle",t=function(o,n,i){n||(n=new te([new z([]),new N(o[0])]));const y=n.getGeometries(),c=l(o[0],i,"EPSG:4326"),s=l(o[1],i,"EPSG:4326"),f=_(c,s),a=I(c,f,128);return a.transform("EPSG:4326",i),y[0].setCoordinates(a.getCoordinates()),n.setGeometries(y),n}),G=new $({source:m,type:e,geometryFunction:t}),d.addInteraction(G),S=new ee({source:m}),d.addInteraction(S)}j.onchange=function(){d.removeInteraction(G),d.removeInteraction(S),E()},E(),Prism.highlightAll()}),(C,m)=>(W(),Z(q,null,[r("h4",ce,u(g(oe)),1),ae,r("pre",null,[r("code",le,u("  "+g(re).trim()),1)]),me,r("pre",null,[r("code",de,u("  "+g(ne).trim()),1)]),ye,r("pre",null,[r("code",fe,u("  "+g(ie).trim()),1)]),ue,r("pre",null,[r("code",ge,u("  "+g(se).trim()),1)])],64))}},We=A(pe,[["__scopeId","data-v-3249d065"]]);export{We as default};