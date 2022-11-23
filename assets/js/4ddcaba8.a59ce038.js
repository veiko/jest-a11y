"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[995],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,v=d["".concat(o,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3656:(e,t,a)=>{a.d(t,{S_:()=>c,Ui:()=>s});var n=a(7294),r=function(e){var t=e.color,a=e.size,r=void 0===a?80:a;return n.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:r,style:{color:t},height:r},n.createElement("g",{"stroke-linecap":"round"},n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor","stroke-width":"2",fill:"none"})),n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none","stroke-width":"0",fill:"currentColor","fill-rule":"evenodd"}),n.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor","stroke-width":"2",fill:"none"}))))},l=function(e){var t=e.color,a=e.size,l=(0,n.useContext)(s).exampleText,i=void 0===l?"tab to this item":l;return n.createElement("div",{className:"arrow-pointer"},n.createElement("div",{className:"arrow-text"},i),n.createElement("div",null,n.createElement(r,{color:t,size:a})),n.createElement("div",null))},i=function(e){var t=e.items;return n.createElement("ul",{className:"list"},t.map((function(e){return n.createElement("li",null,n.createElement("div",{className:"li-icon"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--purple)","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},n.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.createElement("polyline",{points:"12 5 19 12 12 19"}))),n.createElement("div",null,e))})))},s=n.createContext({actions:[],setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){}}),o=function(e){var t=e.children,a=(0,n.useState)([]),r=a[0],l=a[1],i=(0,n.useState)(),o=i[0],u=i[1],c=(0,n.useState)(),m=c[0],d=c[1];return n.createElement(s.Provider,{value:{accessibleLabel:o,actions:r,exampleText:m,setAccessibleLabel:u,setActions:l,setExampleText:d}},t)},u=function(){var e=n.useContext(s).actions;return n.createElement("div",{className:"example-actions"},e.length>0&&n.createElement(i,{items:e}))},c=function(e){var t=e.children;return n.createElement(o,null,n.createElement("div",{className:"example",style:{"--arrow-size":"40px"}},n.createElement("div",{className:"left"}),n.createElement("div",{className:"center"},t),n.createElement("div",{className:"right"},n.createElement(l,{color:"var(--purple)",size:40}))),n.createElement(u,null))}},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),s=a(7392),o=a(7094),u=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,p=e.defaultValue,v=e.values,b=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=v?v:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,s.l)(x,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==g&&!x.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),k=y.tabGroupChoices,E=y.setTabGroupChoices,N=(0,r.useState)(g),T=N[0],C=N[1],A=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=k[b];null!=I&&I!==T&&x.some((function(e){return e.value===I}))&&C(I)}var O=function(e){var t=e.currentTarget,a=A.indexOf(t),n=x[a].value;n!==T&&(S(t),C(n),null!=b&&E(b,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=A.indexOf(e.currentTarget)+1;a=null!=(n=A[r])?n:A[0];break;case"ArrowLeft":var l,i=A.indexOf(e.currentTarget)-1;a=null!=(l=A[i])?l:A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},x.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return A.push(e)},onKeyDown:j,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},7701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>v,toc:()=>h});var n=a(7462),r=a(3366),l=a(7294),i=a(3905),s=a(5488),o=a(5162),u=a(3656),c=function(){var e=l.useContext(u.Ui),t=e.setAccessibleLabel,a=e.setExampleText,n=l.useState(!1),r=n[0],i=n[1],s=l.useState(0),o=s[0],c=s[1],m=function(){return c((function(e){return e-1<0?0:e-1}))},d=function(){return c((function(e){return e+1>100?100:e+1}))};return l.createElement("div",{className:"spinbutton-wrapper textfield "+(r?"outline":"")},l.createElement("button",{disabled:0===o,onClick:function(){return d()},tabIndex:-1}),l.createElement("input",{"aria-label":"some number","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":o,onBlur:function(){i(!1),a()},onChange:function(e){return c(parseFloat(e.target.value))},onFocus:function(){i(!0),a("up and down arrow keys change the value"),t("some number")},onKeyDown:function(e){"ArrowUp"===e.key?d():"ArrowDown"===e.key&&m()},role:"spinbutton",type:"text",value:o}),l.createElement("button",{disabled:100===o,onClick:function(){return m()},tabIndex:-1}))},m=["components"],d={id:"spinbutton",title:"toBeAccessibleSpinButton()"},p=void 0,v={unversionedId:"matchers/spinbutton",id:"matchers/spinbutton",title:"toBeAccessibleSpinButton()",description:"A spinbutton is an input widget that restricts its value to a set or range of discrete values.",source:"@site/docs/matchers/to-be-accessible-spinbutton.md",sourceDirName:"matchers",slug:"/matchers/spinbutton",permalink:"/jest-a11y/matchers/spinbutton",draft:!1,tags:[],version:"current",frontMatter:{id:"spinbutton",title:"toBeAccessibleSpinButton()"},sidebar:"sidebar",previous:{title:"toBeAccessibleSlider()",permalink:"/jest-a11y/matchers/slider"},next:{title:"toBeAccessibleSwitch()",permalink:"/jest-a11y/matchers/switch"}},b={},h=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>spinbutton</code>.",id:"1-the-widget-has-a-role-of-spinbutton",level:4},{value:"2. The widget has an accessible label.",id:"2-the-widget-has-an-accessible-label",level:4},{value:"3. The widget has valid <code>aria-valuemax</code>, <code>aria-valuemin</code> and <code>aria-valuenow</code> values",id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],f={toc:h};function x(e){var t=e.components,a=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"A ",(0,i.kt)("strong",null,"spinbutton")," is an input widget that restricts its value to a set or range of discrete values."),(0,i.kt)("p",null,"Spinbuttons often have three components, including a text field that displays the current value, an increase button, and a decrease button. The text field is usually the only focusable component because the increase and decrease functions are keyboard accessible via arrow keys. Typically, the text field also allows users to directly edit the value."),(0,i.kt)("p",null,"For example, in a widget that enables users to set an alarm, a spinbutton could allow users to select a number from 0 to 59 for the minute of an hour."),(0,i.kt)(u.S_,{mdxType:"ExampleContainer"},(0,i.kt)(c,{mdxType:"SpinButton"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('spinbutton', () => {\n  document.body.innerHTML = '<div id=\"spinbutton\" role=\"spinbutton\">Hey, listen!</div>'\n\n  expect(document.getElementById('spinbutton')).toBeAccessibleSpinButton()\n})\n"))),(0,i.kt)(o.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('spinbutton', () => {\n  render(\n    <div data-testid=\"spinbutton\" role=\"spinbutton\">\n      Hey, listen!\n    </div>,\n  )\n\n  expect(screen.getByTestId('spinbutton')).toBeAccessibleSpinButton()\n})\n")))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"The matcher tests the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role spinbutton\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element has aria-valuemin set to a decimal value less than aria-valuemax\n\x3c!-- test-pass --\x3e\n\u2713 element has valid aria-valuenow\n\x3c!-- test-pass --\x3e\n\u2713 element increases aria-valuenow when {arrowup} is pressed\n\x3c!-- test-pass --\x3e\n\u2713 element decreases aria-valuenow when {arrowdown} is pressed\n")),(0,i.kt)("admonition",{title:"Not Tested",type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-caution --\x3e\n\u26a0\ufe0f home sets the value of the slider to the first allowed value in its range\n\x3c!-- test-caution --\x3e\n\u26a0\ufe0f end sets the value of the slider to the last allowed value in its range\n"))),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-widget-has-a-role-of-spinbutton"},"1. The widget has a ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"spinbutton"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has role spinbutton --\x3e\n<div role="spinbutton">hey, listen!</div>\n\n\x3c!-- \u274c element has role spinbutton --\x3e\n<span>hey, listen!</span>\n')),(0,i.kt)("h4",{id:"2-the-widget-has-an-accessible-label"},"2. The widget has an accessible label."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has accessible label --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />\n\n\x3c!-- \u2705 element has accessible label --\x3e\n<div id="spinbutton-label">Brightness</div>\n<div aria-labelledby="spinbutton-label" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />\n\n\x3c!-- \u274c element is missing accessible label --\x3e\n<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />\n')),(0,i.kt)("h4",{id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values"},"3. The widget has valid ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemax"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemin")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuenow")," values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has valid aria-valuemax, aria-valuemin and aria-valuenow --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />\n\n\x3c!-- \u274c element is missing aria-valuemax, aria-valuemin or aria-valuenow properties --\x3e\n<div aria-label="brightness" role="spinbutton" />\n\n\x3c!-- \u274c element has aria-valuemin greater than aria-valuemax --\x3e\n<div aria-label="brightness" aria-valuemin="100" aria-valuemax="0" role="spinbutton" />\n\n\x3c!-- \u274c element has aria-valuenow set to decimal number outside of range --\x3e\n<div aria-label="brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="200" role="spinbutton" />\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Up Arrow"),": Increases the value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Down Arrow"),": Decreases the value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Home"),": If the spinbutton has a minimum value, sets the value to its minimum."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"End"),": If the spinbutton has a maximum value, sets the value to its maximum.")),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/"},"WAI SpinButton Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/spinbutton/spinbutton.html"},"SpinButton Example"))))}x.isMDXComponent=!0}}]);