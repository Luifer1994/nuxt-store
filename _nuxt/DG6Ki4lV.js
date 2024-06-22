import{ad as W,ae as J,af as b,ag as H,ah as C,ai as U,aj as j,W as I,U as L,x as p,j as k,r as S,u as B,g as x,ak as D,Q as P,$ as F,R as T}from"./u-GsJcRl.js";async function G(e,t){return await V(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function V(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function O(e){return t=>t?e[t]||t:e.missingValue}function Q({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=O(t));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=O(o[n]))}),(n={})=>Object.entries(n).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=o[a];return typeof l=="function"&&(d=l(n[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(r)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function X(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function Y(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Z(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function K(e){const t={options:e},r=(o,n={})=>q(t,o,n),i=(o,n={},s={})=>r(o,{...s,modifiers:C(n,s.modifiers||{})}).url;for(const o in e.presets)i[o]=(n,s,a)=>i(n,s,{...e.presets[o],...a});return i.options=e,i.getImage=r,i.getMeta=(o,n)=>ee(t,o,n),i.getSizes=(o,n)=>re(t,o,n),t.$img=i,i}async function ee(e,t,r){const i=q(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await G(e,i.url)}function q(e,t,r){var l,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=te(e,r.provider||e.options.provider),n=ie(e,r.preset);if(t=W(t)?t:J(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=b(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&W(t)){const m=H(t).host;if(!e.options.domains.find(w=>w===m))return{url:t}}const s=C(r,n,o);s.modifiers={...s.modifiers};const a=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=h(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=h(s.modifiers.height));const d=i.getImage(t,s,e);return d.format=d.format||a||"",d}function te(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ie(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function re(e,t,r){var g,_,z,$,N;const i=h((g=r.modifiers)==null?void 0:g.width),o=h((_=r.modifiers)==null?void 0:_.height),n=Z(r.sizes),s=(z=r.densities)!=null&&z.trim()?X(r.densities.trim()):e.options.densities;Y(s);const a=i&&o?o/i:0,d=[],l=[];if(Object.keys(n).length>=1){for(const f in n){const v=A(f,String(n[f]),o,a,e);if(v!==void 0){d.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const y of s)l.push({width:v._cWidth*y,src:M(e,t,r,v,y)})}}oe(d)}else for(const f of s){const v=Object.keys(n)[0];let y=A(v,String(n[v]),o,a,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:($=r.modifiers)==null?void 0:$.width,_cHeight:(N=r.modifiers)==null?void 0:N.height}),l.push({width:f,src:M(e,t,r,y,f)})}ne(l);const u=l[l.length-1],m=d.length?d.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,w=m?"w":"x",c=l.map(f=>`${f.src} ${f.width}${w}`).join(", ");return{sizes:m,srcset:c,src:u==null?void 0:u.src}}function A(e,t,r,i,o){const n=o.options.screens&&o.options.screens[e]||Number.parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;s&&(a=Math.round(a/100*n));const d=i?Math.round(a*i):r;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:d}}function M(e,t,r,i,o){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},r)}function oe(e){var r;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function ne(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const se=Q({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>j(e)+"_"+j(t)}),ae=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=se(t)||"_";return r||(r=b(i.options.nuxt.baseURL,"/_ipx")),{url:b(r,o,U(e))}},de=!0,ce=!0,le=Object.freeze(Object.defineProperty({__proto__:null,getImage:ae,supportsAlias:ce,validateDomains:de},Symbol.toStringTag,{value:"Module"})),E={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};E.providers={ipxStatic:{provider:le,defaults:{}}};const R=()=>{const e=L(),t=I();return t.$img||t._img||(t._img=K({...E,nuxt:{baseURL:e.app.baseURL}}))};function ue(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const fe={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},me=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=R(),o=p(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:o}},ge={...fe,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},ye=k({name:"NuxtImg",props:ge,emits:["load","error"],setup:(e,t)=>{const r=R(),i=me(e),o=S(!1),n=S(),s=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),a=p(()=>{const c={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(c.sizes=s.value.sizes,c.srcset=s.value.srcset),c}),d=p(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||o.value)return!1;if(typeof c=="string")return c;const g=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return r(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),l=p(()=>e.sizes?s.value.src:r(e.src,i.modifiers.value,i.options.value)),u=p(()=>d.value?d.value:l.value);if(e.preload){const c=Object.values(s.value).every(g=>g);B({link:[{rel:"preload",as:"image",nonce:e.nonce,...c?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:u.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const w=I().isHydrating;return x(()=>{if(d.value){const c=new Image;c.src=l.value,e.sizes&&(c.sizes=s.value.sizes||"",c.srcset=s.value.srcset),c.onload=g=>{o.value=!0,t.emit("load",g)},ue("nuxt-image");return}n.value&&(n.value.complete&&w&&(n.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),n.value.onload=c=>{t.emit("load",c)},n.value.onerror=c=>{t.emit("error",c)})}),()=>D("img",{ref:n,...a.value,...t.attrs,class:e.placeholder&&!o.value?[e.placeholderClass]:void 0,src:u.value})}}),he=P("car",()=>{const t=I().$useToast,r=S([]),i=()=>{const a=localStorage.getItem("car");a!==null?r.value=JSON.parse(a):(r.value=[],localStorage.setItem("car",JSON.stringify([])))},o=a=>{r.value.push(a),t.add({title:"Item añadido al carrito",description:a.title,color:"green"})},n=a=>{var l;const d=(l=r.value.find(u=>u.id===a))==null?void 0:l.title;r.value=r.value.filter(u=>u.id!==a),t.add({title:"Item eliminado del carrito",description:d,color:"red"})},s=()=>{r.value=[],t.add({title:"Carrito limpiado",color:"orange"})};return typeof window<"u"&&x(()=>{i(),F(r,a=>{localStorage.setItem("car",JSON.stringify(a))},{deep:!0})}),{items:r,addItem:o,removeItem:n,clearCar:s}}),we=()=>{const e=he(),{items:t}=T(e);return{items:t,addItem:s=>{const a=t.value.find(d=>d.id===s.id);if(a){a.quantity=s.quantity;return}e.addItem(s)},removeItem:s=>{e.removeItem(s)},clearCar:()=>{e.clearCar()},getTotalItems:()=>t.value.reduce((s,a)=>s+a.quantity,0)}},ve=P("favorite",()=>{const e=S([]),t=()=>{const n=localStorage.getItem("favorite");n!==null?e.value=JSON.parse(n):(e.value=[],localStorage.setItem("favorite",JSON.stringify([])))},r=n=>{e.value.push(n)},i=n=>{e.value=e.value.filter(s=>s.id!==n)},o=()=>{e.value=[]};return typeof window<"u"&&x(()=>{t(),F(e,n=>{localStorage.setItem("favorite",JSON.stringify(n))},{deep:!0})}),{items:e,addItem:r,removeItem:i,clearFavorite:o}}),Se=()=>{const t=I().$useToast,r=ve(),{items:i}=T(r);return{items:i,addItem:d=>{i.value.find(u=>u.id===d.id)||(r.addItem(d),t.add({title:"Item añadido al favorito",description:d.title}))},removeItem:d=>{var u;const l=(u=i.value.find(m=>m.id===d))==null?void 0:u.title;r.removeItem(d),t.add({title:"Item eliminado de favoritos",description:l,color:"red"})},clearFavorite:()=>{r.clearFavorite(),t.add({title:"Todos los favoritos han sido eliminados",color:"orange"})},getTotalItems:()=>i.value.length}};export{ye as _,Se as a,we as u};