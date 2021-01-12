import{j as e,a0 as t,a1 as a,d as o,a9 as n,u as r,e as s,aX as c,dp as l,dj as i,dk as u,as as d,g as f,h as p,o as g,i as y,m,l as C,aL as b}from"./index.21e8ff59.js";import{R as h}from"./RedoOutlined.7e30be40.js";import{u as v}from"./useCopyToClipboard.589af9e5.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var j=function(o,n){var r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){S(e,t,a[t])}))}return e}({},o,n.attrs);return e(a,t(r,{icon:O}),null)};j.displayName="CopyOutlined",j.inheritAttrs=!1;var k=o({name:"SettingFooter",components:{CopyOutlined:j,RedoOutlined:h},setup(){const{getRootSetting:e}=d(),{prefixCls:t}=n("setting-footer"),{t:a}=r(),{createSuccessModal:o,createMessage:p}=f();return{prefixCls:t,t:a,handleCopy:function(){const{isSuccessRef:t}=v(JSON.stringify(s(e),null,2));s(t)&&o({title:a("layout.setting.operatingTitle"),content:a("layout.setting.operatingContent")})},handleResetSetting:function(){try{c.commitProjectConfigState(l);const{colorWeak:e,grayMode:t}=l;i(e),u(t),p.success(a("layout.setting.resetSuccess"))}catch(e){p.error(e)}},handleClearAndRedo:function(){localStorage.clear(),c.resumeAllState(),location.reload()}}}});const R=b("data-v-0246c64e"),M=R(((t,a,o,n,r,s)=>{const c=p("CopyOutlined"),l=p("a-button"),i=p("RedoOutlined");return g(),y("div",{class:t.prefixCls},[e(l,{type:"primary",block:"",onClick:t.handleCopy},{default:R((()=>[e(c,{class:"mr-2"}),m(" "+C(t.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),e(l,{color:"warning",block:"",onClick:t.handleResetSetting,class:"my-3"},{default:R((()=>[e(i,{class:"mr-2"}),m(" "+C(t.t("layout.setting.resetBtn")),1)])),_:1},8,["onClick"]),e(l,{color:"error",block:"",onClick:t.handleClearAndRedo},{default:R((()=>[e(i,{class:"mr-2"}),m(" "+C(t.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)}));k.render=M,k.__scopeId="data-v-0246c64e";export default k;