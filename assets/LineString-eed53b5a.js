import{b0 as a,b1 as o,b2 as r,b3 as h,b4 as l,b5 as d,b6 as f,b7 as C,b8 as g,b9 as u}from"./Layer-3b715193.js";import{a as p,i as m}from"./featureloader-a90a5108.js";import{l as c}from"./length-c6ba5b73.js";class s extends a{constructor(t,i){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,i!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(i,t):this.setCoordinates(t,i)}appendCoordinate(t){o(this.flatCoordinates,t),this.changed()}clone(){const t=new s(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,i,n,e){return e<r(this.getExtent(),t,i)?e:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(h(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),l(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,i,n,e))}forEachSegment(t){return d(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,i){return this.layout!="XYM"&&this.layout!="XYZM"?null:(i=i!==void 0?i:!1,p(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i))}getCoordinates(){return f(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,i){return m(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,this.stride)}getLength(){return c(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const i=[];return i.length=C(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,0),new s(i,"XY")}getType(){return"LineString"}intersectsExtent(t){return g(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,i){this.setLayout(i,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=u(this.flatCoordinates,0,t,this.stride),this.changed()}}const v=s;export{v as L};