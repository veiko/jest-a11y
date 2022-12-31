"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=o(n),d=l,p=h["".concat(c,".").concat(d)]||h[d]||m[d]||r;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),s=n(7392),c=n(7094),o=n(2466);const u="tabList__CuJ",h="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,p=e.values,v=e.groupId,f=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(w,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!w.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),x=y.tabGroupChoices,E=y.setTabGroupChoices,N=(0,l.useState)(k),C=N[0],T=N[1],S=[],A=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=x[v];null!=I&&I!==C&&w.some((function(e){return e.value===I}))&&T(I)}var O=function(e){var t=e.currentTarget,n=S.indexOf(t),a=w[n].value;a!==C&&(A(t),T(a),null!=v&&E(v,String(a)))},L=function(e){var t,n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var a,l=S.indexOf(e.currentTarget)+1;n=null!=(a=S[l])?a:S[0];break;case"ArrowLeft":var r,i=S.indexOf(e.currentTarget)-1;n=null!=(r=S[i])?r:S[S.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},w.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:L,onClick:O},i,{className:(0,r.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},6377:(e,t,n)=>{n.d(t,{S_:()=>v,Ui:()=>h});var a=n(7462),l=n(7294),r=function(e){var t=e.color,n=e.size,a=void 0===n?80:n;return l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:a,style:{color:t},height:a},l.createElement("g",{strokeLinecap:"round"},l.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},l.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),l.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},l.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),l.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},i=function(e){var t=e.color,n=e.size,a=(0,l.useContext)(h),i=a.exampleText,s=void 0===i?{text:null}:i,c=a.tooltip,o=(0,l.useState)(s.text),u=o[0],m=o[1],d=(0,l.useRef)(null),p=(0,l.useRef)(null),v=(0,l.useRef)(null);return(0,l.useEffect)((function(){var e,t,n,a=(null==(e=v.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,l=p.current;l&&(l.classList.add("fade-in"),null==(n=d.current)||n.classList.add("fade-in"),l.style.transform="scale(1.5)",l.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;l.classList.remove("fade-in"),null==(e=d.current)||e.classList.remove("fade-in"),l.style.maxHeight=a+"px",l.style.transition="",l.style.transform=""})),m(s.text))})),c&&s.text?l.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+s.transformY+"px)"}},l.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:p},l.createElement("div",null,u)),l.createElement("div",{className:"arrow-text",ref:v,style:{visibility:"hidden"}},s.text),l.createElement("div",{className:"arrow-wrapper",ref:d},l.createElement(r,{color:t,size:n})),l.createElement("div",null)):null},s=function(e){var t=e.id,n=e.label,a=e.max,r=e.min,i=e.onChange,s=e.value;return l.createElement("div",null,n?l.createElement("div",{className:"slider-label"},l.createElement("label",{htmlFor:t},n,":"),l.createElement("div",null,s)):null,l.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:a,min:r,onChange:function(e){i(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":s/a+"%"},tabIndex:0,type:"range",value:s}))},c=function(e){var t=e.label,n=e.type,a=e.value;return"slider"===n?l.createElement(s,{id:t,label:t,max:10,min:0,onChange:function(){},value:a}):l.createElement("span",null,JSON.stringify({type:n,value:a}))},o=n(6906),u=function(e){var t=e.onClick;return l.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},l.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),l.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),l.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},h=l.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),m=function(e){var t=e.children,n=(0,l.useState)([]),a=n[0],r=n[1],i=(0,l.useState)([]),s=i[0],c=i[1],o=(0,l.useState)(),u=o[0],m=(o[1],(0,l.useState)()),d=m[0],p=(m[1],(0,l.useState)(!0)),v=p[0],f=p[1],b=(0,l.useCallback)((function(e){return c((function(t){return[].concat(t,[e])}))}),[c]),w=(0,l.useCallback)((function(){}),[]);return l.createElement(h.Provider,{value:{accessibleLabel:u,actions:a,addControl:b,controls:s,exampleText:d,getControlValue:w,setAccessibleLabel:function(){},setActions:r,setExampleText:function(){},setTooltip:f,tooltip:v}},t)},d=function(){var e=l.useContext(h).controls;return l.createElement("div",{className:"example-controls"},e.map((function(e,t){return l.createElement(c,(0,a.Z)({key:t},e))})))},p=function(){var e=l.useContext(h),t=e.actions,n=e.accessibleLabel;return l.createElement("div",{className:"example-actions"},n?l.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},l.createElement("div",{className:"audio-btn"},l.createElement(u,{onClick:function(){var e=new SpeechSynthesisUtterance(n);speechSynthesis.speak(e)}})),l.createElement("span",null,l.createElement("strong",null,"Accessible Label: "),n)):null,t.length>0&&l.createElement("div",null,l.createElement(o.a,{items:t})))},v=function(e){var t=e.height,n=e.size,a=void 0===n?1:n,r=e.children;return l.createElement(m,null,l.createElement("div",{className:"example-wrapper"},l.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":a+"fr",height:t}},l.createElement("div",{className:"left"}),l.createElement("div",{className:"center"},r),l.createElement("div",{className:"right"},l.createElement(i,{color:"var(--purple)",size:40})))),l.createElement(d,null),l.createElement(p,null))}},6906:(e,t,n)=>{n.d(t,{a:()=>l});var a=n(7294),l=function(e){var t=e.items;return a.createElement("ul",{className:"list"},t.map((function(e,t){return a.createElement("li",{key:"item-"+t},a.createElement("div",{className:"li-icon"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--greySecondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.createElement("polyline",{points:"12 5 19 12 12 19"}))),a.createElement("div",null,e))})))}},8939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>w,frontMatter:()=>m,metadata:()=>p,toc:()=>f});var a=n(7462),l=n(3366),r=n(7294),i=n(3905),s=n(5488),c=n(5162),o=n(6377),u=function(){var e=r.useState(!1),t=e[0],n=e[1],a=(0,r.useCallback)((function(e){" "===e.key&&(e.preventDefault(),n((function(e){return!e})))}),[]);return r.createElement("div",{className:"switch-wrapper"},r.createElement("div",null,"Turn on the lights"),r.createElement("div",{"aria-checked":t,"aria-label":"Lights",className:"switch "+(t?"on":"off"),"data-testid":"an-switch",onClick:function(){return n((function(e){return!e}))},onKeyDown:a,role:"switch",tabIndex:0}))},h=["components"],m={id:"switch",title:"toBeAccessibleSwitch()"},d=void 0,p={unversionedId:"matchers/switch",id:"matchers/switch",title:"toBeAccessibleSwitch()",description:"A switch is an input widget that allows users to choose one of two values: on or off.",source:"@site/docs/matchers/to-be-accessible-switch.md",sourceDirName:"matchers",slug:"/matchers/switch",permalink:"/jest-a11y/matchers/switch",draft:!1,tags:[],version:"current",frontMatter:{id:"switch",title:"toBeAccessibleSwitch()"},sidebar:"sidebar",previous:{title:"toBeAccessibleSpinButton()",permalink:"/jest-a11y/matchers/spinbutton"},next:{title:"toBeAccessibleTabs()",permalink:"/jest-a11y/matchers/tabs"}},v={},f=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>switch</code>.",id:"1-the-widget-has-a-role-of-switch",level:4},{value:"2. The switch has an accessible label.",id:"2-the-switch-has-an-accessible-label",level:4},{value:"3. The switch has a valid <code>aria-checked</code> attribute.",id:"3-the-switch-has-a-valid-aria-checked-attribute",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],b={toc:f};function w(e){var t=e.components,n=(0,l.Z)(e,h);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"A ",(0,i.kt)("strong",null,"switch")," is an input widget that allows users to choose one of two values: on or off."),(0,i.kt)("p",null,"Switches are similar to ",(0,i.kt)("a",{parentName:"p",href:"/matchers/checkbox"},"checkboxes")," and toggle buttons, which can also serve as binary inputs. One difference, however, is that switches can only be used for binary input while checkboxes and toggle buttons allow implementations with the option of supporting a third middle state."),(0,i.kt)(o.S_,{mdxType:"ExampleContainer"},(0,i.kt)(u,{mdxType:"Switch"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(c.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('switch', () => {\n  document.body.innerHTML = '<div aria-checked=\"true\" id=\"switch\" role=\"switch\">Hey, listen!</div>'\n\n  expect(document.getElementById('switch')).toBeAccessibleSwitch()\n})\n"))),(0,i.kt)(c.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('switch', () => {\n  render(\n    <div aria-checked=\"true\" data-testid=\"switch\" role=\"switch\">\n      Hey, listen!\n    </div>,\n  )\n\n  expect(screen.getByTestId('switch')).toBeAccessibleSwitch()\n})\n")))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"There are two different matchers for switches."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeAccessibleSwitch")," matcher tests the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role switch\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element has aria-checked attribute\n\x3c!-- test-pass --\x3e\n\u2713 element toggles aria-checked on {space}\n\x3c!-- test-pass --\x3e\n\u2713 element label does not change when state changes\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeAccessibleInputSwitch")," matcher should be used when the switch element is an input element with ",(0,i.kt)("inlineCode",{parentName:"p"},'type="checkbox"'),". This matcher tests the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role switch\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element toggles checked on {space}\n\x3c!-- test-pass --\x3e\n\u2713 element label does not change when state changes\n")),(0,i.kt)("admonition",{title:"Not Tested",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If a set of switches is presented as a logical group with a visible label, either:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The switches are included in an element with role group that has the property aria-labelledby set to the ID of the element containing the group label."),(0,i.kt)("li",{parentName:"ul"},"The set is contained in an HTML fieldset and the label for the set is contained in an HTML legend element."))),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-widget-has-a-role-of-switch"},"1. The widget has a ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"switch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has role switch --\x3e\n<div role="switch">hey, listen!</div>\n\n\x3c!-- \u274c element has role switch --\x3e\n<span>hey, listen!</span>\n')),(0,i.kt)("h4",{id:"2-the-switch-has-an-accessible-label"},"2. The switch has an accessible label."),(0,i.kt)("p",null,"The label can be provided by one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visible text content contained within the element with ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," switch."),(0,i.kt)("li",{parentName:"ul"},"A visible label referenced by the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," set on the element with ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," switch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," set on the element with ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," switch.")),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is critical the label on a switch does not change when its state changes.")),(0,i.kt)("h4",{id:"3-the-switch-has-a-valid-aria-checked-attribute"},"3. The switch has a valid ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-checked")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has valid aria-checked --\x3e\n<div aria-checked="true" aria-label="Lights" role="switch" />\n\n\x3c!-- \u274c element is missing aria-checked --\x3e\n<div aria-label="Lights" role="switch" />\n\n\x3c!-- \u274c element has invalid aria-checked --\x3e\n<div aria-checked="on" aria-label="Lights" role="switch" />\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Space"),": When focus is on the switch, changes the state of the switch.")),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/"},"WAI Switch Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/switch/switch.html"},"Switch Example"))))}w.isMDXComponent=!0}}]);