import m from"./ContentQuery.r0_wRMZX.js";import{d as c,aZ as l,N as r}from"./entry.O2R2_2AJ.js";const f=(u,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:p,query:a}=u,d={...a||{},path:p||(a==null?void 0:a.path)||"/"};return r(m,d,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:n})=>t.default({list:e,refresh:o,isPartial:n,...this.$attrs}):e=>f("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):f("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):f("not-found",e==null?void 0:e.data)}})}}),_=h;export{_ as default};
