import{C as we}from"./Layer-37ea9c2e.js";import{d as Ce,I as me,R as ce}from"./TileProperty-e33ea24b.js";import{Y as ve,Z as z,_ as de,$ as Ee,O as Ie,e as Pe,a0 as Le,a1 as ge,w as je,a2 as he,a3 as Z,a4 as ue,a5 as De,a6 as ze,a7 as Fe,a8 as Ae,i as be,a9 as Me}from"./Layer-3b715193.js";class Oe extends we{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=ve(),this.tmpTileRange_=new Ce(0,0,0,0)}isDrawableTile(e){const t=this.getLayer(),i=e.getState(),o=t.getUseInterimTilesOnError();return i==z.LOADED||i==z.EMPTY||i==z.ERROR&&!o}getTile(e,t,i,o){const g=o.pixelRatio,p=o.viewState.projection,r=this.getLayer();let n=r.getSource().getTile(e,t,i,g,p);return n.getState()==z.ERROR&&r.getUseInterimTilesOnError()&&r.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(n)||(n=n.getInterimTile()),n}getData(e){const t=this.frameState;if(!t)return null;const i=this.getLayer(),o=de(t.pixelToCoordinateTransform,e.slice()),g=i.getExtent();if(g&&!Ee(g,o))return null;const p=t.pixelRatio,r=t.viewState.projection,x=t.viewState,n=i.getRenderSource(),c=n.getTileGridForProjection(x.projection),l=n.getTilePixelRatio(t.pixelRatio);for(let u=c.getZForResolution(x.resolution);u>=c.getMinZoom();--u){const a=c.getTileCoordForCoordAndZ(o,u),s=n.getTile(u,a[1],a[2],p,r);if(!(s instanceof me||s instanceof ce)||s instanceof ce&&s.getState()===z.EMPTY)return null;if(s.getState()!==z.LOADED)continue;const w=c.getOrigin(u),C=Ie(c.getTileSize(u)),R=c.getResolution(u),T=Math.floor(l*((o[0]-w[0])/R-a[1]*C[0])),m=Math.floor(l*((w[1]-o[1])/R-a[2]*C[1])),h=Math.round(l*n.getGutterForProjection(x.projection));return this.getImageData(s.getImage(),T+h,m+h)}return null}loadedTileCallback(e,t,i){return this.isDrawableTile(i)?super.loadedTileCallback(e,t,i):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,t){const i=e.layerStatesArray[e.layerIndex],o=e.viewState,g=o.projection,p=o.resolution,r=o.center,x=o.rotation,n=e.pixelRatio,c=this.getLayer(),l=c.getSource(),u=l.getRevision(),a=l.getTileGridForProjection(g),s=a.getZForResolution(p,l.zDirection),w=a.getResolution(s);let C=e.extent;const R=e.viewState.resolution,T=l.getTilePixelRatio(n),m=Math.round(Pe(C)/R*n),h=Math.round(Le(C)/R*n),I=i.extent&&ge(i.extent);I&&(C=je(C,ge(i.extent)));const v=w*m/2/T,W=w*h/2/T,_=[r[0]-v,r[1]-W,r[0]+v,r[1]+W],k=a.getTileRangeForExtentAndZ(C,s),S={};S[s]={};const J=this.createLoadedTileFinder(l,g,S),ee=this.tmpExtent,te=this.tmpTileRange_;this.newTiles_=!1;const Te=x?he(o.center,R,x,e.size):void 0;for(let D=k.minX;D<=k.maxX;++D)for(let f=k.minY;f<=k.maxY;++f){if(x&&!a.tileCoordIntersectsViewport([s,D,f],Te))continue;const y=this.getTile(s,D,f,e);if(this.isDrawableTile(y)){const b=Z(this);if(y.getState()==z.LOADED){S[s][y.tileCoord.toString()]=y;let M=y.inTransition(b);M&&i.opacity!==1&&(y.endTransition(b),M=!1),!this.newTiles_&&(M||!this.renderedTiles.includes(y))&&(this.newTiles_=!0)}if(y.getAlpha(b,e.time)===1)continue}const $=a.getTileCoordChildTileRange(y.tileCoord,te,ee);let Y=!1;$&&(Y=J(s+1,$)),Y||a.forEachTileCoordParentTileRange(y.tileCoord,J,te,ee)}const q=w/p*n/T;ue(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/n,1/n,x,-m/2,-h/2);const V=De(this.pixelTransform);this.useContainer(t,V,this.getBackground(e));const d=this.getRenderContext(e),F=this.context.canvas;ze(this.inversePixelTransform,this.pixelTransform),ue(this.tempTransform,m/2,h/2,q,q,0,-m/2,-h/2),F.width!=m||F.height!=h?(F.width=m,F.height=h):this.containerReused||d.clearRect(0,0,m,h),I&&this.clipUnrotated(d,e,I),l.getInterpolate()||(d.imageSmoothingEnabled=!1),this.preRender(d,e),this.renderedTiles.length=0;let K=Object.keys(S).map(Number);K.sort(Fe);let A,B,P;i.opacity===1&&(!this.containerReused||l.getOpaque(e.viewState.projection))?K=K.reverse():(A=[],B=[]);for(let D=K.length-1;D>=0;--D){const f=K[D],y=l.getTilePixelSize(f,n,g),Y=a.getResolution(f)/w,b=y[0]*Y*q,M=y[1]*Y*q,H=a.getTileCoordForCoordAndZ(Ae(_),f),ie=a.getTileCoordExtent(H),G=de(this.tempTransform,[T*(ie[0]-_[0])/w,T*(_[3]-ie[3])/w]),pe=T*l.getGutterForProjection(g),ne=S[f];for(const xe in ne){const O=ne[xe],oe=O.tileCoord,se=H[1]-oe[1],Re=Math.round(G[0]-(se-1)*b),re=H[2]-oe[2],fe=Math.round(G[1]-(re-1)*M),L=Math.round(G[0]-se*b),j=Math.round(G[1]-re*M),U=Re-L,X=fe-j,le=s===f,ae=le&&O.getAlpha(Z(this),e.time)!==1;let N=!1;if(!ae)if(A){P=[L,j,L+U,j,L+U,j+X,L,j+X];for(let Q=0,ye=A.length;Q<ye;++Q)if(s!==f&&f<B[Q]){const E=A[Q];be([L,j,L+U,j+X],[E[0],E[3],E[4],E[7]])&&(N||(d.save(),N=!0),d.beginPath(),d.moveTo(P[0],P[1]),d.lineTo(P[2],P[3]),d.lineTo(P[4],P[5]),d.lineTo(P[6],P[7]),d.moveTo(E[6],E[7]),d.lineTo(E[4],E[5]),d.lineTo(E[2],E[3]),d.lineTo(E[0],E[1]),d.clip())}A.push(P),B.push(f)}else d.clearRect(L,j,U,X);this.drawTileImage(O,e,L,j,U,X,pe,le),A&&!ae?(N&&d.restore(),this.renderedTiles.unshift(O)):this.renderedTiles.push(O),this.updateUsedTiles(e.usedTiles,l,O)}}return this.renderedRevision=u,this.renderedResolution=w,this.extentChanged=!this.renderedExtent_||!Me(this.renderedExtent_,_),this.renderedExtent_=_,this.renderedPixelRatio=n,this.renderedProjection=g,this.manageTilePyramid(e,l,a,n,g,C,s,c.getPreload()),this.scheduleExpireCache(e,l),this.postRender(this.context,e),i.extent&&d.restore(),d.imageSmoothingEnabled=!0,V!==F.style.transform&&(F.style.transform=V),this.container}drawTileImage(e,t,i,o,g,p,r,x){const n=this.getTileImage(e);if(!n)return;const c=this.getRenderContext(t),l=Z(this),u=t.layerStatesArray[t.layerIndex],a=u.opacity*(x?e.getAlpha(l,t.time):1),s=a!==c.globalAlpha;s&&(c.save(),c.globalAlpha=a),c.drawImage(n,r,r,n.width-2*r,n.height-2*r,i,o,g,p),s&&c.restore(),a!==u.opacity?t.animate=!0:x&&e.endTransition(l)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,t){if(t.canExpireCache()){const i=(function(o,g,p){const r=Z(o);r in p.usedTiles&&o.expireCache(p.viewState.projection,p.usedTiles[r])}).bind(null,t);e.postRenderFunctions.push(i)}}updateUsedTiles(e,t,i){const o=Z(t);o in e||(e[o]={}),e[o][i.getKey()]=!0}manageTilePyramid(e,t,i,o,g,p,r,x,n){const c=Z(t);c in e.wantedTiles||(e.wantedTiles[c]={});const l=e.wantedTiles[c],u=e.tileQueue,a=i.getMinZoom(),s=e.viewState.rotation,w=s?he(e.viewState.center,e.viewState.resolution,s,e.size):void 0;let C=0,R,T,m,h,I,v;for(v=a;v<=r;++v)for(T=i.getTileRangeForExtentAndZ(p,v,T),m=i.getResolution(v),h=T.minX;h<=T.maxX;++h)for(I=T.minY;I<=T.maxY;++I)s&&!i.tileCoordIntersectsViewport([v,h,I],w)||(r-v<=x?(++C,R=t.getTile(v,h,I,o,g),R.getState()==z.IDLE&&(l[R.getKey()]=!0,u.isKeyQueued(R.getKey())||u.enqueue([R,c,i.getTileCoordCenter(R.tileCoord),m])),n!==void 0&&n(R)):t.useTile(v,h,I,g));t.updateCacheSize(C,g)}}const Ye=Oe;export{Ye as C};