"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{6205:function(e,t,n){n.r(t),n.d(t,{default:function(){return tS},headerID:function(){return tE}});var r,o=n(5893),i=n(7294),l=n.t(i,2);function a(...e){return e.filter(Boolean).join(" ")}function u(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,u),o}var s,c,d=((s=d||{})[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s),f=((c=f||{})[c.Unmount=0]="Unmount",c[c.Hidden=1]="Hidden",c);function m({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l}){let a=v(t,e);if(i)return p(a,n,r,l);let s=null!=o?o:0;if(2&s){let{static:c=!1,...d}=a;if(c)return p(d,n,r,l)}if(1&s){let{unmount:f=!0,...m}=a;return u(f?0:1,{0:()=>null,1:()=>p({...m,hidden:!0,style:{display:"none"}},n,r,l)})}return p(a,n,r,l)}function p(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...s}=b(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let f={};if(t){let m=!1,p=[];for(let[h,E]of Object.entries(t))"boolean"==typeof E&&(m=!0),!0===E&&p.push(h);m&&(f["data-headlessui-state"]=p.join(" "))}if(o===i.Fragment&&Object.keys(g(s)).length>0){if(!(0,i.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let w=d.props,y="function"==typeof(null==w?void 0:w.className)?(...e)=>a(null==w?void 0:w.className(...e),s.className):a(null==w?void 0:w.className,s.className);return(0,i.cloneElement)(d,Object.assign({},v(d.props,g(b(s,["ref"]))),f,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),y?{className:y}:{}))}return(0,i.createElement)(o,Object.assign({},b(s,["ref"]),o!==i.Fragment&&c,o!==i.Fragment&&f),d)}function v(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let i in n)Object.assign(t,{[i](e,...t){let r=n[i];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function h(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let E=(0,i.createContext)(null);E.displayName="OpenClosedContext";var w=((Z=w||{})[Z.Open=1]="Open",Z[Z.Closed=2]="Closed",Z[Z.Closing=4]="Closing",Z[Z.Opening=8]="Opening",Z);function y(){return(0,i.useContext)(E)}function T({value:e,children:t}){return i.createElement(E.Provider,{value:e},t)}var x=Object.defineProperty,S=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t,n)=>(S(e,"symbol"!=typeof t?t+"":t,n),n);let F=new class{constructor(){C(this,"current",this.detect()),C(this,"handoffState","pending"),C(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},P=(e,t)=>{F.isServer?(0,i.useEffect)(e,t):(0,i.useLayoutEffect)(e,t)};function L(){let e=(0,i.useRef)(!1);return P(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function R(e){let t=(0,i.useRef)(e);return P(()=>{t.current=e},[e]),t}function O(){let[e,t]=(0,i.useState)(F.isHandoffComplete);return e&&!1===F.isHandoffComplete&&t(!1),(0,i.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,i.useEffect)(()=>F.handoff(),[]),e}let N=function(e){let t=R(e);return i.useCallback((...e)=>t.current(...e),[t])},k=Symbol();function A(...e){let t=(0,i.useRef)(e);(0,i.useEffect)(()=>{t.current=e},[e]);let n=N(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[k]))?void 0:n}function D(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}function M(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){let n={current:!0};return D(()=>{n.current&&e[0]()}),t.add(()=>{n.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=M();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let r of e.splice(n,1))r()}),dispose(){for(let t of e.splice(0))t()}};return t}function j(e,...t){e&&t.length>0&&e.classList.add(...t)}function I(e,...t){e&&t.length>0&&e.classList.remove(...t)}function H(){let[e]=(0,i.useState)(M);return(0,i.useEffect)(()=>()=>e.dispose(),[e]),e}function B(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let _=(0,i.createContext)(null);_.displayName="TransitionContext";var U=((ee=U||{}).Visible="visible",ee.Hidden="hidden",ee);let $=(0,i.createContext)(null);function W(e){return"children"in e?W(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function q(e,t){let n=R(e),r=(0,i.useRef)([]),o=L(),l=H(),a=N((e,t=f.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&(u(t,{[f.Unmount](){r.current.splice(i,1)},[f.Hidden](){r.current[i].state="hidden"}}),l.microTask(()=>{var e;!W(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),s=N(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>a(e,f.Unmount)}),c=(0,i.useRef)([]),d=(0,i.useRef)(Promise.resolve()),m=(0,i.useRef)({enter:[],leave:[],idle:[]}),p=N((e,n,r)=>{c.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{c.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?d.current=d.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),v=N((e,t,n)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=c.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:s,unregister:a,onStart:p,onStop:v,wait:d,chains:m}),[s,a,r,p,v,m,d])}function V(){}$.displayName="NestingContext";let Y=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function G(e){var t;let n={};for(let r of Y)n[r]=null!=(t=e[r])?t:V;return n}let K=d.RenderStrategy,z=h(function(e,t){let{show:n,appear:r=!1,unmount:o,...l}=e,a=(0,i.useRef)(null),u=A(a,t);O();let s=y();if(void 0===n&&null!==s&&(n=(s&w.Open)===w.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,i.useState)(n?"visible":"hidden"),f=q(()=>{d("hidden")}),[p,v]=(0,i.useState)(!0),h=(0,i.useRef)([n]);P(()=>{!1!==p&&h.current[h.current.length-1]!==n&&(h.current.push(n),v(!1))},[h,n]);let g=(0,i.useMemo)(()=>({show:n,appear:r,initial:p}),[n,r,p]);(0,i.useEffect)(()=>{if(n)d("visible");else if(W(f)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")},[n,f]);let b={unmount:o};return i.createElement($.Provider,{value:f},i.createElement(_.Provider,{value:g},m({ourProps:{...b,as:i.Fragment,children:i.createElement(X,{ref:u,...b,...l})},theirProps:{},defaultTag:i.Fragment,features:K,visible:"visible"===c,name:"Transition"})))}),X=h(function(e,t){var n;let{beforeEnter:r,afterEnter:o,beforeLeave:l,afterLeave:s,enter:c,enterFrom:d,enterTo:p,entered:v,leave:h,leaveFrom:g,leaveTo:b,...E}=e,y=(0,i.useRef)(null),x=A(y,t),S=E.unmount?f.Unmount:f.Hidden,{show:C,appear:F,initial:k}=function(){let e=(0,i.useContext)(_);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[D,U]=(0,i.useState)(C?"visible":"hidden"),V=function(){let e=(0,i.useContext)($);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Y,unregister:z}=V,X=(0,i.useRef)(null);(0,i.useEffect)(()=>Y(y),[Y,y]),(0,i.useEffect)(()=>{if(S===f.Hidden&&y.current){if(C&&"visible"!==D){U("visible");return}return u(D,{hidden:()=>z(y),visible:()=>Y(y)})}},[D,y,Y,z,C,S]);let J,Q=R({enter:B(c),enterFrom:B(d),enterTo:B(p),entered:B(v),leave:B(h),leaveFrom:B(g),leaveTo:B(b)}),Z=(n={beforeEnter:r,afterEnter:o,beforeLeave:l,afterLeave:s},J=(0,i.useRef)(G(n)),(0,i.useEffect)(()=>{J.current=G(n)},[n]),J),ee=O();(0,i.useEffect)(()=>{if(ee&&"visible"===D&&null===y.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[y,D,ee]);let et=k&&!F,en=!ee||et||X.current===C?"idle":C?"enter":"leave",er=function(e=0){let[t,n]=(0,i.useState)(e),r=L(),o=(0,i.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),l=(0,i.useCallback)(e=>Boolean(t&e),[t]),a=(0,i.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),u=(0,i.useCallback)(e=>{r.current&&n(t=>t^e)},[n]);return{flags:t,addFlag:o,hasFlag:l,removeFlag:a,toggleFlag:u}}(0),eo=N(e=>u(e,{enter(){er.addFlag(w.Opening),Z.current.beforeEnter()},leave(){er.addFlag(w.Closing),Z.current.beforeLeave()},idle(){}})),ei=N(e=>u(e,{enter(){er.removeFlag(w.Opening),Z.current.afterEnter()},leave(){er.removeFlag(w.Closing),Z.current.afterLeave()},idle(){}})),el=q(()=>{U("hidden"),z(y)},V);(function({container:e,direction:t,classes:n,onStart:r,onStop:o}){let i=L(),l=H(),a=R(t);P(()=>{let t=M();l.add(t.dispose);let s=e.current;if(s&&"idle"!==a.current&&i.current){var c,d,f,m,p;let v,h,g,b,E,w,y;return t.dispose(),r.current(a.current),t.add((c=s,d=n.current,f="enter"===a.current,m=()=>{t.dispose(),o.current(a.current)},h=f?"enter":"leave",g=M(),b=void 0!==m?(v={called:!1},(...e)=>{if(!v.called)return v.called=!0,m(...e)}):()=>{},"enter"===h&&(c.removeAttribute("hidden"),c.style.display=""),E=u(h,{enter:()=>d.enter,leave:()=>d.leave}),w=u(h,{enter:()=>d.enterTo,leave:()=>d.leaveTo}),y=u(h,{enter:()=>d.enterFrom,leave:()=>d.leaveFrom}),I(c,...d.enter,...d.enterTo,...d.enterFrom,...d.leave,...d.leaveFrom,...d.leaveTo,...d.entered),j(c,...E,...y),g.nextFrame(()=>{I(c,...y),j(c,...w),function(e,t){let n=M();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),a=i+l;if(0!==a){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},a),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let u=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),u())})}else t();n.add(()=>t()),n.dispose}(c,()=>(I(c,...E),j(c,...d.entered),b()))}),g.dispose)),t.dispose}},[t])})({container:y,classes:Q,direction:en,onStart:R(e=>{el.onStart(y,e,eo)}),onStop:R(e=>{el.onStop(y,e,ei),"leave"!==e||W(el)||(U("hidden"),z(y))})}),(0,i.useEffect)(()=>{et&&(S===f.Hidden?X.current=null:X.current=C)},[C,et,D]);let ea=E;return F&&C&&(ea={...ea,className:a(E.className,...Q.current.enter,...Q.current.enterFrom)}),i.createElement($.Provider,{value:el},i.createElement(T,{value:u(D,{visible:w.Open,hidden:w.Closed})|er.flags},m({ourProps:{ref:x},theirProps:ea,defaultTag:"div",features:K,visible:"visible"===D,name:"Transition.Child"})))}),J=h(function(e,t){let n=null!==(0,i.useContext)(_),r=null!==y();return i.createElement(i.Fragment,null,!n&&r?i.createElement(z,{ref:t,...e}):i.createElement(X,{ref:t,...e}))}),Q=Object.assign(z,{Child:J,Root:z});var Z,ee,et,en=((et=en||{}).Space=" ",et.Enter="Enter",et.Escape="Escape",et.Backspace="Backspace",et.Delete="Delete",et.ArrowLeft="ArrowLeft",et.ArrowUp="ArrowUp",et.ArrowRight="ArrowRight",et.ArrowDown="ArrowDown",et.Home="Home",et.End="End",et.PageUp="PageUp",et.PageDown="PageDown",et.Tab="Tab",et);let er=null!=(r=i.useId)?r:function(){let e=O(),[t,n]=i.useState(e?()=>F.nextId():null);return P(()=>{null===t&&n(F.nextId())},[t]),null!=t?""+t:void 0};var eo,ei=((eo=ei||{})[eo.None=1]="None",eo[eo.Focusable=2]="Focusable",eo[eo.Hidden=4]="Hidden",eo);let el=h(function(e,t){let{features:n=1,...r}=e;return m({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function ea(e){return F.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let eu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var es,ec,ed,ef,em,ep=((es=ep||{})[es.First=1]="First",es[es.Previous=2]="Previous",es[es.Next=4]="Next",es[es.Last=8]="Last",es[es.WrapAround=16]="WrapAround",es[es.NoScroll=32]="NoScroll",es),ev=((ec=ev||{})[ec.Error=0]="Error",ec[ec.Overflow=1]="Overflow",ec[ec.Success=2]="Success",ec[ec.Underflow=3]="Underflow",ec),eh=((ed=eh||{})[ed.Previous=-1]="Previous",ed[ed.Next=1]="Next",ed),eg=((ef=eg||{})[ef.Strict=0]="Strict",ef[ef.Loose=1]="Loose",ef),eb=((em=eb||{})[em.Keyboard=0]="Keyboard",em[em.Mouse=1]="Mouse",em);function eE(e){null==e||e.focus({preventScroll:!0})}function ew(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i,l,a;let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(eu)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:u.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},m=0,p=s.length,v;do{if(m>=p||m+p<=0)return 0;let h=d+m;if(16&t)h=(h+p)%p;else{if(h<0)return 3;if(h>=p)return 1}null==(v=s[h])||v.focus(f),m+=c}while(v!==u.activeElement);return 6&t&&null!=(a=null==(l=null==(i=v)?void 0:i.matches)?void 0:l.call(i,"textarea,input"))&&a&&v.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var ey,eT=((ey=eT||{})[ey.Forwards=0]="Forwards",ey[ey.Backwards=1]="Backwards",ey);function ex(...e){return(0,i.useMemo)(()=>ea(...e),[...e])}function eS(e,t,n,r){let o=R(n);(0,i.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}function eC(e,t){let n=(0,i.useRef)([]),r=N(e);(0,i.useEffect)(()=>{let e=[...n.current];for(let[o,i]of t.entries())if(n.current[o]!==i){let l=r(t,e);return n.current=t,l}},[r,...t])}function eF(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var eP,eL=((eP=eL||{})[eP.None=1]="None",eP[eP.InitialFocus=2]="InitialFocus",eP[eP.TabLock=4]="TabLock",eP[eP.FocusLock=8]="FocusLock",eP[eP.RestoreFocus=16]="RestoreFocus",eP[eP.All=30]="All",eP);let eR=Object.assign(h(function(e,t){var n,r;let o=(0,i.useRef)(null),l=A(o,t),{initialFocus:a,containers:s,features:c=30,...d}=e;O()||(c=1);let f=ex(o);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,i.useRef)(eO.slice());return eC(([e],[n])=>{!0===n&&!1===e&&D(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=eO.slice())},[e,eO,t]),N(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);eC(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&eE(n())},[t]);let r=(0,i.useRef)(!1);(0,i.useEffect)(()=>(r.current=!1,()=>{r.current=!0,D(()=>{r.current&&eE(n())})}),[])}({ownerDocument:f},Boolean(16&c));let p=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,i.useRef)(null),l=L();return eC(()=>{if(!r)return;let i=t.current;i&&D(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(i.contains(t)){o.current=t;return}null!=n&&n.current?eE(n.current):ew(i,ep.First)===ev.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:f,container:o,initialFocus:a},Boolean(2&c));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=L();eS(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!i.current)return;let l=eF(n);t.current instanceof HTMLElement&&l.add(t.current);let a=r.current;if(!a)return;let u=e.target;u&&u instanceof HTMLElement?eN(l,u)?(r.current=u,eE(u)):(e.preventDefault(),e.stopPropagation(),eE(a)):eE(r.current)},!0)}({ownerDocument:f,container:o,containers:s,previousActiveElement:p},Boolean(8&c));let v,h,g=(v=(0,i.useRef)(0),n="keydown",h=R(e=>{"Tab"===e.key&&(v.current=e.shiftKey?1:0)}),(0,i.useEffect)(()=>{function e(e){h.current(e)}return window.addEventListener(n,e,!0),()=>window.removeEventListener(n,e,!0)},[n,!0]),v),b=N(e=>{let t=o.current;t&&u(g.current,{[eT.Forwards](){ew(t,ep.First,{skipElements:[e.relatedTarget]})},[eT.Backwards](){ew(t,ep.Last,{skipElements:[e.relatedTarget]})}})}),E=H(),w=(0,i.useRef)(!1);return i.createElement(i.Fragment,null,Boolean(4&c)&&i.createElement(el,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:b,features:ei.Focusable}),m({ourProps:{ref:l,onKeyDown(e){"Tab"==e.key&&(w.current=!0,E.requestAnimationFrame(()=>{w.current=!1}))},onBlur(e){let t=eF(s);o.current instanceof HTMLElement&&t.add(o.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(eN(t,n)||(w.current?ew(o.current,u(g.current,{[eT.Forwards]:()=>ep.Next,[eT.Backwards]:()=>ep.Previous})|ep.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&eE(e.target)))}},theirProps:d,defaultTag:"div",name:"FocusTrap"}),Boolean(4&c)&&i.createElement(el,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:b,features:ei.Focusable}))}),{features:eL}),eO=[];function eN(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&eO[0]!==e.target&&(eO.unshift(e.target),(eO=eO.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var ek=n(3935);let eA=(0,i.createContext)(!1);function eD(e){return i.createElement(eA.Provider,{value:e.force},e.children)}let eM=i.Fragment,ej=i.Fragment,eI=(0,i.createContext)(null),eH=h(function(e,t){let n=(0,i.useRef)(null),r=A(function(e,t=!0){return Object.assign(e,{[k]:t})}(e=>{n.current=e}),t),o=ex(n),l=function(e){let t=(0,i.useContext)(eA),n=(0,i.useContext)(eI),r=ex(e),[o,l]=(0,i.useState)(()=>{if(!t&&null!==n||F.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,i.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,i.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[a]=(0,i.useState)(()=>{var e;return F.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),u=O(),s=(0,i.useRef)(!1);return P(()=>{if(s.current=!1,!(!l||!a))return l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a)),()=>{s.current=!0,D(()=>{var e;s.current&&l&&a&&(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))})}},[l,a]),u&&l&&a?(0,ek.createPortal)(m({ourProps:{ref:r},theirProps:e,defaultTag:eM,name:"Portal"}),a):null}),eB=h(function(e,t){let{target:n,...r}=e,o={ref:A(t)};return i.createElement(eI.Provider,{value:n},m({ourProps:o,theirProps:r,defaultTag:ej,name:"Popover.Group"}))}),e_=Object.assign(eH,{Group:eB}),eU=(0,i.createContext)(null),e$=Object.assign(h(function(e,t){let n=er(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,i.useContext)(eU);if(null===t){let n=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return t}(),a=A(t);P(()=>l.register(r),[r,l.register]);let u={ref:a,...l.props,id:r};return m({ourProps:u,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{}),eW=(0,i.createContext)(()=>{});eW.displayName="StackContext";var eq=((e5=eq||{})[e5.Add=0]="Add",e5[e5.Remove=1]="Remove",e5);function eV({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,i.useContext)(eW),a=N((...e)=>{null==t||t(...e),l(...e)});return P(()=>{let e=void 0===o||!0===o;return e&&a(0,n,r),()=>{e&&a(1,n,r)}},[a,n,r,o]),i.createElement(eW.Provider,{value:a},e)}function eY(e,t,n){let r=R(t);(0,i.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let{useState:eG,useEffect:eK,useLayoutEffect:ez,useDebugValue:eX}=l;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let eJ=l.useSyncExternalStore,eQ,eZ,e0=(e3=()=>new Map,e6={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:M(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},i=[function(){if(!(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0))return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(e){return r.containers.flatMap(e=>e()).some(t=>t.contains(e))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let i=null;n.addEventListener(t,"click",e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),l=t.querySelector(r);l&&!o(l)&&(i=l)}catch{}},!0),n.addEventListener(t,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})}}}(),{before({doc:e}){var t;let n=e.documentElement;r=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,o=r-(n.clientWidth-n.offsetWidth);t.style(n,"paddingRight",`${o}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach(({before:e})=>null==e?void 0:e(o)),i.forEach(({after:e})=>null==e?void 0:e(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},eQ=e3(),eZ=new Set,{getSnapshot:()=>eQ,subscribe:e=>(eZ.add(e),()=>eZ.delete(e)),dispatch(e,...t){let n=e6[e].call(eQ,...t);n&&(eQ=n,eZ.forEach(e=>e()))}});e0.subscribe(()=>{let e=e0.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let r of e.values()){let o="hidden"===t.get(r.doc),i=0!==r.count;(i&&!o||!i&&o)&&e0.dispatch(r.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",r),0===r.count&&e0.dispatch("TEARDOWN",r)}});let e1=new Map,e2=new Map;function e4(e,t=!0){P(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=e2.get(r))?n:0;return e2.set(r,o+1),0!==o||(e1.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=e2.get(r))?e:1;if(1===t?e2.delete(r):e2.set(r,t-1),1!==t)return;let n=e1.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,e1.delete(r))}},[e,t])}var e5,e3,e6,e8,e9,e7=((e8=e7||{})[e8.Open=0]="Open",e8[e8.Closed=1]="Closed",e8),te=((e9=te||{})[e9.SetTitleId=0]="SetTitleId",e9);let tt={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},tn=(0,i.createContext)(null);function tr(e){let t=(0,i.useContext)(tn);if(null===t){let n=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,tr),n}return t}function to(e,t){return u(t.type,tt,e,t)}tn.displayName="DialogContext";let ti=d.RenderStrategy|d.Static,tl=h(function(e,t){let n=er(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:a,__demoMode:s=!1,...c}=e,[d,f]=(0,i.useState)(0),p=y();void 0===o&&null!==p&&(o=(p&w.Open)===w.Open);let v=(0,i.useRef)(null),h=A(v,t),g=(0,i.useRef)(null),b=ex(v),E=e.hasOwnProperty("open")||null!==p,T=e.hasOwnProperty("onClose");if(!E&&!T)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!E)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!T)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if("function"!=typeof l)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let x=o?0:1,[S,C]=(0,i.useReducer)(to,{titleId:null,descriptionId:null,panelRef:(0,i.createRef)()}),F=N(()=>l(!1)),L=N(e=>C({type:0,id:e})),R=!!O()&&!s&&0===x,k=d>1,D=null!==(0,i.useContext)(tn),M=null!==p&&(p&w.Closing)===w.Closing;e4((0,i.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(g.current)&&e instanceof HTMLElement))?t:null},[g]),!D&&!M&&R),e4((0,i.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(g.current)&&e instanceof HTMLElement))?t:null},[g]),!!k||R);let j=N(()=>{var e,t;return[...Array.from(null!=(e=null==b?void 0:b.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(g.current)||S.panelRef.current&&e.contains(S.panelRef.current))),null!=(t=S.panelRef.current)?t:v.current]});!function(e,t,n=!0){let r=(0,i.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let a of i){if(null===a)continue;let s=a instanceof HTMLElement?a:a.current;if(null!=s&&s.contains(l)||n.composed&&n.composedPath().includes(s))return}return!function(e,t=0){var n;return e!==(null==(n=ea(e))?void 0:n.body)&&u(t,{0:()=>e.matches(eu),1(){let t=e;for(;null!==t;){if(t.matches(eu))return!0;t=t.parentElement}return!1}})}(l,eg.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,i.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,i.useRef)(null);eY("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eY("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),eY("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(()=>j(),F,!(!R||k));let I=!(k||0!==x);eS(null==b?void 0:b.defaultView,"keydown",e=>{I&&(e.defaultPrevented||e.key===en.Escape&&(e.preventDefault(),e.stopPropagation(),F()))}),function(e,t,n=()=>[document.body]){var r,o,i,l;let a,u,s;i=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},a=eJ(e0.subscribe,e0.getSnapshot,e0.getSnapshot),u=e?a.get(e):void 0,u&&u.count,P(()=>{if(!(!e||!t))return e0.dispatch("PUSH",e,i),()=>e0.dispatch("POP",e,i)},[t,e])}(b,!(M||0!==x||D),j),(0,i.useEffect)(()=>{if(0!==x||!v.current)return;let e=new ResizeObserver(e=>{for(let t of e){let n=t.target.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&F()}});return e.observe(v.current),()=>e.disconnect()},[x,v,F]);let[H,B]=function(){let[e,t]=(0,i.useState)([]);return[e.length>0?e.join(" "):void 0,(0,i.useMemo)(()=>function(e){let n=N(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,i.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return i.createElement(eU.Provider,{value:r},e.children)},[t])]}(),_=(0,i.useMemo)(()=>[{dialogState:x,close:F,setTitleId:L},S],[x,S,F,L]),U=(0,i.useMemo)(()=>({open:0===x}),[x]),$={ref:h,id:r,role:"dialog","aria-modal":0===x||void 0,"aria-labelledby":S.titleId,"aria-describedby":H};return i.createElement(eV,{type:"Dialog",enabled:0===x,element:v,onUpdate:N((e,t)=>{"Dialog"===t&&u(e,{[eq.Add]:()=>f(e=>e+1),[eq.Remove]:()=>f(e=>e-1)})})},i.createElement(eD,{force:!0},i.createElement(e_,null,i.createElement(tn.Provider,{value:_},i.createElement(e_.Group,{target:v},i.createElement(eD,{force:!1},i.createElement(B,{slot:U,name:"Dialog.Description"},i.createElement(eR,{initialFocus:a,containers:j,features:R?u(k?"parent":"leaf",{parent:eR.features.RestoreFocus,leaf:eR.features.All&~eR.features.FocusLock}):eR.features.None},m({ourProps:$,theirProps:c,slot:U,defaultTag:"div",features:ti,visible:0===x,name:"Dialog"})))))))),i.createElement(el,{features:ei.Hidden,ref:g}))}),ta=h(function(e,t){let n=er(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=tr("Dialog.Backdrop"),u=A(t);(0,i.useEffect)(()=>{if(null===a.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let s=(0,i.useMemo)(()=>({open:0===l}),[l]);return i.createElement(eD,{force:!0},i.createElement(e_,null,m({ourProps:{ref:u,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Backdrop"})))}),tu=h(function(e,t){let n=er(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=tr("Dialog.Panel"),u=A(t,a.panelRef),s=(0,i.useMemo)(()=>({open:0===l}),[l]),c=N(e=>{e.stopPropagation()});return m({ourProps:{ref:u,id:r,onClick:c},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Panel"})}),ts=h(function(e,t){let n=er(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=tr("Dialog.Overlay"),u=A(t),s=N(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),a()}});return m({ourProps:{ref:u,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:(0,i.useMemo)(()=>({open:0===l}),[l]),defaultTag:"div",name:"Dialog.Overlay"})}),tc=h(function(e,t){let n=er(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=tr("Dialog.Title"),u=A(t);return(0,i.useEffect)(()=>(a(r),()=>a(null)),[r,a]),m({ourProps:{ref:u,id:r},theirProps:o,slot:(0,i.useMemo)(()=>({open:0===l}),[l]),defaultTag:"h2",name:"Dialog.Title"})}),td=Object.assign(tl,{Backdrop:ta,Panel:tu,Overlay:ts,Title:tc,Description:e$}),tf=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16m-7 6h7"}))});var tm=n(4184),tp=n.n(tm),tv=n(1664),th=n.n(tv),tg=n(4120),tb=function(e,t){(0,i.useEffect)(function(){var n=document.querySelectorAll(e),r=Array.from(n),o=document.getElementById(tE),i=new IntersectionObserver(function(e){e.forEach(function(e){var n=e.boundingClientRect.y,i=e.target.getAttribute("id");if(o){var l,a={id:i,currentIndex:r.findIndex(function(e){return e.getAttribute("id")===i}),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:n<o.getBoundingClientRect().y,belowToc:!(n<o.getBoundingClientRect().y)};a.isIntersecting?t(a.id):!a.isIntersecting&&a.currentRatio<1&&a.currentRatio>0&&a.belowToc&&t(null===(l=r[a.currentIndex-1])||void 0===l?void 0:l.getAttribute("id"))}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return n.forEach(function(e){i.observe(e)}),function(){i.disconnect()}},[])},tE="headerNav",tw=(0,i.memo)(function(){var e=(0,i.useState)(null),t=e[0],n=e[1],r=(0,i.useMemo)(function(){return[tg._h.About,tg._h.Resume,tg._h.Portfolio,tg._h.Testimonials,tg._h.Contact]},[]),l=(0,i.useCallback)(function(e){e&&n(e)},[]);return tb(r.map(function(e){return"#".concat(e)}).join(","),l),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(tT,{currentSection:t,navSections:r}),(0,o.jsx)(ty,{currentSection:t,navSections:r})]})}),ty=(0,i.memo)(function(e){var t=e.navSections,n=e.currentSection,r="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",i=tp()(r,"text-orange-500"),l=tp()(r,"text-neutral-100");return(0,o.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:tE,children:(0,o.jsx)("nav",{className:"flex justify-center gap-x-8",children:t.map(function(e){return(0,o.jsx)(tx,{activeClass:i,current:e===n,inactiveClass:l,section:e},e)})})})}),tT=(0,i.memo)(function(e){var t=e.navSections,n=e.currentSection,r=(0,i.useState)(!1),l=r[0],a=r[1],u=(0,i.useCallback)(function(){a(!l)},[l]),s="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",c=tp()(s,"bg-neutral-900 text-white font-bold"),d=tp()(s,"text-neutral-200 font-medium");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:u,children:[(0,o.jsx)(tf,{className:"h-8 w-8 text-white"}),(0,o.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,o.jsx)(Q.Root,{as:i.Fragment,show:l,children:(0,o.jsxs)(td,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:u,children:[(0,o.jsx)(Q.Child,{as:i.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)(td.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,o.jsx)(Q.Child,{as:i.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,o.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,o.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:t.map(function(e){return(0,o.jsx)(tx,{activeClass:c,current:e===n,inactiveClass:d,onClick:u,section:e},e)})})})})]})})]})}),tx=(0,i.memo)(function(e){var t=e.section,n=e.current,r=e.inactiveClass,i=e.activeClass,l=e.onClick;return(0,o.jsx)(th(),{href:"/#".concat(t),passHref:!0,children:(0,o.jsx)("a",{className:tp()(n?i:r),onClick:l,children:t},t)})});tw.displayName="Header";var tS=tw}}]);