"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||b[p]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=n(7462),r=n(3366),o=n(7294),l=n(3905),i=["children"],s=function(e){var t=e.color;return o.createElement("div",{style:{backgroundColor:t,borderRadius:"40px",height:"14px",width:"14px"}})},c=function(e){e.children,(0,r.Z)(e,i);return o.createElement("div",{className:"stack-blitz-editor"},o.createElement("div",{className:"stack-blitz-editor-bar"},o.createElement(s,{color:"#fc5753"})),o.createElement("iframe",{src:"https://stackblitz.com/edit/node-7zbwpa?embed=1&ctl=1&file=index.js,index.test.js&terminal=test&view=editor&terminalHeight=50&hideExplorer=1",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"}}))},u=["components"],d={id:"button",title:"toBeAccessibleButton()"},b=void 0,p={unversionedId:"matchers/button",id:"matchers/button",title:"toBeAccessibleButton()",description:"A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.",source:"@site/docs/matchers/to-be-accessible-button.md",sourceDirName:"matchers",slug:"/matchers/button",permalink:"/jest-a11y/matchers/button",draft:!1,tags:[],version:"current",frontMatter:{id:"button",title:"toBeAccessibleButton()"},sidebar:"sidebar",previous:{title:"toBeAccessibleBreadcrumb()",permalink:"/jest-a11y/matchers/breadcrumb"},next:{title:"toBeAccessibleCheckbox()",permalink:"/jest-a11y/matchers/checkbox"}},m={},h=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"DOM Examples",id:"dom-examples",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The button has <code>role</code> of <code>button</code>.",id:"1-the-button-has-role-of-button",level:4},{value:"2. The button has an accessible label.",id:"2-the-button-has-an-accessible-label",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"1. The <kbd>Space</kbd> or <kbd>Enter</kbd> keys activate the button.",id:"1-the-space-or-enter-keys-activate-the-button",level:4},{value:"Playground",id:"playground",level:2}],y={toc:h};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"intro-text"},"A ",(0,l.kt)("strong",null,"button")," is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/"},"WAI Button Pattern")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/button/button.html"},"Button Example"))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { screen } from '@testing-library/dom'\n\ntest('button', () => {\n  document.body.innerHTML = '<button data-testid=\"btn\">\ud83d\udc4d</button>'\n\n  expect(screen.getByTestId('btn')).toBeAccessibleButton()\n})\n")),(0,l.kt)("h2",{id:"test-summary"},"Test Summary"),(0,l.kt)("p",null,"The matcher tests the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role button\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element activated on Space\n\x3c!-- test-pass --\x3e\n\u2713 element activated on Enter\n")),(0,l.kt)("h2",{id:"dom-examples"},"DOM Examples"),(0,l.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,l.kt)("h4",{id:"1-the-button-has-role-of-button"},"1. The button has ",(0,l.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,l.kt)("inlineCode",{parentName:"h4"},"button"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 role is implicit --\x3e\n<button>\ud83d\udc4d</button>\n\n\x3c!-- \u2713 role is set with attribute --\x3e\n<div role="button">\ud83d\udc4d</div>\n\n\x3c!-- \u274c FAIL - role is not set or implicit --\x3e\n<span>\ud83d\udc4e</span>\n')),(0,l.kt)("h4",{id:"2-the-button-has-an-accessible-label"},"2. The button has an accessible label."),(0,l.kt)("p",null,"By default, the accessible name is computed from any text content inside the button element. However, it can also be provided with ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-label"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 accessible name is text content --\x3e\n<button>\ud83d\udc4d</button>\n\n\x3c!-- \u2713 accessible name is set with `aria-label` --\x3e\n<button aria-label="\ud83d\udc4d" />\n\n\x3c!-- \u2713 accessible name is set with `aria-labelledby` --\x3e\n<body>\n  <label id="the-label">OK?</label>\n  <button aria-labelledby="the-label">\ud83d\udc4d</button>\n</body>\n\n\x3c!-- \u274c FAIL - accessible name is not set or implicit --\x3e\n<button />\n')),(0,l.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,l.kt)("h4",{id:"1-the-space-or-enter-keys-activate-the-button"},"1. The ",(0,l.kt)("kbd",null,"Space")," or ",(0,l.kt)("kbd",null,"Enter")," keys activate the button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 HTMLButtonElement will activate --\x3e\n<button>\ud83d\udc4d</button>\n\n\x3c!-- \u2713 HTMLDivElement handles onkeydown --\x3e\n<div onkeydown="javascript: customHandler" role="button">\ud83d\udc4d</div>\n\n\x3c!-- \u274c FAIL - HTMLDivElement will need Javascript --\x3e\n<div>click me</div>\n')),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(c,{mdxType:"StackBlitzEditor"}))}v.isMDXComponent=!0}}]);