import{d as e,b3 as t,g as s,h as i,o as a,i as o,w as r,j as n}from"./index.21e8ff59.js";import{_ as l}from"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import{a as m}from"./index.2f48e981.js";import"./index.ccac31ab.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import{_ as d}from"./index.535aea7e.js";import"./usePageContext.5e688afe.js";import{T as u}from"./index.f8d5594b.js";const p=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>t(u,{value:e[s],onChange:t=>{e[s]=t}})}];var c=e({components:{BasicForm:l,CollapseContainer:m,PageWrapper:d},setup(){const{createMessage:e}=s();return{schemas:p,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});c.render=function(e,t,s,l,m,d){const u=i("BasicForm"),p=i("CollapseContainer"),c=i("PageWrapper");return a(),o(c,{title:"富文本嵌入表单示例"},{default:r((()=>[n(p,{title:"富文本表单"},{default:r((()=>[n(u,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default c;