import{d as e,bX as t,a9 as s,q as i,h as a,o as n,i as o,j as l,l as r,a0 as d,aL as p}from"./index.21e8ff59.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.2f48e981.js";import"./index.f965eb8f.js";import"./RightOutlined.404e21a2.js";import"./SettingOutlined.b2d29256.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useHeaderSetting.b67648e9.js";import{b as m}from"./index.8039971c.js";var u=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=s("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:i((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const f=p("data-v-e2504774")(((e,t,s,i,p,m)=>{const u=a("Select");return n(),o("div",{class:e.prefixCls},[l("span",null,r(e.title),1),l(u,d(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=f,u.__scopeId="data-v-e2504774";export default u;