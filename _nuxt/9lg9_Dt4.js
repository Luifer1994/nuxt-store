import{g as Fe,f as He,h as Ue,i as X,n as We,j as Ge,k as ae,l as v,m as se,r as $,q as ye,_ as T,s as z,v as je,o as b,x as P,c as C,y as A,w as H,z as L,A as we,B as xe,C as R,D as Ve,a as s,P as Xe,E as Qe,F as ee,G as ie,H as Ke,I as ke,J as Pe,K as V,L as re,M as Te,N as te,O as q,t as w,Q as _e,R as Ce,S as Je,b as k,p as le,e as ce,d as K,T as Ye,U as Ze,u as et,V as ze,W as tt}from"./mlE68IOi.js";import{_ as ue}from"./CAlm1F--.js";import ot from"./Bd6VkOxd.js";import{_ as nt}from"./Dnd4V7Bd.js";import{i as rt,g as at}from"./BA45hisW.js";import"./CAZilBRX.js";function Oe(e){return Fe()?(He(e),!0):!1}function j(e){return typeof e=="function"?e():Ue(e)}const st=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const it=Object.prototype.toString,lt=e=>it.call(e)==="[object Object]",F=()=>{};function Ae(e,o){function t(...n){return new Promise((a,r)=>{Promise.resolve(e(()=>o.apply(this,n),{fn:o,thisArg:this,args:n})).then(a).catch(r)})}return t}function ct(e,o={}){let t,n,a=F;const r=i=>{clearTimeout(i),a(),a=F};return i=>{const d=j(e),c=j(o.maxWait);return t&&r(t),d<=0||c!==void 0&&c<=0?(n&&(r(n),n=null),Promise.resolve(i())):new Promise((f,u)=>{a=o.rejectOnCancel?u:f,c&&!n&&(n=setTimeout(()=>{t&&r(t),n=null,f(i())},c)),t=setTimeout(()=>{n&&r(n),n=null,f(i())},d)})}}function ut(...e){let o=0,t,n=!0,a=F,r,l,i,d,c;!Ge(e[0])&&typeof e[0]=="object"?{delay:l,trailing:i=!0,leading:d=!0,rejectOnCancel:c=!1}=e[0]:[l,i=!0,d=!0,c=!1]=e;const f=()=>{t&&(clearTimeout(t),t=void 0,a(),a=F)};return g=>{const m=j(l),h=Date.now()-o,y=()=>r=g();return f(),m<=0?(o=Date.now(),y()):(h>m&&(d||!n)?(o=Date.now(),y()):i&&(r=new Promise((_,x)=>{a=c?x:_,t=setTimeout(()=>{o=Date.now(),n=!0,_(y()),f()},Math.max(0,m-h))})),!d&&!t&&(t=setTimeout(()=>n=!0,m)),n=!1,r)}}function dt(e){return ae()}function ft(e,o=200,t={}){return Ae(ct(o,t),e)}function gt(e,o=200,t=!1,n=!0,a=!1){return Ae(ut(o,t,n,a),e)}function Le(e,o=!0,t){dt()?X(e,t):o?e():We(e)}function M(e){var o;const t=j(e);return(o=t==null?void 0:t.$el)!=null?o:t}const J=st?window:void 0;function $e(...e){let o,t,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,n,a]=e,o=J):[o,t,n,a]=e,!o)return F;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const r=[],l=()=>{r.forEach(f=>f()),r.length=0},i=(f,u,g,m)=>(f.addEventListener(u,g,m),()=>f.removeEventListener(u,g,m)),d=se(()=>[M(o),j(a)],([f,u])=>{if(l(),!f)return;const g=lt(u)?{...u}:u;r.push(...t.flatMap(m=>n.map(h=>i(f,m,h,g))))},{immediate:!0,flush:"post"}),c=()=>{d(),l()};return Oe(c),c}function pt(){const e=$(!1),o=ae();return o&&X(()=>{e.value=!0},o),e}function vt(e){const o=pt();return v(()=>(o.value,!!e()))}function Ee(e,o,t={}){const{window:n=J,...a}=t;let r;const l=vt(()=>n&&"ResizeObserver"in n),i=()=>{r&&(r.disconnect(),r=void 0)},d=v(()=>Array.isArray(e)?e.map(u=>M(u)):[M(e)]),c=se(d,u=>{if(i(),l.value&&n){r=new ResizeObserver(o);for(const g of u)g&&r.observe(g,a)}},{immediate:!0,flush:"post"}),f=()=>{i(),c()};return Oe(f),{isSupported:l,stop:f}}function mt(e,o={width:0,height:0},t={}){const{window:n=J,box:a="content-box"}=t,r=v(()=>{var u,g;return(g=(u=M(e))==null?void 0:u.namespaceURI)==null?void 0:g.includes("svg")}),l=$(o.width),i=$(o.height),{stop:d}=Ee(e,([u])=>{const g=a==="border-box"?u.borderBoxSize:a==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(n&&r.value){const m=M(e);if(m){const h=m.getBoundingClientRect();l.value=h.width,i.value=h.height}}else if(g){const m=Array.isArray(g)?g:[g];l.value=m.reduce((h,{inlineSize:y})=>h+y,0),i.value=m.reduce((h,{blockSize:y})=>h+y,0)}else l.value=u.contentRect.width,i.value=u.contentRect.height},t);Le(()=>{const u=M(e);u&&(l.value="offsetWidth"in u?u.offsetWidth:o.width,i.value="offsetHeight"in u?u.offsetHeight:o.height)});const c=se(()=>M(e),u=>{l.value=u?o.width:0,i.value=u?o.height:0});function f(){d(),c()}return{width:l,height:i,stop:f}}const Se=1;function bt(e,o={}){const{throttle:t=0,idle:n=200,onStop:a=F,onScroll:r=F,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:i={capture:!1,passive:!0},behavior:d="auto",window:c=J,onError:f=p=>{console.error(p)}}=o,u=$(0),g=$(0),m=v({get(){return u.value},set(p){y(p,void 0)}}),h=v({get(){return g.value},set(p){y(void 0,p)}});function y(p,D){var B,U,W,E;if(!c)return;const I=j(e);if(!I)return;(W=I instanceof Document?c.document.body:I)==null||W.scrollTo({top:(B=j(D))!=null?B:h.value,left:(U=j(p))!=null?U:m.value,behavior:j(d)});const G=((E=I==null?void 0:I.document)==null?void 0:E.documentElement)||(I==null?void 0:I.documentElement)||I;m!=null&&(u.value=G.scrollLeft),h!=null&&(g.value=G.scrollTop)}const _=$(!1),x=ye({left:!0,right:!1,top:!0,bottom:!1}),S=ye({left:!1,right:!1,top:!1,bottom:!1}),ve=p=>{_.value&&(_.value=!1,S.left=!1,S.right=!1,S.top=!1,S.bottom=!1,a(p))},Re=ft(ve,t+n),Z=p=>{var D;if(!c)return;const B=((D=p==null?void 0:p.document)==null?void 0:D.documentElement)||(p==null?void 0:p.documentElement)||M(p),{display:U,flexDirection:W}=getComputedStyle(B),E=B.scrollLeft;S.left=E<u.value,S.right=E>u.value;const I=Math.abs(E)<=(l.left||0),G=Math.abs(E)+B.clientWidth>=B.scrollWidth-(l.right||0)-Se;U==="flex"&&W==="row-reverse"?(x.left=G,x.right=I):(x.left=I,x.right=G),u.value=E;let N=B.scrollTop;p===c.document&&!N&&(N=c.document.body.scrollTop),S.top=N<g.value,S.bottom=N>g.value;const be=Math.abs(N)<=(l.top||0),he=Math.abs(N)+B.clientHeight>=B.scrollHeight-(l.bottom||0)-Se;U==="flex"&&W==="column-reverse"?(x.top=he,x.bottom=be):(x.top=be,x.bottom=he),g.value=N},me=p=>{var D;if(!c)return;const B=(D=p.target.documentElement)!=null?D:p.target;Z(B),_.value=!0,Re(p),r(p)};return $e(e,"scroll",t?gt(me,t,!0,!1):me,i),Le(()=>{try{const p=j(e);if(!p)return;Z(p)}catch(p){f(p)}}),$e(e,"scrollend",ve,i),{x:m,y:h,isScrolling:_,arrivedState:x,directions:S,measure(){const p=j(e);c&&p&&Z(p)}}}function ht(e,o){const t={...e};for(const n of o)delete t[n];return t}function yt(e,o,t){typeof o=="string"&&(o=o.split(".").map(a=>{const r=Number(a);return isNaN(r)?a:r}));let n=e;for(const a of o){if(n==null)return t;n=n[a]}return n!==void 0?n:t}const de={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},wt=e=>Object.keys(de).reduce((t,n)=>(e[n]!==void 0&&(t[n]=e[n]),t),{}),xt=z({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const o=je();return{dynamic:v(()=>{var n,a;return e.dynamic||((a=(n=o.ui)==null?void 0:n.icons)==null?void 0:a.dynamic)})}}});function kt(e,o,t,n,a,r){const l=ot;return e.dynamic?(b(),P(l,{key:0,name:e.name},null,8,["name"])):(b(),C("span",{key:1,class:A(e.name)},null,2))}const fe=T(xt,[["render",kt]]),_t=z({inheritAttrs:!1,props:{...de,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function o(t,n,{isActive:a,isExactActive:r}){return e.exactQuery&&!rt(t.query,n.query)||e.exactHash&&t.hash!==n.hash?e.inactiveClass:e.exact&&r||!e.exact&&a?e.activeClass:e.inactiveClass}return{resolveLinkClass:o}}}),Ct=["href","aria-disabled","role","rel","target","onClick"];function $t(e,o,t,n,a,r){const l=nt;return e.to?(b(),P(l,R({key:1},e.$props,{custom:""}),{default:H(({route:i,href:d,target:c,rel:f,navigate:u,isActive:g,isExactActive:m,isExternal:h})=>[s("a",R(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:f,target:c,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(i,e._.provides[Xe]||e.$route,{isActive:g,isExactActive:m}),onClick:y=>!h&&!e.disabled&&u(y)}),[L(e.$slots,"default",we(xe({isActive:e.active!==void 0?e.active:e.exact?m:g})))],16,Ct)]),_:3},16)):(b(),P(Ve(e.as),R({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:H(()=>[L(e.$slots,"default",we(xe({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const qe=T(_t,[["render",$t]]),Me=(e,o,t,n,a=!1)=>{const r=Qe(),l=je(),i=v(()=>{var g;const c=ee(o),f=ee(t),u=ee(n);return ie((c==null?void 0:c.strategy)||((g=l.ui)==null?void 0:g.strategy),u?{wrapper:u}:{},c||{},a?yt(l.ui,e,{}):{},f||{})}),d=v(()=>ht(r,["class"]));return{ui:i,attrs:d}};function St({ui:e,props:o}){const t=ae();if(Ke("ButtonGroupContextConsumer",!0),ke("ButtonGroupContextConsumer",!1))return{size:v(()=>o.size),rounded:v(()=>e.value.rounded)};let a=t.parent,r;for(;a&&!r;){if(a.type.name==="ButtonGroup"){r=ke(`group-${a.uid}`);break}a=a.parent}const l=v(()=>r==null?void 0:r.value.children.indexOf(t));return X(()=>{r==null||r.value.register(t)}),Pe(()=>{r==null||r.value.unregister(t)}),{size:v(()=>(r==null?void 0:r.value.size)||o.size),rounded:v(()=>!r||l.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:l.value===0?r.value.rounded.start:l.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const Bt={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},De={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},It={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Be={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...De,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...Be,option:{...Be.option},arrow:{...De}});const O=ie(V.ui.strategy,V.ui.button,Bt),jt=z({components:{UIcon:fe,ULink:qe},inheritAttrs:!1,props:{...de,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>O.default.size,validator(e){return Object.keys(O.size).includes(e)}},color:{type:String,default:()=>O.default.color,validator(e){return[...V.ui.colors,...Object.keys(O.color)].includes(e)}},variant:{type:String,default:()=>O.default.variant,validator(e){return[...Object.keys(O.variant),...Object.values(O.color).flatMap(o=>Object.keys(o))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>O.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:o}){const{ui:t,attrs:n}=Me("button",re(e,"ui"),O),{size:a,rounded:r}=St({ui:t,props:e}),l=v(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),i=v(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=v(()=>e.square||!o.default&&!e.label),c=v(()=>{var _,x;const y=((x=(_=t.value.color)==null?void 0:_[e.color])==null?void 0:x[e.variant])||t.value.variant[e.variant];return Te(te(t.value.base,t.value.font,r.value,t.value.size[a.value],t.value.gap[a.value],e.padded&&t.value[d.value?"square":"padding"][a.value],y==null?void 0:y.replaceAll("{color}",e.color),e.block?t.value.block:t.value.inline),e.class)}),f=v(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),u=v(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),g=v(()=>te(t.value.icon.base,t.value.icon.size[a.value],e.loading&&t.value.icon.loading)),m=v(()=>te(t.value.icon.base,t.value.icon.size[a.value],e.loading&&!l.value&&t.value.icon.loading)),h=v(()=>wt(e));return{ui:t,attrs:n,isLeading:l,isTrailing:i,isSquare:d,buttonClass:c,leadingIconName:f,trailingIconName:u,leadingIconClass:g,trailingIconClass:m,linkProps:h}}});function Pt(e,o,t,n,a,r){const l=fe,i=qe;return b(),P(i,R({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:H(()=>[L(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(b(),P(l,{key:0,name:e.leadingIconName,class:A(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):q("",!0)]),L(e.$slots,"default",{},()=>[e.label?(b(),C("span",{key:0,class:A([e.truncate?e.ui.truncate:""])},w(e.label),3)):q("",!0)]),L(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(b(),P(l,{key:0,name:e.trailingIconName,class:A(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):q("",!0)])]),_:3},16,["type","disabled","class"])}const Ne=T(jt,[["render",Pt]]),Tt=e=>{const o=$(0);function t(r){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",o.value=r.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",n)}function n(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",n)}function a(r){r.preventDefault(),e.value.style.pointerEvents="none";const l=r.pageX-o.value;o.value=r.pageX,e.value.scrollBy(-l,0)}X(()=>{e.value&&e.value.addEventListener("mousedown",t)}),Pe(()=>{e.value&&e.value.removeEventListener("mousedown",t)})},oe=ie(V.ui.strategy,V.ui.carousel,It),zt=z({components:{UButton:Ne},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>oe.default.prevButton},nextButton:{type:Object,default:()=>oe.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:o}){const{ui:t,attrs:n}=Me("carousel",re(e,"ui"),oe,re(e,"class")),a=$(),r=$(0),{x:l}=bt(a,{behavior:"smooth"}),{width:i}=mt(a);Tt(a),Ee(a,y=>{var x,S;const[_]=y;r.value=((S=(x=_==null?void 0:_.target)==null?void 0:x.firstElementChild)==null?void 0:S.clientWidth)||0});const d=v(()=>r.value?Math.round(l.value/r.value)+1:0),c=v(()=>r.value?e.items.length-Math.round(i.value/r.value)+1:0),f=v(()=>d.value<=1),u=v(()=>d.value===c.value);function g(){l.value+=r.value}function m(){l.value-=r.value}function h(y){l.value=(y-1)*r.value}return o({pages:c,page:d,prev:m,next:g,select:h}),{ui:t,attrs:n,isFirst:f,isLast:u,carouselRef:a,pages:c,currentPage:d,onClickNext:g,onClickPrev:m,onClick:h,twMerge:Te}}}),Ot=["role"],At=["aria-selected","aria-label","onClick"];function Lt(e,o,t,n,a,r){const l=Ne;return b(),C("div",R({class:e.ui.wrapper},e.attrs),[s("div",{ref:"carouselRef",class:A([e.ui.container,"no-scrollbar"])},[(b(!0),C(_e,null,Ce(e.items,(i,d)=>(b(),C("div",{key:d,class:A(e.ui.item),role:e.indicators?"tabpanel":null},[L(e.$slots,"default",{item:i,index:d},void 0,!0)],10,Ot))),128))],2),e.arrows?(b(),C("div",{key:0,class:A(e.ui.arrows.wrapper)},[L(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var i;return[e.prevButton?(b(),P(l,R({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(i=e.prevButton)==null?void 0:i.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):q("",!0)]},!0),L(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var i;return[e.nextButton?(b(),P(l,R({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(i=e.nextButton)==null?void 0:i.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):q("",!0)]},!0)],2)):q("",!0),e.indicators?(b(),C("div",{key:1,role:"tablist",class:A(e.ui.indicators.wrapper)},[(b(!0),C(_e,null,Ce(e.pages,i=>L(e.$slots,"indicator",{key:i,onClick:e.onClick,active:i===e.currentPage,page:i},()=>[s("button",{type:"button",role:"tab","aria-selected":i===e.currentPage,class:A([e.ui.indicators.base,i===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${i}`,onClick:d=>e.onClick(i)},null,10,At)],!0)),128))],2)):q("",!0)],16)}const ge=T(zt,[["render",Lt],["__scopeId","data-v-ea54307d"]]),Et={key:0,class:"relative w-full group"},qt={class:"absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4"},Mt={class:"text-2xl font-bold mb-2"},Dt={class:"mb-4"},Nt={class:"bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"},Rt={key:1,class:"relative w-full p-4 group"},Ft={class:"p-4 bg-white rounded-lg shadow text-center h-32 flex flex-col justify-center transition-transform duration-300 ease-in-out group-hover:scale-105"},Ht={class:"text-xl font-semibold"},Ut={class:"text-gray-600"},Wt={key:0,class:"text-indigo-500 font-bold"},Gt=z({__name:"Carousel",props:{items:{type:Array,required:!0},type:{type:String,required:!0,validator:e=>["large","small"].includes(e)},interval:{type:Number,default:3e3}},setup(e){const o=e,t=$(null);let n;const a=v(()=>o.type==="large"?"basis-full":"xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5");return X(()=>{n=window.setInterval(()=>{if(t.value){if(t.value.page===t.value.pages)return t.value.select(0);t.value.next()}},o.interval)}),Je(()=>{n&&clearInterval(n)}),(r,l)=>{const i=ue,d=ge;return b(),P(d,{ref_key:"carouselRef",ref:t,items:o.items,ui:{item:a.value,indicators:{base:"rounded-full h-3 w-3",active:"bg-indigo-500",inactive:"bg-gray-300"}},class:"rounded-lg overflow-hidden relative w-full",indicators:""},{default:H(({item:c})=>[o.type==="large"?(b(),C("div",Et,[k(i,{width:"600",height:"400",src:c.src,class:"w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110",draggable:"false",loading:"lazy",priority:"",alt:c.title},null,8,["src","alt"]),s("div",qt,[s("h2",Mt,w(c.title),1),s("p",Dt,w(c.description),1),s("button",Nt,w(c.buttonText),1)])])):(b(),C("div",Rt,[s("div",Ft,[s("h2",Ht,w(c.title),1),s("p",Ut,w(c.itemsCount)+" items",1),c.discount?(b(),C("p",Wt,w(c.discount)+"% off ",1)):q("",!0)])]))]),_:1},8,["items","ui"])}}}),Vt=T(Gt,[["__scopeId","data-v-6ad14ae4"]]),Xt=e=>(le("data-v-ef58529a"),e=e(),ce(),e),Qt={class:"relative overflow-hidden rounded-lg group mx-1 sm:mx-2 md:mx-3"},Kt={class:"absolute inset-x-0 bottom-0"},Jt={class:"px-2 py-2 xl:px-4 xl:py-3"},Yt={class:"text-sm font-bold text-gray-900 xl:text-base"},Zt=["href"],eo=Xt(()=>s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),to=[eo],oo=z({__name:"CategoryCarousel",props:{items:{type:Array,required:!0},interval:{type:Number,default:3e3}},setup(e){const o=e,t=$(),n=v(()=>"w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5");return(a,r)=>{const l=ue,i=ge;return b(),P(i,{ref_key:"carouselRef",ref:t,items:o.items,ui:{item:n.value},class:"rounded-lg overflow-hidden relative w-full",indicators:!1},{default:H(({item:d})=>[s("div",Qt,[s("div",null,[k(l,{width:"600",height:"400",class:"object-cover w-full h-46 sm:h-46 md:h-46 lg:h-46 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125",src:d.image,alt:d.title,loading:"lazy"},null,8,["src","alt"])]),s("div",Kt,[s("div",Jt,[s("p",Yt,w(d.title),1)])]),s("a",{href:d.link,title:""},to,8,Zt)])]),_:1},8,["items","ui"])}}}),no=T(oo,[["__scopeId","data-v-ef58529a"]]),ro={class:"relative overflow-hidden rounded-lg shadow-lg group"},ao={class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"},so={class:"text-center text-white"},io={class:"text-3xl font-bold mb-2"},lo={class:"text-xl mb-4"},co={class:"text-lg text-indigo-400 font-semibold mb-2"},uo={class:"text-base mb-4"},fo={class:"bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"},go=z({__name:"DiscountBanner",props:{banner:{type:Object,required:!0,default:()=>({image:"https://picsum.photos/800/400",title:"Frutas Frescas",subtitle:"Productos Saludables",discountText:"30% de descuento en oferta ¡¡¡ Date prisa!!!",description:"",buttonText:"Compra ahora"})}},setup(e){const o=t=>{t.target.src="/default-img.jpg"};return(t,n)=>{const a=ue;return b(),C("div",ro,[k(a,{width:"600",height:"400",src:e.banner.image,class:"w-full h-64 object-cover transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125",alt:e.banner.title,loading:"lazy",onError:o},null,8,["src","alt"]),s("div",ao,[s("div",so,[s("h2",io,w(e.banner.title),1),s("p",lo,w(e.banner.subtitle),1),s("p",co,w(e.banner.discountText),1),s("p",uo,w(e.banner.description),1),s("button",fo,w(e.banner.buttonText),1)])])])}}}),ne=T(go,[["__scopeId","data-v-adb4f1db"]]),po={class:"bg-white border rounded-lg p-6 text-center"},vo={class:"flex justify-center mb-4"},mo={class:"text-lg font-semibold mb-2"},bo={class:"text-gray-500"},ho=z({__name:"CardInfo",props:{title:{type:String,required:!0},description:{type:String,required:!0},icon:{type:String,required:!0}},setup(e){return(o,t)=>{const n=fe;return b(),C("div",po,[s("div",vo,[k(n,{name:e.icon,class:"h-10 w-10 text-gray-500"},null,8,["name"])]),s("h3",mo,w(e.title),1),s("p",bo,w(e.description),1)])}}}),Q=T(ho,[["__scopeId","data-v-a6879dcd"]]),pe=e=>(le("data-v-12847777"),e=e(),ce(),e),yo={class:"relative overflow-hidden bg-white border border-gray-200 rounded-lg group mx-2 flex flex-col justify-between"},wo=pe(()=>s("div",{class:"absolute z-10 top-3 right-3"},[s("button",{type:"button",class:"inline-flex items-center justify-center text-gray-400 hover:text-rose-500"},[s("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])])],-1)),xo=["onClick"],ko={class:"aspect-w-1 aspect-h-1"},_o=["src"],Co={class:"px-6 py-5 flex-1"},$o={class:"text-xs font-medium tracking-widest text-gray-400 uppercase"},So={class:"mt-3 text-sm font-medium min-h-[30px]"},Bo=["href","title"],Io=pe(()=>s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),jo={class:"mt-5 text-sm font-bold min-h-[20px]"},Po=pe(()=>s("div",{class:"absolute inset-x-0 bottom-0 transition-all duration-200 translate-y-full group-hover:translate-y-0"},[s("button",{type:"button",class:"flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-indigo-600"},[s("svg",{class:"w-5 h-5 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})]),K(" Agregar al carrito ")])],-1)),To=z({__name:"CarouselProducts",props:{items:{},interval:{},refDom:{}},emits:["productClick"],setup(e,{emit:o}){const t=e,n=o,a=$(null),r=v(()=>"xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"),l=(i,d)=>{d.preventDefault(),n("productClick",i)};return(i,d)=>{const c=ge;return b(),P(c,{ref_key:"carouselRef",ref:a,items:t.items,ui:{item:r.value},class:"rounded-lg overflow-hidden w-full",indicators:!1},{default:H(({item:f})=>[s("div",yo,[wo,s("div",{class:"relative",onClick:u=>l(f.id,u)},[s("div",ko,[s("img",{class:"object-cover w-full h-full",src:f.images[0],alt:""},null,8,_o)]),s("div",Co,[s("p",$o,w(f.category.name),1),s("h3",So,[s("a",{href:`/product/${f.id}`,title:f.title},[K(w(f.title)+" ",1),Io],8,Bo)]),s("p",jo,"$"+w(f.price),1)])],8,xo),Po])]),_:1},8,["items","ui"])}}}),Ie=T(To,[["__scopeId","data-v-12847777"]]),Y=e=>(le("data-v-6a8dfbf7"),e=e(),ce(),e),zo={class:"container mx-auto"},Oo={class:"container mt-5"},Ao=Y(()=>s("h2",{class:"text-3xl font-semibold sm:text-3xl my-10"}," Productos destacados ",-1)),Lo={class:"mt-10"},Eo=ze('<div class="flex items-center justify-center lg:justify-between" data-v-6a8dfbf7><div class="hidden lg:flex" data-v-6a8dfbf7><a href="#" title="" class="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900" data-v-6a8dfbf7> Check all items <svg class="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6a8dfbf7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-6a8dfbf7></path></svg></a></div></div>',1),qo=Y(()=>s("div",{class:"mt-12 text-center lg:hidden"},[s("a",{href:"#",title:"",class:"inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"},[K(" Check all items "),s("svg",{class:"w-5 h-5 ml-2 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})])])],-1)),Mo={class:"container mx-auto py-8"},Do={class:"container mt-5"},No=Y(()=>s("h2",{class:"text-3xl font-semibold sm:text-3xl my-10"}," Productos recien llegados ",-1)),Ro={class:"mt-10"},Fo=ze('<div class="flex items-center justify-center lg:justify-between" data-v-6a8dfbf7><div class="hidden lg:flex" data-v-6a8dfbf7><a href="#" title="" class="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900" data-v-6a8dfbf7> Check all items <svg class="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6a8dfbf7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-6a8dfbf7></path></svg></a></div></div>',1),Ho=Y(()=>s("div",{class:"mt-12 text-center lg:hidden"},[s("a",{href:"#",title:"",class:"inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"},[K(" Check all items "),s("svg",{class:"w-5 h-5 ml-2 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})])])],-1)),Uo={class:"container mx-auto py-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6"},Wo={class:"container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"},Go=z({__name:"index",async setup(e){let o,t;Ye();const n=$([]),a=([o,t]=Ze(()=>at()),o=await o,t(),o);n.value=a.filter(c=>c.images.length>1),n.value=n.value.slice(0,10),et({title:"Título de la página específica",meta:[{name:"description",content:"Descripción de la página específica"}]});const r=c=>{tt(`/products/${c}`)},l=[{src:"https://www.apple.com/co/product-red/images/meta/og_world_aids__ccal5yhp82b6_day.png?202311281022",title:"Starting at $20.00",description:"Organic & healthy vegetables",buttonText:"Shop Now"},{src:"https://cdn.thewirecutter.com/wp-content/media/2022/03/primedayapple-2048px-2686-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",title:"Bakery Products",description:"Freshly baked everyday",buttonText:"Order Now"},{src:"https://kompiuterioremontas.lt/wp-content/uploads/2022/10/Apple-MacBook-ipad-imac-Kompiuteriu-remontas-vilniuje.jpg",title:"Dairy Products",description:"Quality dairy products",buttonText:"Get Now"}],i=[{title:"Fashion",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-1.png",link:"#"},{title:"Electronics",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-2.png",link:"#"},{title:"Home & Garden",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-3.png",link:"#"},{title:"Sports",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-4.png",link:"#"},{title:"Toys",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-5.png",link:"#"}],d={image:"https://img.freepik.com/fotos-premium/volando-frutas-bayas-aisladas-sobre-fondo-blanco_88281-2199.jpg?w=2000",title:"Frutas Frescas",subtitle:"Productos Saludables",discountText:"30% de descuento en oferta ¡¡¡ Date prisa!!!",description:"Aprovecha nuestras ofertas de temporada con los mejores productos frescos.",buttonText:"Compra ahora"};return(c,f)=>(b(),C("div",zo,[k(Vt,{items:l,type:"large"}),s("div",Oo,[k(no,{items:i}),Ao,s("div",Lo,[Eo,k(Ie,{items:n.value,interval:3e3,refDom:"category",onProductClick:r},null,8,["items"]),qo])]),s("div",Mo,[k(ne,{banner:d})]),s("div",Do,[No,s("div",Ro,[Fo,k(Ie,{items:n.value,interval:3e3,refDom:"category",onProductClick:r},null,8,["items"]),Ho])]),s("div",Uo,[k(ne,{banner:d}),k(ne,{banner:d})]),s("div",Wo,[k(Q,{title:"Free Shipping",description:"Free shipping on all orders over $200 in the US.",icon:"i-heroicons-truck"}),k(Q,{title:"24/7 Support",description:"Contact us 24 hours a day, 7 days a week.",icon:"i-heroicons-device-phone-mobile"}),k(Q,{title:"30 Days Return",description:"Simply return it within 30 days for an exchange.",icon:"i-heroicons-arrow-path"}),k(Q,{title:"Secure Payment",description:"We ensure secure payment with PEV.",icon:"i-heroicons-currency-dollar"})])]))}}),Zo=T(Go,[["__scopeId","data-v-6a8dfbf7"]]);export{Zo as default};