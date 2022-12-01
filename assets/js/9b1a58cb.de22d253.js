"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4263:(e,t,n)=>{n.d(t,{S_:()=>v,Ui:()=>u});var a=n(7462),r=n(7294),i=function(e){var t=e.color,n=e.size,a=void 0===n?80:n;return r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:a,style:{color:t},height:a},r.createElement("g",{strokeLinecap:"round"},r.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},r.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),r.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},r.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),r.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},o=function(e){var t=e.color,n=e.size,a=(0,r.useContext)(u),o=a.exampleText,l=void 0===o?{text:null}:o,c=a.tooltip,s=(0,r.useState)(l.text),d=s[0],p=s[1],m=(0,r.useRef)(null),h=(0,r.useRef)(null),v=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e,t,n,a=(null==(e=v.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,r=h.current;r&&(r.classList.add("fade-in"),null==(n=m.current)||n.classList.add("fade-in"),r.style.transform="scale(1.5)",r.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;r.classList.remove("fade-in"),null==(e=m.current)||e.classList.remove("fade-in"),r.style.maxHeight=a+"px",r.style.transition="",r.style.transform=""})),p(l.text))})),c&&l.text?r.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+l.transformY+"px)"}},r.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:h},r.createElement("div",null,d)),r.createElement("div",{className:"arrow-text",ref:v,style:{visibility:"hidden"}},l.text),r.createElement("div",{className:"arrow-wrapper",ref:m},r.createElement(i,{color:t,size:n})),r.createElement("div",null)):null},l=function(e){var t=e.id,n=e.label,a=e.max,i=e.min,o=e.onChange,l=e.value;return r.createElement("div",null,n?r.createElement("div",{className:"slider-label"},r.createElement("label",{htmlFor:t},n,":"),r.createElement("div",null,l)):null,r.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:a,min:i,onChange:function(e){o(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":l/a+"%"},tabIndex:0,type:"range",value:l}))},c=function(e){var t=e.label,n=e.type,a=e.value;return"slider"===n?r.createElement(l,{id:t,label:t,max:10,min:0,onChange:function(){},value:a}):r.createElement("span",null,JSON.stringify({type:n,value:a}))},s=n(1397),d=function(e){var t=e.onClick;return r.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},r.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),r.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),r.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},u=r.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),p=function(e){var t=e.children,n=(0,r.useState)([]),a=n[0],i=n[1],o=(0,r.useState)([]),l=o[0],c=o[1],s=(0,r.useState)(),d=s[0],p=(s[1],(0,r.useState)()),m=p[0],h=(p[1],(0,r.useState)(!0)),v=h[0],f=h[1],b=(0,r.useCallback)((function(e){return c((function(t){return[].concat(t,[e])}))}),[c]),x=(0,r.useCallback)((function(){}),[]);return r.createElement(u.Provider,{value:{accessibleLabel:d,actions:a,addControl:b,controls:l,exampleText:m,getControlValue:x,setAccessibleLabel:function(){},setActions:i,setExampleText:function(){},setTooltip:f,tooltip:v}},t)},m=function(){var e=r.useContext(u).controls;return r.createElement("div",{className:"example-controls"},e.map((function(e,t){return r.createElement(c,(0,a.Z)({key:t},e))})))},h=function(){var e=r.useContext(u),t=e.actions,n=e.accessibleLabel;return r.createElement("div",{className:"example-actions"},n?r.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},r.createElement("div",{className:"audio-btn"},r.createElement(d,{onClick:function(){var e=new SpeechSynthesisUtterance(n);speechSynthesis.speak(e)}})),r.createElement("span",null,r.createElement("strong",null,"Accessible Label: "),n)):null,t.length>0&&r.createElement("div",null,r.createElement(s.a,{items:t})))},v=function(e){var t=e.height,n=e.size,a=void 0===n?1:n,i=e.children;return r.createElement(p,null,r.createElement("div",{className:"example-wrapper"},r.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":a+"fr",height:t}},r.createElement("div",{className:"left"}),r.createElement("div",{className:"center"},i),r.createElement("div",{className:"right"},r.createElement(o,{color:"var(--purple)",size:40})))),r.createElement(m,null),r.createElement(h,null))}},1397:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(7294),r=function(e){var t=e.items;return a.createElement("ul",{className:"list"},t.map((function(e,t){return a.createElement("li",{key:"item-"+t},a.createElement("div",{className:"li-icon"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--purple)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.createElement("polyline",{points:"12 5 19 12 12 19"}))),a.createElement("div",null,e))})))}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),c=n(7094),s=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,h=e.values,v=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(x,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!x.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),E=k.tabGroupChoices,w=k.setTabGroupChoices,A=(0,r.useState)(y),N=A[0],C=A[1],T=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=E[v];null!=P&&P!==N&&x.some((function(e){return e.value===P}))&&C(P)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=x[n].value;a!==N&&(I(t),C(a),null!=v&&w(v,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var i,o=T.indexOf(e.currentTarget)-1;n=null!=(i=T[o])?i:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},x.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},4153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>y,frontMatter:()=>h,metadata:()=>f,toc:()=>x});var a=n(7462),r=n(3366),i=n(7294),o=n(3905),l=n(5488),c=n(5162),s=n(4263),d=["onFocus"],u=function(e){var t=e.btnId,n=e.buttonProps,o=n.onFocus,l=(0,r.Z)(n,d),c=e.children,u=e.id,p=e.title,m=i.useState(!1),h=m[0],v=m[1],f=(0,i.useContext)(s.Ui).setAccessibleLabel;return i.createElement(i.Fragment,null,i.createElement("h3",null,i.createElement("button",(0,a.Z)({"aria-expanded":h,"aria-controls":u,id:t,onClick:function(){return v(!h)},onFocus:function(e){f(p),o&&o(e)}},l),i.createElement("span",null,p))),i.createElement("div",{"aria-labelledby":t,className:"panel "+(h?"open":""),id:u,role:"region"},i.createElement("div",{className:"panel-content"},c)))},p=function(e){var t=e.id,n=(0,i.useContext)(s.Ui),a=n.setAccessibleLabel,r=n.setExampleText,o=n.setTooltip;return(0,i.useEffect)((function(){r(i.createElement(i.Fragment,null,i.createElement("kbd",null,"Tab")," should focus the first accordion item"),{transformY:-45})}),[]),i.createElement("div",{className:"accordion","data-testid":t},i.createElement(u,{btnId:"accordion1id",id:"sect1",buttonProps:{onFocus:function(){return r(i.createElement(i.Fragment,null,i.createElement("kbd",null,"Tab")," to navigate to the next item"))}},title:"Section 1"},"Item 1"),i.createElement(u,{btnId:"accordion1id",id:"sect1",buttonProps:{onFocus:function(){return r(i.createElement(i.Fragment,null,i.createElement("kbd",null,"Enter")," or ",i.createElement("kbd",null,"Space")," will expand the accordion panel. Make this very long so that it wraps even more."),{transformY:0})},onKeyDown:function(e){"Tab"===e.key&&(a(void 0),o(!1))}},title:"Section 2"},"Item 2"))},m=["components"],h={id:"accordion",title:"toBeAccessibleAccordion()"},v=void 0,f={unversionedId:"matchers/accordion",id:"matchers/accordion",title:"toBeAccessibleAccordion()",description:"An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.",source:"@site/docs/matchers/to-be-accessible-accordion.md",sourceDirName:"matchers",slug:"/matchers/accordion",permalink:"/jest-a11y/matchers/accordion",draft:!1,tags:[],version:"current",frontMatter:{id:"accordion",title:"toBeAccessibleAccordion()"},sidebar:"sidebar",previous:{title:"Summary",permalink:"/jest-a11y/matchers/"},next:{title:"toBeAccessibleAlertDialog()",permalink:"/jest-a11y/matchers/alertdialog"}},b={},x=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The title of each accordion header is contained in an element with <code>role</code> of <code>button</code>",id:"1-the-title-of-each-accordion-header-is-contained-in-an-element-with-role-of-button",level:4},{value:"2. Each accordion header button is wrapped in an element with role heading that has a value set for <code>aria-level</code> that is appropriate for the information architecture of the page.",id:"2-each-accordion-header-button-is-wrapped-in-an-element-with-role-heading-that-has-a-value-set-for-aria-level-that-is-appropriate-for-the-information-architecture-of-the-page",level:4},{value:"3. The accordion header button element has <code>aria-controls</code> set to the ID of the element containing the accordion panel content.",id:"3-the-accordion-header-button-element-has-aria-controls-set-to-the-id-of-the-element-containing-the-accordion-panel-content",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"1. The accordion header button element can receive focus",id:"1-the-accordion-header-button-element-can-receive-focus",level:4},{value:"2. When element has focus, <kbd>Space</kbd> or <kbd>Enter</kbd> activates it.",id:"2-when-element-has-focus-space-or-enter-activates-it",level:4},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],g={toc:x};function y(e){var t=e.components,n=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"intro-text"},"An ",(0,o.kt)("strong",null,"accordion")," is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content."),(0,o.kt)("p",null,"The headings function as controls that enable users to reveal or hide their associated sections of content."),(0,o.kt)(s.S_,{height:"340px",mdxType:"ExampleContainer"},(0,o.kt)(p,{mdxType:"Accordion"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"win",label:"Vanilla JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('accordion', async () => {\n  document.body.innerHTML = `\n    <div id=\"accordion\">\n      <h3>\n        <button aria-controls=\"panel\" aria-expanded=\"false\" onclick=\"this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') == 'true' ? 'false' : 'true')\">Accordion Header 1</button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>`\n\n  await expect(document.getElementById('accordion')).toBeAccessibleAccordion()\n})\n"))),(0,o.kt)(c.Z,{default:!0,label:"React + Testing Library",value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('accordion', async () => {\n  render(\n    <div data-testid=\"accordion\">\n      <h3>\n        <button\n          aria-controls=\"panel\"\n          aria-expanded=\"false\"\n          onClick={e => {\n            const self = e.target as HTMLElement\n            self.setAttribute(\n              'aria-expanded',\n              self.getAttribute('aria-expanded') == 'true' ? 'false' : 'true',\n            )\n          }}\n        >\n          Accordion Header 1\n        </button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>,\n  )\n\n  await expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()\n})\n")))),(0,o.kt)("h2",{id:"test-summary"},"Test Summary"),(0,o.kt)("p",null,"The matcher for an accordion will loop through the accordion items (",(0,o.kt)("inlineCode",{parentName:"p"},"button")," elements). For each accordion item, the matcher will test the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element is wrapped in an element with role heading\n\x3c!-- test-pass --\x3e\n\u2713 element is wrapped in an element with aria-level\n\x3c!-- test-pass --\x3e\n\u2713 element has attribute aria-controls\n\x3c!-- test-pass --\x3e\n\u2713 aria-expanded toggled on {enter}\n\x3c!-- test-pass --\x3e\n\u2713 aria-expanded toggled on {space}\n")),(0,o.kt)("p",null,"Functionality that is not tested:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-caution --\x3e\n\u26a0 If the accordion panel associated with an accordion header is visible, the header button element has aria-expanded set to true. If the panel is not\nvisible, aria-expanded is set to false.\n")),(0,o.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,o.kt)("h4",{id:"1-the-title-of-each-accordion-header-is-contained-in-an-element-with-role-of-button"},"1. The title of each accordion header is contained in an element with ",(0,o.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,o.kt)("inlineCode",{parentName:"h4"},"button")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 the title is contained in a button --\x3e\n<div class="accordion">\n  <h3>\n    \x3c!-- success-next-line --\x3e\n    <button aria-controls="panel" aria-expanded="false">\n      \x3c!-- success-next-line --\x3e\n      Accordion Header 1\n      \x3c!-- success-next-line --\x3e\n    </button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!-- \u274c the title is contained in a span --\x3e\n<div class="accordion">\n  <h3>\n    \x3c!-- error-next-line --\x3e\n    <span aria-controls="panel" aria-expanded="false">Accordion Header 1</span>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("h4",{id:"2-each-accordion-header-button-is-wrapped-in-an-element-with-role-heading-that-has-a-value-set-for-aria-level-that-is-appropriate-for-the-information-architecture-of-the-page"},"2. Each accordion header button is wrapped in an element with role heading that has a value set for ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-level")," that is appropriate for the information architecture of the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 button is wrapped in element with implicit `aria-level` and `role` --\x3e\n<div>\n  \x3c!-- success-next-line --\x3e\n  <h3>\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!-- \u2713 button is wrapped in element with `aria-level` and `role` set --\x3e\n<div>\n  \x3c!-- success-next-line --\x3e\n  <div aria-level="3" role="heading">\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </div>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!--  \u274c button is not wrapped in heading --\x3e\n<div>\n  \x3c!-- error-next-line --\x3e\n  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("h4",{id:"3-the-accordion-header-button-element-has-aria-controls-set-to-the-id-of-the-element-containing-the-accordion-panel-content"},"3. The accordion header button element has ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-controls")," set to the ID of the element containing the accordion panel content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--  \u2713 element has aria-controls --\x3e\n<div>\n  <h3>\n    \x3c!-- success-next-line --\x3e\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!--  \u274c element does not have aria-controls --\x3e\n<div>\n  <h3>\n    \x3c!-- error-next-line --\x3e\n    <button aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("admonition",{title:"Not tested",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u270b Remember, this project ",(0,o.kt)("em",{parentName:"p"},"does not guarantee what you build is accessible.")),(0,o.kt)("h4",{parentName:"admonition",id:"4-if-the-accordion-panel-associated-with-an-accordion-header-is-visible-the-header-button-element-has-aria-expanded-set-to-true-if-the-panel-is-not-visible-aria-expanded-is-set-to-false"},"4. If the accordion panel associated with an accordion header is visible, the header button element has ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-expanded")," set to ",(0,o.kt)("inlineCode",{parentName:"h4"},"true"),". If the panel is not visible, ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-expanded")," is set to ",(0,o.kt)("inlineCode",{parentName:"h4"},"false"),"."),(0,o.kt)("p",{parentName:"admonition"},"There are multiple ways to implement accordion panel visibility, so there is no single method to test that the panel visibility corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-expanded")," value."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 button has aria-expanded prop according to panel visibility --\x3e\n<div>\n  <h3><button aria-controls="panel" aria-expanded="true">Accordion Header 1</button></h3>\n  <div style="display: block">Accordion Panel 1</div>\n  <h3><button aria-controls="panel" aria-expanded="false">Accordion Header 2</button></h3>\n  <div style="display: none">Accordion Panel 2</div>\n</div>\n\n\x3c!-- \u274c button and panel are not expanded in sync --\x3e\n<div>\n  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n  <button aria-controls="panel" aria-expanded="true">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')))),(0,o.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,o.kt)("h4",{id:"1-the-accordion-header-button-element-can-receive-focus"},"1. The accordion header button element can receive focus"),(0,o.kt)("h4",{id:"2-when-element-has-focus-space-or-enter-activates-it"},"2. When element has focus, ",(0,o.kt)("kbd",null,"Space")," or ",(0,o.kt)("kbd",null,"Enter")," activates it."),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"},"WAI Accordion Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html"},"Accordion Example"))))}y.isMDXComponent=!0}}]);