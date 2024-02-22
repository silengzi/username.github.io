import{F as f,V as w}from"./VectorLayer-5fefefe7.js";import{M as S,V as b}from"./Layer-763025a3.js";import{_ as V,i as v,o as M,c as j,b as e,t as a,g as c,F as C,p as F,k}from"./index-87bb3bb9.js";import{C as R}from"./Circle-b8cdaae3.js";import{a as I}from"./vector-31d95deb.js";import{T as P}from"./Tile-3c7ba04a.js";import{O as L}from"./OSM-c55a5667.js";import{V as T}from"./Vector-6dfa3c6b.js";import"./featureloader-7313d5e8.js";import"./Layer-79bf392c.js";import"./BaseTile-115b346f.js";import"./TileProperty-b49a7745.js";import"./TileLayer-fd6dc420.js";import"./XYZ-191849cc.js";import"./TileImage-d65ff5bd.js";import"./UrlTile-ce5b3cbe.js";const O="Custom Circle Render",B=`
  <div id="map" class="map"></div>
`,q=`
  .map {
    width: 100%;
    height: 400px;
  }
`,z=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Circle} from 'ol/geom.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const circleFeature = new Feature({
    geometry: new Circle([12127398.797692968, 4063894.123105166], 50),
  });
  circleFeature.setStyle(
    new Style({
      renderer(coordinates, state) {
        const [[x, y], [x1, y1]] = coordinates;
        const ctx = state.context;
        const dx = x1 - x;
        const dy = y1 - y;
        const radius = Math.sqrt(dx * dx + dy * dy);

        const innerRadius = 0;
        const outerRadius = radius * 1.4;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          innerRadius,
          x,
          y,
          outerRadius
        );
        gradient.addColorStop(0, 'rgba(255,0,0,0)');
        gradient.addColorStop(0.6, 'rgba(255,0,0,0.2)');
        gradient.addColorStop(1, 'rgba(255,0,0,0.8)');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.strokeStyle = 'rgba(255,0,0,1)';
        ctx.stroke();
      },
    })
  );

  new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
        visible: true,
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [circleFeature],
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: [12127398.797692968, 4063894.123105166],
      zoom: 19,
    }),
  });
`,D=`
  {
    "name": "custom-circle-render",
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
`;const r=i=>(F("data-v-e589eb79"),i=i(),k(),i),G={id:"title"},A=r(()=>e("div",{id:"map",class:"map"},null,-1)),E=r(()=>e("p",null,"This example demonstrates the use of 'ol/style/Style' render option function to render circle feature.",-1)),N=r(()=>e("h5",{class:"source-heading"},"html",-1)),H={class:"language-html"},J=r(()=>e("h5",{class:"source-heading"},"css",-1)),K={class:"language-css"},Q=r(()=>e("h5",{class:"source-heading"},"js",-1)),U={class:"language-js"},W=r(()=>e("h5",{class:"source-heading"},"package.json",-1)),X={class:"language-json"},Y={__name:"index",setup(i){return v(()=>{const l=new f({geometry:new R([12127398797692968e-9,4063894123105166e-9],50)});l.setStyle(new I({renderer(p,_){const[[o,s],[g,h]]=p,t=_.context,u=g-o,m=h-s,d=Math.sqrt(u*u+m*m),y=0,x=d*1.4,n=t.createRadialGradient(o,s,y,o,s,x);n.addColorStop(0,"rgba(255,0,0,0)"),n.addColorStop(.6,"rgba(255,0,0,0.2)"),n.addColorStop(1,"rgba(255,0,0,0.8)"),t.beginPath(),t.arc(o,s,d,0,2*Math.PI,!0),t.fillStyle=n,t.fill(),t.arc(o,s,d,0,2*Math.PI,!0),t.strokeStyle="rgba(255,0,0,1)",t.stroke()}})),new S({layers:[new P({source:new L,visible:!0}),new T({source:new w({features:[l]})})],target:"map",view:new b({center:[12127398797692968e-9,4063894123105166e-9],zoom:19})}),Prism.highlightAll()}),(l,p)=>(M(),j(C,null,[e("h4",G,a(c(O)),1),A,E,N,e("pre",null,[e("code",H,a("  "+c(B).trim()),1)]),J,e("pre",null,[e("code",K,a("  "+c(q).trim()),1)]),Q,e("pre",null,[e("code",U,a("  "+c(z).trim()),1)]),W,e("pre",null,[e("code",X,a("  "+c(D).trim()),1)])],64))}},_e=V(Y,[["__scopeId","data-v-e589eb79"]]);export{_e as default};