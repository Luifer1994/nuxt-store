import{X as $,Y as p,l as P,Z as j,z as F,$ as U,q as z,a0 as L,a1 as T,a2 as M,h as S,a3 as V,a4 as q,D as H,a5 as h,a6 as I,a7 as x,a8 as G,W as K}from"./C_UkjAcB.js";const N=t=>t==="defer"||t===!1;function A(...t){var g;const r=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(r);let[s,c,a={}]=t;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=$(),u=c,m=()=>p.value,b=()=>e.isHydrating?e.payload.data[s]:e.static.data[s];a.server=a.server??!0,a.default=a.default??m,a.getCachedData=a.getCachedData??b,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??p.deep,a.dedupe=a.dedupe??"cancel";const D=()=>a.getCachedData(s,e)!=null;if(!e._asyncData[s]||!a.immediate){(g=e.payload._errors)[s]??(g[s]=p.errorValue);const i=a.deep?P:j;e._asyncData[s]={data:i(a.getCachedData(s,e)??a.default()),pending:P(!D()),error:F(e.payload._errors,s),status:P("idle"),_default:a.default}}const n={...e._asyncData[s]};delete n._default,n.refresh=n.execute=(i={})=>{if(e._asyncDataPromises[s]){if(N(i.dedupe??a.dedupe))return e._asyncDataPromises[s];e._asyncDataPromises[s].cancelled=!0}if((i._initial||e.isHydrating&&i._initial!==!1)&&D())return Promise.resolve(a.getCachedData(s,e));n.pending.value=!0,n.status.value="pending";const f=new Promise((l,o)=>{try{l(u(e))}catch(y){o(y)}}).then(async l=>{if(f.cancelled)return e._asyncDataPromises[s];let o=l;a.transform&&(o=await a.transform(l)),a.pick&&(o=W(o,a.pick)),e.payload.data[s]=o,n.data.value=o,n.error.value=p.errorValue,n.status.value="success"}).catch(l=>{if(f.cancelled)return e._asyncDataPromises[s];n.error.value=M(l),n.data.value=S(a.default()),n.status.value="error"}).finally(()=>{f.cancelled||(n.pending.value=!1,delete e._asyncDataPromises[s])});return e._asyncDataPromises[s]=f,e._asyncDataPromises[s]},n.clear=()=>Q(e,s);const _=()=>n.refresh({_initial:!0}),w=a.server!==!1&&e.payload.serverRendered;{const i=V();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;U(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),z(()=>o.splice(0,o.length))}w&&e.isHydrating&&(n.error.value||D())?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const f=q();if(a.watch){const o=L(a.watch,()=>n.refresh());f&&T(o)}const l=e.hook("app:data:refresh",async o=>{(!o||o.includes(s))&&await n.refresh()});f&&T(l)}const v=Promise.resolve(e._asyncDataPromises[s]).then(()=>n);return Object.assign(v,n),v}function Q(t,r){r in t.payload.data&&(t.payload.data[r]=void 0),r in t.payload._errors&&(t.payload._errors[r]=p.errorValue),t._asyncData[r]&&(t._asyncData[r].data.value=void 0,t._asyncData[r].error.value=p.errorValue,t._asyncData[r].pending.value=!1,t._asyncData[r].status.value="idle"),r in t._asyncDataPromises&&(t._asyncDataPromises[r].cancelled=!0,t._asyncDataPromises[r]=void 0)}function W(t,r){const s={};for(const c of r)s[c]=t[c];return s}function X(t,r,s){const[c={},a]=typeof r=="string"?[{},r]:[r,s],e=H(()=>h(t)),u=c.key||I([a,typeof e.value=="string"?e.value:"",...Y(c)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const m=u===a?"$f"+u:u;if(!c.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:b,lazy:D,default:n,transform:_,pick:w,watch:v,immediate:g,getCachedData:i,deep:f,dedupe:l,...o}=c,y=x({...G,...o,cache:typeof c.cache=="boolean"?void 0:c.cache}),B={server:b,lazy:D,default:n,transform:_,pick:w,immediate:g,getCachedData:i,deep:f,dedupe:l,watch:v===!1?[]:[y,e,...v||[]]};let d;return A(m,()=>{var O;(O=d==null?void 0:d.abort)==null||O.call(d),d=typeof AbortController<"u"?new AbortController:{};const E=h(c.timeout);let C;return E&&(C=setTimeout(()=>d.abort(),E),d.signal.onabort=()=>clearTimeout(C)),(c.$fetch||globalThis.$fetch)(e.value,{signal:d.signal,...y}).finally(()=>{clearTimeout(C)})},B)}function Y(t){var s;const r=[((s=h(t.method))==null?void 0:s.toUpperCase())||"GET",h(t.baseURL)];for(const c of[t.params||t.query]){const a=h(c);if(!a)continue;const e={};for(const[u,m]of Object.entries(a))e[h(u)]=h(m);r.push(e)}return r}const R=(t,r={})=>{const s=K().public.urlBaseApi;return r.baseURL=s,r.headers={...r.headers,Authorization:"Bearer "},X(t,r,"$3gAaIfQpEP")},ee=async()=>{const{data:t,error:r}=await R("/products",{method:"GET",headers:{"Content-Type":"application/json"}});return t.value??[]},ae=async t=>{const{data:r,error:s}=await R(`/products/${t}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.value)throw new Error("Error al obtener el producto");return r.value??{}};export{ae as a,ee as g,A as u};