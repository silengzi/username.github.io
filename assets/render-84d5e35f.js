import{g as l,C as i}from"./vector-01534e8d.js";import{aQ as f,cl as m,aR as x,aA as h}from"./Layer-3211d6ef.js";function u(t,r){const a=t.canvas;r=r||{};const n=r.pixelRatio||m,e=r.size;e&&(a.width=e[0]*n,a.height=e[1]*n,a.style.width=e[0]+"px",a.style.height=e[1]+"px");const s=[0,0,a.width,a.height],o=x(h(),n,n);return new i(t,n,s,o,0)}function T(t){if(!(t.context instanceof CanvasRenderingContext2D))throw new Error("Only works for render events from Canvas 2D layers");const r=t.inversePixelTransform[0],a=t.inversePixelTransform[1],n=Math.sqrt(r*r+a*a),e=t.frameState,s=f(t.inversePixelTransform.slice(),e.coordinateToPixelTransform),o=l(e.viewState.resolution,n);let c;return new i(t.context,n,e.extent,s,e.viewState.rotation,o,c)}export{T as g,u as t};