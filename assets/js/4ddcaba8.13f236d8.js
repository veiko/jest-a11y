"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,v=d["".concat(o,".").concat(p)]||d[p]||m[p]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),s=n(7392),o=n(7094),u=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,p=e.defaultValue,v=e.values,b=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=v?v:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(x,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!x.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),k=w.tabGroupChoices,E=w.setTabGroupChoices,N=(0,r.useState)(y),C=N[0],T=N[1],S=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=k[b];null!=I&&I!==C&&x.some((function(e){return e.value===I}))&&T(I)}var O=function(e){var t=e.currentTarget,n=S.indexOf(t),a=x[n].value;a!==C&&(A(t),T(a),null!=b&&E(b,String(a)))},j=function(e){var t,n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var l,i=S.indexOf(e.currentTarget)-1;n=null!=(l=S[i])?l:S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},x.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:j,onClick:O},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6377:(e,t,n)=>{n.d(t,{S_:()=>b,Ui:()=>m});var a=n(7462),r=n(7294),l=function(e){var t=e.color,n=e.size,a=void 0===n?80:n;return r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:a,style:{color:t},height:a},r.createElement("g",{strokeLinecap:"round"},r.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},r.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),r.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},r.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),r.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},i=function(e){var t=e.color,n=e.size,a=(0,r.useContext)(m),i=a.exampleText,s=void 0===i?{text:null}:i,o=a.tooltip,u=(0,r.useState)(s.text),c=u[0],d=u[1],p=(0,r.useRef)(null),v=(0,r.useRef)(null),b=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e,t,n,a=(null==(e=b.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,r=v.current;r&&(r.classList.add("fade-in"),null==(n=p.current)||n.classList.add("fade-in"),r.style.transform="scale(1.5)",r.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;r.classList.remove("fade-in"),null==(e=p.current)||e.classList.remove("fade-in"),r.style.maxHeight=a+"px",r.style.transition="",r.style.transform=""})),d(s.text))})),o&&s.text?r.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+s.transformY+"px)"}},r.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:v},r.createElement("div",null,c)),r.createElement("div",{className:"arrow-text",ref:b,style:{visibility:"hidden"}},s.text),r.createElement("div",{className:"arrow-wrapper",ref:p},r.createElement(l,{color:t,size:n})),r.createElement("div",null)):null},s=function(e){var t=e.id,n=e.label,a=e.max,l=e.min,i=e.onChange,s=e.value;return r.createElement("div",null,n?r.createElement("div",{className:"slider-label"},r.createElement("label",{htmlFor:t},n,":"),r.createElement("div",null,s)):null,r.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:a,min:l,onChange:function(e){i(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":s/a+"%"},tabIndex:0,type:"range",value:s}))},o=function(e){var t=e.label,n=e.type,a=e.value;return"slider"===n?r.createElement(s,{id:t,label:t,max:10,min:0,onChange:function(){},value:a}):r.createElement("span",null,JSON.stringify({type:n,value:a}))},u=n(6906),c=function(e){var t=e.onClick;return r.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},r.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),r.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),r.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},m=r.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),d=function(e){var t=e.children,n=(0,r.useState)([]),a=n[0],l=n[1],i=(0,r.useState)([]),s=i[0],o=i[1],u=(0,r.useState)(),c=u[0],d=(u[1],(0,r.useState)()),p=d[0],v=(d[1],(0,r.useState)(!0)),b=v[0],h=v[1],f=(0,r.useCallback)((function(e){return o((function(t){return[].concat(t,[e])}))}),[o]),x=(0,r.useCallback)((function(){}),[]);return r.createElement(m.Provider,{value:{accessibleLabel:c,actions:a,addControl:f,controls:s,exampleText:p,getControlValue:x,setAccessibleLabel:function(){},setActions:l,setExampleText:function(){},setTooltip:h,tooltip:b}},t)},p=function(){var e=r.useContext(m).controls;return r.createElement("div",{className:"example-controls"},e.map((function(e,t){return r.createElement(o,(0,a.Z)({key:t},e))})))},v=function(){var e=r.useContext(m),t=e.actions,n=e.accessibleLabel;return r.createElement("div",{className:"example-actions"},n?r.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},r.createElement("div",{className:"audio-btn"},r.createElement(c,{onClick:function(){var e=new SpeechSynthesisUtterance(n);speechSynthesis.speak(e)}})),r.createElement("span",null,r.createElement("strong",null,"Accessible Label: "),n)):null,t.length>0&&r.createElement("div",null,r.createElement(u.a,{items:t})))},b=function(e){var t=e.height,n=e.size,a=void 0===n?1:n,l=e.children;return r.createElement(d,null,r.createElement("div",{className:"example-wrapper"},r.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":a+"fr",height:t}},r.createElement("div",{className:"left"}),r.createElement("div",{className:"center"},l),r.createElement("div",{className:"right"},r.createElement(i,{color:"var(--purple)",size:40})))),r.createElement(p,null),r.createElement(v,null))}},6906:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(7294),r=function(e){var t=e.items;return a.createElement("ul",{className:"list"},t.map((function(e,t){return a.createElement("li",{key:"item-"+t},a.createElement("div",{className:"li-icon"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--greySecondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.createElement("polyline",{points:"12 5 19 12 12 19"}))),a.createElement("div",null,e))})))}},2900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>v,toc:()=>h});var a=n(7462),r=n(3366),l=n(7294),i=n(3905),s=n(5488),o=n(5162),u=n(6377),c=function(){var e=l.useContext(u.Ui),t=e.setAccessibleLabel,n=e.setExampleText,a=l.useState(!1),r=a[0],i=a[1],s=l.useState(0),o=s[0],c=s[1],m=function(){return c((function(e){return e-1<0?0:e-1}))},d=function(){return c((function(e){return e+1>100?100:e+1}))};return l.createElement("div",{className:"spinbutton-wrapper textfield "+(r?"outline":"")},l.createElement("button",{disabled:0===o,onClick:function(){return d()},tabIndex:-1}),l.createElement("input",{"aria-label":"some number","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":o,onBlur:function(){i(!1),n()},onChange:function(e){return c(parseFloat(e.target.value))},onFocus:function(){i(!0),n("up and down arrow keys change the value"),t("some number")},onKeyDown:function(e){"ArrowUp"===e.key?d():"ArrowDown"===e.key&&m()},role:"spinbutton",type:"text",value:o}),l.createElement("button",{disabled:100===o,onClick:function(){return m()},tabIndex:-1}))},m=["components"],d={id:"spinbutton",title:"toBeAccessibleSpinButton()"},p=void 0,v={unversionedId:"matchers/spinbutton",id:"matchers/spinbutton",title:"toBeAccessibleSpinButton()",description:"A spinbutton is an input widget that restricts its value to a set or range of discrete values.",source:"@site/docs/matchers/to-be-accessible-spinbutton.md",sourceDirName:"matchers",slug:"/matchers/spinbutton",permalink:"/jest-a11y/matchers/spinbutton",draft:!1,tags:[],version:"current",frontMatter:{id:"spinbutton",title:"toBeAccessibleSpinButton()"},sidebar:"sidebar",previous:{title:"toBeAccessibleSlider()",permalink:"/jest-a11y/matchers/slider"},next:{title:"toBeAccessibleSwitch()",permalink:"/jest-a11y/matchers/switch"}},b={},h=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>spinbutton</code>.",id:"1-the-widget-has-a-role-of-spinbutton",level:4},{value:"2. The widget has an accessible label.",id:"2-the-widget-has-an-accessible-label",level:4},{value:"3. The widget has valid <code>aria-valuemax</code>, <code>aria-valuemin</code> and <code>aria-valuenow</code> values",id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],f={toc:h};function x(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"A ",(0,i.kt)("strong",null,"spinbutton")," is an input widget that restricts its value to a set or range of discrete values."),(0,i.kt)("p",null,"Spinbuttons often have three components, including a text field that displays the current value, an increase button, and a decrease button. The text field is usually the only focusable component because the increase and decrease functions are keyboard accessible via arrow keys. Typically, the text field also allows users to directly edit the value."),(0,i.kt)("p",null,"For example, in a widget that enables users to set an alarm, a spinbutton could allow users to select a number from 0 to 59 for the minute of an hour."),(0,i.kt)(u.S_,{mdxType:"ExampleContainer"},(0,i.kt)(c,{mdxType:"SpinButton"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('spinbutton', () => {\n  document.body.innerHTML = '<div id=\"spinbutton\" role=\"spinbutton\">Hey, listen!</div>'\n\n  expect(document.getElementById('spinbutton')).toBeAccessibleSpinButton()\n})\n"))),(0,i.kt)(o.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('spinbutton', () => {\n  render(\n    <div data-testid=\"spinbutton\" role=\"spinbutton\">\n      Hey, listen!\n    </div>,\n  )\n\n  expect(screen.getByTestId('spinbutton')).toBeAccessibleSpinButton()\n})\n")))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"The matcher tests the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role spinbutton\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element has aria-valuemin set to a decimal value less than aria-valuemax\n\x3c!-- test-pass --\x3e\n\u2713 element has valid aria-valuenow\n\x3c!-- test-pass --\x3e\n\u2713 element increases aria-valuenow when {arrowup} is pressed\n\x3c!-- test-pass --\x3e\n\u2713 element decreases aria-valuenow when {arrowdown} is pressed\n")),(0,i.kt)("admonition",{title:"Not Tested",type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-caution --\x3e\n\u26a0\ufe0f home sets the value of the slider to the first allowed value in its range\n\x3c!-- test-caution --\x3e\n\u26a0\ufe0f end sets the value of the slider to the last allowed value in its range\n"))),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-widget-has-a-role-of-spinbutton"},"1. The widget has a ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"spinbutton"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has role spinbutton --\x3e\n<div role="spinbutton">hey, listen!</div>\n\n\x3c!-- \u274c element has role spinbutton --\x3e\n<span>hey, listen!</span>\n')),(0,i.kt)("h4",{id:"2-the-widget-has-an-accessible-label"},"2. The widget has an accessible label."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has accessible label --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="spinbutton"\n/>\n\n\x3c!-- \u2713 element has accessible label --\x3e\n<div id="spinbutton-label">Brightness</div>\n<div\n  aria-labelledby="spinbutton-label"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="spinbutton"\n/>\n\n\x3c!-- \u274c element is missing accessible label --\x3e\n<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />\n')),(0,i.kt)("h4",{id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values"},"3. The widget has valid ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemax"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemin")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuenow")," values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has valid aria-valuemax, aria-valuemin and aria-valuenow --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="spinbutton"\n/>\n\n\x3c!-- \u274c element is missing aria-valuemax, aria-valuemin or aria-valuenow properties --\x3e\n<div aria-label="brightness" role="spinbutton" />\n\n\x3c!-- \u274c element has aria-valuemin greater than aria-valuemax --\x3e\n<div aria-label="brightness" aria-valuemin="100" aria-valuemax="0" role="spinbutton" />\n\n\x3c!-- \u274c element has aria-valuenow set to decimal number outside of range --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemin="0"\n  aria-valuemax="100"\n  aria-valuenow="200"\n  role="spinbutton"\n/>\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Up Arrow"),": Increases the value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Down Arrow"),": Decreases the value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Home"),": If the spinbutton has a minimum value, sets the value to its minimum."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"End"),": If the spinbutton has a maximum value, sets the value to its maximum.")),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/"},"WAI SpinButton Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/spinbutton/spinbutton.html"},"SpinButton Example"))))}x.isMDXComponent=!0}}]);