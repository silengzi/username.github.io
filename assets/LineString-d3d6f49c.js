import{b5 as S,b6 as R,b7 as x,aJ as A,b8 as L,b9 as d,ba as D,bb as P,bc as X,bd as Y,be as w,bf as E}from"./Layer-3211d6ef.js";import{a as F}from"./featureloader-4f961e27.js";function q(e,t,n,i,s,a,h){let l,o;const g=(n-t)/i;if(g===1)l=t;else if(g===2)l=t,o=s;else if(g!==0){let r=e[t],f=e[t+1],u=0;const p=[0];for(let M=t+i;M<n;M+=i){const b=e[M],v=e[M+1];u+=Math.sqrt((b-r)*(b-r)+(v-f)*(v-f)),p.push(u),r=b,f=v}const _=s*u,c=S(p,_);c<0?(o=(_-p[-c-2])/(p[-c-1]-p[-c-2]),l=t+(-c-2)*i):l=t+c*i}h=h>1?h:2,a=a||new Array(h);for(let r=0;r<h;++r)a[r]=l===void 0?NaN:o===void 0?e[l+r]:R(e[l+r],e[l+i+r],o);return a}function y(e,t,n,i,s,a){if(n==t)return null;let h;if(s<e[t+i-1])return a?(h=e.slice(t,t+i),h[i-1]=s,h):null;if(e[n-1]<s)return a?(h=e.slice(n-i,n),h[i-1]=s,h):null;if(s==e[t+i-1])return e.slice(t,t+i);let l=t/i,o=n/i;for(;l<o;){const u=l+o>>1;s<e[(u+1)*i-1]?o=u:l=u+1}const g=e[l*i-1];if(s==g)return e.slice((l-1)*i,(l-1)*i+i);const r=e[(l+1)*i-1],f=(s-g)/(r-g);h=[];for(let u=0;u<i-1;++u)h.push(R(e[(l-1)*i+u],e[l*i+u],f));return h.push(s),h}function k(e,t,n,i,s,a,h){if(h)return y(e,t,n[n.length-1],i,s,a);let l;if(s<e[i-1])return a?(l=e.slice(0,i),l[i-1]=s,l):null;if(e[e.length-1]<s)return a?(l=e.slice(e.length-i),l[i-1]=s,l):null;for(let o=0,g=n.length;o<g;++o){const r=n[o];if(t!=r){if(s<e[t+i-1])return null;if(s<=e[r-1])return y(e,t,r,i,s,!1);t=r}}return null}class C extends x{constructor(t,n){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,n!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(n,t):this.setCoordinates(t,n)}appendCoordinate(t){this.flatCoordinates?A(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()}clone(){const t=new C(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,n,i,s){return s<L(this.getExtent(),t,n)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(d(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),D(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,n,i,s))}forEachSegment(t){return P(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,n){return this.layout!="XYM"&&this.layout!="XYZM"?null:(n=n!==void 0?n:!1,y(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n))}getCoordinates(){return X(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,n){return q(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,this.stride)}getLength(){return F(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const n=[];return n.length=Y(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new C(n,"XY")}getType(){return"LineString"}intersectsExtent(t){return w(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,n){this.setLayout(n,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=E(this.flatCoordinates,0,t,this.stride),this.changed()}}const I=C;export{I as L,q as i,k as l};
