"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["16034"],{95231:function(e,t,s){s.r(t),s.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"tests/visibility/index","title":"Visibility","description":"A category to play with draft/unlisted front matter.","source":"@site/_dogfooding/_docs tests/tests/visibility/index.mdx","sourceDirName":"tests/visibility","slug":"/tests/visibility/","permalink":"/tests/docs/tests/visibility/","draft":false,"unlisted":false,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"}],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1730198451000,"frontMatter":{"tags":["visibility"]},"sidebar":"sidebar","previous":{"title":"TOC partial test","permalink":"/tests/docs/tests/toc-partials/"},"next":{"title":"Some Drafts - Listed 1","permalink":"/tests/docs/tests/visibility/some-drafts/draft-subcategory/listed1"}}'),n=s("24246"),l=s("80980"),r=s("78042");let o={tags:["visibility"]},d="Visibility",c={},a=[];function u(e){let t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"visibility",children:"Visibility"})}),"\n",(0,n.jsx)(t.p,{children:"A category to play with draft/unlisted front matter."}),"\n",(0,n.jsx)(t.p,{children:"In dev, both draft/unlisted items are displayed."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In production, draft items shouldn't be accessible:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"pathname:///tests/docs/tests/visibility/only-drafts/draft1",children:"/tests/docs/tests/visibility/only-drafts/draft1"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In production, unlisted items should remain accessible, but be hidden in the sidebar (unless currently browsed):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted1",children:"./only-unlisteds/unlisted1.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted2",children:"./only-unlisteds/unlisted2.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/unlisted3",children:"./only-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted1",children:"./some-unlisteds/unlisted1.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted2",children:"./some-unlisteds/unlisted2.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/unlisted3",children:"./some-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/force-unlisted",children:"./force-unlisted.mdx"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(r.Z,{})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/index.mdx)"},78042:function(e,t,s){s.d(t,{Z:()=>b});var i=s("24246");s("27378");var n=s("90496"),l=s("85921"),r=s("35363"),o=s("11660"),d=s("82095"),c=s("77827"),a=s("57922");let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{href:t,children:s}=e;return(0,i.jsx)(r.Z,{href:t,className:(0,n.Z)("card padding--lg",u.cardContainer),children:s})}function f(e){let{href:t,icon:s,title:l,description:r}=e;return(0,i.jsxs)(h,{href:t,children:[(0,i.jsxs)(a.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:l,children:[s," ",l]}),r&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e,s=(0,l.LM)(t),n=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,i.jsx)(f,{href:s,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function p(e){let{item:t}=e,s=(0,d.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,l.xz)(t.docId??void 0);return(0,i.jsx)(f,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(p,{item:t});case"category":return(0,i.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,s=(0,l.jA)();return(0,i.jsx)(b,{items:s.items,className:t})}function b(e){let{items:t,className:s}=e;if(!t)return(0,i.jsx)(y,{...e});let r=(0,l.MN)(t);return(0,i.jsx)("section",{className:(0,n.Z)("row",s),children:r.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(x,{item:e})},t))})}},11660:function(e,t,s){s.d(t,{c:function(){return d}});var i=s(27378),n=s(8156);let l=["zero","one","two","few","many","other"];function r(e){return l.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function d(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,s)=>(function(e,t,s){let i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let n=s.select(t);return i[Math.min(s.pluralForms.indexOf(n),i.length-1)]})(s,t,e)}}},80980:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return r}});var i=s(27378);let n={},l=i.createContext(n);function r(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);