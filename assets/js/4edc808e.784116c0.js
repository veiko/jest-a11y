"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>O,frontMatter:()=>g,metadata:()=>j,toc:()=>T});var r=n(7462),a=n(3366),o=n(7294),l=n(3905),i=n(6010),s=n(2389),u=n(7392),c=n(7094),p=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function f(e){var t,n,a=e.lazy,l=e.block,s=e.defaultValue,f=e.values,y=e.groupId,h=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,c.U)(),w=j.tabGroupChoices,T=j.setTabGroupChoices,N=(0,o.useState)(k),O=N[0],E=N[1],x=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var D=w[y];null!=D&&D!==O&&v.some((function(e){return e.value===D}))&&E(D)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==O&&(C(t),E(r),null!=y&&T(y,String(r)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,l=x.indexOf(e.currentTarget)-1;n=null!=(o=x[l])?o:x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},h)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:P,onClick:P},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),a?(0,o.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function y(e){var t=(0,s.Z)();return o.createElement(f,(0,r.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function b(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(h,r),hidden:n},t)}var v=["components"],g={id:"getting-started",title:"Getting Started"},k="jest-a11y",j={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"The jest-a11y project aims to provide a set of jest matchers that will check whether the provided",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/jest-a11y/",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"mySidebar",next:{title:"Matchers",permalink:"/jest-a11y/matchers/"}},w={},T=[],N={toc:T};function O(e){var t=e.components,n=(0,a.Z)(e,v);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jest-a11y"},"jest-a11y"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jest-a11y")," project aims to provide a set of jest matchers that will check whether the provided\nDOM element has the correct ARIA roles and supports keyboard navigation."),(0,l.kt)(y,{mdxType:"Tabs"},(0,l.kt)(b,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev jest-a11y\n"))),(0,l.kt)(b,{default:!0,value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D jest-a11y\n")))),(0,l.kt)("p",null,"Then follow usage section from ",(0,l.kt)("inlineCode",{parentName:"p"},"jest-a11y"),"'s documentation to add the matchers to Jest."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import 'jest-a11y/matchers'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { screen } from '@testing-library/dom'\n\ntest('uses jest-a11y', () => {\n  document.body.innerHTML = '<button>click me</button>'\n\n  expect(screen.queryByRole('button')).toBeAccessibleButton()\n})\n")),(0,l.kt)("admonition",{title:"This project does not guarantee what you build is accessible.",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The GDS Accessibility team found that ",(0,l.kt)("strong",{parentName:"p"},"only ~30% of issues are found by automated testing.")," This\ntool may help you identify common issues but cannot guarantee what you build works for users."),(0,l.kt)("p",{parentName:"admonition"},"You'll also need to test your interface with the assistive technologies that real users use.")),(0,l.kt)("p",null,"Check out jest-a11y's documentation for a full list of available matchers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/veiko/jest-a11y"},(0,l.kt)("inlineCode",{parentName:"a"},"jest-a11y")," on Github"))))}O.isMDXComponent=!0}}]);