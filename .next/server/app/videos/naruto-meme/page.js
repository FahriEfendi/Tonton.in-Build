(()=>{var e={};e.id=575,e.ids=[575],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9961:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>n});var r=s(482),a=s(9108),i=s(2563),o=s.n(i),l=s(8300),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);s.d(t,d);let n=["",{children:["videos",{children:["naruto-meme",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1330)),"C:\\build\\Tonton.in\\src\\app\\videos\\naruto-meme\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1965)),"C:\\build\\Tonton.in\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\build\\Tonton.in\\src\\app\\videos\\naruto-meme\\page.js"],m="/videos/naruto-meme/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/videos/naruto-meme/page",pathname:"/videos/naruto-meme",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},2899:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},4356:(e,t,s)=>{Promise.resolve().then(s.bind(s,4430))},5146:(e,t,s)=>{Promise.resolve().then(s.bind(s,6058))},4674:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(5344);s(3729);var a=s(5605);let i=({children:e})=>r.jsx(a.B6,{children:r.jsx("div",{children:e})})},4430:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5344),a=s(8986),i=s.n(a);s(3824);var o=s(5605);function l({children:e}){return r.jsx("html",{lang:"en",children:r.jsx(o.B6,{children:r.jsx("body",{className:i().className,children:e})})})}},6058:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(5344),a=s(3608),i=s(3729),o=s(9750),l=s(7608),d=s(7602),n=s(364),c=s(9921),m=s(5605),u=s(4674);let h=[{name:"Home",href:"/",current:!0},{name:"Category",href:"/category",current:!1},{name:"Tag",href:"/tag",current:!1},{name:"Announcement",href:"#",current:!1}];function x(...e){return e.filter(Boolean).join(" ")}function p({videoId:e}){let{characterId:t}=(0,o.UO)(),[s,p]=(0,i.useState)(""),[f,g]=(0,i.useState)(""),[v,b]=(0,i.useState)(""),[y,j]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),[N,S]=(0,i.useState)(""),[_,P]=(0,i.useState)(""),[q,F]=(0,i.useState)(!1),[T,E]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(async()=>{try{let e=await a.Z.get("http://localhost:8080/getvideos/4734da25-ae1c-48df-a39b-2f34f9cdea7e");p(e.data.data.title),g(e.data.data.vid_like),b(e.data.data.dislike),j(e.data.data.description),k(e.data.data.views),S(e.data.data.id_tag)}catch(e){e.response&&P(e.response.data.msg)}})()},[t]),(0,i.useEffect)(()=>{let t=localStorage.getItem("liked_videos");(t=t?JSON.parse(t):{})[e]&&(g(t[e]),F(!0))},[e]),(0,i.useEffect)(()=>{let t=localStorage.getItem("disliked_videos");(t=t?JSON.parse(t):{})[e]&&(b(t[e]),E(!0))},[e]);let I=async()=>{let t=localStorage.getItem("liked_videos"),s=localStorage.getItem("disliked_videos");if((t=t?JSON.parse(t):{})[e])try{if(!(await fetch("http://localhost:8080/videos/declike/4734da25-ae1c-48df-a39b-2f34f9cdea7e",{method:"PUT"})).ok)throw Error("Failed to unlike video");delete t[e],localStorage.setItem("liked_videos",JSON.stringify(t)),g(f),F(!1)}catch(e){console.error(e),alert("Failed to unlike video")}else{if(s&&s[e])try{if(!(await fetch("http://localhost:8080/videos/incdislike/4734da25-ae1c-48df-a39b-2f34f9cdea7e",{method:"PUT"})).ok)throw Error("Failed to like video");s[e]=!1,localStorage.setItem("disliked_videos",JSON.stringify(s)),g(!0),E(!0)}catch(e){console.error(e),alert("Failed to like video")}try{if(!(await fetch("http://localhost:8080/videos/inclike/4734da25-ae1c-48df-a39b-2f34f9cdea7e",{method:"PUT"})).ok)throw Error("Failed to like video");g(!0),b(!1),localStorage.removeItem("disliked_videos"),localStorage.setItem("liked_videos",JSON.stringify({[e]:!0}))}catch(e){console.error(e),alert("Failed to like video")}}},C=async()=>{let t=localStorage.getItem("disliked_videos"),s=localStorage.getItem("liked_videos");if((t=t?JSON.parse(t):{})[e])try{if(!(await fetch("http://localhost:8080/videos/decdislike/4734da25-ae1c-48df-a39b-2f34f9cdea7e",{method:"PUT"})).ok)throw Error("Failed to undislike video");delete t[e],localStorage.setItem("disliked_videos",JSON.stringify(t)),b(v),E(!1)}catch(e){console.error(e),alert("Failed to undislike video")}else{if(s&&s[e])try{if(!(await fetch("http://localhost:8080/videos/declike/4734da25-ae1c-48df-a39b-2f34f9cdea7e",{method:"PUT"})).ok)throw Error("Failed to dislike video");delete t[e],localStorage.setItem("disliked_videos",JSON.stringify(t)),g(e=>e-1),g(!0),b(!1),F(!0)}catch(e){console.error(e),alert("Failed to dislike video")}try{if(!(await fetch("http://localhost:8080/videos/incdislike/4734da25-ae1c-48df-a39b-2f34f9cdea7e",{method:"PUT"})).ok)throw Error("Failed to dislike video");b(!0),g(!1),localStorage.removeItem("liked_videos"),localStorage.setItem("disliked_videos",JSON.stringify({[e]:!0}))}catch(e){console.error(e),alert("Failed to dislike video")}}};return r.jsx("div",{className:"min-h-full bg-[#101633]",children:(0,r.jsxs)(u.Z,{children:[r.jsx(m.ql,{children:r.jsx("title",{children:"Naruto Team 7 Edit - Copines"})}),r.jsx(l.p,{as:"nav",className:"bg-gray-800",children:({open:e})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("picture",{children:r.jsx("img",{className:"h-8 w-8",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})})}),r.jsx("div",{className:"hidden md:block",children:r.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:h.map(e=>r.jsx("a",{href:e.href,className:x(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]}),r.jsx("div",{className:"-mr-2 flex md:hidden",children:(0,r.jsxs)(l.p.Button,{className:"relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[r.jsx("span",{className:"absolute -inset-0.5"}),r.jsx("span",{className:"sr-only",children:"Open main menu"}),e?r.jsx(d.Z,{className:"block h-6 w-6","aria-hidden":"true"}):r.jsx(n.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),r.jsx(l.p.Panel,{className:"md:hidden",children:r.jsx("div",{className:"space-y-1 px-2 pb-3 pt-2 sm:px-3",children:h.map(e=>r.jsx(l.p.Button,{as:"a",href:e.href,className:x(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})}),r.jsx("main",{className:"container mx-auto max-w-screen-lg border-1 bg-[#1c1f46] p-7 mb-4 mt-5 rounded",children:r.jsx("div",{className:"container mx-auto max-w-3/4 border-1 bg-[#24285a] xl:p-0 p-4 md:p-0 xl:p-0 2xl:p-0 rounded",children:(0,r.jsxs)("div",{className:"mx-auto max-w-full sm:max-w-screen-lg py-6 sm:px-6 lg:px-8",children:[r.jsx("div",{className:"relative h-0",style:{paddingBottom:"56.25%"},children:r.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/XDuqUVo9Q7c?si=Bx1D0m0phtXRfosF",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),r.jsx("div",{children:r.jsx("h1",{className:"text-white text-xl mt-4",children:s})}),(0,r.jsxs)("div",{className:"container mx-auto max-w-3/4 border-1 bg-sky-600 p-2 mt-4 rounded text-sm",children:[(0,r.jsxs)("span",{className:"font-semibold",children:[w," x ditonton  Telah tayang perdana pada 20 Jan 2024"]}),r.jsx("p",{children:y})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsxs)("button",{className:"flex items-center space-x-2 text-white",onClick:I,style:{color:q?"blue":"white"},children:[r.jsx(c.spm,{className:"h-6 w-6"}),r.jsx("span",{children:f>=1e6?`${(f/1e6).toFixed(1)} m`:f>=1e3?`${(f/1e3).toFixed(1)} k`:f})]}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 text-white",onClick:C,style:{color:T?"blue":"white"},children:[r.jsx(c.bGJ,{className:"h-6 w-6"}),r.jsx("span",{children:v>=1e6?`${(v/1e6).toFixed(1)} m`:v>=1e3?`${(v/1e3).toFixed(1)} k`:v})]})]}),(0,r.jsxs)("div",{className:"text-white text-base",children:[r.jsx("p",{children:"Uploaded by: Admin"}),r.jsx("p",{children:"Uploaded on: 22 Feb 2024"}),(0,r.jsxs)("p",{children:["Tags: ",N]})]})]}),r.jsx("div",{className:"container mx-auto max-w-3/4 border-1 bg-sky-600 p-2 mt-4 rounded text-sm",children:r.jsx("span",{className:"text-white text-base mt-4",children:"Trending Videos"})})]})})}),r.jsx("footer",{className:"bg-gray-800 text-white text-center py-4",children:r.jsx("p",{children:"Built with \uD83D\uDC96 dear Shifty"})})]})})}},1965:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let r=(0,s(6843).createProxy)(String.raw`C:\build\Tonton.in\src\app\layout.js`),{__esModule:a,$$typeof:i}=r,o=r.default},1330:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let r=(0,s(6843).createProxy)(String.raw`C:\build\Tonton.in\src\app\videos\naruto-meme\page.js`),{__esModule:a,$$typeof:i}=r,o=r.default},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3824:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,401,337,8,750],()=>s(9961));module.exports=r})();