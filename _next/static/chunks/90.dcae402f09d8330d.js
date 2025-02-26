"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{1561:function(e,t,n){var r=n(7294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16m-7 6h7"}))});t.Z=o},4555:function(e,t,n){let r,o,l,i,a,u,s,c,d,f,p,m,v,h;n.d(t,{V:function(){return eM}});var g,E,b,y=n(7294),w=n.t(y,2),T=n(6116),S=n(3619),A=n(6577),F=((r=F||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r),L=n(7110),P=n(7563),O=n(3659);let C=null!=(b=y.useId)?b:function(){let e=(0,P.H)(),[t,n]=y.useState(e?()=>O.O.nextId():null);return(0,L.e)(()=>{null===t&&n(O.O.nextId())},[t]),null!=t?""+t:void 0};var R=((o=R||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let k=(0,S.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,S.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function M(e){return O.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let N=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(",");var D=((l=D||{})[l.First=1]="First",l[l.Previous=2]="Previous",l[l.Next=4]="Next",l[l.Last=8]="Last",l[l.WrapAround=16]="WrapAround",l[l.NoScroll=32]="NoScroll",l),x=((i=x||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),H=((a=H||{})[a.Previous=-1]="Previous",a[a.Next=1]="Next",a),j=((u=j||{})[u.Strict=0]="Strict",u[u.Loose=1]="Loose",u),I=((s=I||{})[s.Keyboard=0]="Keyboard",s[s.Mouse=1]="Mouse",s);function V(e){null==e||e.focus({preventScroll:!0})}function Y(e,t){var n,r,o;let{sorted:l=!0,relativeTo:i=null,skipElements:a=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?l?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(N)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);a.length>0&&s.length>1&&(s=s.filter(e=>!a.includes(e))),i=null!=i?i:u.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(i))-1;if(4&t)return Math.max(0,s.indexOf(i))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,v;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(v=s[e])||v.focus(f),p+=c}while(v!==u.activeElement);return 6&t&&null!=(o=null==(r=null==(n=v)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&o&&v.select(),2}"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var z=n(8354),U=n(9438),_=((c=_||{})[c.Forwards=0]="Forwards",c[c.Backwards=1]="Backwards",c),B=n(5729);function W(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,y.useMemo)(()=>M(...t),[...t])}function Z(e,t,n,r){let o=(0,U.E)(n);(0,y.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}var q=n(7378);function G(e,t){let n=(0,y.useRef)([]),r=(0,z.z)(e);(0,y.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}var K=n(5655);function J(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var X=((d=X||{})[d.None=1]="None",d[d.InitialFocus=2]="InitialFocus",d[d.TabLock=4]="TabLock",d[d.FocusLock=8]="FocusLock",d[d.RestoreFocus=16]="RestoreFocus",d[d.All=30]="All",d);let Q=Object.assign((0,S.yV)(function(e,t){var n,r;let o,l,i=(0,y.useRef)(null),a=(0,A.T)(i,t),{initialFocus:u,containers:s,features:c=30,...d}=e;(0,P.H)()||(c=1);let f=W(i);!function(e,t){let{ownerDocument:n}=e,r=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,y.useRef)($.slice());return G((e,n)=>{let[r]=e,[o]=n;!0===o&&!1===r&&(0,q.Y)(()=>{t.current.splice(0)}),!1===o&&!0===r&&(t.current=$.slice())},[e,$,t]),(0,z.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);G(()=>{t||(null==n?void 0:n.activeElement)===(null==n?void 0:n.body)&&V(r())},[t]);let o=(0,y.useRef)(!1);(0,y.useEffect)(()=>(o.current=!1,()=>{o.current=!0,(0,q.Y)(()=>{o.current&&V(r())})}),[])}({ownerDocument:f},!!(16&c));let p=function(e,t){let{ownerDocument:n,container:r,initialFocus:o}=e,l=(0,y.useRef)(null),i=(0,B.t)();return G(()=>{if(!t)return;let e=r.current;e&&(0,q.Y)(()=>{if(!i.current)return;let t=null==n?void 0:n.activeElement;if(null!=o&&o.current){if((null==o?void 0:o.current)===t){l.current=t;return}}else if(e.contains(t)){l.current=t;return}null!=o&&o.current?V(o.current):Y(e,D.First)===x.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=null==n?void 0:n.activeElement})},[t]),l}({ownerDocument:f,container:i,initialFocus:u},!!(2&c));!function(e,t){let{ownerDocument:n,container:r,containers:o,previousActiveElement:l}=e,i=(0,B.t)();Z(null==n?void 0:n.defaultView,"focus",e=>{if(!t||!i.current)return;let n=J(o);r.current instanceof HTMLElement&&n.add(r.current);let a=l.current;if(!a)return;let u=e.target;u&&u instanceof HTMLElement?ee(n,u)?(l.current=u,V(u)):(e.preventDefault(),e.stopPropagation(),V(a)):V(l.current)},!0)}({ownerDocument:f,container:i,containers:s,previousActiveElement:p},!!(8&c));let m=(o=(0,y.useRef)(0),n="keydown",r=e=>{"Tab"===e.key&&(o.current=e.shiftKey?1:0)},l=(0,U.E)(r),(0,y.useEffect)(()=>{function e(e){l.current(e)}return window.addEventListener(n,e,!0),()=>window.removeEventListener(n,e,!0)},[n,!0]),o),v=(0,z.z)(e=>{let t=i.current;t&&(0,T.E)(m.current,{[_.Forwards]:()=>{Y(t,D.First,{skipElements:[e.relatedTarget]})},[_.Backwards]:()=>{Y(t,D.Last,{skipElements:[e.relatedTarget]})}})}),h=(0,K.G)(),g=(0,y.useRef)(!1);return y.createElement(y.Fragment,null,!!(4&c)&&y.createElement(k,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:R.Focusable}),(0,S.sY)({ourProps:{ref:a,onKeyDown(e){"Tab"==e.key&&(g.current=!0,h.requestAnimationFrame(()=>{g.current=!1}))},onBlur(e){let t=J(s);i.current instanceof HTMLElement&&t.add(i.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(ee(t,n)||(g.current?Y(i.current,(0,T.E)(m.current,{[_.Forwards]:()=>D.Next,[_.Backwards]:()=>D.Previous})|D.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&V(e.target)))}},theirProps:d,defaultTag:"div",name:"FocusTrap"}),!!(4&c)&&y.createElement(k,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:R.Focusable}))}),{features:X}),$=[];function ee(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&$[0]!==e.target&&($.unshift(e.target),($=$.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var et=n(3935);let en=(0,y.createContext)(!1);function er(e){return y.createElement(en.Provider,{value:e.force},e.children)}let eo=y.Fragment,el=y.Fragment,ei=(0,y.createContext)(null),ea=Object.assign((0,S.yV)(function(e,t){let n=(0,y.useRef)(null),r=(0,A.T)((0,A.h)(e=>{n.current=e}),t),o=W(n),l=function(e){let t=(0,y.useContext)(en),n=(0,y.useContext)(ei),r=W(e),[o,l]=(0,y.useState)(()=>{if(!t&&null!==n||O.O.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,y.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,y.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[i]=(0,y.useState)(()=>{var e;return O.O.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),a=(0,P.H)(),u=(0,y.useRef)(!1);return(0,L.e)(()=>{if(u.current=!1,!(!l||!i))return l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i)),()=>{u.current=!0,(0,q.Y)(()=>{var e;u.current&&l&&i&&(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))})}},[l,i]),a&&l&&i?(0,et.createPortal)((0,S.sY)({ourProps:{ref:r},theirProps:e,defaultTag:eo,name:"Portal"}),i):null}),{Group:(0,S.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,A.T)(t)};return y.createElement(ei.Provider,{value:n},(0,S.sY)({ourProps:o,theirProps:r,defaultTag:el,name:"Popover.Group"}))})}),eu=(0,y.createContext)(null),es=Object.assign((0,S.yV)(function(e,t){let n=C(),{id:r="headlessui-description-".concat(n),...o}=e,l=function e(){let t=(0,y.useContext)(eu);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=(0,A.T)(t);(0,L.e)(()=>l.register(r),[r,l.register]);let a={ref:i,...l.props,id:r};return(0,S.sY)({ourProps:a,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{});var ec=n(1365);let ed=(0,y.createContext)(()=>{});ed.displayName="StackContext";var ef=((f=ef||{})[f.Add=0]="Add",f[f.Remove=1]="Remove",f);function ep(e){let{children:t,onUpdate:n,type:r,element:o,enabled:l}=e,i=(0,y.useContext)(ed),a=(0,z.z)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n(...t),i(...t)});return(0,L.e)(()=>{let e=void 0===l||!0===l;return e&&a(0,r,o),()=>{e&&a(1,r,o)}},[a,r,o,l]),y.createElement(ed.Provider,{value:a},t)}function em(e,t,n){let r=(0,U.E)(t);(0,y.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let{useState:ev,useEffect:eh,useLayoutEffect:eg,useDebugValue:eE}=w;void 0!==window.document&&window.document.createElement;let eb=w.useSyncExternalStore;var ey=n(7122);let ew=(g=()=>new Map,E={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,ey.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT(e){let t,n,{doc:r,d:o,meta:l}=e,i={doc:r,d:o,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(l)},a=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){t=window.pageYOffset},after(e){let{doc:n,d:r,meta:o}=e;function l(e){return o.containers.flatMap(e=>e()).some(t=>t.contains(e))}r.style(n.body,"marginTop","-".concat(t,"px")),window.scrollTo(0,0);let i=null;r.addEventListener(n,"click",e=>{if(e.target instanceof HTMLElement)try{let t=e.target.closest("a");if(!t)return;let{hash:r}=new URL(t.href),o=n.querySelector(r);o&&!l(o)&&(i=o)}catch(e){}},!0),r.addEventListener(n,"touchmove",e=>{e.target instanceof HTMLElement&&!l(e.target)&&e.preventDefault()},{passive:!1}),r.add(()=>{window.scrollTo(0,window.pageYOffset+t),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})}}:{},{before(e){var t;let{doc:r}=e,o=r.documentElement;n=(null!=(t=r.defaultView)?t:window).innerWidth-o.clientWidth},after(e){let{doc:t,d:r}=e,o=t.documentElement,l=o.clientWidth-o.offsetWidth,i=n-l;r.style(o,"paddingRight","".concat(i,"px"))}},{before(e){let{doc:t,d:n}=e;n.style(t.documentElement,"overflow","hidden")}}];a.forEach(e=>{let{before:t}=e;return null==t?void 0:t(i)}),a.forEach(e=>{let{after:t}=e;return null==t?void 0:t(i)})},SCROLL_ALLOW(e){let{d:t}=e;t.dispose()},TEARDOWN(e){let{doc:t}=e;this.delete(t)}},p=g(),m=new Set,{getSnapshot:()=>p,subscribe:e=>(m.add(e),()=>m.delete(e)),dispatch(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let o=E[e].call(p,...n);o&&(p=o,m.forEach(e=>e()))}});ew.subscribe(()=>{let e=ew.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&ew.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&ew.dispatch("TEARDOWN",n)}});let eT=new Map,eS=new Map;function eA(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];(0,L.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=eS.get(r))?n:0;return eS.set(r,o+1),0!==o||(eT.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=eS.get(r))?e:1;if(1===t?eS.delete(r):eS.set(r,t-1),1!==t)return;let n=eT.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,eT.delete(r))}},[e,t])}var eF=((v=eF||{})[v.Open=0]="Open",v[v.Closed=1]="Closed",v),eL=((h=eL||{})[h.SetTitleId=0]="SetTitleId",h);let eP={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eO=(0,y.createContext)(null);function eC(e){let t=(0,y.useContext)(eO);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Dialog /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,eC),t}return t}function eR(e,t){return(0,T.E)(t.type,eP,e,t)}eO.displayName="DialogContext";let ek=S.AN.RenderStrategy|S.AN.Static,eM=Object.assign((0,S.yV)(function(e,t){let n=C(),{id:r="headlessui-dialog-".concat(n),open:o,onClose:l,initialFocus:i,__demoMode:a=!1,...u}=e,[s,c]=(0,y.useState)(0),d=(0,ec.oJ)();void 0===o&&null!==d&&(o=(d&ec.ZM.Open)===ec.ZM.Open);let f=(0,y.useRef)(null),p=(0,A.T)(f,t),m=(0,y.useRef)(null),v=W(f),h=e.hasOwnProperty("open")||null!==d,g=e.hasOwnProperty("onClose");if(!h&&!g)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!h)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!g)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(o));if("function"!=typeof l)throw Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(l));let E=o?0:1,[b,w]=(0,y.useReducer)(eR,{titleId:null,descriptionId:null,panelRef:(0,y.createRef)()}),O=(0,z.z)(()=>l(!1)),D=(0,z.z)(e=>w({type:0,id:e})),x=!!(0,P.H)()&&!a&&0===E,H=s>1,I=null!==(0,y.useContext)(eO),V=null!==d&&(d&ec.ZM.Closing)===ec.ZM.Closing,Y=!I&&!V&&x;eA((0,y.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==v?void 0:v.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(m.current)&&e instanceof HTMLElement))?t:null},[m]),Y);let U=!!H||x;eA((0,y.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==v?void 0:v.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(m.current)&&e instanceof HTMLElement))?t:null},[m]),U);let _=(0,z.z)(()=>{var e,t;return[...Array.from(null!=(e=null==v?void 0:v.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(m.current)||b.panelRef.current&&e.contains(b.panelRef.current))),null!=(t=b.panelRef.current)?t:f.current]});!function(e,t){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=(0,y.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),i=o(n);if(null!==i&&i.getRootNode().contains(i)){for(let e of l){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i)||n.composed&&n.composedPath().includes(t))return}return!function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=M(e))?void 0:t.body)&&(0,T.E)(n,{0:()=>e.matches(N),1(){let t=e;for(;null!==t;){if(t.matches(N))return!0;t=t.parentElement}return!1}})}(i,j.Loose)&&-1!==i.tabIndex&&n.preventDefault(),t(n,i)}}(0,y.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,y.useRef)(null);em("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),em("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),em("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(()=>_(),O,!(!x||H));let B=!(H||0!==E);Z(null==v?void 0:v.defaultView,"keydown",e=>{B&&(e.defaultPrevented||e.key===F.Escape&&(e.preventDefault(),e.stopPropagation(),O()))}),function(e,t){var n;let r,o,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>[document.body];n=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],l]}},r=eb(ew.subscribe,ew.getSnapshot,ew.getSnapshot),(o=e?r.get(e):void 0)&&o.count,(0,L.e)(()=>{if(!(!e||!t))return ew.dispatch("PUSH",e,n),()=>ew.dispatch("POP",e,n)},[t,e])}(v,!(V||0!==E||I),_),(0,y.useEffect)(()=>{if(0!==E||!f.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&O()}});return e.observe(f.current),()=>e.disconnect()},[E,f,O]);let[q,G]=function(){let[e,t]=(0,y.useState)([]);return[e.length>0?e.join(" "):void 0,(0,y.useMemo)(()=>function(e){let n=(0,z.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,y.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return y.createElement(eu.Provider,{value:r},e.children)},[t])]}(),K=(0,y.useMemo)(()=>[{dialogState:E,close:O,setTitleId:D},b],[E,b,O,D]),J=(0,y.useMemo)(()=>({open:0===E}),[E]),X={ref:p,id:r,role:"dialog","aria-modal":0===E||void 0,"aria-labelledby":b.titleId,"aria-describedby":q};return y.createElement(ep,{type:"Dialog",enabled:0===E,element:f,onUpdate:(0,z.z)((e,t)=>{"Dialog"===t&&(0,T.E)(e,{[ef.Add]:()=>c(e=>e+1),[ef.Remove]:()=>c(e=>e-1)})})},y.createElement(er,{force:!0},y.createElement(ea,null,y.createElement(eO.Provider,{value:K},y.createElement(ea.Group,{target:f},y.createElement(er,{force:!1},y.createElement(G,{slot:J,name:"Dialog.Description"},y.createElement(Q,{initialFocus:i,containers:_,features:x?(0,T.E)(H?"parent":"leaf",{parent:Q.features.RestoreFocus,leaf:Q.features.All&~Q.features.FocusLock}):Q.features.None},(0,S.sY)({ourProps:X,theirProps:u,slot:J,defaultTag:"div",features:ek,visible:0===E,name:"Dialog"})))))))),y.createElement(k,{features:R.Hidden,ref:m}))}),{Backdrop:(0,S.yV)(function(e,t){let n=C(),{id:r="headlessui-dialog-backdrop-".concat(n),...o}=e,[{dialogState:l},i]=eC("Dialog.Backdrop"),a=(0,A.T)(t);(0,y.useEffect)(()=>{if(null===i.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[i.panelRef]);let u=(0,y.useMemo)(()=>({open:0===l}),[l]);return y.createElement(er,{force:!0},y.createElement(ea,null,(0,S.sY)({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,S.yV)(function(e,t){let n=C(),{id:r="headlessui-dialog-panel-".concat(n),...o}=e,[{dialogState:l},i]=eC("Dialog.Panel"),a=(0,A.T)(t,i.panelRef),u=(0,y.useMemo)(()=>({open:0===l}),[l]),s=(0,z.z)(e=>{e.stopPropagation()});return(0,S.sY)({ourProps:{ref:a,id:r,onClick:s},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,S.yV)(function(e,t){let n=C(),{id:r="headlessui-dialog-overlay-".concat(n),...o}=e,[{dialogState:l,close:i}]=eC("Dialog.Overlay"),a=(0,A.T)(t),u=(0,z.z)(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}),s=(0,y.useMemo)(()=>({open:0===l}),[l]);return(0,S.sY)({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,S.yV)(function(e,t){let n=C(),{id:r="headlessui-dialog-title-".concat(n),...o}=e,[{dialogState:l,setTitleId:i}]=eC("Dialog.Title"),a=(0,A.T)(t);(0,y.useEffect)(()=>(i(r),()=>i(null)),[r,i]);let u=(0,y.useMemo)(()=>({open:0===l}),[l]);return(0,S.sY)({ourProps:{ref:a,id:r},theirProps:o,slot:u,defaultTag:"h2",name:"Dialog.Title"})}),Description:es})},9121:function(e,t,n){let r;n.d(t,{u:function(){return M}});var o=n(7294),l=n(3619),i=n(1365),a=n(6116),u=n(5729),s=n(7110),c=n(9438),d=n(7563),f=n(6577),p=n(7122);function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&n.length>0&&e.classList.add(...n)}function v(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&n.length>0&&e.classList.remove(...n)}var h=n(5655),g=n(8354),E=n(1573);function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,o.createContext)(null);y.displayName="TransitionContext";var w=((r=w||{}).Visible="visible",r.Hidden="hidden",r);let T=(0,o.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function A(e,t){let n=(0,c.E)(e),r=(0,o.useRef)([]),i=(0,u.t)(),s=(0,h.G)(),d=(0,g.z)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.l4.Hidden,o=r.current.findIndex(t=>{let{el:n}=t;return n===e});-1!==o&&((0,a.E)(t,{[l.l4.Unmount](){r.current.splice(o,1)},[l.l4.Hidden](){r.current[o].state="hidden"}}),s.microTask(()=>{var e;!S(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,g.z)(e=>{let t=r.current.find(t=>{let{el:n}=t;return n===e});return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,l.l4.Unmount)}),p=(0,o.useRef)([]),m=(0,o.useRef)(Promise.resolve()),v=(0,o.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(t=>{let[n]=t;return n!==e})),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(e=>{let[t,n]=e;return n})).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(e=>{let[t,n]=e;return n})).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:r,register:f,unregister:d,onStart:E,onStop:b,wait:m,chains:v}),[f,d,r,E,b,v,m])}function F(){}T.displayName="NestingContext";let L=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let n={};for(let r of L)n[r]=null!=(t=e[r])?t:F;return n}let O=l.AN.RenderStrategy,C=(0,l.yV)(function(e,t){let{show:n,appear:r=!1,unmount:a,...u}=e,c=(0,o.useRef)(null),p=(0,f.T)(c,t);(0,d.H)();let m=(0,i.oJ)();if(void 0===n&&null!==m&&(n=(m&i.ZM.Open)===i.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,o.useState)(n?"visible":"hidden"),g=A(()=>{h("hidden")}),[E,b]=(0,o.useState)(!0),w=(0,o.useRef)([n]);(0,s.e)(()=>{!1!==E&&w.current[w.current.length-1]!==n&&(w.current.push(n),b(!1))},[w,n]);let F=(0,o.useMemo)(()=>({show:n,appear:r,initial:E}),[n,r,E]);(0,o.useEffect)(()=>{if(n)h("visible");else if(S(g)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,g]);let L={unmount:a};return o.createElement(T.Provider,{value:g},o.createElement(y.Provider,{value:F},(0,l.sY)({ourProps:{...L,as:o.Fragment,children:o.createElement(R,{ref:p,...L,...u})},theirProps:{},defaultTag:o.Fragment,features:O,visible:"visible"===v,name:"Transition"})))}),R=(0,l.yV)(function(e,t){var n;let r,{beforeEnter:w,afterEnter:F,beforeLeave:L,afterLeave:C,enter:R,enterFrom:k,enterTo:M,entered:N,leave:D,leaveFrom:x,leaveTo:H,...j}=e,I=(0,o.useRef)(null),V=(0,f.T)(I,t),Y=j.unmount?l.l4.Unmount:l.l4.Hidden,{show:z,appear:U,initial:_}=function(){let e=(0,o.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[B,W]=(0,o.useState)(z?"visible":"hidden"),Z=function(){let e=(0,o.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:q,unregister:G}=Z,K=(0,o.useRef)(null);(0,o.useEffect)(()=>q(I),[q,I]),(0,o.useEffect)(()=>{if(Y===l.l4.Hidden&&I.current){if(z&&"visible"!==B){W("visible");return}return(0,a.E)(B,{hidden:()=>G(I),visible:()=>q(I)})}},[B,I,q,G,z,Y]);let J=(0,c.E)({enter:b(R),enterFrom:b(k),enterTo:b(M),entered:b(N),leave:b(D),leaveFrom:b(x),leaveTo:b(H)}),X=(n={beforeEnter:w,afterEnter:F,beforeLeave:L,afterLeave:C},r=(0,o.useRef)(P(n)),(0,o.useEffect)(()=>{r.current=P(n)},[n]),r),Q=(0,d.H)();(0,o.useEffect)(()=>{if(Q&&"visible"===B&&null===I.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[I,B,Q]);let $=_&&!U,ee=!Q||$||K.current===z?"idle":z?"enter":"leave",et=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=(0,o.useState)(e),r=(0,u.t)(),l=(0,o.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),i=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:l,hasFlag:i,removeFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,g.z)(e=>(0,a.E)(e,{enter:()=>{et.addFlag(i.ZM.Opening),X.current.beforeEnter()},leave:()=>{et.addFlag(i.ZM.Closing),X.current.beforeLeave()},idle:()=>{}})),er=(0,g.z)(e=>(0,a.E)(e,{enter:()=>{et.removeFlag(i.ZM.Opening),X.current.afterEnter()},leave:()=>{et.removeFlag(i.ZM.Closing),X.current.afterLeave()},idle:()=>{}})),eo=A(()=>{W("hidden"),G(I)},Z);(function(e){let{container:t,direction:n,classes:r,onStart:o,onStop:l}=e,i=(0,u.t)(),d=(0,h.G)(),f=(0,c.E)(n);(0,s.e)(()=>{let e=(0,p.k)();d.add(e.dispose);let n=t.current;if(n&&"idle"!==f.current&&i.current){var u,s,c;let t,i,d,h,g,E,b;return e.dispose(),o.current(f.current),e.add((u=r.current,s="enter"===f.current,c=()=>{e.dispose(),l.current(f.current)},i=s?"enter":"leave",d=(0,p.k)(),h=void 0!==c?(t={called:!1},function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];if(!t.called)return t.called=!0,c(...n)}):()=>{},"enter"===i&&(n.removeAttribute("hidden"),n.style.display=""),g=(0,a.E)(i,{enter:()=>u.enter,leave:()=>u.leave}),E=(0,a.E)(i,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),b=(0,a.E)(i,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),v(n,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),m(n,...g,...b),d.nextFrame(()=>{v(n,...b),m(n,...E),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[l,i]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),a=l+i;if(0!==a){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},a),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(v(n,...g),m(n,...u.entered),h()))}),d.dispose)),e.dispose}},[n])})({container:I,classes:J,direction:ee,onStart:(0,c.E)(e=>{eo.onStart(I,e,en)}),onStop:(0,c.E)(e=>{eo.onStop(I,e,er),"leave"!==e||S(eo)||(W("hidden"),G(I))})}),(0,o.useEffect)(()=>{$&&(Y===l.l4.Hidden?K.current=null:K.current=z)},[z,$,B]);let el=j;return U&&z&&(el={...el,className:(0,E.A)(j.className,...J.current.enter,...J.current.enterFrom)}),o.createElement(T.Provider,{value:eo},o.createElement(i.up,{value:(0,a.E)(B,{visible:i.ZM.Open,hidden:i.ZM.Closed})|et.flags},(0,l.sY)({ourProps:{ref:V},theirProps:el,defaultTag:"div",features:O,visible:"visible"===B,name:"Transition.Child"})))}),k=(0,l.yV)(function(e,t){let n=null!==(0,o.useContext)(y),r=null!==(0,i.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(C,{ref:t,...e}):o.createElement(R,{ref:t,...e}))}),M=Object.assign(C,{Child:k,Root:C})},5655:function(e,t,n){n.d(t,{G:function(){return l}});var r=n(7294),o=n(7122);function l(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},8354:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(7294),o=n(9438);let l=function(e){let t=(0,o.E)(e);return r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])}},5729:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(7294),o=n(7110);function l(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},7110:function(e,t,n){n.d(t,{e:function(){return l}});var r=n(7294),o=n(3659);let l=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},9438:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(7294),o=n(7110);function l(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},7563:function(e,t,n){n.d(t,{H:function(){return l}});var r=n(7294),o=n(3659);function l(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},6577:function(e,t,n){n.d(t,{T:function(){return a},h:function(){return i}});var r=n(7294),o=n(8354);let l=Symbol();function i(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[l]:t})}function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let i=(0,r.useRef)(t);(0,r.useEffect)(()=>{i.current=t},[t]);let a=(0,o.z)(e=>{for(let t of i.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[l]))?void 0:a}},1365:function(e,t,n){let r;n.d(t,{ZM:function(){return i},oJ:function(){return a},up:function(){return u}});var o=n(7294);let l=(0,o.createContext)(null);l.displayName="OpenClosedContext";var i=((r=i||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function a(){return(0,o.useContext)(l)}function u(e){let{value:t,children:n}=e;return o.createElement(l.Provider,{value:t},n)}},1573:function(e,t,n){n.d(t,{A:function(){return r}});function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}},7122:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=setTimeout(...t);return n.add(()=>clearTimeout(o))},microTask(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];let l={current:!0};return(0,r.Y)(()=>{l.current&&t[0]()}),n.add(()=>{l.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(7378)},3659:function(e,t,n){n.d(t,{O:function(){return a}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);class i{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){l(this,"current",this.detect()),l(this,"handoffState","pending"),l(this,"currentId",0)}}let a=new i},6116:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),l=2;l<n;l++)o[l-2]=arguments[l];if(e in t){let n=t[e];return"function"==typeof n?n(...o):n}let i=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}},7378:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},3619:function(e,t,n){let r,o;n.d(t,{AN:function(){return u},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var l=n(7294),i=n(1573),a=n(6116),u=((r=u||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:l,visible:i=!0,name:u}=e,s=f(n,t);if(i)return d(s,r,o,u);let c=null!=l?l:0;if(2&c){let{static:e=!1,...t}=s;if(e)return d(t,r,o,u)}if(1&c){let{unmount:e=!0,...t}=s;return(0,a.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},r,o,u)})}return d(s,r,o,u)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,{as:o=n,children:a,refName:u="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===l.Fragment&&Object.keys(m(s)).length>0){if(!(0,l.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(s).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,i.A)(null==e?void 0:e.className(...n),s.className)}:(0,i.A)(null==e?void 0:e.className,s.className);return(0,l.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{ref:t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,l.createElement)(o,Object.assign({},v(s,["ref"]),o!==l.Fragment&&c,o!==l.Fragment&&p),d)}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(o).map(e=>[e,void 0])));for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);