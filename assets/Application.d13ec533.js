import{d as a,bH as s,cR as l,a6 as c,h as o,o as e,i as n,w as t,j as i,ab as r,ac as d,k as u,m as f,l as p}from"./index.21e8ff59.js";import{applicationList as _}from"./data.944d21d9.js";var m=a({components:{List:s,ListItem:s.Item,Card:l,Icon:c},setup:()=>({prefixCls:"account-center-application",list:_})});const x=f(" 活跃用户："),C=f(" 万 "),v=f(" 新增用户：");m.render=function(a,s,l,c,_,m){const w=o("Icon"),I=o("Card"),$=o("ListItem"),k=o("a-col"),L=o("a-row"),b=o("List");return e(),n(b,{class:a.prefixCls},{default:t((()=>[i(L,{gutter:16},{default:t((()=>[(e(!0),n(r,null,d(a.list,((s,l)=>(e(),n(k,{key:l,span:6},{default:t((()=>[i($,null,{default:t((()=>[i(I,{hoverable:!0,class:`${a.prefixCls}__card`},{default:t((()=>[i("div",{class:`${a.prefixCls}__card-title`},[s.icon?(e(),n(w,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):u("",!0),f(" "+p(s.title),1)],2),i("div",{class:`${a.prefixCls}__card-num`},[x,i("span",null,p(s.active),1),C],2),i("div",{class:`${a.prefixCls}__card-num`},[v,i("span",null,p(s.new),1)],2),s.download?(e(),n(w,{key:0,class:`${a.prefixCls}__card-download`,icon:s.download},null,8,["class","icon"])):u("",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default m;