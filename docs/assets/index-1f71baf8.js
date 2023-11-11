import{M as m,V as d}from"./TileLayer-114b24fd.js";import{T as l,O as p}from"./Tile-10839265.js";import{_ as r,i as u,o as _,c as f,b as o,t,g as s,F as g,j as h,p as w,k as v}from"./index-a4704495.js";const b="Accessible Map",k=`
  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>
`,x=`
  .map {
    width: 100%;
    height: 400px;
  }
  a.skiplink {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  a.skiplink:focus {
    clip: auto;
    height: auto;
    width: auto;
    background-color: #fff;
    padding: 0.3em;
  }
  #map:focus {
    outline: #4A74A8 solid 0.15em;
  }
`,z=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  const map = new Map({
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

  document.getElementById('zoom-out').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  };

  document.getElementById('zoom-in').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  };
`,y=`
  {
    "name": "accessible",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;const c=a=>(w("data-v-6219f5f8"),a=a(),v(),a),Z={id:"title"},M=h('<a class="skiplink" href="#map" data-v-6219f5f8>Go to map</a><div id="map" class="map" tabindex="0" data-v-6219f5f8></div><button id="zoom-out" data-v-6219f5f8>Zoom out</button><button id="zoom-in" data-v-6219f5f8>Zoom in</button><p data-v-6219f5f8>该页的map元素的tabindex属性设置为“0”，这使得它可以聚焦。要聚焦到该元素，您可以使用“tab”键导航到它，也可以点击跳转链接。当地图元素处于聚焦状态时，您可以使用键盘的+和-键来对地图进行放大和缩小，以及可以使用键盘方向键来平移地图。</p><p data-v-6219f5f8>点击地图下方的“放大”和“缩小”按钮可以放大和缩小地图。您可以使用“tab”键聚焦到按钮上，然后键盘按下回车“enter”键来触发缩放操作。</p><h5 class="source-heading" data-v-6219f5f8>html</h5>',7),V={class:"language-html"},j=c(()=>o("h5",{class:"source-heading"},"css",-1)),S={class:"language-css"},I=c(()=>o("h5",{class:"source-heading"},"js",-1)),B={class:"language-js"},E=c(()=>o("h5",{class:"source-heading"},"package.json",-1)),O={class:"language-json"},T={__name:"index",setup(a){return u(()=>{const i=new m({layers:[new l({source:new p})],target:"map",view:new d({center:[0,0],zoom:2})});document.getElementById("zoom-out").onclick=function(){const e=i.getView(),n=e.getZoom();e.setZoom(n-1)},document.getElementById("zoom-in").onclick=function(){const e=i.getView(),n=e.getZoom();e.setZoom(n+1)},Prism.highlightAll()}),(i,e)=>(_(),f(g,null,[o("h4",Z,t(s(b)),1),M,o("pre",null,[o("code",V,t("  "+s(k).trim()),1)]),j,o("pre",null,[o("code",S,t("  "+s(x).trim()),1)]),I,o("pre",null,[o("code",B,t("  "+s(z).trim()),1)]),E,o("pre",null,[o("code",O,t("  "+s(y).trim()),1)])],64))}},F=r(T,[["__scopeId","data-v-6219f5f8"]]);export{F as default};
