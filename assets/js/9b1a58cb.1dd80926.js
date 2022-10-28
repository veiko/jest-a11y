"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[803],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(7462),r=t(7294),o=t(6010),i=t(2389),l=t(7392),c=t(7094),d=t(2466);const s="tabList__CuJ",u="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,h=e.defaultValue,m=e.values,v=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.l)(x,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(n=null!=h?h:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==y&&!x.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),w=k.tabGroupChoices,A=k.setTabGroupChoices,N=(0,r.useState)(y),T=N[0],P=N[1],E=[],I=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=w[v];null!=O&&O!==T&&x.some((function(e){return e.value===O}))&&P(O)}var j=function(e){var n=e.currentTarget,t=E.indexOf(n),a=x[t].value;a!==T&&(I(n),P(a),null!=v&&A(v,String(a)))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;t=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;t=null!=(o=E[i])?o:E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},x.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function h(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},4523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(5488),l=t(5162),c=["components"],d={id:"accordion",title:"\ud83d\udea7 toBeAccessibleAccordion()"},s=void 0,u={unversionedId:"matchers/accordion",id:"matchers/accordion",title:"\ud83d\udea7 toBeAccessibleAccordion()",description:"An accordion is a vertically stacked set of interactive headings that each contain a title, content",source:"@site/docs/matchers/to-be-accessible-accordion.md",sourceDirName:"matchers",slug:"/matchers/accordion",permalink:"/jest-a11y/matchers/accordion",draft:!1,tags:[],version:"current",frontMatter:{id:"accordion",title:"\ud83d\udea7 toBeAccessibleAccordion()"},sidebar:"mySidebar",previous:{title:"Matchers",permalink:"/jest-a11y/matchers/"},next:{title:"toBeAccessibleAlertDialog()",permalink:"/jest-a11y/matchers/alertdialog"}},p={},h=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The title of each accordion header is contained in an element with <code>role</code> of <code>button</code>",id:"1-the-title-of-each-accordion-header-is-contained-in-an-element-with-role-of-button",level:4},{value:"2. Each accordion header button is wrapped in an element with role heading that has a value set for <code>aria-level</code> that is appropriate for the information architecture of the page.",id:"2-each-accordion-header-button-is-wrapped-in-an-element-with-role-heading-that-has-a-value-set-for-aria-level-that-is-appropriate-for-the-information-architecture-of-the-page",level:4},{value:"3. The accordion header button element has <code>aria-controls</code> set to the ID of the element containing the accordion panel content.",id:"3-the-accordion-header-button-element-has-aria-controls-set-to-the-id-of-the-element-containing-the-accordion-panel-content",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"1. The accordion header button element can receive focus",id:"1-the-accordion-header-button-element-can-receive-focus",level:4},{value:"2. When element has focus, <code>space</code> or <code>enter</code> activates it.",id:"2-when-element-has-focus-space-or-enter-activates-it",level:4}],m={toc:h};function v(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An accordion is a vertically stacked set of interactive headings that each contain a title, content\nsnippet, or thumbnail representing a section of content. The headings function as controls that\nenable users to reveal or hide their associated sections of content."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"},"WAI Accordion Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html"},"Accordion Example"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"win",label:"Vanilla JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('accordion', async () => {\n  document.body.innerHTML = `\n    <div id=\"accordion\">\n      <h3>\n        <button aria-controls=\"panel\" aria-expanded=\"false\" onclick=\"this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') == 'true' ? 'false' : 'true')\">Accordion Header 1</button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>`\n\n  await expect(document.getElementById('accordion')).toBeAccessibleAccordion()\n})\n"))),(0,o.kt)(l.Z,{default:!0,label:"React + Testing Library",value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('accordion', async () => {\n  render(\n    <div data-testid=\"accordion\">\n      <h3>\n        <button\n          aria-controls=\"panel\"\n          aria-expanded=\"false\"\n          onClick={e => {\n            const self = e.target as HTMLElement\n            self.setAttribute(\n              'aria-expanded',\n              self.getAttribute('aria-expanded') == 'true' ? 'false' : 'true',\n            )\n          }}\n        >\n          Accordion Header 1\n        </button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>,\n  )\n\n  await expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()\n})\n")))),(0,o.kt)("h2",{id:"test-summary"},"Test Summary"),(0,o.kt)("p",null,"The matcher for an accordion will loop through the accordion items (",(0,o.kt)("inlineCode",{parentName:"p"},"button")," elements). For each\naccordion item, the matcher will test the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element is wrapped in an element with role heading\n\x3c!-- test-pass --\x3e\n\u2713 element is wrapped in an element with aria-level\n\x3c!-- test-pass --\x3e\n\u2713 element has attribute aria-controls\n\x3c!-- test-pass --\x3e\n\u2713 aria-expanded toggled on {enter}\n\x3c!-- test-pass --\x3e\n\u2713 aria-expanded toggled on {space}\n")),(0,o.kt)("p",null,"Functionality that is not tested:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-caution --\x3e\n\u26a0 If the accordion panel associated with an accordion header is visible, the header button element\nhas aria-expanded set to true. If the panel is not visible, aria-expanded is set to false.\n")),(0,o.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,o.kt)("h4",{id:"1-the-title-of-each-accordion-header-is-contained-in-an-element-with-role-of-button"},"1. The title of each accordion header is contained in an element with ",(0,o.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,o.kt)("inlineCode",{parentName:"h4"},"button")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 role is set correctly --\x3e\n<div class="accordion">\n  <h3>\n    \x3c!-- success-next-line --\x3e\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!-- \u274c role of button is not set --\x3e\n<div class="accordion">\n  <h3>\n    \x3c!-- error-next-line --\x3e\n    <span aria-controls="panel" aria-expanded="false">Accordion Header 1</span>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("h4",{id:"2-each-accordion-header-button-is-wrapped-in-an-element-with-role-heading-that-has-a-value-set-for-aria-level-that-is-appropriate-for-the-information-architecture-of-the-page"},"2. Each accordion header button is wrapped in an element with role heading that has a value set for ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-level")," that is appropriate for the information architecture of the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 button is wrapped in element with implicit `aria-level` and `role` --\x3e\n<div>\n  \x3c!-- success-next-line --\x3e\n  <h3>\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!-- \u2705 button is wrapped in element with `aria-level` and `role` set --\x3e\n<div>\n  \x3c!-- success-next-line --\x3e\n  <div aria-level="3" role="heading">\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </div>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!--  \u274c button is not wrapped in heading --\x3e\n<div>\n  \x3c!-- error-next-line --\x3e\n  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("h4",{id:"3-the-accordion-header-button-element-has-aria-controls-set-to-the-id-of-the-element-containing-the-accordion-panel-content"},"3. The accordion header button element has ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-controls")," set to the ID of the element containing the accordion panel content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--  \u2705 element has aria-controls --\x3e\n<div>\n  <h3>\n    \x3c!-- success-next-line --\x3e\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!--  \u274c element does not have aria-controls --\x3e\n<div>\n  <h3>\n    \x3c!-- error-next-line --\x3e\n    <button aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("admonition",{title:"Not tested",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u270b Remember, this project ",(0,o.kt)("em",{parentName:"p"},"does not guarantee what you build is accessible.")),(0,o.kt)("h4",{parentName:"admonition",id:"4-if-the-accordion-panel-associated-with-an-accordion-header-is-visible-the-header-button-element-has-aria-expanded-set-to-true-if-the-panel-is-not-visible-aria-expanded-is-set-to-false"},"4. If the accordion panel associated with an accordion header is visible, the header button element has ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-expanded")," set to ",(0,o.kt)("inlineCode",{parentName:"h4"},"true"),". If the panel is not visible, ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-expanded")," is set to ",(0,o.kt)("inlineCode",{parentName:"h4"},"false"),"."),(0,o.kt)("p",{parentName:"admonition"},"There are multiple ways to implement accordion panel visibility, so there is no single method to\ntest that the panel visibility corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-expanded")," value."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 button has aria-expanded prop according to panel visibility --\x3e\n<div>\n  <h3><button aria-controls="panel" aria-expanded="true">Accordion Header 1</button></h3>\n  <div style="display: block">Accordion Panel 1</div>\n  <h3><button aria-controls="panel" aria-expanded="false">Accordion Header 2</button></h3>\n  <div style="display: none">Accordion Panel 2</div>\n</div>\n\n\x3c!-- \u274c button and panel are not expanded in sync --\x3e\n<div>\n  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n  <button aria-controls="panel" aria-expanded="true">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')))),(0,o.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,o.kt)("h4",{id:"1-the-accordion-header-button-element-can-receive-focus"},"1. The accordion header button element can receive focus"),(0,o.kt)("h4",{id:"2-when-element-has-focus-space-or-enter-activates-it"},"2. When element has focus, ",(0,o.kt)("inlineCode",{parentName:"h4"},"space")," or ",(0,o.kt)("inlineCode",{parentName:"h4"},"enter")," activates it."))}v.isMDXComponent=!0}}]);