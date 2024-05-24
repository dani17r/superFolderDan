import{o as A,av as $,aw as ne,c as le,r as E,a as f,w as O,h as g,as as p,b as ae,g as se,ax as ue}from"./index-DHSe1Man.js";import{u as re,e as ce,a as de,b as fe,f as me,g as ve,h as ge,c as he,r as K,i as L,j as ye,k as be}from"./ClosePopup-CUQAiiAZ.js";import{b as xe}from"./superComposable-tYNyz0Wa.js";function ke(e,i,l){let n;function r(){n!==void 0&&($.remove(n),n=void 0)}return A(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){n={condition:()=>l.value===!0,handler:i},$.add(n)}}}function qe(){let e;return{preventBodyScroll(i){i!==e&&(e!==void 0||i===!0)&&(e=i,ne(i))}}}let x=0;const Se={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},j={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Ee=le({name:"QDialog",inheritAttrs:!1,props:{...re,...ce,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...de,"shake","click","escapeKey"],setup(e,{slots:i,emit:l,attrs:n}){const r=se(),a=E(null),c=E(!1),m=E(!1);let s=null,u=null,h,k;const _=f(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:F}=qe(),{registerTimeout:C}=fe(),{registerTick:I,removeTick:H}=me(),{transitionProps:Q,transitionStyle:z}=ve(e,()=>j[e.position][0],()=>j[e.position][1]),V=f(()=>z.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:D,hidePortal:M,portalIsAccessible:W,renderPortal:U}=ge(r,a,ie,"dialog"),{hide:y}=he({showing:c,hideOnRouteChange:_,handleShow:Z,handleHide:ee,processOnMount:!0}),{addToHistory:G,removeFromHistory:J}=ke(c,y,_),N=f(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Se[e.position]}`+(m.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),b=f(()=>c.value===!0&&e.seamless!==!0),X=f(()=>e.autoClose===!0?{onClick:te}:{}),Y=f(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${b.value===!0?"modal":"seamless"}`,n.class]);O(()=>e.maximized,t=>{c.value===!0&&w(t)}),O(b,t=>{F(t),t===!0?(ye(B),be(S)):(K(B),L(S))});function Z(t){G(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,w(e.maximized),D(),m.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),I(v)):H(),C(()=>{if(r.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:d}=document.activeElement.getBoundingClientRect(),{innerHeight:R}=window,T=window.visualViewport!==void 0?window.visualViewport.height:R;o>0&&d>T/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-T,d>=R?1/0:Math.ceil(document.scrollingElement.scrollTop+d-T/2))),document.activeElement.scrollIntoView()}k=!0,a.value.click(),k=!1}D(!0),m.value=!1,l("show",t)},e.transitionDuration)}function ee(t){H(),J(),P(!0),m.value=!0,M(),u!==null&&(((t&&t.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),C(()=>{M(!0),m.value=!1,l("hide",t)},e.transitionDuration)}function v(t){xe(()=>{let o=a.value;if(o!==null){if(t!==void 0){const d=o.querySelector(t);if(d!==null){d.focus({preventScroll:!0});return}}o.contains(document.activeElement)!==!0&&(o=o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))}})}function q(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):v(),l("shake");const o=a.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,a.value!==null&&(o.classList.remove("q-animate--scale"),v())},170))}function S(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&q():(l("escapeKey"),y()))}function P(t){s!==null&&(clearTimeout(s),s=null),(t===!0||c.value===!0)&&(w(!1),e.seamless!==!0&&(F(!1),K(B),L(S))),t!==!0&&(u=null)}function w(t){t===!0?h!==!0&&(x<1&&document.body.classList.add("q-body--dialog"),x++,h=!0):h===!0&&(x<2&&document.body.classList.remove("q-body--dialog"),x--,h=!1)}function te(t){k!==!0&&(y(t),l("click",t))}function oe(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?y(t):e.noShake!==!0&&q()}function B(t){e.allowFocusOutside!==!0&&W.value===!0&&ue(a.value,t.target)!==!0&&v('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:v,shake:q,__updateRefocusTarget(t){u=t||null}}),A(P);function ie(){return g("div",{role:"dialog","aria-modal":b.value===!0?"true":"false",...n,class:Y.value},[g(p,{name:"q-transition--fade",appear:!0},()=>b.value===!0?g("div",{class:"q-dialog__backdrop fixed-full",style:V.value,"aria-hidden":"true",tabindex:-1,onClick:oe}):null),g(p,Q.value,()=>c.value===!0?g("div",{ref:a,class:N.value,style:z.value,tabindex:-1,...X.value},ae(i.default)):null)])}return U}});export{Ee as Q,qe as a,ke as u};