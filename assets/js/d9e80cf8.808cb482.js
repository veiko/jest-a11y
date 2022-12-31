"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,v=e.values,h=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==x&&!g.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),E=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,a.useState)(x),N=T[0],C=T[1],A=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=E[h];null!=O&&O!==N&&g.some((function(e){return e.value===O}))&&C(O)}var S=function(e){var t=e.currentTarget,n=A.indexOf(t),r=g[n].value;r!==N&&(I(t),C(r),null!=h&&w(h,String(r)))},j=function(e){var t,n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var r,a=A.indexOf(e.currentTarget)+1;n=null!=(r=A[a])?r:A[0];break;case"ArrowLeft":var l,o=A.indexOf(e.currentTarget)-1;n=null!=(l=A[o])?l:A[A.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return A.push(e)},onKeyDown:j,onClick:S},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},6377:(e,t,n)=>{n.d(t,{S_:()=>h,Ui:()=>p});var r=n(7462),a=n(7294),l=function(e){var t=e.color,n=e.size,r=void 0===n?80:n;return a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:r,style:{color:t},height:r},a.createElement("g",{strokeLinecap:"round"},a.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},a.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),a.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},a.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),a.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},o=function(e){var t=e.color,n=e.size,r=(0,a.useContext)(p),o=r.exampleText,i=void 0===o?{text:null}:o,s=r.tooltip,c=(0,a.useState)(i.text),u=c[0],m=c[1],d=(0,a.useRef)(null),v=(0,a.useRef)(null),h=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e,t,n,r=(null==(e=h.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,a=v.current;a&&(a.classList.add("fade-in"),null==(n=d.current)||n.classList.add("fade-in"),a.style.transform="scale(1.5)",a.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;a.classList.remove("fade-in"),null==(e=d.current)||e.classList.remove("fade-in"),a.style.maxHeight=r+"px",a.style.transition="",a.style.transform=""})),m(i.text))})),s&&i.text?a.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+i.transformY+"px)"}},a.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:v},a.createElement("div",null,u)),a.createElement("div",{className:"arrow-text",ref:h,style:{visibility:"hidden"}},i.text),a.createElement("div",{className:"arrow-wrapper",ref:d},a.createElement(l,{color:t,size:n})),a.createElement("div",null)):null},i=function(e){var t=e.id,n=e.label,r=e.max,l=e.min,o=e.onChange,i=e.value;return a.createElement("div",null,n?a.createElement("div",{className:"slider-label"},a.createElement("label",{htmlFor:t},n,":"),a.createElement("div",null,i)):null,a.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:r,min:l,onChange:function(e){o(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":i/r+"%"},tabIndex:0,type:"range",value:i}))},s=function(e){var t=e.label,n=e.type,r=e.value;return"slider"===n?a.createElement(i,{id:t,label:t,max:10,min:0,onChange:function(){},value:r}):a.createElement("span",null,JSON.stringify({type:n,value:r}))},c=n(6906),u=function(e){var t=e.onClick;return a.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},a.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),a.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),a.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},p=a.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),m=function(e){var t=e.children,n=(0,a.useState)([]),r=n[0],l=n[1],o=(0,a.useState)([]),i=o[0],s=o[1],c=(0,a.useState)(),u=c[0],m=(c[1],(0,a.useState)()),d=m[0],v=(m[1],(0,a.useState)(!0)),h=v[0],f=v[1],b=(0,a.useCallback)((function(e){return s((function(t){return[].concat(t,[e])}))}),[s]),g=(0,a.useCallback)((function(){}),[]);return a.createElement(p.Provider,{value:{accessibleLabel:u,actions:r,addControl:b,controls:i,exampleText:d,getControlValue:g,setAccessibleLabel:function(){},setActions:l,setExampleText:function(){},setTooltip:f,tooltip:h}},t)},d=function(){var e=a.useContext(p).controls;return a.createElement("div",{className:"example-controls"},e.map((function(e,t){return a.createElement(s,(0,r.Z)({key:t},e))})))},v=function(){var e=a.useContext(p),t=e.actions,n=e.accessibleLabel;return a.createElement("div",{className:"example-actions"},n?a.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},a.createElement("div",{className:"audio-btn"},a.createElement(u,{onClick:function(){var e=new SpeechSynthesisUtterance(n);speechSynthesis.speak(e)}})),a.createElement("span",null,a.createElement("strong",null,"Accessible Label: "),n)):null,t.length>0&&a.createElement("div",null,a.createElement(c.a,{items:t})))},h=function(e){var t=e.height,n=e.size,r=void 0===n?1:n,l=e.children;return a.createElement(m,null,a.createElement("div",{className:"example-wrapper"},a.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":r+"fr",height:t}},a.createElement("div",{className:"left"}),a.createElement("div",{className:"center"},l),a.createElement("div",{className:"right"},a.createElement(o,{color:"var(--purple)",size:40})))),a.createElement(d,null),a.createElement(v,null))}},6906:(e,t,n)=>{n.d(t,{a:()=>a});var r=n(7294),a=function(e){var t=e.items;return r.createElement("ul",{className:"list"},t.map((function(e,t){return r.createElement("li",{key:"item-"+t},r.createElement("div",{className:"li-icon"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--greySecondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.createElement("polyline",{points:"12 5 19 12 12 19"}))),r.createElement("div",null,e))})))}},5529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var r=n(7462),a=n(3366),l=n(7294),o=n(3905),i=n(5488),s=n(5162),c=n(6377),u=function(){var e=(0,l.useContext)(c.Ui).setExampleText,t=(0,l.useState)(!1),n=t[0],r=t[1],a=function(){r(!1),e("press escape to close")},o=function(){r(!0),e("press escape to close")};return l.createElement("div",{className:"tooltip-wrapper"},l.createElement("div",{"aria-describedby":"my-tooltip",className:"tooltip-trigger",onBlur:a,onFocus:o,onKeyDown:function(e){"Escape"===e.key&&(a(),e.currentTarget.blur())},onMouseOver:o,onMouseOut:a,tabIndex:0},"Hey, listen!"),n&&l.createElement("div",{className:"tooltip",id:"my-tooltip",role:"tooltip"},":)"))},p=["components"],m={id:"tooltip",title:"toBeAccessibleTooltip()"},d=void 0,v={unversionedId:"matchers/tooltip",id:"matchers/tooltip",title:"toBeAccessibleTooltip()",description:"This design pattern is work in progress; it does not yet have ARIA Authoring Practices Task Force consensus. Progress and discussions are captured here.",source:"@site/docs/matchers/to-be-accessible-tooltip.md",sourceDirName:"matchers",slug:"/matchers/tooltip",permalink:"/jest-a11y/matchers/tooltip",draft:!1,tags:[],version:"current",frontMatter:{id:"tooltip",title:"toBeAccessibleTooltip()"},sidebar:"sidebar",previous:{title:"toBeAccessibleToolbar()",permalink:"/jest-a11y/matchers/toolbar"},next:{title:"toHaveFocusLock()",permalink:"/jest-a11y/matchers/focuslock"}},h={},f=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>tooltip</code>.",id:"1-the-widget-has-a-role-of-tooltip",level:4},{value:"2. The tooltip trigger references the tooltip element with aria-describedby.",id:"2-the-tooltip-trigger-references-the-tooltip-element-with-aria-describedby",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],b={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This design pattern is work in progress; it does not yet have ARIA Authoring Practices Task Force consensus. Progress and discussions are captured ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3c/aria-practices/issues/128"},"here"),".")),(0,o.kt)("div",{className:"intro-text"},"A ",(0,o.kt)("strong",null,"tooltip")," is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."),(0,o.kt)("p",null,"It typically appears after a small delay and disappears when Escape is pressed or on mouse out. Tooltip widgets do not receive focus."),(0,o.kt)(c.S_,{mdxType:"ExampleContainer"},(0,o.kt)(u,{mdxType:"Tooltip"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"toBeAccessibleTooltip")," matcher expects to be called on the tooltip trigger. The tooltip element will be obtained through the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-describedby")," reference on the trigger element."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('tooltip', () => {\n  document.body.innerHTML =\n    '<div id=\"tooltip-trigger\">Hey, listen!</div><div role=\"tooltip\">tooltip content</div>'\n\n  expect(document.getElementById('tooltip-trigger')).toBeAccessibleTooltip()\n})\n"))),(0,o.kt)(s.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\nimport { Tooltip } from 'your-component-library'\n\ntest('tooltip', () => {\n  render(<Tooltip content=\"tooltip content\">Hey, listen!</Tooltip>)\n\n  expect(screen.getByTestId('tooltip-trigger')).toBeAccessibleTooltip()\n})\n")))),(0,o.kt)("h2",{id:"test-summary"},"Test Summary"),(0,o.kt)("p",null,"The matcher tests the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 trigger element is part of tab sequence\n\x3c!-- test-pass --\x3e\n\u2713 trigger element has attribute aria-describedby\n\x3c!-- test-pass --\x3e\n\u2713 tooltip element has role tooltip\n\x3c!-- test-pass --\x3e\n\u2713 tooltip element is accessible when trigger is focused\n\x3c!-- test-pass --\x3e\n\u2713 tooltip element is hidden on {esc}\n")),(0,o.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,o.kt)("h4",{id:"1-the-widget-has-a-role-of-tooltip"},"1. The widget has a ",(0,o.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,o.kt)("inlineCode",{parentName:"h4"},"tooltip"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has role tooltip --\x3e\n<div role="tooltip">hey, listen!</div>\n\n\x3c!-- \u274c element has role tooltip --\x3e\n<span>hey, listen!</span>\n')),(0,o.kt)("h4",{id:"2-the-tooltip-trigger-references-the-tooltip-element-with-aria-describedby"},"2. The tooltip trigger references the tooltip element with aria-describedby."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 trigger element has aria-describedby --\x3e\n<div aria-describedby="tooltip-content">hover me</div>\n<div id="tooltip-content" role="tooltip">hey, listen!</div>\n\n\x3c!-- \u274c trigger element has aria-describedby --\x3e\n<div>hover me</div>\n<div id="tooltip-content" role="tooltip">hey, listen!</div>\n')),(0,o.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Tab"),": focuses the trigger element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Escape"),": dismisses the tooltip element.")),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"},"WAI Tooltip Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/tooltip/tooltip.html"},"Tooltip Example"))))}g.isMDXComponent=!0}}]);