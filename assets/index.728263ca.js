import{d as a,a6 as s,bO as l,bD as e,bE as t,h as i,o as n,i as o,aL as c,j as r,ab as p,ac as d,k as u,l as f,m as _}from"./index.21e8ff59.js";import{_ as v}from"./index.535aea7e.js";import"./usePageContext.5e688afe.js";import{cardList as x}from"./data.a96915dc.js";var m=a({components:{Icon:s,Progress:l,PageWrapper:v},setup:()=>({prefixCls:"list-basic",list:x,pagination:{show:!0,pageSize:3}})});const g=c("data-v-e4ba03b0");e("data-v-e4ba03b0");const b=r("div",null,"我的待办",-1),C=r("p",null,"8个任务",-1),j=r("div",null,"本周任务平均处理时间",-1),P=r("p",null,"32分钟",-1),$=r("div",null,"本周完成任务数",-1),k=r("p",null,"24个任务",-1),h={key:0,class:"extra"},w={class:"description"},y={class:"info"},I=r("span",null,"Owner",-1),O=r("span",null,"开始时间",-1),W={class:"progress"};t();const z=g(((a,s,l,e,t,c)=>{const v=i("a-col"),x=i("a-row"),m=i("Icon"),z=i("Progress"),D=i("a-list-item-meta"),E=i("a-list-item"),L=i("a-list"),S=i("PageWrapper");return n(),o(S,{class:a.prefixCls,title:"标准列表"},{default:g((()=>[r("div",{class:`${a.prefixCls}__top`},[r(x,{gutter:12},{default:g((()=>[r(v,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[b,C])),_:1},8,["class"]),r(v,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[j,P])),_:1},8,["class"]),r(v,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[$,k])),_:1},8,["class"])])),_:1})],2),r("div",{class:`${a.prefixCls}__content`},[r(L,{pagination:a.pagination},{default:g((()=>[(n(!0),o(p,null,d(a.list,(a=>(n(),o(E,{key:a.id,class:"list"},{default:g((()=>[r(D,null,{avatar:g((()=>[a.icon?(n(),o(m,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):u("",!0)])),title:g((()=>[r("span",null,f(a.title),1),a.extra?(n(),o("div",h,f(a.extra),1)):u("",!0)])),description:g((()=>[r("div",w,f(a.description),1),r("div",y,[r("div",null,[I,_(f(a.author),1)]),r("div",null,[O,_(f(a.datetime),1)])]),r("div",W,[r(z,{percent:a.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));m.render=z,m.__scopeId="data-v-e4ba03b0";export default m;