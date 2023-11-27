import{u as d,h as g,i as f,m as c,l as F}from"./TileProperty-ab86017d.js";import{c6 as T,H as U,m as p,_ as a}from"./Layer-5200258f.js";function y(r,e){const t=/\{z\}/g,n=/\{x\}/g,i=/\{y\}/g,l=/\{-y\}/g;return function(s,E,S){if(s)return r.replace(t,s[0].toString()).replace(n,s[1].toString()).replace(i,s[2].toString()).replace(l,function(){const h=s[0],u=e.getFullTileRange(h);return U(u,"The {-y} placeholder requires a tile grid with extent"),(u.getHeight()-s[2]-1).toString()})}}function x(r,e){const t=r.length,n=new Array(t);for(let i=0;i<t;++i)n[i]=y(r[i],e);return L(n)}function L(r){return r.length===1?r[0]:function(e,t,n){if(!e)return;const i=d(e),l=T(i,r.length);return r[l](e,t,n)}}function R(r){const e=[];let t=/\{([a-z])-([a-z])\}/.exec(r);if(t){const n=t[1].charCodeAt(0),i=t[2].charCodeAt(0);let l;for(l=n;l<=i;++l)e.push(r.replace(t[0],String.fromCharCode(l)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(r),t){const n=parseInt(t[2],10);for(let i=parseInt(t[1],10);i<=n;i++)e.push(r.replace(t[0],i.toString()));return e}return e.push(r),e}class o extends g{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===o.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const t=e.target,n=p(t),i=t.getState();let l;i==a.LOADING?(this.tileLoadingKeys_[n]=!0,l=c.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],l=i==a.ERROR?c.TILELOADERROR:i==a.LOADED?c.TILELOADEND:void 0),l!=null&&this.dispatchEvent(new f(l,t))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){const t=R(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;const t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(x(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}useTile(e,t,n){const i=F(e,t,n);this.tileCache.containsKey(i)&&this.tileCache.get(i)}}const A=o;export{A as U,L as c};
