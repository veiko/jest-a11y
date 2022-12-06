"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),p=l,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,i=e.lazy,m=e.block,p=e.defaultValue,f=e.values,h=e.groupId,v=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===p?p:null!=(t=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==x&&!b.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),E=k.tabGroupChoices,w=k.setTabGroupChoices,C=(0,l.useState)(x),N=C[0],A=C[1],T=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=E[h];null!=I&&I!==N&&b.some((function(e){return e.value===I}))&&A(I)}var O=function(e){var t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==N&&(S(t),A(n),null!=h&&w(h,String(n)))},L=function(e){var t,a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var n,l=T.indexOf(e.currentTarget)+1;a=null!=(n=T[l])?n:T[0];break;case"ArrowLeft":var r,i=T.indexOf(e.currentTarget)-1;a=null!=(r=T[i])?r:T[T.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:L,onClick:O},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},6377:(e,t,a)=>{a.d(t,{S_:()=>h,Ui:()=>d});var n=a(7462),l=a(7294),r=function(e){var t=e.color,a=e.size,n=void 0===a?80:a;return l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:n,style:{color:t},height:n},l.createElement("g",{strokeLinecap:"round"},l.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},l.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),l.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},l.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),l.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},i=function(e){var t=e.color,a=e.size,n=(0,l.useContext)(d),i=n.exampleText,o=void 0===i?{text:null}:i,s=n.tooltip,c=(0,l.useState)(o.text),u=c[0],m=c[1],p=(0,l.useRef)(null),f=(0,l.useRef)(null),h=(0,l.useRef)(null);return(0,l.useEffect)((function(){var e,t,a,n=(null==(e=h.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,l=f.current;l&&(l.classList.add("fade-in"),null==(a=p.current)||a.classList.add("fade-in"),l.style.transform="scale(1.5)",l.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;l.classList.remove("fade-in"),null==(e=p.current)||e.classList.remove("fade-in"),l.style.maxHeight=n+"px",l.style.transition="",l.style.transform=""})),m(o.text))})),s&&o.text?l.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+o.transformY+"px)"}},l.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:f},l.createElement("div",null,u)),l.createElement("div",{className:"arrow-text",ref:h,style:{visibility:"hidden"}},o.text),l.createElement("div",{className:"arrow-wrapper",ref:p},l.createElement(r,{color:t,size:a})),l.createElement("div",null)):null},o=function(e){var t=e.id,a=e.label,n=e.max,r=e.min,i=e.onChange,o=e.value;return l.createElement("div",null,a?l.createElement("div",{className:"slider-label"},l.createElement("label",{htmlFor:t},a,":"),l.createElement("div",null,o)):null,l.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:n,min:r,onChange:function(e){i(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":o/n+"%"},tabIndex:0,type:"range",value:o}))},s=function(e){var t=e.label,a=e.type,n=e.value;return"slider"===a?l.createElement(o,{id:t,label:t,max:10,min:0,onChange:function(){},value:n}):l.createElement("span",null,JSON.stringify({type:a,value:n}))},c=a(6906),u=function(e){var t=e.onClick;return l.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},l.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),l.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),l.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},d=l.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),m=function(e){var t=e.children,a=(0,l.useState)([]),n=a[0],r=a[1],i=(0,l.useState)([]),o=i[0],s=i[1],c=(0,l.useState)(),u=c[0],m=(c[1],(0,l.useState)()),p=m[0],f=(m[1],(0,l.useState)(!0)),h=f[0],v=f[1],g=(0,l.useCallback)((function(e){return s((function(t){return[].concat(t,[e])}))}),[s]),b=(0,l.useCallback)((function(){}),[]);return l.createElement(d.Provider,{value:{accessibleLabel:u,actions:n,addControl:g,controls:o,exampleText:p,getControlValue:b,setAccessibleLabel:function(){},setActions:r,setExampleText:function(){},setTooltip:v,tooltip:h}},t)},p=function(){var e=l.useContext(d).controls;return l.createElement("div",{className:"example-controls"},e.map((function(e,t){return l.createElement(s,(0,n.Z)({key:t},e))})))},f=function(){var e=l.useContext(d),t=e.actions,a=e.accessibleLabel;return l.createElement("div",{className:"example-actions"},a?l.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},l.createElement("div",{className:"audio-btn"},l.createElement(u,{onClick:function(){var e=new SpeechSynthesisUtterance(a);speechSynthesis.speak(e)}})),l.createElement("span",null,l.createElement("strong",null,"Accessible Label: "),a)):null,t.length>0&&l.createElement("div",null,l.createElement(c.a,{items:t})))},h=function(e){var t=e.height,a=e.size,n=void 0===a?1:a,r=e.children;return l.createElement(m,null,l.createElement("div",{className:"example-wrapper"},l.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":n+"fr",height:t}},l.createElement("div",{className:"left"}),l.createElement("div",{className:"center"},r),l.createElement("div",{className:"right"},l.createElement(i,{color:"var(--purple)",size:40})))),l.createElement(p,null),l.createElement(f,null))}},6906:(e,t,a)=>{a.d(t,{a:()=>l});var n=a(7294),l=function(e){var t=e.items;return n.createElement("ul",{className:"list"},t.map((function(e,t){return n.createElement("li",{key:"item-"+t},n.createElement("div",{className:"li-icon"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--greySecondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.createElement("polyline",{points:"12 5 19 12 12 19"}))),n.createElement("div",null,e))})))}},4623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var n=a(7462),l=a(3366),r=a(7294),i=a(3905),o=a(5488),s=a(5162),c=a(6377),u=function(){var e=(0,r.useRef)(null),t=(0,r.useRef)(null),a=(0,r.useContext)(c.Ui),n=a.setAccessibleLabel,l=a.setActions,i=a.setExampleText,o=a.setTooltip;(0,r.useEffect)((function(){i("Launch the alert dialog",{transformY:-45})}),[]);var s=(0,r.useState)(!1),u=s[0],d=s[1],m=function(){d(!1),e.current.focus(),i("When a dialog closes, focus should return to the element that invoked the dialog.",{transformY:e.current.offsetTop}),n("Launch"),l(["lakdjf"])};return r.createElement(r.Fragment,null,r.createElement("button",{className:"button",id:"launch-button",onKeyDown:function(e){return"Tab"===e.key&&o(!1)},onClick:function(){return d(!0),void o(!0)},ref:e},"Launch"),u&&r.createElement("div",{className:"alertdialog "+(u?"open":""),"data-testid":"alertdialog",onKeyUp:function(e){return"Escape"===e.key&&m()},role:"alertdialog"},r.createElement("h3",null,"Are you sure?"),r.createElement("br",null),r.createElement("button",{autoFocus:!0,className:"button",onBlur:function(){return i(r.createElement(r.Fragment,null,r.createElement("kbd",null,"Esc")," closes the dialog"))},onFocus:function(){return i("When a dialog opens, focus moves to an element inside the dialog")},onClick:m,ref:t},"No"),"\xa0 \xa0",r.createElement("button",{className:"button primary",onClick:m,onKeyDown:function(e){var a;"Tab"===e.key&&(e.preventDefault(),null==(a=t.current)||a.focus())}},"Yes")))},d=["components"],m={id:"alertdialog",title:"toBeAccessibleAlertDialog()"},p=void 0,f={unversionedId:"matchers/alertdialog",id:"matchers/alertdialog",title:"toBeAccessibleAlertDialog()",description:"An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.",source:"@site/docs/matchers/to-be-accessible-alert-dialog.md",sourceDirName:"matchers",slug:"/matchers/alertdialog",permalink:"/jest-a11y/matchers/alertdialog",draft:!1,tags:[],version:"current",frontMatter:{id:"alertdialog",title:"toBeAccessibleAlertDialog()"},sidebar:"sidebar",previous:{title:"toBeAccessibleAccordion()",permalink:"/jest-a11y/matchers/accordion"},next:{title:"toBeAccessibleAlert()",permalink:"/jest-a11y/matchers/alert"}},h={},v=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The element that contains all elements of the dialog, including the alert message and any dialog buttons, has <code>role</code> of <code>alertdialog</code>.",id:"1-the-element-that-contains-all-elements-of-the-dialog-including-the-alert-message-and-any-dialog-buttons-has-role-of-alertdialog",level:4},{value:"2. The alert dialog has an accessible label.",id:"2-the-alert-dialog-has-an-accessible-label",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],g={toc:v};function b(e){var t=e.components,a=(0,l.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"An ",(0,i.kt)("strong",null,"alert dialog")," is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response."),(0,i.kt)("p",null,"Examples include action confirmation prompts and error message confirmations."),(0,i.kt)(c.S_,{mdxType:"ExampleContainer"},(0,i.kt)(u,{mdxType:"AlertDialog"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('alertdialog', () => {\n  document.body.innerHTML = '<div aria-label=\"modal\" id=\"dlg\" role=\"alertdialog\">\ud83d\udc4d</div>'\n\n  expect(document.getElementById('dlg')).toBeAccessibleAlertDialog()\n})\n"))),(0,i.kt)(s.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('alertdialog', () => {\n  render(\n    <div data-testid=\"alertdialog\" role=\"alertdialog\">\n      Hey, listen!\n    </div>,\n  )\n\n  expect(screen.getByTestId('alertdialog')).toBeAccessibleAlertDialog()\n})\n")))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"The matcher will test the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element has role alertdialog\n\x3c!-- test-pass --\x3e\n\u2713 element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 element has attribute aria-describedby\n\x3c!-- test-pass --\x3e\n\u2713 element description is present\n\x3c!-- test-pass --\x3e\n\u2713 element closed on {esc}\n")),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-element-that-contains-all-elements-of-the-dialog-including-the-alert-message-and-any-dialog-buttons-has-role-of-alertdialog"},"1. The element that contains all elements of the dialog, including the alert message and any dialog buttons, has ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"alertdialog"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 role is set with attribute --\x3e\n<div role="alertdialog">Hey, listen!</div>\n\n\x3c!-- \u274c FAIL - role is not set or implicit --\x3e\n<span>Hey, listen!</span>\n')),(0,i.kt)("h4",{id:"2-the-alert-dialog-has-an-accessible-label"},"2. The alert dialog has an accessible label."),(0,i.kt)("p",null,"The element with role ",(0,i.kt)("inlineCode",{parentName:"p"},"alertdialog")," has either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A value for ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," that refers to the element containing the title of the dialog if the dialog has a visible label."),(0,i.kt)("li",{parentName:"ul"},"A value for ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," if the dialog does not have a visible label.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 accessible name is set by aria-labelledby --\x3e\n<div aria-labelledby="the-label" role="alertdialog">\n  <h3 id="the-label">Sorry Mario.</h3>\n  <p>But the princess is in another castle!</p>\n</div>\n\n\x3c!-- \u2713 accessible name is set by aria-label --\x3e\n<div aria-label="Sorry Mario" role="alertdialog">\n  <p>But the princess is in another castle!</p>\n</div>\n\n\x3c!-- \u274c FAIL - accessible name is not set or implicit --\x3e\n<div role="alertdialog">\n  <p>But the princess is in another castle!</p>\n</div>\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/matchers/dialog#keyboard-interaction"},"keyboard interaction")," section for the modal dialog pattern."),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/"},"WAI Alert Dialog Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/alertdialog.html"},"Alert Dialog Example"))))}b.isMDXComponent=!0}}]);