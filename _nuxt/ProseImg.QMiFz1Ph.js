import{d as r,E as n,bg as c,b6 as h,l as o,bh as l,b as d,c as u,aA as g}from"./entry.O2R2_2AJ.js";const f=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(a,s)=>(d(),u("img",{src:g(i),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};
