import{_ as k}from"./ProseCodeIcon.vue.yHM3Yz_w.js";import{d as x,b3 as C,an as B,ao as w,r as D,C as u,b as c,c as p,e as f,F as I,ae as $,n as m,D as e,g as F,t as G,af as N,b7 as P,ag as S}from"./entry.uwxarOcX.js";const V=["onClick"],L=x({inheritAttrs:!1,__name:"CodeGroup",props:{class:{}},setup(g){const v={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},y=g,l=C(),{ui:s,attrs:_}=B("content.codeGroup",void 0,v,w(y,"class"),!0),i=D(0),b=u(()=>{var n;return((n=l.default)==null?void 0:n.call(l).map((a,d)=>{var o,r,t;return{label:((o=a.props)==null?void 0:o.filename)||((r=a.props)==null?void 0:r.label)||`${d}`,icon:(t=a.props)==null?void 0:t.icon,component:a}}))||[]}),h=u(()=>b.value.find((n,a)=>a===i.value));return(n,a)=>{var o;const d=k;return c(),p("div",S({class:e(s).wrapper},e(_)),[f("div",{class:m(e(s).header)},[(c(!0),p(I,null,$(e(b),(r,t)=>(c(),p("button",{key:t,tabindex:"-1",class:m([e(s).tab.base,e(i)===t?e(s).tab.active:e(s).tab.inactive]),onClick:z=>i.value=t},[F(d,{icon:r.icon,filename:r.label,class:m(e(s).tab.icon.base)},null,8,["icon","filename","class"]),f("span",null,G(r.label),1)],10,V))),128))],2),(c(),N(P((o=e(h))==null?void 0:o.component),{"hide-header":""}))],16)}}});export{L as default};
