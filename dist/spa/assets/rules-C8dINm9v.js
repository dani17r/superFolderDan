import{ae as we,r as O,x as ae,w as D,a as y,az as Me,g as G,i as Se,o as oe,aA as Re,aB as qe,an as ke,v as Ae,y as Y,ar as Fe,aC as Ve,h as x,q as J,Q as de,aD as _e,b as X,al as Ee,aE as Be,j as $e,c as Ie,s as fe}from"./index-8A18UAFp.js";import{b as xe,a as Oe,d as Te,u as Pe}from"./superComposable-eMaWt6Xc.js";let re,ee=0;const I=new Array(256);for(let e=0;e<256;e++)I[e]=(e+256).toString(16).substring(1);const De=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let u=t;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),ce=4096;function ie(){(re===void 0||ee+16>ce)&&(ee=0,re=De(ce));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,I[e[0]]+I[e[1]]+I[e[2]]+I[e[3]]+"-"+I[e[4]]+I[e[5]]+"-"+I[e[6]]+I[e[7]]+"-"+I[e[8]]+I[e[9]]+"-"+I[e[10]]+I[e[11]]+I[e[12]]+I[e[13]]+I[e[14]]+I[e[15]]}function je(e){return e??null}function ve(e,t){return e??(t===!0?`f_${ie()}`:null)}function ze({getValue:e,required:t=!0}={}){if(we.value===!0){const r=e!==void 0?O(je(e())):O(null);return t===!0&&r.value===null&&ae(()=>{r.value=`f_${ie()}`}),e!==void 0&&D(e,u=>{r.value=ve(u,t)}),r}return e!==void 0?y(()=>ve(e(),t)):O(`f_${ie()}`)}const ge=/^on[A-Z]/;function Ne(){const{attrs:e,vnode:t}=G(),r={listeners:O({}),attributes:O({})};function u(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&ge.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)ge.test(v)===!0&&(d[v]=t.props[v]);r.attributes.value=f,r.listeners.value=d}return Me(u),u(),r}function Ke({validate:e,resetValidation:t,requiresQForm:r}){const u=Se(Re,!1);if(u!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),ae(()=>{f.disable!==!0&&u.bindComponent(d)}),oe(()=>{f.disable!==!0&&u.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,he=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>he.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>me.test(e)||te.test(e),hexaOrRgbaColor:e=>he.test(e)||ne.test(e),anyColor:e=>be.test(e)||te.test(e)||ne.test(e)},Le=[!0,!1,"ondemand"],Ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Le.includes(e)}};function Ue(e,t){const{props:r,proxy:u}=G(),f=O(!1),d=O(null),v=O(!1);Ke({validate:z,resetValidation:j});let C=0,E;const R=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),w=y(()=>r.disable!==!0&&R.value===!0&&t.value===!1),b=y(()=>r.error===!0||f.value===!0),H=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);D(()=>r.modelValue,()=>{v.value=!0,w.value===!0&&r.lazyRules===!1&&T()});function $(){r.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&T()}D(()=>r.reactiveRules,K=>{K===!0?E===void 0&&(E=D(()=>r.rules,$,{immediate:!0,deep:!0})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),D(()=>r.lazyRules,$),D(e,K=>{K===!0?v.value=!0:w.value===!0&&r.lazyRules!=="ondemand"&&T()});function j(){C++,t.value=!1,v.value=!1,f.value=!1,d.value=null,T.cancel()}function z(K=r.modelValue){if(r.disable===!0||R.value===!1)return!0;const V=++C,Q=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,M)=>{S===!0&&Q(),f.value=S,d.value=M||null,t.value=!1},N=[];for(let S=0;S<r.rules.length;S++){const M=r.rules[S];let B;if(typeof M=="function"?B=M(K,ue):typeof M=="string"&&ue[M]!==void 0&&(B=ue[M](K)),B===!1||typeof B=="string")return L(!0,B),!1;B!==!0&&B!==void 0&&N.push(B)}return N.length===0?(L(!1),!0):(t.value=!0,Promise.all(N).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return V===C&&L(!1),!0;const M=S.find(B=>B===!1||typeof B=="string");return V===C&&L(M!==void 0,M),M===void 0},S=>(V===C&&(console.error(S),L(!0)),!1)))}const T=qe(z,0);return oe(()=>{E!==void 0&&E(),T.cancel()}),Object.assign(u,{resetValidation:j,validate:z}),ke(u,"hasError",()=>b.value),{isDirtyModel:v,hasRules:R,hasError:b,errorMessage:H,validate:z,resetValidation:j}}function se(e){return e!=null&&(""+e).length!==0}const He={...Pe,...Ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Qe={...He,maxlength:[Number,String]},Ye=["update:modelValue","clear","focus","blur"];function We({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:u,proxy:f}=G(),d=Oe(u,f.$q),v=ze({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?y(()=>u.tag):{value:"label"},isDark:d,editable:y(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:Ne(),targetUid:v,rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function Ge(e){const{props:t,emit:r,slots:u,attrs:f,proxy:d}=G(),{$q:v}=d;let C=null;e.hasValue===void 0&&(e.hasValue=y(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{r("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:l,focus:M}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:E,hasRules:R,hasError:w,errorMessage:b,resetValidation:H}=Ue(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),j=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=y(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&j.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),L=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),N=y(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function S(){const i=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(i===null||i.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==i&&c.focus({preventScroll:!0}))}function M(){xe(S)}function B(){Te(S);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function a(i){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",i))}function l(i,c){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",i)),c!==void 0&&c())})}function s(i){Ae(i),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),Y(()=>{const c=E.value;H(),E.value=c})}function o(i){[13,32].includes(i.keyCode)&&s(i)}function h(){const i=[];return u.prepend!==void 0&&i.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},u.prepend())),i.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&i.push(m("error",[x(de,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(m("inner-loading-append",u.loading!==void 0?u.loading():[x(_e,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(m("inner-clearable-append",[x(de,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-label":v.lang.label.clear,onKeyup:o,onClick:s})])),u.append!==void 0&&i.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},u.append())),e.getInnerAppend!==void 0&&i.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function g(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(L.value))),V.value===!0&&i.push(x("div",{class:Q.value},X(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(X(u.default))}function q(){let i,c;w.value===!0?b.value!==null?(i=[x("div",{role:"alert"},b.value)],c=`q--slot-error-${b.value}`):(i=X(u.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[x("div",t.hint)],c=`q--slot-hint-${t.hint}`):(i=X(u.hint),c="q--slot-hint"));const k=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&i===void 0)return;const A=x("div",{key:c,class:"q-field__messages col"},i);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?A:x(Ee,{name:"q-transition--field-message"},()=>A),k===!0?x("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function m(i,c){return c===null?null:x("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let p=!1;return Fe(()=>{p=!0}),Ve(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ae(()=>{d.focus()}),oe(()=>{C!==null&&clearTimeout(C)}),Object.assign(d,{focus:M,blur:B}),function(){const c=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...N.value}:N.value;return x(e.tag.value,{ref:e.rootRef,class:[T.value,f.class],style:f.style,...c},[u.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},u.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},h()),j.value===!0?q():null]),u.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},u.after()):null])}}const pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ce=Object.keys(le);Ce.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Je=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ce.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,_="",Xe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function et(e,t,r,u){let f,d,v,C,E,R;const w=O(null),b=O($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,z),D(()=>e.mask,a=>{if(a!==void 0)T(b.value,!0);else{const l=M(b.value);z(),e.modelValue!==l&&t("update:modelValue",l)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&T(b.value,!0)}),D(()=>e.unmaskedValue,()=>{w.value===!0&&T(b.value)});function $(){if(z(),w.value===!0){const a=N(M(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function j(a){if(a<f.length)return f.slice(-a);let l="",s=f;const o=s.indexOf(_);if(o!==-1){for(let h=a-s.length;h>0;h--)l+=_;s=s.slice(0,o)+l+s.slice(o)}return s}function z(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){C=void 0,f="",d="";return}const a=pe[e.mask]===void 0?e.mask:pe[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(ye,"\\$&"),o=[],h=[],g=[];let q=e.reverseFillMask===!0,m="",p="";a.replace(Je,(A,n,F,U,Z)=>{if(U!==void 0){const P=le[U];g.push(P),p=P.negate,q===!0&&(h.push("(?:"+p+"+)?("+P.pattern+"+)?(?:"+p+"+)?("+P.pattern+"+)?"),q=!1),h.push("(?:"+p+"+)?("+P.pattern+")?")}else if(F!==void 0)m="\\"+(F==="\\"?"":F),g.push(F),o.push("([^"+m+"]+)?"+m+"?");else{const P=n!==void 0?n:Z;m=P==="\\"?"\\\\\\\\":P.replace(ye,"\\\\$&"),g.push(P),o.push("([^"+m+"]+)?"+m+"?")}});const i=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,k=h.map((A,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+A):n===c?new RegExp("^"+A+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+A));v=g,C=A=>{const n=i.exec(e.reverseFillMask===!0?A:A.slice(0,g.length+1));n!==null&&(A=n.slice(1).join(""));const F=[],U=k.length;for(let Z=0,P=A;Z<U;Z++){const W=k[Z].exec(P);if(W===null)break;P=P.slice(W.shift().length),F.push(...W)}return F.length!==0?F.join(""):A},f=g.map(A=>typeof A=="string"?A:_).join(""),d=f.split(_).join(l)}function T(a,l,s){const o=u.value,h=o.selectionEnd,g=o.value.length-h,q=M(a);l===!0&&z();const m=N(q),p=e.fillMask!==!1?B(m):m,i=b.value!==p;o.value!==p&&(o.value=p),i===!0&&(b.value=p),document.activeElement===o&&Y(()=>{if(p===d){const k=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=o.selectionEnd;let A=h-1;for(let n=E;n<=A&&n<k;n++)f[n]!==_&&A++;V.right(o,A);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?h===0?p.length>m.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(m.length,g)+1))+1:h;o.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const k=Math.max(0,p.length-(p===d?0:Math.min(m.length,g+1)));k===1&&h===1?o.setSelectionRange(k,k,"forward"):V.rightReverse(o,k)}else{const k=p.length-g;o.setSelectionRange(k,k,"backward")}else if(i===!0){const k=Math.max(0,f.indexOf(_),Math.min(m.length,h)-1);V.right(o,k)}else{const k=h-1;V.right(o,k)}});const c=e.unmaskedValue===!0?M(p):p;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&r(c,!0)}function K(a,l,s){const o=N(M(a.value));l=Math.max(0,f.indexOf(_),Math.min(o.length,l)),E=l,a.setSelectionRange(l,s,"forward")}const V={left(a,l){const s=f.slice(l-1).indexOf(_)===-1;let o=Math.max(0,l-1);for(;o>=0;o--)if(f[o]===_){l=o,s===!0&&l++;break}if(o<0&&f[l]!==void 0&&f[l]!==_)return V.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const s=a.value.length;let o=Math.min(s,l+1);for(;o<=s;o++)if(f[o]===_){l=o;break}else f[o-1]===_&&(l=o);if(o>s&&f[l-1]!==void 0&&f[l-1]!==_)return V.left(a,s);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const s=j(a.value.length);let o=Math.max(0,l-1);for(;o>=0;o--)if(s[o-1]===_){l=o;break}else if(s[o]===_&&(l=o,o===0))break;if(o<0&&s[l]!==void 0&&s[l]!==_)return V.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const s=a.value.length,o=j(s),h=o.slice(0,l+1).indexOf(_)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(o[g-1]===_){l=g,l>0&&h===!0&&l--;break}if(g>s&&o[l-1]!==void 0&&o[l-1]!==_)return V.leftReverse(a,s);a.setSelectionRange(l,l,"forward")}};function Q(a){t("click",a),R=void 0}function L(a){if(t("keydown",a),Be(a)===!0||a.altKey===!0)return;const l=u.value,s=l.selectionStart,o=l.selectionEnd;if(a.shiftKey||(R=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&R===void 0&&(R=l.selectionDirection==="forward"?s:o);const h=V[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(l,R===s?o:s),a.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?(V.left(l,s),l.setSelectionRange(l.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&(V.rightReverse(l,o),l.setSelectionRange(s,l.selectionEnd,"forward"))}function N(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const l=v;let s=0,o="";for(let h=0;h<l.length;h++){const g=a[s],q=l[h];if(typeof q=="string")o+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))o+=q.transform!==void 0?q.transform(g):g,s++;else return o}return o}function S(a){const l=v,s=f.indexOf(_);let o=a.length-1,h="";for(let g=l.length-1;g>=0&&o!==-1;g--){const q=l[g];let m=a[o];if(typeof q=="string")h=q+h,m===q&&o--;else if(m!==void 0&&q.regex.test(m))do h=(q.transform!==void 0?q.transform(m):m)+h,o--,m=a[o];while(s===g&&m!==void 0&&q.regex.test(m));else return h}return h}function M(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function B(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:b,hasMask:w,moveCursorForPaste:K,updateMaskValue:T,onMaskedKeydown:L,onMaskedClick:Q}}const tt={name:String};function ft(e){return y(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function ct(e={}){return(t,r,u)=>{t[r](x("input",{class:"hidden"+(u||""),...e.value}))}}function nt(e){return y(()=>e.name||e.for)}function lt(e,t){function r(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return y(()=>{if(e.type==="file")return r()})}const at=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ot=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,rt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ut=/[a-z0-9_ -]$/i;function it(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&($e.is.firefox===!0?ut.test(r.data)===!1:at.test(r.data)===!0||ot.test(r.data)===!0||rt.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}const vt=Ie({name:"QInput",inheritAttrs:!1,props:{...Qe,...Xe,...tt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ye,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:u}=G(),{$q:f}=u,d={};let v=NaN,C,E,R=null,w;const b=O(null),H=nt(e),{innerValue:$,hasMask:j,moveCursorForPaste:z,updateMaskValue:T,onMaskedKeydown:K,onMaskedClick:V}=et(e,t,m,b),Q=lt(e),L=y(()=>se($.value)),N=it(g),S=We({changeEvent:!0}),M=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),a=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:i,onBlur:c,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=N,j.value===!0&&(n.onKeydown=K,n.onClick=V),e.autogrow===!0&&(n.onAnimationend=q),n}),l=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(j.value===!0){if(E===!0&&(E=!1,String(n)===v))return;T(n)}else $.value!==n&&($.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete d.value));e.autogrow===!0&&Y(p)}),D(()=>e.autogrow,n=>{n===!0?Y(p):b.value!==null&&r.rows>0&&(b.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Y(p)});function s(){xe(()=>{const n=document.activeElement;b.value!==null&&b.value!==n&&(n===null||n.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function h(n){if(j.value===!0&&e.reverseFillMask!==!0){const F=n.target;z(F,F.selectionStart,F.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const F=n.target.value;if(n.target.qComposing===!0){d.value=F;return}if(j.value===!0)T(F,!1,n.inputType);else if(m(F),B.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&F.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&p()}function q(n){t("animationend",n),p()}function m(n,F){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&v!==n&&(v=n,F===!0&&(E=!0),t("update:modelValue",n),Y(()=>{v===n&&(v=NaN)})),w=void 0},e.type==="number"&&(C=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(w,e.debounce)):w()}function p(){requestAnimationFrame(()=>{const n=b.value;if(n!==null){const F=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:P}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),W=Z!==void 0&&Z!=="scroll";W===!0&&(n.style.overflowY="hidden"),F.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",W===!0&&(n.style.overflowY=parseInt(P,10)<n.scrollHeight?"auto":"hidden"),F.marginBottom="",n.scrollTop=U}})}function i(n){N(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",n.target.value)}function c(n){n!==void 0&&fe(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),C=!1,E=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=$.value!==void 0?$.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}oe(()=>{c()}),ae(()=>{e.autogrow===!0&&p()}),Object.assign(S,{innerValue:$,fieldClass:y(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:L,floatingLabel:y(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||se(e.displayValue)),getControl:()=>x(M.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},k()),x("span",e.shadowText)])});const A=Ge(S);return Object.assign(u,{focus:s,select:o,getNativeElement:()=>b.value}),ke(u,"nativeEl",()=>b.value),A}}),gt={empty:e=>e&&e.length>0||"No puede estar vacio"};export{vt as Q,ft as a,ct as b,gt as g,tt as u};
