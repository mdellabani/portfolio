(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{5065:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E},headerID:function(){return y}});var r=t(5893),i=t(4080),o=t(6722),s=t(1561),a=t(4184),c=t.n(a),u=t(1664),l=t.n(u),d=t(7294),f=t(4795),m=function(e,n){(0,d.useEffect)(function(){var t=document.querySelectorAll(e),r=Array.from(t),i=document.getElementById(y),o=new IntersectionObserver(function(e){e.forEach(function(e){var t=e.boundingClientRect.y,o=e.target.getAttribute("id");if(i){var s,a={id:o,currentIndex:r.findIndex(function(e){return e.getAttribute("id")===o}),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:t<i.getBoundingClientRect().y,belowToc:!(t<i.getBoundingClientRect().y)};a.isIntersecting?n(a.id):!a.isIntersecting&&a.currentRatio<1&&a.currentRatio>0&&a.belowToc&&n(null===(s=r[a.currentIndex-1])||void 0===s?void 0:s.getAttribute("id"))}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return t.forEach(function(e){o.observe(e)}),function(){o.disconnect()}},[])},v=t(8357),x=t(8193),h=t(1766),g=["mousedown","touchstart"],p=t(65),b=t.n(p),j=(0,d.memo)(function(){var e,n,t,i,o,s,a,c=(0,d.useState)(!1),u=c[0],l=c[1],f=(e=b(),t=(n=(0,d.useState)(!1))[0],i=n[1],o=function(){!1===t&&i(!0)},(0,d.useEffect)(function(){return g.forEach(function(e){document.addEventListener(e,o)}),function(){g.forEach(function(e){document.removeEventListener(e,o)})}},[]),a=(0,d.useRef)(),(0,d.useEffect)(function(){if(t){var n=new h.Howl({src:e});return a.current=n,function(){n.unload()}}},[t,e]),a.current),m=function(){console.log("click:"+f+",state:"+u),u?(null==f||f.pause(),l(!1)):(null==f||f.play(),l(!0))};return(0,r.jsx)("div",{className:"component",children:(0,r.jsx)("div",{children:u?(0,r.jsx)("button",{className:"playButton",onClick:m,children:(0,r.jsx)(v.Pd.Provider,{value:{size:"2em",color:"#b8cfc1"},children:(0,r.jsx)(x.civ,{})})}):(0,r.jsx)("button",{className:"playButton",onClick:m,children:(0,r.jsx)(v.Pd.Provider,{value:{size:"2em",color:"#b8cfc1"},children:(0,r.jsx)(x.sT9,{})})})})})}),y="headerNav",C=(0,d.memo)(function(){var e=(0,d.useState)(null),n=e[0],t=e[1],i=(0,d.useMemo)(function(){return[f._h.About,f._h.Resume,f._h.Portfolio,f._h.Testimonials,f._h.Contact]},[]),o=(0,d.useCallback)(function(e){e&&t(e)},[]);return m(i.map(function(e){return"#".concat(e)}).join(","),o),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{currentSection:n,navSections:i}),(0,r.jsx)(N,{currentSection:n,navSections:i})]})}),N=(0,d.memo)(function(e){var n=e.navSections,t=e.currentSection,i="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",o=c()(i,"text-orange-500"),s=c()(i,"text-neutral-100");return(0,r.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:y,children:(0,r.jsxs)("nav",{className:"flex justify-center gap-x-8",children:[(0,r.jsx)(j,{}),n.map(function(e){return(0,r.jsx)(w,{activeClass:o,current:e===t,inactiveClass:s,section:e},e)})]})})}),k=(0,d.memo)(function(e){var n=e.navSections,t=e.currentSection,a=(0,d.useState)(!1),u=a[0],l=a[1],f=(0,d.useCallback)(function(){l(!u)},[u]),m="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",v=c()(m,"bg-neutral-900 text-white font-bold"),x=c()(m,"text-neutral-200 font-medium");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:f,children:[(0,r.jsx)(s.Z,{className:"h-8 w-8 text-white"}),(0,r.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,r.jsx)(i.u.Root,{as:d.Fragment,show:u,children:(0,r.jsxs)(o.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:f,children:[(0,r.jsx)(i.u.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(o.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,r.jsx)(i.u.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,r.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,r.jsxs)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:[(0,r.jsx)(j,{}),n.map(function(e){return(0,r.jsx)(w,{activeClass:v,current:e===t,inactiveClass:x,onClick:f,section:e},e)})]})})})]})})]})}),w=(0,d.memo)(function(e){var n=e.section,t=e.current,i=e.inactiveClass,o=e.activeClass,s=e.onClick;return(0,r.jsx)(l(),{href:"/#".concat(n),passHref:!0,children:(0,r.jsx)("a",{className:c()(t?o:i),onClick:s,children:n},n)})});C.displayName="Header";var E=C},65:function(e){e.exports="data:audio/mpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NWMyNWNkMzk0ODZjNzI1NDhhYjFiM2Q1ZTc1ZWQ0YjcwZjRlOTZjOTJiYzgxZDM5NzAxMjc4YWI3OWVmMGQ3ZApzaXplIDEyMDEyODczNwo="}}]);