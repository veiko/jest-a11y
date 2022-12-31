"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[354],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),p=l,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),d=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a,i=e.lazy,m=e.block,p=e.defaultValue,h=e.values,g=e.groupId,b=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,l.useState)(k),A=T[0],O=T[1],E=[],I=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=x[g];null!=j&&j!==A&&f.some((function(e){return e.value===j}))&&O(j)}var C=function(e){var t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==A&&(I(t),O(n),null!=g&&N(g,String(n)))},D=function(e){var t,a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":var n,l=E.indexOf(e.currentTarget)+1;a=null!=(n=E[l])?n:E[0];break;case"ArrowLeft":var r,i=E.indexOf(e.currentTarget)-1;a=null!=(r=E[i])?r:E[E.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onClick:C},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function p(e){var t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},3966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=a(5488),o=a(5162),s=["components"],d={id:"dialog",title:"toBeAccessibleDialog()"},c=void 0,u={unversionedId:"matchers/dialog",id:"matchers/dialog",title:"toBeAccessibleDialog()",description:"A dialog is a window overlaid on either the primary window or another dialog window.",source:"@site/docs/matchers/to-be-accessible-dialog.md",sourceDirName:"matchers",slug:"/matchers/dialog",permalink:"/jest-a11y/matchers/dialog",draft:!1,tags:[],version:"current",frontMatter:{id:"dialog",title:"toBeAccessibleDialog()"},sidebar:"sidebar",previous:{title:"toBeAccessibleCheckbox()",permalink:"/jest-a11y/matchers/checkbox"},next:{title:"toBeAccessibleLink()",permalink:"/jest-a11y/matchers/link"}},m={},p=[{value:"Related",id:"related",level:4},{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The element that serves as the dialog container has a <code>role</code> of <code>dialog</code>.",id:"1-the-element-that-serves-as-the-dialog-container-has-a-role-of-dialog",level:4},{value:"2. The element that serves as the dialog container has attribute <code>aria-modal</code> set to <code>&quot;true&quot;</code>.",id:"2-the-element-that-serves-as-the-dialog-container-has-attribute-aria-modal-set-to-true",level:4},{value:"3. The dialog has an accessible label.",id:"3-the-dialog-has-an-accessible-label",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3}],h={toc:p};function g(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"intro-text"},"A ",(0,r.kt)("strong",null,"dialog")," is a window overlaid on either the primary window or another dialog window."),(0,r.kt)("p",null,"Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window. Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close."),(0,r.kt)("p",null,"Like non-modal dialogs, modal dialogs contain their tab sequence. That is, ",(0,r.kt)("kbd",null,"Tab")," and ",(0,r.kt)("kbd",null,"Shift + Tab")," do not move focus outside the dialog. However, unlike most non-modal dialogs, modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/"},"WAI Dialog (Modal) Pattern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog.html"},"Modal Dialog Example"))),(0,r.kt)("h4",{id:"related"},"Related"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",{parentName:"p",href:"/matchers/alertdialog"},(0,r.kt)("inlineCode",{parentName:"a"},"alertdialog"))," role is a special-case dialog role designed specifically for dialogs that divert users' attention to a brief, important message.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'test(\'dialog\', () => {\n  document.body.innerHTML = \'<div aria-label="modal" aria-modal="true" id="dialog" role="dialog">\ud83d\udc4d</div>\'\n\n  expect(element.getElementById(\'dialog\')).toBeAccessibleDialog()\n})\n'))),(0,r.kt)(o.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('dialog', () => {\n  render(\n    <div data-testid=\"dialog\" role=\"dialog\">\n      Hey, listen!\n    </div>,\n  )\n\n  expect(screen.getByTestId('dialog')).toBeAccessibleDialog()\n})\n")))),(0,r.kt)("h2",{id:"test-summary"},"Test Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toBeAccessibleDialog")," matcher tests the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- test-pass --\x3e\n\u2713 dialog container element has role dialog\n\x3c!-- test-pass --\x3e\n\u2713 dialog container element has aria-modal="true"\n\x3c!-- test-pass --\x3e\n\u2713 dialog container element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 dialog container element traps focus\n')),(0,r.kt)("p",null,"Other functionality called out by WAI that is not tested:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-caution --\x3e\n\u26a0 all elements required to operate the dialog are descendants of the element that has role dialog\n\x3c!-- test-caution --\x3e\n\u26a0 when a dialog opens, focus moves to an element inside the dialog\n")),(0,r.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,r.kt)("h4",{id:"1-the-element-that-serves-as-the-dialog-container-has-a-role-of-dialog"},"1. The element that serves as the dialog container has a ",(0,r.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,r.kt)("inlineCode",{parentName:"h4"},"dialog"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 role is set with attribute --\x3e\n<div role="dialog">Hey, listen!</div>\n\n\x3c!-- \u274c role is not set or implicit --\x3e\n<span>Hey, listen!</span>\n')),(0,r.kt)("h4",{id:"2-the-element-that-serves-as-the-dialog-container-has-attribute-aria-modal-set-to-true"},"2. The element that serves as the dialog container has attribute ",(0,r.kt)("inlineCode",{parentName:"h4"},"aria-modal")," set to ",(0,r.kt)("inlineCode",{parentName:"h4"},'"true"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 attribute aria-modal is set to "true" --\x3e\n<div aria-modal="true" role="dialog">Hey, listen!</div>\n\n\x3c!-- \u274c attribute aria-modal is set to "true" --\x3e\n<span>Hey, listen!</span>\n')),(0,r.kt)("h4",{id:"3-the-dialog-has-an-accessible-label"},"3. The dialog has an accessible label."),(0,r.kt)("p",null,"The element with role ",(0,r.kt)("inlineCode",{parentName:"p"},"dialog")," has either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A value for ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," that refers to the element containing the title of the dialog if the dialog has a visible label."),(0,r.kt)("li",{parentName:"ul"},"A value for ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-label")," if the dialog does not have a visible label.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 accessible name is set by aria-labelledby --\x3e\n<div aria-labelledby="the-label" role="alertdialog">\n  <h3 id="the-label">Sorry Mario.</h3>\n  <p>But the princess is in another castle!</p>\n</div>\n\n\x3c!-- \u2713 accessible name is set by aria-label --\x3e\n<div aria-label="Sorry Mario" role="alertdialog">\n  <p>But the princess is in another castle!</p>\n</div>\n\n\x3c!-- \u274c FAIL - accessible name is not set or implicit --\x3e\n<div role="alertdialog">\n  <p>But the princess is in another castle!</p>\n</div>\n')),(0,r.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,r.kt)("p",null,"See the keyboard interaction section for the modal dialog pattern."))}g.isMDXComponent=!0}}]);