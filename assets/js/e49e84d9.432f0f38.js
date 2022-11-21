"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(o,".").concat(p)]||d[p]||h[p]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},461:(e,t,a)=>{a.d(t,{S_:()=>o,Ui:()=>i});var n=a(7294),r=function(e){var t=e.color,a=e.size,r=void 0===a?80:a;return n.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:r,style:{color:t},height:r},n.createElement("g",{"stroke-linecap":"round"},n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor","stroke-width":"2",fill:"none"})),n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none","stroke-width":"0",fill:"currentColor","fill-rule":"evenodd"}),n.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor","stroke-width":"2",fill:"none"}))))},l=function(e){var t=e.color,a=e.size,l=(0,n.useContext)(i).exampleText,s=void 0===l?"tab to this item":l;return n.createElement("div",{className:"arrow-pointer"},n.createElement("div",{className:"arrow-text"},s),n.createElement("div",null,n.createElement(r,{color:t,size:a})),n.createElement("div",null))},i=n.createContext({setAccessibleLabel:function(){},setExampleText:function(){}}),s=function(e){var t=e.children,a=(0,n.useState)(),r=(a[0],a[1]),l=(0,n.useState)(),s=l[0],o=l[1];return n.createElement(i.Provider,{value:{exampleText:s,setAccessibleLabel:r,setExampleText:o}},t)},o=function(e){var t=e.children;return n.createElement(s,null,n.createElement("div",{className:"example",style:{"--arrow-size":"40px"}},n.createElement("div",{className:"left"}),n.createElement("div",{className:"center"},t),n.createElement("div",{className:"right"},n.createElement(l,{color:"var(--purple)",size:40}))))}},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),s=a(7392),o=a(7094),c=a(2466);const u="tabList__CuJ",h="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,p=e.defaultValue,m=e.values,b=e.groupId,v=e.className,w=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=w.find((function(e){return e.props.default})))?void 0:a.props.value)?t:w[0].props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),x=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,r.useState)(g),E=T[0],C=T[1],A=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=x[b];null!=I&&I!==E&&f.some((function(e){return e.value===I}))&&C(I)}var O=function(e){var t=e.currentTarget,a=A.indexOf(t),n=f[a].value;n!==E&&(S(t),C(n),null!=b&&N(b,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=A.indexOf(e.currentTarget)+1;a=null!=(n=A[r])?n:A[0];break;case"ArrowLeft":var l,i=A.indexOf(e.currentTarget)-1;a=null!=(l=A[i])?l:A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return A.push(e)},onKeyDown:j,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(w.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var n=a(7462),r=a(3366),l=a(7294),i=a(3905),s=a(5488),o=a(5162),c=a(461),u=function(){var e=l.useState(!1),t=e[0],a=e[1],n=(0,l.useCallback)((function(e){" "===e.key&&(e.preventDefault(),a((function(e){return!e})))}),[]);return l.createElement("div",{className:"switch-wrapper"},l.createElement("div",null,"Turn on the lights"),l.createElement("div",{"aria-checked":t,"aria-label":"Lights",className:"switch "+(t?"on":"off"),"data-testid":"an-switch",onClick:function(){return a((function(e){return!e}))},onKeyDown:n,role:"switch",tabIndex:0}))},h=["components"],d={id:"switch",title:"toBeAccessibleSwitch()"},p=void 0,m={unversionedId:"matchers/switch",id:"matchers/switch",title:"toBeAccessibleSwitch()",description:"A switch is an input widget that allows users to choose one of two values: on or off.",source:"@site/docs/matchers/to-be-accessible-switch.md",sourceDirName:"matchers",slug:"/matchers/switch",permalink:"/jest-a11y/matchers/switch",draft:!1,tags:[],version:"current",frontMatter:{id:"switch",title:"toBeAccessibleSwitch()"},sidebar:"sidebar",previous:{title:"toBeAccessibleSpinButton()",permalink:"/jest-a11y/matchers/spinbutton"},next:{title:"toBeAccessibleTooltip()",permalink:"/jest-a11y/matchers/tooltip"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>switch</code>.",id:"1-the-widget-has-a-role-of-switch",level:4},{value:"2. The switch has an accessible label.",id:"2-the-switch-has-an-accessible-label",level:4},{value:"3. The switch has a valid <code>aria-checked</code> attribute.",id:"3-the-switch-has-a-valid-aria-checked-attribute",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],w={toc:v};function f(e){var t=e.components,a=(0,r.Z)(e,h);return(0,i.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"A ",(0,i.kt)("strong",null,"switch")," is an input widget that allows users to choose one of two values: on or off."),(0,i.kt)("p",null,"Switches are similar to ",(0,i.kt)("a",{parentName:"p",href:"/matchers/checkbox"},"checkboxes")," and toggle buttons, which can also serve as binary inputs. One difference, however, is that switches can only be used for binary input while checkboxes and toggle buttons allow implementations with the option of supporting a third middle state."),(0,i.kt)(c.S_,{mdxType:"ExampleContainer"},(0,i.kt)(u,{mdxType:"Switch"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('switch', () => {\n  document.body.innerHTML = '<div aria-checked=\"true\" id=\"switch\" role=\"switch\">Hey, listen!</div>'\n\n  expect(document.getElementById('switch')).toBeAccessibleSwitch()\n})\n"))),(0,i.kt)(o.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('switch', () => {\n  render(\n    <div aria-checked=\"true\" data-testid=\"switch\" role=\"switch\">\n      Hey, listen!\n    </div>,\n  )\n\n  expect(screen.getByTestId('switch')).toBeAccessibleSwitch()\n})\n")))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"There are two different matchers for switches."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeAccessibleSwitch")," matcher tests the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role switch\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element has aria-checked attribute\n\x3c!-- test-pass --\x3e\n\u2713 element toggles aria-checked on {space}\n\x3c!-- test-pass --\x3e\n\u2713 element label does not change when state changes\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeAccessibleInputSwitch")," matcher should be used when the switch element is an input element with ",(0,i.kt)("inlineCode",{parentName:"p"},'type="checkbox"'),". This matcher tests the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role switch\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element toggles checked on {space}\n\x3c!-- test-pass --\x3e\n\u2713 element label does not change when state changes\n")),(0,i.kt)("admonition",{title:"Not Tested",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If a set of switches is presented as a logical group with a visible label, either:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The switches are included in an element with role group that has the property aria-labelledby set to the ID of the element containing the group label."),(0,i.kt)("li",{parentName:"ul"},"The set is contained in an HTML fieldset and the label for the set is contained in an HTML legend element."))),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-widget-has-a-role-of-switch"},"1. The widget has a ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"switch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has role switch --\x3e\n<div role="switch">hey, listen!</div>\n\n\x3c!-- \u274c element has role switch --\x3e\n<span>hey, listen!</span>\n')),(0,i.kt)("h4",{id:"2-the-switch-has-an-accessible-label"},"2. The switch has an accessible label."),(0,i.kt)("p",null,"The label can be provided by one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visible text content contained within the element with ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," switch."),(0,i.kt)("li",{parentName:"ul"},"A visible label referenced by the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," set on the element with ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," switch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," set on the element with ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," switch.")),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is critical the label on a switch does not change when its state changes.")),(0,i.kt)("h4",{id:"3-the-switch-has-a-valid-aria-checked-attribute"},"3. The switch has a valid ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-checked")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has valid aria-checked --\x3e\n<div aria-checked="true" aria-label="Lights" role="switch" />\n\n\x3c!-- \u274c element is missing aria-checked --\x3e\n<div aria-label="Lights" role="switch" />\n\n\x3c!-- \u274c element has invalid aria-checked --\x3e\n<div aria-checked="on" aria-label="Lights" role="switch" />\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Space"),": When focus is on the switch, changes the state of the switch.")),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/"},"WAI Switch Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/switch/switch.html"},"Switch Example"))))}f.isMDXComponent=!0}}]);