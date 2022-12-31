"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),v=n,p=d["".concat(o,".").concat(v)]||d[v]||m[v]||r;return a?l.createElement(p,i(i({ref:t},u),{},{components:a})):l.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=v;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}v.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(7462),n=a(7294),r=a(6010),i=a(2389),s=a(7392),o=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,i=e.lazy,m=e.block,v=e.defaultValue,p=e.values,h=e.groupId,f=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===v?v:null!=(t=null!=v?v:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),w=x.tabGroupChoices,E=x.setTabGroupChoices,C=(0,n.useState)(k),N=C[0],T=C[1],S=[],A=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=w[h];null!=I&&I!==N&&g.some((function(e){return e.value===I}))&&T(I)}var O=function(e){var t=e.currentTarget,a=S.indexOf(t),l=g[a].value;l!==N&&(A(t),T(l),null!=h&&E(h,String(l)))},j=function(e){var t,a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var l,n=S.indexOf(e.currentTarget)+1;a=null!=(l=S[n])?l:S[0];break;case"ArrowLeft":var r,i=S.indexOf(e.currentTarget)-1;a=null!=(r=S[i])?r:S[S.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return S.push(e)},onKeyDown:j,onClick:O},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function v(e){var t=(0,i.Z)();return n.createElement(m,(0,l.Z)({key:String(t)},e))}},6377:(e,t,a)=>{a.d(t,{S_:()=>h,Ui:()=>d});var l=a(7462),n=a(7294),r=function(e){var t=e.color,a=e.size,l=void 0===a?80:a;return n.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:l,style:{color:t},height:l},n.createElement("g",{strokeLinecap:"round"},n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),n.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},n.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),n.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},i=function(e){var t=e.color,a=e.size,l=(0,n.useContext)(d),i=l.exampleText,s=void 0===i?{text:null}:i,o=l.tooltip,c=(0,n.useState)(s.text),u=c[0],m=c[1],v=(0,n.useRef)(null),p=(0,n.useRef)(null),h=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e,t,a,l=(null==(e=h.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,n=p.current;n&&(n.classList.add("fade-in"),null==(a=v.current)||a.classList.add("fade-in"),n.style.transform="scale(1.5)",n.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;n.classList.remove("fade-in"),null==(e=v.current)||e.classList.remove("fade-in"),n.style.maxHeight=l+"px",n.style.transition="",n.style.transform=""})),m(s.text))})),o&&s.text?n.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+s.transformY+"px)"}},n.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:p},n.createElement("div",null,u)),n.createElement("div",{className:"arrow-text",ref:h,style:{visibility:"hidden"}},s.text),n.createElement("div",{className:"arrow-wrapper",ref:v},n.createElement(r,{color:t,size:a})),n.createElement("div",null)):null},s=function(e){var t=e.id,a=e.label,l=e.max,r=e.min,i=e.onChange,s=e.value;return n.createElement("div",null,a?n.createElement("div",{className:"slider-label"},n.createElement("label",{htmlFor:t},a,":"),n.createElement("div",null,s)):null,n.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:l,min:r,onChange:function(e){i(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":s/l+"%"},tabIndex:0,type:"range",value:s}))},o=function(e){var t=e.label,a=e.type,l=e.value;return"slider"===a?n.createElement(s,{id:t,label:t,max:10,min:0,onChange:function(){},value:l}):n.createElement("span",null,JSON.stringify({type:a,value:l}))},c=a(6906),u=function(e){var t=e.onClick;return n.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},n.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),n.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),n.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},d=n.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),m=function(e){var t=e.children,a=(0,n.useState)([]),l=a[0],r=a[1],i=(0,n.useState)([]),s=i[0],o=i[1],c=(0,n.useState)(),u=c[0],m=(c[1],(0,n.useState)()),v=m[0],p=(m[1],(0,n.useState)(!0)),h=p[0],f=p[1],b=(0,n.useCallback)((function(e){return o((function(t){return[].concat(t,[e])}))}),[o]),g=(0,n.useCallback)((function(){}),[]);return n.createElement(d.Provider,{value:{accessibleLabel:u,actions:l,addControl:b,controls:s,exampleText:v,getControlValue:g,setAccessibleLabel:function(){},setActions:r,setExampleText:function(){},setTooltip:f,tooltip:h}},t)},v=function(){var e=n.useContext(d).controls;return n.createElement("div",{className:"example-controls"},e.map((function(e,t){return n.createElement(o,(0,l.Z)({key:t},e))})))},p=function(){var e=n.useContext(d),t=e.actions,a=e.accessibleLabel;return n.createElement("div",{className:"example-actions"},a?n.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},n.createElement("div",{className:"audio-btn"},n.createElement(u,{onClick:function(){var e=new SpeechSynthesisUtterance(a);speechSynthesis.speak(e)}})),n.createElement("span",null,n.createElement("strong",null,"Accessible Label: "),a)):null,t.length>0&&n.createElement("div",null,n.createElement(c.a,{items:t})))},h=function(e){var t=e.height,a=e.size,l=void 0===a?1:a,r=e.children;return n.createElement(m,null,n.createElement("div",{className:"example-wrapper"},n.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":l+"fr",height:t}},n.createElement("div",{className:"left"}),n.createElement("div",{className:"center"},r),n.createElement("div",{className:"right"},n.createElement(i,{color:"var(--purple)",size:40})))),n.createElement(v,null),n.createElement(p,null))}},6906:(e,t,a)=>{a.d(t,{a:()=>n});var l=a(7294),n=function(e){var t=e.items;return l.createElement("ul",{className:"list"},t.map((function(e,t){return l.createElement("li",{key:"item-"+t},l.createElement("div",{className:"li-icon"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--greySecondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.createElement("polyline",{points:"12 5 19 12 12 19"}))),l.createElement("div",null,e))})))}},4514:(e,t,a)=>{a.d(t,{Y:()=>n});var l=a(7294),n=function(e){var t=e.addChecks,a=void 0===t||t,n=e.list,r=void 0===n?[]:n,i=e.showTotal,s=function(e){var t=0,a=0;return e.forEach((function(e){e.includes("\u2713")&&t++,(e.includes("\u2713")||e.includes("\u2715"))&&a++})),{failed:a-t,passed:t,total:a}}(r),o=s.failed,c=s.passed,u=s.total;return l.createElement("div",{className:"test-summary codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",style:{"--prism-color":"#F8F8F2","--prism-background-color":"#282A36"}},l.createElement("pre",{className:"prism-code language-html codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar"},l.createElement("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"},l.createElement("ul",{style:{margin:0,listStyleType:"none",padding:0}},r.filter((function(e){return a||((t=e).includes("\u2713")||t.includes("\u2715"));var t})).map((function(e){var t,n=a?"code-block-test-pass":(t=e).includes("\u2713")?"code-block-test-pass":t.includes("\u2715")?"code-block-test-fail":"";return l.createElement("li",{className:"token-line "+n,key:e,style:{color:"rgb(248, 248, 242)"}},a?l.createElement("span",{className:"token plain"},l.createElement("i",{"aria-hidden":"true",className:"fa-solid fa-check",style:{color:"var(--green)",fontSize:"80%"}})," ",e):l.createElement("span",{className:"token plain"},e),l.createElement("br",null))}))),i&&l.createElement(l.Fragment,null,l.createElement("br",null),"\xa0 Tests:"," ",o?l.createElement(l.Fragment,null,l.createElement("strong",{className:"failed"},o," failed"),","," "):null,l.createElement("strong",null,c," passed"),", ",u," total"))))}},5033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>v,metadata:()=>h,toc:()=>b});var l=a(7462),n=a(3366),r=a(7294),i=a(3905),s=a(5488),o=a(5162),c=a(4514),u=a(6377),d=function(){var e=(0,r.useState)(5),t=e[0],a=e[1],l=(0,r.useContext)(u.Ui),n=l.setExampleText,i=l.setTooltip;return r.createElement("input",{"aria-label":"Sample Slider","aria-valuemax":10,"aria-valuemin":0,"aria-valuenow":t,className:"slider",max:10,min:0,onBlur:function(){return i(!1)},onChange:function(e){n(r.createElement(r.Fragment,null,r.createElement("kbd",null,"Home")," and ",r.createElement("kbd",null,"End")," keys will change the value to the ",r.createElement("code",null,"min")," and ",r.createElement("code",null,"max")," values")),a(parseInt(e.currentTarget.value,10))},onFocus:function(){return n(r.createElement(r.Fragment,null,r.createElement("kbd",null,"\u2190")," and ",r.createElement("kbd",null,"\u2192")," will change the value by one step"))},role:"slider",style:{"--percent-value":10*t+"%"},tabIndex:0,type:"range",value:t})},m=["components"],v={id:"slider",title:"toBeAccessibleSlider()"},p=void 0,h={unversionedId:"matchers/slider",id:"matchers/slider",title:"toBeAccessibleSlider()",description:"A slider is an input where the user selects a value from within a given range.",source:"@site/docs/matchers/to-be-accessible-slider.md",sourceDirName:"matchers",slug:"/matchers/slider",permalink:"/jest-a11y/matchers/slider",draft:!1,tags:[],version:"current",frontMatter:{id:"slider",title:"toBeAccessibleSlider()"},sidebar:"sidebar",previous:{title:"toBeAccessibleRadioGroup()",permalink:"/jest-a11y/matchers/radiogroup"},next:{title:"toBeAccessibleSpinButton()",permalink:"/jest-a11y/matchers/spinbutton"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>slider</code>.",id:"1-the-widget-has-a-role-of-slider",level:4},{value:"2. The widget has an accessible label.",id:"2-the-widget-has-an-accessible-label",level:4},{value:"3. The widget has valid <code>aria-valuemax</code>, <code>aria-valuemin</code> and <code>aria-valuenow</code> values",id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],g={toc:b};function y(e){var t=e.components,a=(0,n.Z)(e,m);return(0,i.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"A ",(0,i.kt)("strong",null,"slider")," is an input where the user selects a value from within a given range."),(0,i.kt)("p",null,"Sliders typically have a slider thumb that can be moved along a bar or track to change the value of the slider."),(0,i.kt)(u.S_,{mdxType:"ExampleContainer"},(0,i.kt)(d,{mdxType:"Slider"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'test(\'slider\', () => {\n  document.body.innerHTML =\n    \'<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" id="slider" role="slider" />\'\n\n  expect(document.getElementById(\'slider\')).toBeAccessibleSlider()\n})\n'))),(0,i.kt)(o.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { render, screen } from \'@testing-library/react\'\n\ntest(\'slider\', () => {\n  render(\n    <div\n      aria-label="brightness"\n      aria-valuemax="100"\n      aria-valuemin="0"\n      aria-valuenow="50"\n      data-testid="slider"\n      role="slider"\n    />,\n  )\n\n  expect(screen.getByTestId(\'slider\')).toBeAccessibleSlider()\n})\n')))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"The matcher tests the following:"),(0,i.kt)(c.Y,{list:["element has role slider","element has accessible label","element has aria-valuemin set to a decimal value less than aria-valuemax","element has valid aria-valuenow","element increases aria-valuenow when {arrowright} is pressed","element decreases aria-valuenow when {arrowleft} is pressed","home sets the value of the slider to the first allowed value in its range","end sets the value of the slider to the last allowed value in its range"],mdxType:"TestSummary"}),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-widget-has-a-role-of-slider"},"1. The widget has a ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"slider"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has role slider --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="slider"\n/>\n\n\x3c!-- \u274c element is missing role slider --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" />\n')),(0,i.kt)("h4",{id:"2-the-widget-has-an-accessible-label"},"2. The widget has an accessible label."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has accessible label --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="slider"\n/>\n\n\x3c!-- \u2713 element has accessible label --\x3e\n<div id="slider-label">Brightness</div>\n<div\n  aria-labelledby="slider-label"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="slider"\n/>\n\n\x3c!-- \u274c element is missing accessible label --\x3e\n<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" />\n')),(0,i.kt)("h4",{id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values"},"3. The widget has valid ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemax"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemin")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuenow")," values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has role slider --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemax="100"\n  aria-valuemin="0"\n  aria-valuenow="50"\n  role="slider"\n/>\n\n\x3c!-- \u274c element is missing aria-valuemax, aria-valuemin or aria-valuenow properties --\x3e\n<div aria-label="brightness" role="slider" />\n\n\x3c!-- \u274c element has aria-valuemin greater than aria-valuemax --\x3e\n<div aria-label="brightness" aria-valuemin="100" aria-valuemax="0" role="slider" />\n\n\x3c!-- \u274c element has aria-valuenow set to decimal number outside of range --\x3e\n<div\n  aria-label="brightness"\n  aria-valuemin="0"\n  aria-valuemax="100"\n  aria-valuenow="200"\n  role="slider"\n/>\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Right Arrow")," and ",(0,i.kt)("kbd",null,"Up Arrow")," increase the value of the slider by one step"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Left Arrow")," and ",(0,i.kt)("kbd",null,"Down Arrow")," decrease the value of the slider by one step"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Home")," sets the value of the slider to the first allowed value in its range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"End")," sets the value of the slider to the last allowed value in its range")),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider/"},"WAI Slider Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/slider/slider-color-viewer.html"},"Slider Example"))))}y.isMDXComponent=!0}}]);