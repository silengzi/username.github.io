import{X as s}from"./XYZ-b4ddf721.js";import{a7 as c,a8 as n}from"./Layer-cbc2c204.js";class o extends s{constructor(r){r=r||{},super({opaque:!1,projection:r.projection,tileGrid:r.tileGrid,wrapX:r.wrapX!==void 0?r.wrapX:!0,zDirection:r.zDirection,url:r.template||"z:{z} x:{x} y:{y}",tileLoadFunction:(i,l)=>{const a=i.getTileCoord()[0],t=c(this.tileGrid.getTileSize(a)),e=n(t[0],t[1]);e.strokeStyle="grey",e.strokeRect(.5,.5,t[0]+.5,t[1]+.5),e.fillStyle="grey",e.strokeStyle="white",e.textAlign="center",e.textBaseline="middle",e.font="24px sans-serif",e.lineWidth=4,e.strokeText(l,t[0]/2,t[1]/2,t[0]),e.fillText(l,t[0]/2,t[1]/2,t[0]),i.setImage(e.canvas)}})}}const f=o;export{f as T};
