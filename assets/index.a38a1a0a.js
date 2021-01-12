import{d as e,cp as r,h as o,o as a,i as s,w as i,j as t,m as n}from"./index.21e8ff59.js";import"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import"./index.2f48e981.js";import{u as p}from"./index.f965eb8f.js";import"./index.ccac31ab.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import"./useForm.738bf575.js";import{_ as m}from"./index.535aea7e.js";import"./usePageContext.5e688afe.js";import w from"./Drawer1.b0c0c6a9.js";import c from"./Drawer2.94a72ca4.js";import l from"./Drawer3.99097f8a.js";import f from"./Drawer4.068e1121.js";import d from"./Drawer5.f54e7b3d.js";var D=e({components:{Alert:r,PageWrapper:m,Drawer1:w,Drawer2:c,Drawer3:l,Drawer4:f,Drawer5:d},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[a,{openDrawer:s}]=p(),[i,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[w,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:a,openDrawer2:s,register3:i,openDrawer3:t,register4:n,register5:w,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const g=n("打开Drawer"),u=n("打开Drawer"),j=n("打开Drawer"),y=n("打开Drawer并传递数据"),b=n("打开详情Drawer");D.render=function(e,r,n,p,m,w){const c=o("Alert"),l=o("a-button"),f=o("Drawer1"),d=o("Drawer2"),D=o("Drawer3"),x=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return a(),s(C,{title:"抽屉组件使用示例"},{default:i((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:i((()=>[g])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:i((()=>[u])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:i((()=>[j])),_:1}),t(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:e.send},{default:i((()=>[y])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:i((()=>[b])),_:1}),t(f,{onRegister:e.register1},null,8,["onRegister"]),t(d,{onRegister:e.register2},null,8,["onRegister"]),t(D,{onRegister:e.register3},null,8,["onRegister"]),t(x,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default D;