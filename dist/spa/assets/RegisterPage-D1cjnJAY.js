import{a as u,Q as _}from"./QCard-XPy5A-KZ.js";import{g as i,Q as d}from"./rules-CnKUFkAw.js";import{p as g,r,H as x,q as y,s as V,t,u as l,E as o,Q as m,j as Q,F as n,x as v,P as p,S as C,_ as P}from"./index-evhwiPK5.js";import{Q as U,a as k}from"./QPopupProxy-CYVLQppb.js";import{Q as R}from"./QPage-pejjfyCr.js";import{C as S}from"./ClosePopup-BCg3idg7.js";import{s as q}from"./superComposable-BBPPTMVA.js";import"./QDialog-BQnitpIF.js";import"./QMenu-G23voJ5Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=o("h1",{class:"text-primary text-h4 text-weight-bold"},"SignUp",-1),B=o("p",{class:"text-accent-8 tw-text-sm"},"SuperFolder dan",-1),N={class:"row items-center justify-end"},D={class:"text-grey-8"},F=g({__name:"RegisterPage",setup(Y){const{store:f,router:c}=q(),e={fullname:{val:r(""),refs:r(null),rules:[i.empty]},birthdate:{val:r(""),refs:r(null),rules:[i.empty]},email:{val:r(""),refs:r(null),rules:[i.empty]},password:{val:r(""),view:r(!1),refs:r(null),rules:[i.empty]}},w=()=>{e.email.refs.value?.validate(),e.password.refs.value?.validate(),e.fullname.refs.value?.validate(),e.birthdate.refs.value?.validate(),!e.fullname.refs.value.hasError&&!e.birthdate.refs.value.hasError&&!e.password.refs.value.hasError&&!e.email.refs.value.hasError&&f.auth.signUp({email:e.email.val.value,fullname:e.fullname.val.value,birthdate:e.birthdate.val.value,password:e.password.val.value},()=>{C.success({message:"You have successfully registered",ok:()=>c.push({name:"login"})})})},b=()=>{e.password.val.value="",e.email.val.value="",e.fullname.val.value="",e.birthdate.val.value="",setTimeout(()=>{e.fullname.refs.value.resetValidation(),e.birthdate.refs.value.resetValidation(),e.password.refs.value.resetValidation(),e.email.refs.value.resetValidation()},10)};return(j,s)=>{const h=x("router-Link");return y(),V(R,{class:"flex flex-center"},{default:t(()=>[l(_,{class:"box-card-content"},{default:t(()=>[o("form",{onSubmit:p(w,["prevent","stop"]),onReset:p(b,["prevent","stop"])},[l(u,{class:"text-center tw-px-2"},{default:t(()=>[E,B]),_:1}),l(u,null,{default:t(()=>[l(d,{dense:"",outlined:"",modelValue:e.fullname.val.value,"onUpdate:modelValue":s[0]||(s[0]=a=>e.fullname.val.value=a),label:"Full Name",class:"q-mt-md",ref:a=>e.fullname.refs.value=a,rules:e.fullname.rules,clearable:""},null,8,["modelValue","rules"]),l(d,{dense:"",outlined:"",modelValue:e.birthdate.val.value,"onUpdate:modelValue":s[2]||(s[2]=a=>e.birthdate.val.value=a),mask:"date",rules:e.birthdate.rules,class:"q-mt-md",clearable:"",ref:a=>e.birthdate.refs.value=a,placeholder:"Date Of Birth"},{append:t(()=>[l(m,{name:"event",class:"cursor-pointer"},{default:t(()=>[l(U,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:t(()=>[l(k,{modelValue:e.birthdate.val.value,"onUpdate:modelValue":s[1]||(s[1]=a=>e.birthdate.val.value=a),"default-view":"Years","default-year-month":"1990/01"},{default:t(()=>[o("div",N,[Q(l(n,{label:"Close",color:"primary",flat:""},null,512),[[S]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{dense:"",outlined:"",type:"email",modelValue:e.email.val.value,"onUpdate:modelValue":s[3]||(s[3]=a=>e.email.val.value=a),label:"Email",class:"q-mt-md",ref:a=>e.email.refs.value=a,rules:e.email.rules,clearable:""},null,8,["modelValue","rules"]),l(d,{dense:"",outlined:"",class:"q-mt-md",modelValue:e.password.val.value,"onUpdate:modelValue":s[5]||(s[5]=a=>e.password.val.value=a),label:"Password",ref:a=>e.password.refs.value=a,rules:e.password.rules,type:e.password.view.value?"text":"password",clearable:""},{append:t(()=>[l(m,{name:e.password.view.value?"visibility":"visibility_off",class:"cursor-pointer",onClick:s[4]||(s[4]=a=>e.password.view.value=!e.password.view.value)},null,8,["name"])]),_:1},8,["modelValue","rules","type"])]),_:1}),l(u,null,{default:t(()=>[l(n,{unelevated:"",color:"primary",label:"SingUp","no-caps":"",class:"full-width tw-rounded-lg no-shadow",type:"submit"}),l(n,{flat:"",color:"primary",label:"Reset","no-caps":"",class:"full-width tw-rounded-lg no-shadow",type:"reset"})]),_:1}),l(u,{class:"text-center q-pt-none"},{default:t(()=>[o("div",D,[v(" You want to "),l(h,{tag:"a",to:{name:"login"},class:"text-secondary text-weight-bold"},{default:t(()=>[v("login ?")]),_:1})])]),_:1})],32)]),_:1})]),_:1})}}}),J=P(F,[["__file","RegisterPage.vue"]]);export{J as default};