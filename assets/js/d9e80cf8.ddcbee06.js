"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},461:(e,t,r)=>{r.d(t,{S_:()=>s,Ui:()=>l});var n=r(7294),a=function(e){var t=e.color,r=e.size,a=void 0===r?80:r;return n.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:a,style:{color:t},height:a},n.createElement("g",{"stroke-linecap":"round"},n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor","stroke-width":"2",fill:"none"})),n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none","stroke-width":"0",fill:"currentColor","fill-rule":"evenodd"}),n.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor","stroke-width":"2",fill:"none"}))))},o=function(e){var t=e.color,r=e.size,o=(0,n.useContext)(l).exampleText,i=void 0===o?"tab to this item":o;return n.createElement("div",{className:"arrow-pointer"},n.createElement("div",{className:"arrow-text"},i),n.createElement("div",null,n.createElement(a,{color:t,size:r})),n.createElement("div",null))},l=n.createContext({setAccessibleLabel:function(){},setExampleText:function(){}}),i=function(e){var t=e.children,r=(0,n.useState)(),a=(r[0],r[1]),o=(0,n.useState)(),i=o[0],s=o[1];return n.createElement(l.Provider,{value:{exampleText:i,setAccessibleLabel:a,setExampleText:s}},t)},s=function(e){var t=e.children;return n.createElement(i,null,n.createElement("div",{className:"example",style:{"--arrow-size":"40px"}},n.createElement("div",{className:"left"}),n.createElement("div",{className:"center"},t),n.createElement("div",{className:"right"},n.createElement(o,{color:"var(--purple)",size:40}))))}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),c=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,v=e.groupId,b=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),w=x.tabGroupChoices,T=x.setTabGroupChoices,E=(0,a.useState)(k),N=E[0],A=E[1],C=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=w[v];null!=I&&I!==N&&g.some((function(e){return e.value===I}))&&A(I)}var j=function(e){var t=e.currentTarget,r=C.indexOf(t),n=g[r].value;n!==N&&(O(t),A(n),null!=v&&T(v,String(n)))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=C.indexOf(e.currentTarget)+1;r=null!=(n=C[a])?n:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;r=null!=(o=C[l])?o:C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var n=r(7462),a=r(3366),o=r(7294),l=r(3905),i=r(5488),s=r(5162),c=r(461),u=function(){var e=(0,o.useContext)(c.Ui).setExampleText,t=(0,o.useState)(!1),r=t[0],n=t[1],a=function(){n(!1),e("press escape to close")},l=function(){n(!0),e("press escape to close")};return o.createElement("div",{className:"tooltip-wrapper"},o.createElement("div",{"aria-describedby":"my-tooltip",className:"tooltip-trigger",onBlur:a,onFocus:l,onKeyDown:function(e){"Escape"===e.key&&(a(),e.currentTarget.blur())},onMouseOver:l,onMouseOut:a,tabIndex:0},"Hey, listen!"),r&&o.createElement("div",{className:"tooltip",id:"my-tooltip",role:"tooltip"},":)"))},p=["components"],d={id:"tooltip",title:"toBeAccessibleTooltip()"},m=void 0,h={unversionedId:"matchers/tooltip",id:"matchers/tooltip",title:"toBeAccessibleTooltip()",description:"This design pattern is work in progress; it does not yet have ARIA Authoring Practices Task Force consensus. Progress and discussions are captured here.",source:"@site/docs/matchers/to-be-accessible-tooltip.md",sourceDirName:"matchers",slug:"/matchers/tooltip",permalink:"/jest-a11y/matchers/tooltip",draft:!1,tags:[],version:"current",frontMatter:{id:"tooltip",title:"toBeAccessibleTooltip()"},sidebar:"sidebar",previous:{title:"toBeAccessibleSwitch()",permalink:"/jest-a11y/matchers/switch"},next:{title:"toHaveFocusLock()",permalink:"/jest-a11y/matchers/focuslock"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>tooltip</code>.",id:"1-the-widget-has-a-role-of-tooltip",level:4},{value:"2. The tooltip trigger references the tooltip element with aria-describedby.",id:"2-the-tooltip-trigger-references-the-tooltip-element-with-aria-describedby",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],f={toc:b};function g(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Note",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This design pattern is work in progress; it does not yet have ARIA Authoring Practices Task Force consensus. Progress and discussions are captured ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3c/aria-practices/issues/128"},"here"),".")),(0,l.kt)("div",{className:"intro-text"},"A ",(0,l.kt)("strong",null,"tooltip")," is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."),(0,l.kt)("p",null,"It typically appears after a small delay and disappears when Escape is pressed or on mouse out. Tooltip widgets do not receive focus."),(0,l.kt)(c.S_,{mdxType:"ExampleContainer"},(0,l.kt)(u,{mdxType:"Tooltip"})),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"toBeAccessibleTooltip")," matcher expects to be called on the tooltip trigger. The tooltip element will be obtained through the ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-describedby")," reference on the trigger element."),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test('tooltip', () => {\n  document.body.innerHTML = '<div id=\"tooltip-trigger\">Hey, listen!</div><div role=\"tooltip\">tooltip content</div>'\n\n  expect(document.getElementById('tooltip-trigger')).toBeAccessibleTooltip()\n})\n"))),(0,l.kt)(s.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\nimport { Tooltip } from 'your-component-library'\n\ntest('tooltip', () => {\n  render(<Tooltip content=\"tooltip content\">Hey, listen!</Tooltip>)\n\n  expect(screen.getByTestId('tooltip-trigger')).toBeAccessibleTooltip()\n})\n")))),(0,l.kt)("h2",{id:"test-summary"},"Test Summary"),(0,l.kt)("p",null,"The matcher tests the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 trigger element is part of tab sequence\n\x3c!-- test-pass --\x3e\n\u2713 trigger element has attribute aria-describedby\n\x3c!-- test-pass --\x3e\n\u2713 tooltip element has role tooltip\n\x3c!-- test-pass --\x3e\n\u2713 tooltip element is accessible when trigger is focused\n\x3c!-- test-pass --\x3e\n\u2713 tooltip element is hidden on {esc}\n")),(0,l.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,l.kt)("h4",{id:"1-the-widget-has-a-role-of-tooltip"},"1. The widget has a ",(0,l.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,l.kt)("inlineCode",{parentName:"h4"},"tooltip"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has role tooltip --\x3e\n<div role="tooltip">hey, listen!</div>\n\n\x3c!-- \u274c element has role tooltip --\x3e\n<span>hey, listen!</span>\n')),(0,l.kt)("h4",{id:"2-the-tooltip-trigger-references-the-tooltip-element-with-aria-describedby"},"2. The tooltip trigger references the tooltip element with aria-describedby."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 trigger element has aria-describedby --\x3e\n<div aria-describedby="tooltip-content">hover me</div>\n<div id="tooltip-content" role="tooltip">hey, listen!</div>\n\n\x3c!-- \u274c trigger element has aria-describedby --\x3e\n<div>hover me</div>\n<div id="tooltip-content" role="tooltip">hey, listen!</div>\n')),(0,l.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kbd",null,"Tab"),": focuses the trigger element."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kbd",null,"Escape"),": dismisses the tooltip element.")),(0,l.kt)("h2",{id:"external-resources"},"External Resources"),(0,l.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"},"WAI Tooltip Pattern")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/tooltip/tooltip.html"},"Tooltip Example"))))}g.isMDXComponent=!0}}]);