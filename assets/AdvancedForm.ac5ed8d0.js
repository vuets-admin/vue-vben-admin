import{d as e,h as o,o as l,i as n,w as t,j as p}from"./index.21e8ff59.js";import{_ as a}from"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import{a as s}from"./index.2f48e981.js";import"./index.ccac31ab.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import{u as i}from"./useForm.738bf575.js";import{_ as r}from"./index.535aea7e.js";import"./usePageContext.5e688afe.js";var c=e({components:{BasicForm:a,CollapseContainer:s,PageWrapper:r},setup(){const[e]=i({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=i({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});c.render=function(e,a,s,i,r,c){const d=o("BasicForm"),m=o("CollapseContainer"),f=o("PageWrapper");return l(),n(f,{title:"可折叠表单示例"},{default:t((()=>[p(m,{title:"基础收缩示例"},{default:t((()=>[p(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(m,{title:"超过3行自动收起",class:"mt-4"},{default:t((()=>[p(d,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default c;