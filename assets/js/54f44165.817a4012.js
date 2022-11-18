"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[152,654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,y=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,i.U)(),w=j.tabGroupChoices,T=j.setTabGroupChoices,N=(0,a.useState)(k),O=N[0],E=N[1],I=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var C=w[y];null!=C&&C!==O&&g.some((function(e){return e.value===C}))&&E(C)}var D=function(e){var t=e.currentTarget,n=I.indexOf(t),r=g[n].value;r!==O&&(x(t),E(r),null!=y&&T(y,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=I.indexOf(e.currentTarget)+1;n=null!=(r=I[a])?r:I[0];break;case"ArrowLeft":var o,l=I.indexOf(e.currentTarget)-1;n=null!=(o=I[l])?o:I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9610),s=["components"],i={id:"installation",sidebar_position:1,title:"Installation"},u=void 0,c={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/jest-a11y/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",sidebar_position:1,title:"Installation"},sidebar:"sidebar",previous:{title:"Welcome",permalink:"/jest-a11y/"},next:{title:"Contributing",permalink:"/jest-a11y/getting-started/contributing"}},p={},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.default,{mdxType:"InstallSteps"}))}f.isMDXComponent=!0},9610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),s=n(5162),i=["components"],u={},c=void 0,p={unversionedId:"snippets/install-steps",id:"snippets/install-steps",title:"install-steps",description:"Inside your project directory, install jest-a11y by running either of the following:",source:"@site/docs/snippets/install-steps.md",sourceDirName:"snippets",slug:"/snippets/install-steps",permalink:"/jest-a11y/snippets/install-steps",draft:!1,tags:[],version:"current",frontMatter:{}},d={},m=[{value:"With Typescript",id:"with-typescript",level:2}],f={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inside your project directory, install ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-a11y")," by running either of the following:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev jest-a11y\n"))),(0,o.kt)(s.Z,{default:!0,value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D jest-a11y\n")))),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-a11y")," once (for instance in your tests setup file) and you're good to go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// In your own jest-setup.js (or any other name)\nimport 'jest-a11y'\n\n// In jest.config.js add (if you haven't already)\nsetupFilesAfterEnv: ['<rootDir>/jest-setup.js']\n")),(0,o.kt)("h2",{id:"with-typescript"},"With Typescript"),(0,o.kt)("p",null,"If you're using TypeScript, make sure your setup file is a ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," and not a ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," to include the necessary types."),(0,o.kt)("p",null,"You will also need to include your setup file in your tsconfig.json if you haven't already:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  // In tsconfig.json\n  "include": [\n    "./jest-setup.ts"\n  ],\n')),(0,o.kt)("p",null,"You're ready to start using ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-a11y")," matchers in your tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { screen } from '@testing-library/dom'\n\ntest('uses jest-a11y', () => {\n  document.body.innerHTML = '<button>click me</button>'\n\n  expect(screen.queryByRole('button')).toBeAccessibleButton()\n})\n")))}y.isMDXComponent=!0}}]);