import{l as w,m as Q,q as se,_ as k,s as oe,v as V,g as C,x as Y,y as ae,z as W,A as ne,B as re,C as ie,D as x,E as le,o as p,c as v,a as t,F as G,r as X,k as b,G as F,H as j,I as E,J as B,K as ce,w as R,b as u,t as m,p as U,f as L,i as Z,d as q,j as K,L as de,M as ue,u as pe,N as ee,O as me}from"./DofzhXLn.js";import{_ as O}from"./CPeJ5E9q.js";import{g as fe}from"./BViJbrWJ.js";import{u as ge,a as he}from"./CEryG8Gg.js";const ve={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},_e=e=>{const o=w(0);function a(n){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",o.value=n.pageX,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}function l(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)}function c(n){n.preventDefault(),e.value.style.pointerEvents="none";const f=n.pageX-o.value;o.value=n.pageX,e.value.scrollBy(-f,0)}Q(()=>{e.value&&e.value.addEventListener("mousedown",a)}),se(()=>{e.value&&e.value.removeEventListener("mousedown",a)})},z=oe(V.ui.strategy,V.ui.carousel,ve),ye=C({components:{UButton:Y},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>z.default.prevButton},nextButton:{type:Object,default:()=>z.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:o}){const{ui:a,attrs:l}=ae("carousel",W(e,"ui"),z,W(e,"class")),c=w(),n=w(0),{x:f}=ne(c,{behavior:"smooth"}),{width:s}=re(c);_e(c),ie(c,_=>{var g,y;const[d]=_;n.value=((y=(g=d==null?void 0:d.target)==null?void 0:g.firstElementChild)==null?void 0:y.clientWidth)||0});const r=x(()=>n.value?Math.round(f.value/n.value)+1:0),i=x(()=>n.value?e.items.length-Math.round(s.value/n.value)+1:0),P=x(()=>r.value<=1),D=x(()=>r.value===i.value);function S(){f.value+=n.value}function N(){f.value-=n.value}function $(_){f.value=(_-1)*n.value}return o({pages:i,page:r,prev:N,next:S,select:$}),{ui:a,attrs:l,isFirst:P,isLast:D,carouselRef:c,pages:i,currentPage:r,onClickNext:S,onClickPrev:N,onClick:$,twMerge:le}}}),be=["role"],xe=["aria-selected","aria-label","onClick"];function we(e,o,a,l,c,n){const f=Y;return p(),v("div",E({class:e.ui.wrapper},e.attrs),[t("div",{ref:"carouselRef",class:b([e.ui.container,"no-scrollbar"])},[(p(!0),v(G,null,X(e.items,(s,r)=>(p(),v("div",{key:r,class:b(e.ui.item),role:e.indicators?"tabpanel":null},[F(e.$slots,"default",{item:s,index:r},void 0,!0)],10,be))),128))],2),e.arrows?(p(),v("div",{key:0,class:b(e.ui.arrows.wrapper)},[F(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var s;return[e.prevButton?(p(),B(f,E({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(s=e.prevButton)==null?void 0:s.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):j("",!0)]},!0),F(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var s;return[e.nextButton?(p(),B(f,E({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(s=e.nextButton)==null?void 0:s.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):j("",!0)]},!0)],2)):j("",!0),e.indicators?(p(),v("div",{key:1,role:"tablist",class:b(e.ui.indicators.wrapper)},[(p(!0),v(G,null,X(e.pages,s=>F(e.$slots,"indicator",{key:s,onClick:e.onClick,active:s===e.currentPage,page:s},()=>[t("button",{type:"button",role:"tab","aria-selected":s===e.currentPage,class:b([e.ui.indicators.base,s===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${s}`,onClick:r=>e.onClick(s)},null,10,xe)],!0)),128))],2)):j("",!0)],16)}const H=k(ye,[["render",we],["__scopeId","data-v-ea54307d"]]),ke={key:0,class:"relative w-full group"},Ce={class:"absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4"},$e={class:"text-2xl font-bold mb-2"},Ie={class:"mb-4"},je={class:"bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"},Be={key:1,class:"relative w-full p-4 group"},Pe={class:"p-4 bg-white rounded-lg shadow text-center h-32 flex flex-col justify-center transition-transform duration-300 ease-in-out group-hover:scale-105"},Se={class:"text-xl font-semibold"},Ne={class:"text-gray-600"},Fe={key:0,class:"text-indigo-500 font-bold"},Me=C({__name:"Carousel",props:{items:{type:Array,required:!0},type:{type:String,required:!0,validator:e=>["large","small"].includes(e)},interval:{type:Number,default:3e3}},setup(e){const o=e,a=w(null);let l;const c=x(()=>o.type==="large"?"basis-full":"xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5");return Q(()=>{l=window.setInterval(()=>{if(a.value){if(a.value.page===a.value.pages)return a.value.select(0);a.value.next()}},o.interval)}),ce(()=>{l&&clearInterval(l)}),(n,f)=>{const s=O,r=H;return p(),B(r,{ref_key:"carouselRef",ref:a,items:o.items,ui:{item:c.value,indicators:{base:"rounded-full h-3 w-3",active:"bg-indigo-500",inactive:"bg-gray-300"}},class:"rounded-lg overflow-hidden relative w-full",indicators:""},{default:R(({item:i})=>[o.type==="large"?(p(),v("div",ke,[u(s,{width:"600",height:"400",src:i.src,class:"w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110",draggable:"false",loading:"lazy",priority:"",alt:i.title},null,8,["src","alt"]),t("div",Ce,[t("h2",$e,m(i.title),1),t("p",Ie,m(i.description),1),t("button",je,m(i.buttonText),1)])])):(p(),v("div",Be,[t("div",Pe,[t("h2",Se,m(i.title),1),t("p",Ne,m(i.itemsCount)+" items",1),i.discount?(p(),v("p",Fe,m(i.discount)+"% off ",1)):j("",!0)])]))]),_:1},8,["items","ui"])}}}),Te=k(Me,[["__scopeId","data-v-6ad14ae4"]]),De=e=>(U("data-v-ef58529a"),e=e(),L(),e),Ee={class:"relative overflow-hidden rounded-lg group mx-1 sm:mx-2 md:mx-3"},ze={class:"absolute inset-x-0 bottom-0"},Ae={class:"px-2 py-2 xl:px-4 xl:py-3"},Re={class:"text-sm font-bold text-gray-900 xl:text-base"},Ue=["href"],Le=De(()=>t("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),qe=[Le],Oe=C({__name:"CategoryCarousel",props:{items:{type:Array,required:!0},interval:{type:Number,default:3e3}},setup(e){const o=e,a=w(),l=x(()=>"w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5");return(c,n)=>{const f=O,s=H;return p(),B(s,{ref_key:"carouselRef",ref:a,items:o.items,ui:{item:l.value},class:"rounded-lg overflow-hidden relative w-full",indicators:!1},{default:R(({item:r})=>[t("div",Ee,[t("div",null,[u(f,{width:"600",height:"400",class:"object-cover w-full h-46 sm:h-46 md:h-46 lg:h-46 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125",src:r.image,alt:r.title,loading:"lazy"},null,8,["src","alt"])]),t("div",ze,[t("div",Ae,[t("p",Re,m(r.title),1)])]),t("a",{href:r.link,title:""},qe,8,Ue)])]),_:1},8,["items","ui"])}}}),He=k(Oe,[["__scopeId","data-v-ef58529a"]]),Ve={class:"relative overflow-hidden rounded-lg shadow-lg group"},We={class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"},Ge={class:"text-center text-white"},Xe={class:"text-3xl font-bold mb-2"},Ke={class:"text-xl mb-4"},Je={class:"text-lg text-indigo-400 font-semibold mb-2"},Qe={class:"text-base mb-4"},Ye={class:"bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"},Ze=C({__name:"DiscountBanner",props:{banner:{type:Object,required:!0,default:()=>({image:"https://picsum.photos/800/400",title:"Frutas Frescas",subtitle:"Productos Saludables",discountText:"30% de descuento en oferta ¡¡¡ Date prisa!!!",description:"",buttonText:"Compra ahora"})}},setup(e){const o=a=>{a.target.src="/default-img.jpg"};return(a,l)=>{const c=O;return p(),v("div",Ve,[u(c,{width:"600",height:"400",src:e.banner.image,class:"w-full h-64 object-cover transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125",alt:e.banner.title,loading:"lazy",onError:o},null,8,["src","alt"]),t("div",We,[t("div",Ge,[t("h2",Xe,m(e.banner.title),1),t("p",Ke,m(e.banner.subtitle),1),t("p",Je,m(e.banner.discountText),1),t("p",Qe,m(e.banner.description),1),t("button",Ye,m(e.banner.buttonText),1)])])])}}}),A=k(Ze,[["__scopeId","data-v-adb4f1db"]]),et={class:"rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-center"},tt={class:"flex justify-center mb-4"},st={class:"text-lg font-semibold mb-2"},ot={class:"text-gray-500"},at=C({__name:"CardInfo",props:{title:{type:String,required:!0},description:{type:String,required:!0},icon:{type:String,required:!0}},setup(e){return(o,a)=>{const l=Z;return p(),v("div",et,[t("div",tt,[u(l,{name:e.icon,class:"h-10 w-10 text-gray-500"},null,8,["name"])]),t("h3",st,m(e.title),1),t("p",ot,m(e.description),1)])}}}),M=k(at,[["__scopeId","data-v-c1622133"]]),nt=e=>(U("data-v-e1c5f0c4"),e=e(),L(),e),rt={class:"relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 group mx-2 flex flex-col justify-between"},it=["onClick"],lt={class:"aspect-w-1 aspect-h-1"},ct=["src"],dt={class:"px-6 py-5 flex-1"},ut={class:"text-xs font-medium tracking-widest text-gray-400 uppercase"},pt={class:"mt-3 text-sm font-medium min-h-[30px]"},mt=["href","title"],ft=nt(()=>t("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),gt={class:"flex justify-between items-center mt-5"},ht={class:"text-sm font-bold"},vt={class:"flex space-x-4"},_t=["onClick"],yt=["onClick"],bt=C({__name:"CarouselProducts",props:{items:{},interval:{},refDom:{}},emits:["productClick"],setup(e,{emit:o}){const{addItem:a,items:l}=ge(),{addItem:c,items:n,removeItem:f}=he(),s=e,r=o,i=w(null),P=x(()=>"xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"),D=(d,g)=>{g.preventDefault(),r("productClick",d)},S=(d,g)=>{if(g.stopPropagation(),_(d.id)){f(d.id);return}c(d)},N=(d,g)=>{if($(d.id))return;g.stopPropagation();let y={...d,quantity:1};a(y)},$=d=>l.value.some(g=>g.id===d),_=d=>n.value.some(g=>g.id===d);return(d,g)=>{const y=Z,te=H;return p(),B(te,{ref_key:"carouselRef",ref:i,items:s.items,ui:{item:P.value},class:"rounded-lg overflow-hidden w-full",indicators:!1},{default:R(({item:h})=>[t("div",rt,[t("div",{class:"relative",onClick:I=>D(h.id,I)},[t("div",lt,[t("img",{class:"object-cover w-full h-full",src:h.images[0],alt:""},null,8,ct)]),t("div",dt,[t("p",ut,m(h.category),1),t("h3",pt,[t("a",{href:`/product/${h.id}`,title:h.title},[q(m(h.title)+" ",1),ft],8,mt)]),t("div",gt,[t("p",ht,"$"+m(h.price),1),t("div",vt,[t("button",{type:"button",class:b(["inline-flex items-center justify-center",_(h.id)?"text-rose-500":"hover:text-rose-500"]),onClick:K(I=>S(h,I),["stop"])},[u(y,{name:_(h.id)?"i-heroicons-heart-solid":"i-heroicons-heart",class:"h-6 w-6 font-bold"},null,8,["name"])],10,_t),t("button",{type:"button",class:b([$(h.id)?"text-indigo-600":"hover:text-indigo-600","inline-flex items-center justify-center"]),onClick:K(I=>N(h,I),["stop"])},[u(y,{name:"i-heroicons-shopping-bag",class:"h-6 w-6 font-bold"})],10,yt)])])])],8,it)])]),_:1},8,["items","ui"])}}}),J=k(bt,[["__scopeId","data-v-e1c5f0c4"]]),T=e=>(U("data-v-1226f12d"),e=e(),L(),e),xt={class:"container mx-auto"},wt={class:"container mt-5"},kt=T(()=>t("h2",{class:"text-3xl font-semibold sm:text-3xl my-10"}," Productos destacados ",-1)),Ct={class:"mt-10"},$t=ee('<div class="flex items-center justify-center lg:justify-between" data-v-1226f12d><div class="hidden lg:flex" data-v-1226f12d><a href="#" title="" class="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900" data-v-1226f12d> Check all items <svg class="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1226f12d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-1226f12d></path></svg></a></div></div>',1),It=T(()=>t("div",{class:"mt-12 text-center lg:hidden"},[t("a",{href:"#",title:"",class:"inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"},[q(" Check all items "),t("svg",{class:"w-5 h-5 ml-2 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})])])],-1)),jt={class:"container mx-auto py-8"},Bt={class:"container mt-5"},Pt=T(()=>t("h2",{class:"text-3xl font-semibold sm:text-3xl my-10"}," Productos recien llegados ",-1)),St={class:"mt-10"},Nt=ee('<div class="flex items-center justify-center lg:justify-between" data-v-1226f12d><div class="hidden lg:flex" data-v-1226f12d><a href="#" title="" class="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900" data-v-1226f12d> Check all items <svg class="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1226f12d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-1226f12d></path></svg></a></div></div>',1),Ft=T(()=>t("div",{class:"mt-12 text-center lg:hidden"},[t("a",{href:"#",title:"",class:"inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"},[q(" Check all items "),t("svg",{class:"w-5 h-5 ml-2 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})])])],-1)),Mt={class:"container mx-auto py-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6"},Tt={class:"container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"},Dt=C({__name:"index",async setup(e){let o,a;de();const l=w([]),c=([o,a]=ue(()=>fe()),o=await o,a(),o);l.value=c.map(i=>({...i,images:[i.image]})),pe({title:"Título de la página específica",meta:[{name:"description",content:"Descripción de la página específica"}]});const n=i=>{me(`/products/${i}`)},f=[{src:"https://www.apple.com/co/product-red/images/meta/og_world_aids__ccal5yhp82b6_day.png?202311281022",title:"Starting at $20.00",description:"Organic & healthy vegetables",buttonText:"Shop Now"},{src:"https://cdn.thewirecutter.com/wp-content/media/2022/03/primedayapple-2048px-2686-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",title:"Bakery Products",description:"Freshly baked everyday",buttonText:"Order Now"},{src:"https://kompiuterioremontas.lt/wp-content/uploads/2022/10/Apple-MacBook-ipad-imac-Kompiuteriu-remontas-vilniuje.jpg",title:"Dairy Products",description:"Quality dairy products",buttonText:"Get Now"}],s=[{title:"Fashion",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-1.png",link:"#"},{title:"Electronics",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-2.png",link:"#"},{title:"Home & Garden",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-3.png",link:"#"},{title:"Sports",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-4.png",link:"#"},{title:"Toys",image:"https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-5.png",link:"#"}],r={image:"https://img.freepik.com/fotos-premium/volando-frutas-bayas-aisladas-sobre-fondo-blanco_88281-2199.jpg?w=2000",title:"Frutas Frescas",subtitle:"Productos Saludables",discountText:"30% de descuento en oferta ¡¡¡ Date prisa!!!",description:"Aprovecha nuestras ofertas de temporada con los mejores productos frescos.",buttonText:"Compra ahora"};return(i,P)=>(p(),v("div",xt,[u(Te,{items:f,type:"large"}),t("div",wt,[u(He,{items:s}),kt,t("div",Ct,[$t,u(J,{items:l.value.slice(9,17),interval:3e3,refDom:"category",onProductClick:n},null,8,["items"]),It])]),t("div",jt,[u(A,{banner:r})]),t("div",Bt,[Pt,t("div",St,[Nt,u(J,{items:l.value.slice(0,8),interval:3e3,refDom:"category",onProductClick:n},null,8,["items"]),Ft])]),t("div",Mt,[u(A,{banner:r}),u(A,{banner:r})]),t("div",Tt,[u(M,{title:"Free Shipping",description:"Free shipping on all orders over $200 in the US.",icon:"i-heroicons-truck"}),u(M,{title:"24/7 Support",description:"Contact us 24 hours a day, 7 days a week.",icon:"i-heroicons-device-phone-mobile"}),u(M,{title:"30 Days Return",description:"Simply return it within 30 days for an exchange.",icon:"i-heroicons-arrow-path"}),u(M,{title:"Secure Payment",description:"We ensure secure payment with PEV.",icon:"i-heroicons-currency-dollar"})])]))}}),Ut=k(Dt,[["__scopeId","data-v-1226f12d"]]);export{Ut as default};
