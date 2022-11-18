"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6893:(e,t,n)=>{n.d(t,{S:()=>r});var a=n(7294),r=function(e){var t=e.children;return a.createElement("div",{className:"example"},t)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),c=n(7094),d=n(2466);const s="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,h=e.defaultValue,m=e.values,v=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(x,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==g&&!x.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),w=k.tabGroupChoices,A=k.setTabGroupChoices,N=(0,r.useState)(g),E=N[0],T=N[1],I=[],P=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=w[v];null!=O&&O!==E&&x.some((function(e){return e.value===O}))&&T(O)}var j=function(e){var t=e.currentTarget,n=I.indexOf(t),a=x[n].value;a!==E&&(P(t),T(a),null!=v&&A(v,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;n=null!=(i=I[o])?i:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},x.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:C,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function h(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},1535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>y,frontMatter:()=>h,metadata:()=>v,toc:()=>f});var a=n(7462),r=n(3366),i=n(7294),o=n(3905),l=n(5488),c=n(5162),d=n(6893),s=function(e){var t=e.btnId,n=e.children,a=e.id,r=e.title,o=i.useState(!1),l=o[0],c=o[1];return i.createElement(i.Fragment,null,i.createElement("h3",null,i.createElement("button",{"aria-expanded":l,"aria-controls":a,id:t,onClick:function(){return c(!l)}},i.createElement("span",null,r))),i.createElement("div",{"aria-labelledby":t,className:"panel "+(l?"open":""),id:a,role:"region"},i.createElement("div",{className:"panel-content"},n)))},u=function(e){var t=e.id;return i.createElement("div",{className:"accordion","data-testid":t},i.createElement(s,{btnId:"accordion1id",id:"sect1",title:"Section 1"},"Item 1"),i.createElement(s,{btnId:"accordion1id",id:"sect1",title:"Section 2"},"Item 2"))},p=["components"],h={id:"accordion",title:"toBeAccessibleAccordion()"},m=void 0,v={unversionedId:"matchers/accordion",id:"matchers/accordion",title:"toBeAccessibleAccordion()",description:"An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.",source:"@site/docs/matchers/to-be-accessible-accordion.md",sourceDirName:"matchers",slug:"/matchers/accordion",permalink:"/jest-a11y/matchers/accordion",draft:!1,tags:[],version:"current",frontMatter:{id:"accordion",title:"toBeAccessibleAccordion()"},sidebar:"sidebar",previous:{title:"Summary",permalink:"/jest-a11y/matchers/"},next:{title:"toBeAccessibleAlertDialog()",permalink:"/jest-a11y/matchers/alertdialog"}},b={},f=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The title of each accordion header is contained in an element with <code>role</code> of <code>button</code>",id:"1-the-title-of-each-accordion-header-is-contained-in-an-element-with-role-of-button",level:4},{value:"2. Each accordion header button is wrapped in an element with role heading that has a value set for <code>aria-level</code> that is appropriate for the information architecture of the page.",id:"2-each-accordion-header-button-is-wrapped-in-an-element-with-role-heading-that-has-a-value-set-for-aria-level-that-is-appropriate-for-the-information-architecture-of-the-page",level:4},{value:"3. The accordion header button element has <code>aria-controls</code> set to the ID of the element containing the accordion panel content.",id:"3-the-accordion-header-button-element-has-aria-controls-set-to-the-id-of-the-element-containing-the-accordion-panel-content",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"1. The accordion header button element can receive focus",id:"1-the-accordion-header-button-element-can-receive-focus",level:4},{value:"2. When element has focus, <kbd>Space</kbd> or <kbd>Enter</kbd> activates it.",id:"2-when-element-has-focus-space-or-enter-activates-it",level:4},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],x={toc:f};function y(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"intro-text"},"An ",(0,o.kt)("strong",null,"accordion")," is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content."),(0,o.kt)("p",null,"The headings function as controls that enable users to reveal or hide their associated sections of content."),(0,o.kt)(d.S,{mdxType:"ExampleContainer"},(0,o.kt)(u,{mdxType:"Accordion"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"win",label:"Vanilla JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('accordion', async () => {\n  document.body.innerHTML = `\n    <div id=\"accordion\">\n      <h3>\n        <button aria-controls=\"panel\" aria-expanded=\"false\" onclick=\"this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') == 'true' ? 'false' : 'true')\">Accordion Header 1</button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>`\n\n  await expect(document.getElementById('accordion')).toBeAccessibleAccordion()\n})\n"))),(0,o.kt)(c.Z,{default:!0,label:"React + Testing Library",value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('accordion', async () => {\n  render(\n    <div data-testid=\"accordion\">\n      <h3>\n        <button\n          aria-controls=\"panel\"\n          aria-expanded=\"false\"\n          onClick={e => {\n            const self = e.target as HTMLElement\n            self.setAttribute(\n              'aria-expanded',\n              self.getAttribute('aria-expanded') == 'true' ? 'false' : 'true',\n            )\n          }}\n        >\n          Accordion Header 1\n        </button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>,\n  )\n\n  await expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()\n})\n")))),(0,o.kt)("h2",{id:"test-summary"},"Test Summary"),(0,o.kt)("p",null,"The matcher for an accordion will loop through the accordion items (",(0,o.kt)("inlineCode",{parentName:"p"},"button")," elements). For each accordion item, the matcher will test the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 element is wrapped in an element with role heading\n\x3c!-- test-pass --\x3e\n\u2713 element is wrapped in an element with aria-level\n\x3c!-- test-pass --\x3e\n\u2713 element has attribute aria-controls\n\x3c!-- test-pass --\x3e\n\u2713 aria-expanded toggled on {enter}\n\x3c!-- test-pass --\x3e\n\u2713 aria-expanded toggled on {space}\n")),(0,o.kt)("p",null,"Functionality that is not tested:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-caution --\x3e\n\u26a0 If the accordion panel associated with an accordion header is visible, the header button element has aria-expanded set to true. If the panel is not\nvisible, aria-expanded is set to false.\n")),(0,o.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,o.kt)("h4",{id:"1-the-title-of-each-accordion-header-is-contained-in-an-element-with-role-of-button"},"1. The title of each accordion header is contained in an element with ",(0,o.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,o.kt)("inlineCode",{parentName:"h4"},"button")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 role is set correctly --\x3e\n<div class="accordion">\n  <h3>\n    \x3c!-- success-next-line --\x3e\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!-- \u274c role of button is not set --\x3e\n<div class="accordion">\n  <h3>\n    \x3c!-- error-next-line --\x3e\n    <span aria-controls="panel" aria-expanded="false">Accordion Header 1</span>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("h4",{id:"2-each-accordion-header-button-is-wrapped-in-an-element-with-role-heading-that-has-a-value-set-for-aria-level-that-is-appropriate-for-the-information-architecture-of-the-page"},"2. Each accordion header button is wrapped in an element with role heading that has a value set for ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-level")," that is appropriate for the information architecture of the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 button is wrapped in element with implicit `aria-level` and `role` --\x3e\n<div>\n  \x3c!-- success-next-line --\x3e\n  <h3>\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!-- \u2705 button is wrapped in element with `aria-level` and `role` set --\x3e\n<div>\n  \x3c!-- success-next-line --\x3e\n  <div aria-level="3" role="heading">\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </div>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!--  \u274c button is not wrapped in heading --\x3e\n<div>\n  \x3c!-- error-next-line --\x3e\n  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("h4",{id:"3-the-accordion-header-button-element-has-aria-controls-set-to-the-id-of-the-element-containing-the-accordion-panel-content"},"3. The accordion header button element has ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-controls")," set to the ID of the element containing the accordion panel content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--  \u2705 element has aria-controls --\x3e\n<div>\n  <h3>\n    \x3c!-- success-next-line --\x3e\n    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n\n\x3c!--  \u274c element does not have aria-controls --\x3e\n<div>\n  <h3>\n    \x3c!-- error-next-line --\x3e\n    <button aria-expanded="false">Accordion Header 1</button>\n  </h3>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')),(0,o.kt)("admonition",{title:"Not tested",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u270b Remember, this project ",(0,o.kt)("em",{parentName:"p"},"does not guarantee what you build is accessible.")),(0,o.kt)("h4",{parentName:"admonition",id:"4-if-the-accordion-panel-associated-with-an-accordion-header-is-visible-the-header-button-element-has-aria-expanded-set-to-true-if-the-panel-is-not-visible-aria-expanded-is-set-to-false"},"4. If the accordion panel associated with an accordion header is visible, the header button element has ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-expanded")," set to ",(0,o.kt)("inlineCode",{parentName:"h4"},"true"),". If the panel is not visible, ",(0,o.kt)("inlineCode",{parentName:"h4"},"aria-expanded")," is set to ",(0,o.kt)("inlineCode",{parentName:"h4"},"false"),"."),(0,o.kt)("p",{parentName:"admonition"},"There are multiple ways to implement accordion panel visibility, so there is no single method to test that the panel visibility corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-expanded")," value."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 button has aria-expanded prop according to panel visibility --\x3e\n<div>\n  <h3><button aria-controls="panel" aria-expanded="true">Accordion Header 1</button></h3>\n  <div style="display: block">Accordion Panel 1</div>\n  <h3><button aria-controls="panel" aria-expanded="false">Accordion Header 2</button></h3>\n  <div style="display: none">Accordion Panel 2</div>\n</div>\n\n\x3c!-- \u274c button and panel are not expanded in sync --\x3e\n<div>\n  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n  <button aria-controls="panel" aria-expanded="true">Accordion Header 1</button>\n  <div id="panel">Accordion Panel 1</div>\n</div>\n')))),(0,o.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,o.kt)("h4",{id:"1-the-accordion-header-button-element-can-receive-focus"},"1. The accordion header button element can receive focus"),(0,o.kt)("h4",{id:"2-when-element-has-focus-space-or-enter-activates-it"},"2. When element has focus, ",(0,o.kt)("kbd",null,"Space")," or ",(0,o.kt)("kbd",null,"Enter")," activates it."),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"},"WAI Accordion Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html"},"Accordion Example"))))}y.isMDXComponent=!0}}]);