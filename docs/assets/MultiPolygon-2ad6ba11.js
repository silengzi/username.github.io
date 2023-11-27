import{g as P,F as c,a5 as I,aZ as T,a_ as Y,a$ as v,q as C,x as A,b0 as $,b1 as G,b2 as q,b3 as O,b4 as k,b5 as Z,d as S,b6 as N,b7 as U,b8 as W,b9 as z,ba as Q,bb as B,bc as H,P as L,bd as J,aR as K,Q as V,be as tt,bf as st,bg as et,bh as it,bi as x,bj as nt,aT as rt,bk as ot,bl as at,a as w,bm as lt,bn as ht}from"./Layer-5200258f.js";import{f as dt}from"./featureloader-ed474c2d.js";class ut{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}getReadOptions(t,s){if(s){let e=s.dataProjection?P(s.dataProjection):this.readProjection(t);s.extent&&e&&e.getUnits()==="tile-pixels"&&(e=P(e),e.setWorldExtent(s.extent)),s={dataProjection:e,featureProjection:s.featureProjection}}return this.adaptOptions(s)}adaptOptions(t){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)}getType(){return c()}readFeature(t,s){return c()}readFeatures(t,s){return c()}readGeometry(t,s){return c()}readProjection(t){return c()}writeFeature(t,s){return c()}writeFeatures(t,s){return c()}writeGeometry(t,s){return c()}}const pt=ut;function yt(l,t,s){const e=s?P(s.featureProjection):null,i=s?P(s.dataProjection):null;let n;if(e&&i&&!I(e,i)?n=(t?l.clone():l).transform(t?e:i,t?i:e):n=l,t&&s&&s.decimals!==void 0){const r=Math.pow(10,s.decimals),o=function(a){for(let d=0,h=a.length;d<h;++d)a[d]=Math.round(a[d]*r)/r;return a};n===l&&(n=l.clone()),n.applyTransform(o)}return n}function D(l,t,s,e,i,n,r){let o,a;const d=(s-t)/e;if(d===1)o=t;else if(d===2)o=t,a=i;else if(d!==0){let h=l[t],f=l[t+1],u=0;const g=[0];for(let y=t+e;y<s;y+=e){const m=l[y],b=l[y+1];u+=Math.sqrt((m-h)*(m-h)+(b-f)*(b-f)),g.push(u),h=m,f=b}const p=i*u,_=T(g,p);_<0?(a=(p-g[-_-2])/(g[-_-1]-g[-_-2]),o=t+(-_-2)*e):o=t+_*e}r=r>1?r:2,n=n||new Array(r);for(let h=0;h<r;++h)n[h]=o===void 0?NaN:a===void 0?l[o+h]:Y(l[o+h],l[o+e+h],a);return n}function j(l,t,s,e,i,n){if(s==t)return null;let r;if(i<l[t+e-1])return n?(r=l.slice(t,t+e),r[e-1]=i,r):null;if(l[s-1]<i)return n?(r=l.slice(s-e,s),r[e-1]=i,r):null;if(i==l[t+e-1])return l.slice(t,t+e);let o=t/e,a=s/e;for(;o<a;){const u=o+a>>1;i<l[(u+1)*e-1]?a=u:o=u+1}const d=l[o*e-1];if(i==d)return l.slice((o-1)*e,(o-1)*e+e);const h=l[(o+1)*e-1],f=(i-d)/(h-d);r=[];for(let u=0;u<e-1;++u)r.push(Y(l[(o-1)*e+u],l[o*e+u],f));return r.push(i),r}function ft(l,t,s,e,i,n,r){if(r)return j(l,t,s[s.length-1],e,i,n);let o;if(i<l[e-1])return n?(o=l.slice(0,e),o[e-1]=i,o):null;if(l[l.length-1]<i)return n?(o=l.slice(l.length-e),o[e-1]=i,o):null;for(let a=0,d=s.length;a<d;++a){const h=s[a];if(t!=h){if(i<l[t+e-1])return null;if(i<=l[h-1])return j(l,t,h,e,i,!1);t=h}}return null}class F extends v{constructor(t,s){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,s!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(s,t):this.setCoordinates(t,s)}appendCoordinate(t){this.flatCoordinates?C(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()}clone(){const t=new F(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,s,e,i){return i<A(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt($(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),G(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,s,e,i))}forEachSegment(t){return q(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,s){return this.layout!="XYM"&&this.layout!="XYZM"?null:(s=s!==void 0?s:!1,j(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,s))}getCoordinates(){return O(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,s){return D(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,s,this.stride)}getLength(){return dt(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const s=[];return s.length=k(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,s,0),new F(s,"XY")}getType(){return"LineString"}intersectsExtent(t){return Z(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=S(this.flatCoordinates,0,t,this.stride),this.changed()}}const X=F;class M extends v{constructor(t,s,e){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,s);else if(s!==void 0&&e)this.setFlatCoordinates(s,t),this.ends_=e;else{let i=this.getLayout();const n=t,r=[],o=[];for(let a=0,d=n.length;a<d;++a){const h=n[a];a===0&&(i=h.getLayout()),C(r,h.getFlatCoordinates()),o.push(r.length)}this.setFlatCoordinates(i,r),this.ends_=o}}appendLineString(t){this.flatCoordinates?C(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new M(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,s,e,i){return i<A(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(N(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),U(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,s,e,i))}getCoordinateAtM(t,s,e){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(s=s!==void 0?s:!1,e=e!==void 0?e:!1,ft(this.flatCoordinates,0,this.ends_,this.stride,t,s,e))}getCoordinates(){return W(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new X(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,s=this.ends_,e=this.layout,i=[];let n=0;for(let r=0,o=s.length;r<o;++r){const a=s[r],d=new X(t.slice(n,a),e);i.push(d),n=a}return i}getFlatMidpoints(){const t=[],s=this.flatCoordinates;let e=0;const i=this.ends_,n=this.stride;for(let r=0,o=i.length;r<o;++r){const a=i[r],d=D(s,e,a,n,.5);C(t,d),e=a}return t}getSimplifiedGeometryInternal(t){const s=[],e=[];return s.length=z(this.flatCoordinates,0,this.ends_,this.stride,t,s,0,e),new M(s,"XY",e)}getType(){return"MultiLineString"}intersectsExtent(t){return Q(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const e=B(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=e.length===0?0:e[e.length-1],this.changed()}}const Pt=M;class E extends v{constructor(t,s){super(),s&&!Array.isArray(t[0])?this.setFlatCoordinates(s,t):this.setCoordinates(t,s)}appendPoint(t){this.flatCoordinates?C(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()}clone(){const t=new E(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,s,e,i){if(i<A(this.getExtent(),t,s))return i;const n=this.flatCoordinates,r=this.stride;for(let o=0,a=n.length;o<a;o+=r){const d=H(t,s,n[o],n[o+1]);if(d<i){i=d;for(let h=0;h<r;++h)e[h]=n[o+h];e.length=r}}return i}getCoordinates(){return O(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const s=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||s<=t?null:new L(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,s=this.layout,e=this.stride,i=[];for(let n=0,r=t.length;n<r;n+=e){const o=new L(t.slice(n,n+e),s);i.push(o)}return i}getType(){return"MultiPoint"}intersectsExtent(t){const s=this.flatCoordinates,e=this.stride;for(let i=0,n=s.length;i<n;i+=e){const r=s[i],o=s[i+1];if(J(t,r,o))return!0}return!1}setCoordinates(t,s){this.setLayout(s,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=S(this.flatCoordinates,0,t,this.stride),this.changed()}}const gt=E;function ct(l,t,s,e){const i=[];let n=V();for(let r=0,o=s.length;r<o;++r){const a=s[r];n=K(l,t,a[0],e),i.push((n[0]+n[2])/2,(n[1]+n[3])/2),t=a[a.length-1]}return i}class R extends v{constructor(t,s,e){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!e&&!Array.isArray(t[0])){let i=this.getLayout();const n=t,r=[],o=[];for(let a=0,d=n.length;a<d;++a){const h=n[a];a===0&&(i=h.getLayout());const f=r.length,u=h.getEnds();for(let g=0,p=u.length;g<p;++g)u[g]+=f;C(r,h.getFlatCoordinates()),o.push(u)}s=i,t=r,e=o}s!==void 0&&e?(this.setFlatCoordinates(s,t),this.endss_=e):this.setCoordinates(t,s)}appendPolygon(t){let s;if(!this.flatCoordinates)this.flatCoordinates=t.getFlatCoordinates().slice(),s=t.getEnds().slice(),this.endss_.push();else{const e=this.flatCoordinates.length;C(this.flatCoordinates,t.getFlatCoordinates()),s=t.getEnds().slice();for(let i=0,n=s.length;i<n;++i)s[i]+=e}this.endss_.push(s),this.changed()}clone(){const t=this.endss_.length,s=new Array(t);for(let i=0;i<t;++i)s[i]=this.endss_[i].slice();const e=new R(this.flatCoordinates.slice(),this.layout,s);return e.applyProperties(this),e}closestPointXY(t,s,e,i){return i<A(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(tt(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),st(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,s,e,i))}containsXY(t,s){return et(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,s)}getArea(){return it(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let s;return t!==void 0?(s=this.getOrientedFlatCoordinates().slice(),x(s,0,this.endss_,this.stride,t)):s=this.flatCoordinates,nt(s,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=ct(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=rt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new gt(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;ot(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=x(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const s=[],e=[];return s.length=at(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),s,0,e),new R(s,"XY",e)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let s;if(t===0)s=0;else{const n=this.endss_[t-1];s=n[n.length-1]}const e=this.endss_[t].slice(),i=e[e.length-1];if(s!==0)for(let n=0,r=e.length;n<r;++n)e[n]-=s;return new w(this.flatCoordinates.slice(s,i),this.layout,e)}getPolygons(){const t=this.layout,s=this.flatCoordinates,e=this.endss_,i=[];let n=0;for(let r=0,o=e.length;r<o;++r){const a=e[r].slice(),d=a[a.length-1];if(n!==0)for(let f=0,u=a.length;f<u;++f)a[f]-=n;const h=new w(s.slice(n,d),t,a);i.push(h),n=d}return i}getType(){return"MultiPolygon"}intersectsExtent(t){return lt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const e=ht(this.flatCoordinates,0,t,this.stride,this.endss_);if(e.length===0)this.flatCoordinates.length=0;else{const i=e[e.length-1];this.flatCoordinates.length=i.length===0?0:i[i.length-1]}this.changed()}}const Ft=R;export{pt as F,X as L,Pt as M,gt as a,Ft as b,D as i,ct as l,yt as t};
