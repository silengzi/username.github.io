import{X as u}from"./XYZ-7263712f.js";import{A as l}from"./OSM-7231e773.js";const p='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>',c='&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',_='&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>',x={stamen_terrain:{extension:"png",opaque:!0},stamen_terrain_background:{extension:"png",opaque:!0},stamen_terrain_labels:{extension:"png",opaque:!1},stamen_terrain_lines:{extension:"png",opaque:!1},stamen_toner_background:{extension:"png",opaque:!0},stamen_toner:{extension:"png",opaque:!0},stamen_toner_labels:{extension:"png",opaque:!1},stamen_toner_lines:{extension:"png",opaque:!1},stamen_toner_lite:{extension:"png",opaque:!0},stamen_watercolor:{extension:"jpg",opaque:!0},alidade_smooth:{extension:"png",opaque:!0},alidade_smooth_dark:{extension:"png",opaque:!0},outdoors:{extension:"png",opaque:!0},osm_bright:{extension:"png",opaque:!0}},d={stamen_terrain:{minZoom:0,maxZoom:18,retina:!0},stamen_toner:{minZoom:0,maxZoom:20,retina:!0},stamen_watercolor:{minZoom:1,maxZoom:18,retina:!1}};class g extends u{constructor(e){const n=e.layer.indexOf("-"),i=n==-1?e.layer:e.layer.slice(0,n),a=d[i]||{minZoom:0,maxZoom:20,retina:!0},t=x[e.layer],s=e.apiKey?"?api_key="+e.apiKey:"",r=a.retina&&e.retina?"@2x":"",m=e.url!==void 0?e.url:"https://tiles.stadiamaps.com/tiles/"+e.layer+"/{z}/{x}/{y}"+r+"."+t.extension+s,o=[p,c,l];e.layer.startsWith("stamen_")&&o.splice(1,0,_),super({attributions:o,cacheSize:e.cacheSize,crossOrigin:"anonymous",interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:a.maxZoom,minZoom:e.minZoom!==void 0?e.minZoom:a.minZoom,opaque:t.opaque,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:m,tilePixelRatio:r?2:1,wrapX:e.wrapX,zDirection:e.zDirection})}}const q=g;export{q as S};
