import{d as e,h as t,o,i as s,w as i,m as r}from"./index.21e8ff59.js";import"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import"./index.2f48e981.js";import"./CheckOutlined.ae5c5764.js";import"./index.ccac31ab.js";import{_ as a}from"./index.74204621.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./SettingOutlined.b2d29256.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import"./useForm.738bf575.js";import"./useSortable.02b4f4da.js";import"./useExpose.951536e1.js";import{u as m}from"./useTable.ab0a068a.js";import{getBasicColumns as n,getFormConfig as p}from"./tableData.7aa0192c.js";import{d as c}from"./table.d04a902d.js";var d=e({components:{BasicTable:a},setup(){const[e]=m({title:"开启搜索区域",api:c,columns:n(),useSearchForm:!0,formConfig:p(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e}}});const j=r(" custom-slot");d.render=function(e,r,a,m,n,p){const c=t("BasicTable");return o(),s(c,{onRegister:e.registerTable},{"form-custom":i((()=>[j])),_:1},8,["onRegister"])};export default d;