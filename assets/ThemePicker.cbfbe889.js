import{d as e,a9 as t,h as i,o as s,i as r,ab as o,ac as n,j as a}from"./index.21e8ff59.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.2f48e981.js";import"./index.f965eb8f.js";import{C as p}from"./CheckOutlined.ae5c5764.js";import"./RightOutlined.404e21a2.js";import"./SettingOutlined.b2d29256.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useHeaderSetting.b67648e9.js";import{b as l}from"./index.8039971c.js";var d=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&l(e.event,t)}}}});d.render=function(e,t,p,l,d,m){const c=i("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(t=>(s(),r("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[a(c)],14,["onClick"])))),128))],2)};export default d;