import{F as i}from"./Feature-ba88f75c.js";import{aq as r}from"./Layer-d95863ce.js";class a extends i{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(n(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(n(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return r()}readFeaturesFromObject(e,t){return r()}readGeometry(e,t){return this.readGeometryFromObject(n(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return r()}readProjection(e){return this.readProjectionFromObject(n(e))}readProjectionFromObject(e){return r()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return r()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return r()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return r()}}function n(o){if(typeof o=="string"){const e=JSON.parse(o);return e||null}return o!==null?o:null}const F=a;export{F as J};
