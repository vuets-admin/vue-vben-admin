import{d as e,r as t,g as o,e as i,h as n,o as s,i as a,j as l,w as c,m as r}from"./index.21e8ff59.js";import"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import"./index.2f48e981.js";import"./CheckOutlined.ae5c5764.js";import"./index.ccac31ab.js";import{_ as m}from"./index.74204621.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./SettingOutlined.b2d29256.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import"./useForm.738bf575.js";import"./useSortable.02b4f4da.js";import"./useExpose.951536e1.js";import{getBasicColumns as u,getBasicShortColumns as d}from"./tableData.7aa0192c.js";import{d as f}from"./table.d04a902d.js";var p=e({components:{BasicTable:m},setup(){const e=t(null),{createMessage:n}=o();function s(){const t=i(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:f,columns:u(),changeLoading:function(){s().setLoading(!0),setTimeout((()=>{s().setLoading(!1)}),1e3)},changeColumns:function(){s().setColumns(d())},reloadTable:function(){s().setColumns(u()),s().reload({page:1})},getColumn:function(){n.info("请在控制台查看！")},getTableData:function(){n.info("请在控制台查看！")},getPagination:function(){n.info("请在控制台查看！")},setPaginationInfo:function(){s().setPagination({current:2}),s().reload()},getSelectRowList:function(){n.info("请在控制台查看！")},getSelectRowKeyList:function(){n.info("请在控制台查看！")},setSelectedRowKeyList:function(){s().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){s().clearSelectedRowKeys()}}}});const g={class:"p-4"},C={class:"mb-4"},b=r("还原"),j=r("开启loading"),k=r("更改Columns"),w=r("获取Columns"),S=r("获取表格数据"),R=r("跳转到第2页"),_={class:"mb-4"},x=r("获取选中行"),T=r("获取选中行Key"),y=r("设置选中行"),L=r("清空选中行"),h=r("获取分页信息");p.render=function(e,t,o,i,r,m){const u=n("a-button"),d=n("BasicTable");return s(),a("div",g,[l("div",C,[l(u,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[b])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[j])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[k])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[w])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[S])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[R])),_:1},8,["onClick"])]),l("div",_,[l(u,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[x])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[T])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[y])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[L])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[h])),_:1},8,["onClick"])]),l(d,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;