import{I as _,cG as s,M as p,a9 as g,V as m}from"./Layer-bb290663.js";import{O as D}from"./OSM-f492dcb0.js";import{T as f}from"./Tile-ca35e04d.js";import{_ as w,i as T,o as b,c as I,b as n,t as l,g as c,F as P,p as S,k}from"./index-ef54e607.js";import"./XYZ-a7932065.js";import"./TileImage-85165a6d.js";import"./TileProperty-b28dfc34.js";import"./UrlTile-a27ffc81.js";import"./BaseTile-7ba8ffb7.js";import"./TileLayer-d436536e.js";import"./Layer-1eda306a.js";class v extends _{constructor(e){const t=e||{};super(t),t.stopDown&&(this.stopDown=t.stopDown),this.scaleDeltaByPixel_=t.delta?t.delta:.01,this.duration_=t.duration!==void 0?t.duration:250,this.handlingDownUpSequence_=!1,this.handlingDoubleDownSequence_=!1,this.doubleTapTimeoutId_=void 0,this.trackedPointers_={},this.targetPointers=[]}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence_){if(e.type==s.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==s.POINTERUP){const i=this.handleUpEvent(e);this.handlingDownUpSequence_=i}}else if(e.type==s.POINTERDOWN)if(this.handlingDoubleDownSequence_){this.handlingDoubleDownSequence_=!1;const i=this.handleDownEvent(e);this.handlingDownUpSequence_=i,t=this.stopDown(i)}else t=this.stopDown(!1),this.waitForDblTap_();return!t}handleDragEvent(e){let t=1;const i=this.targetPointers[0],d=this.down_.originalEvent,r=i.clientY-d.clientY;this.lastDistance_!==void 0&&(t=1-(this.lastDistance_-r)*this.scaleDeltaByPixel_),this.lastDistance_=r,t!=1&&(this.lastScaleDelta_=t);const h=e.map,u=h.getView();h.render(),u.adjustResolutionInternal(t)}handleDownEvent(e){if(this.targetPointers.length==1){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.down_=e,this.handlingDownUpSequence_||t.getView().beginInteraction(),!0}return!1}handleUpEvent(e){if(this.targetPointers.length==0){const i=e.map.getView(),d=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,d),this.handlingDownUpSequence_=!1,this.handlingDoubleDownSequence_=!1,!1}return!0}stopDown(e){return e}updateTrackedPointers_(e){if(y(e)){const t=e.originalEvent,i=t.pointerId.toString();e.type==s.POINTERUP?delete this.trackedPointers_[i]:e.type==s.POINTERDOWN?this.trackedPointers_[i]=t:i in this.trackedPointers_&&(this.trackedPointers_[i]=t),this.targetPointers=Object.values(this.trackedPointers_)}}waitForDblTap_(){this.doubleTapTimeoutId_!==void 0?(clearTimeout(this.doubleTapTimeoutId_),this.doubleTapTimeoutId_=void 0):(this.handlingDoubleDownSequence_=!0,this.doubleTapTimeoutId_=setTimeout(this.endInteraction_.bind(this),250))}endInteraction_(){this.handlingDoubleDownSequence_=!1,this.doubleTapTimeoutId_=void 0}}function y(o){const e=o.type;return e===s.POINTERDOWN||e===s.POINTERDRAG||e===s.POINTERUP}const O=v,x="Double click, Drag and Zoom",j=`
  <div id="map" class="map"></div>
`,q=`
  .map {
    width: 100%;
    height: 400px;
  }
`,N=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {
    DblClickDragZoom,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';

  const map = new Map({
    interactions: defaultInteractions().extend([new DblClickDragZoom()]),
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
`,U=`
  {
    "name": "double-click-drag-zoom",
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
`;const a=o=>(S("data-v-4cf544c0"),o=o(),k(),o),E={id:"title"},M=a(()=>n("div",{id:"map",class:"map"},null,-1)),R=a(()=>n("p",null,"A single interaction to zoom in/out by double clicking and dragging. On the second click, hold the mouse left button down and drag up or down to zoom in or out. Works also with touch devices.",-1)),V=a(()=>n("h5",{class:"source-heading"},"html",-1)),z={class:"language-html"},Z=a(()=>n("h5",{class:"source-heading"},"css",-1)),A={class:"language-css"},C=a(()=>n("h5",{class:"source-heading"},"js",-1)),F={class:"language-js"},W=a(()=>n("h5",{class:"source-heading"},"package.json",-1)),G={class:"language-json"},L={__name:"index",setup(o){return T(()=>{new p({interactions:g().extend([new O]),layers:[new f({source:new D})],target:"map",view:new m({center:[0,0],zoom:2})}),Prism.highlightAll()}),(e,t)=>(b(),I(P,null,[n("h4",E,l(c(x)),1),M,R,V,n("pre",null,[n("code",z,l("  "+c(j).trim()),1)]),Z,n("pre",null,[n("code",A,l("  "+c(q).trim()),1)]),C,n("pre",null,[n("code",F,l("  "+c(N).trim()),1)]),W,n("pre",null,[n("code",G,l("  "+c(U).trim()),1)])],64))}},ie=w(L,[["__scopeId","data-v-4cf544c0"]]);export{ie as default};
