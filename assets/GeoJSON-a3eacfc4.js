import{F as d}from"./Vector-163f0152.js";import{G as g}from"./GeometryCollection-03015b2a.js";import{J as p}from"./JSONFeature-2245ccdf.js";import{L as f}from"./LineString-d3d6f49c.js";import{a as G,M as P}from"./MultiPolygon-f290964a.js";import{M as h}from"./MultiPoint-e6eff345.js";import{g as s,aU as w,P as S,L as F}from"./Layer-3211d6ef.js";import{t as m}from"./Feature-5a984f38.js";class O extends p{constructor(e){e=e||{},super(),this.dataProjection=s(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=s(e.featureProjection)),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,r){let o=null;e.type==="Feature"?o=e:o={type:"Feature",geometry:e,properties:null};const n=c(o.geometry,r),i=new d;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in o!==void 0&&i.setGeometryName(o.geometry_name),i.setGeometry(n),"id"in o&&i.setId(o.id),o.properties&&i.setProperties(o.properties,!0),i}readFeaturesFromObject(e,r){const o=e;let n=null;if(o.type==="FeatureCollection"){const i=e;n=[];const a=i.features;for(let u=0,y=a.length;u<y;++u)n.push(this.readFeatureFromObject(a[u],r))}else n=[this.readFeatureFromObject(e,r)];return n}readGeometryFromObject(e,r){return c(e,r)}readProjectionFromObject(e){const r=e.crs;let o;if(r)if(r.type=="name")o=s(r.properties.name);else if(r.type==="EPSG")o=s("EPSG:"+r.properties.code);else throw new Error("Unknown SRS type");else o=this.dataProjection;return o}writeFeatureObject(e,r){r=this.adaptOptions(r);const o={type:"Feature",geometry:null,properties:null},n=e.getId();if(n!==void 0&&(o.id=n),!e.hasProperties())return o;const i=e.getProperties(),a=e.getGeometry();return a&&(o.geometry=l(a,r),delete i[e.getGeometryName()]),w(i)||(o.properties=i),o}writeFeaturesObject(e,r){r=this.adaptOptions(r);const o=[];for(let n=0,i=e.length;n<i;++n)o.push(this.writeFeatureObject(e[n],r));return{type:"FeatureCollection",features:o}}writeGeometryObject(e,r){return l(e,this.adaptOptions(r))}}function c(t,e){if(!t)return null;let r;switch(t.type){case"Point":{r=N(t);break}case"LineString":{r=C(t);break}case"Polygon":{r=j(t);break}case"MultiPoint":{r=k(t);break}case"MultiLineString":{r=b(t);break}case"MultiPolygon":{r=L(t);break}case"GeometryCollection":{r=M(t);break}default:throw new Error("Unsupported GeoJSON type: "+t.type)}return m(r,!1,e)}function M(t,e){const r=t.geometries.map(function(o){return c(o,e)});return new g(r)}function N(t){return new S(t.coordinates)}function C(t){return new f(t.coordinates)}function b(t){return new G(t.coordinates)}function k(t){return new h(t.coordinates)}function L(t){return new P(t.coordinates)}function j(t){return new F(t.coordinates)}function l(t,e){t=m(t,!0,e);const r=t.getType();let o;switch(r){case"Point":{o=H(t);break}case"LineString":{o=E(t);break}case"Polygon":{o=I(t,e);break}case"MultiPoint":{o=x(t);break}case"MultiLineString":{o=_(t);break}case"MultiPolygon":{o=U(t,e);break}case"GeometryCollection":{o=J(t,e);break}case"Circle":{o={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+r)}return o}function J(t,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:t.getGeometriesArray().map(function(o){return l(o,e)})}}function E(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function _(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function x(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function U(t,e){let r;return e&&(r=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}function H(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function I(t,e){let r;return e&&(r=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(r)}}const B=O;export{B as G};