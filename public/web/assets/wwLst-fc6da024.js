import{_ as U,g as A,u as D,r as s,h as k,o as c,c as _,a as n,b as l,t as L,i as d,j as T,F as B,k as F,e as i,l as g,m as f,n as w,E as I,p as j,d as M}from"./index-3c3dad4c.js";import{L as z}from"./lst-c37e3185.js";const G=p=>(j("data-v-6e15add6"),p=p(),M(),p),H={id:"navBtn"},J={id:"body"},K={id:"quicksearchbar"},O=G(()=>n("span",null,"+",-1)),P=[O],Q=["onClick"],W={__name:"wwLst",setup(p){let v=A(),S=D();console.log(v),console.log(v.query.searchVal);let q=s(v.query.searchVal),b=s([]);s(null);let y=m=>{S.push({name:"home"})},C=window.isAdmin,a=s(!1),u=s(""),N=async m=>{let t=u.value;await f.post("/tags",{tag:t}),u.value="",a.value=!1,I("添加成功"),V()},V=async m=>{let t=await f.get("/tags");b.value=t.data.data};V();let o=s(!1),E=async m=>{console.log(r.value),await f.delete("/tags",{data:r.value}),o.value=!1,I("删除成功"),V()},r=s(null);return(m,t)=>{const h=k("el-button"),x=k("el-dialog"),R=k("el-input");return c(),_(B,null,[n("div",H,[n("button",{class:"blackBtn",onClick:t[0]||(t[0]=(...e)=>l(y)&&l(y)(...e))},"返回"),n("button",null,L(l(q)),1)]),n("div",J,[n("div",K,[l(C)?(c(),_("div",{key:0,onClick:t[1]||(t[1]=e=>d(a)?a.value=!0:a=!0)},P)):T("",!0),(c(!0),_(B,null,F(l(b),(e,X)=>(c(),_("div",null,[n("span",null,L(e.tag),1),l(C)?(c(),_("button",{key:0,class:"delete",onClick:Y=>{d(r)?r.value=e:r=e,d(o)?o.value=!0:o=!0}},"删除",8,Q)):T("",!0)]))),256))]),i(z)]),i(x,{modelValue:l(o),"onUpdate:modelValue":t[2]||(t[2]=e=>d(o)?o.value=e:o=e),title:"删除标签"},{default:g(()=>[w(" 确定删除? "),i(h,{onClick:l(E)},{default:g(()=>[w("是")]),_:1},8,["onClick"])]),_:1},8,["modelValue"]),i(x,{modelValue:l(a),"onUpdate:modelValue":t[4]||(t[4]=e=>d(a)?a.value=e:a=e),title:"添加标签"},{default:g(()=>[i(R,{modelValue:l(u),"onUpdate:modelValue":t[3]||(t[3]=e=>d(u)?u.value=e:u=e),placeholder:"输入tag"},null,8,["modelValue"]),i(h,{onClick:l(N)},{default:g(()=>[w("提交")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])],64)}}},ee=U(W,[["__scopeId","data-v-6e15add6"]]);export{ee as default};
