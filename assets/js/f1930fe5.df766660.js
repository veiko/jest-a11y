"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(7462),n=r(7294),o=r(6010),i=r(2389),l=r(7392),u=r(7094),s=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,i=e.lazy,p=e.block,h=e.defaultValue,m=e.values,b=e.groupId,f=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,n.useState)(y),A=T[0],I=T[1],O=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=x[b];null!=E&&E!==A&&k.some((function(e){return e.value===E}))&&I(E)}var P=function(e){var t=e.currentTarget,r=O.indexOf(t),a=k[r].value;a!==A&&(j(t),I(a),null!=b&&N(b,String(a)))},D=function(e){var t,r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,n=O.indexOf(e.currentTarget)+1;r=null!=(a=O[n])?a:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;r=null!=(o=O[i])?o:O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,r=e.label,i=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onClick:P},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=r?r:t)}))),i?(0,n.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function h(e){var t=(0,i.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},7595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(5488),l=r(5162),u=["components"],s={id:"radiogroup",title:"toBeAccessibleRadioGroup()"},c=void 0,d={unversionedId:"matchers/radiogroup",id:"matchers/radiogroup",title:"toBeAccessibleRadioGroup()",description:"A radio group is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.",source:"@site/docs/matchers/to-be-accessible-radiogroup.md",sourceDirName:"matchers",slug:"/matchers/radiogroup",permalink:"/jest-a11y/matchers/radiogroup",draft:!1,tags:[],version:"current",frontMatter:{id:"radiogroup",title:"toBeAccessibleRadioGroup()"},sidebar:"sidebar",previous:{title:"toBeAccessibleMeter()",permalink:"/jest-a11y/matchers/meter"},next:{title:"toBeAccessibleSlider()",permalink:"/jest-a11y/matchers/slider"}},p={},h=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"Notes",id:"notes",level:5},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The container widget has a <code>role</code> of <code>radiogroup</code>.",id:"1-the-container-widget-has-a-role-of-radiogroup",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3}],m={toc:h};function b(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"intro-text"},"A ",(0,o.kt)("strong",null,"radio group")," is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/"},"WAI RadioGroup Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/radio/radio.html"},"RadioGroup Example"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'test(\'radiogroup\', () => {\n  document.body.innerHTML = `\n    <div aria-label="Delivery Method" id="radiogroup" role="radiogroup">\n      <input aria-checked="true" aria-label="Pickup" type="radio" />\n      <input aria-checked="true" aria-label="Delivery" type="radio" />\n    </div>\n  `\n\n  expect(document.getElementById(\'radiogroup\')).toBeAccessibleRadioGroup()\n})\n'))),(0,o.kt)(l.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { render, screen } from \'@testing-library/react\'\n\ntest(\'radiogroup\', () => {\n  render(\n    <div aria-label="Delivery Method" data-testid="radiogroup" role="radiogroup">\n      <input aria-checked="true" aria-label="Pickup" type="radio" />\n      <input aria-checked="true" aria-label="Delivery" type="radio" />\n    </div>,\n  )\n\n  expect(screen.getByTestId(\'radiogroup\')).toBeAccessibleRadioGroup()\n})\n')))),(0,o.kt)("h2",{id:"test-summary"},"Test Summary"),(0,o.kt)("p",null,"The matcher tests the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- test-pass --\x3e\n\u2713 container element has role radiogroup\n\x3c!-- test-pass --\x3e\n\u2713 container element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 radio button element has role radio\n\x3c!-- test-pass --\x3e\n\u2713 radio button element has accessible label\n\x3c!-- test-pass --\x3e\n\u2713 radio button element has aria-checked\n\n\x3c!-- See note below * --\x3e\n\u26a0\ufe0f (1) container element is part of tab sequence\n\x3c!-- See note below * --\x3e\n\u26a0\ufe0f (2)(3) navigates to each radio button with arrow keys and checks the next element\n")),(0,o.kt)("h5",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(1) ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-dom")," does not focus on the checked element in a radio group when the group is tabbed to, so if the focus is not set with JavaScript this test simply tests whether any of the radio button elements gains focus"),(0,o.kt)("li",{parentName:"ul"},"(2) ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-dom")," does not focus the next element in a radio group when the element is navigated to with the arrow keys, the test currently only verifies that ",(0,o.kt)("inlineCode",{parentName:"li"},'aria-checked="true"')," is set when the user navigates with the arrow keys"),(0,o.kt)("li",{parentName:"ul"},"(3) there are two different forms of arrow navigation for radio groups depending on whether the radio group is contained in a toolbar (",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/"},"more info"),"). The current test is for radio groups ",(0,o.kt)("em",{parentName:"li"},"not")," in a toolbar.")),(0,o.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,o.kt)("h4",{id:"1-the-container-widget-has-a-role-of-radiogroup"},"1. The container widget has a ",(0,o.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,o.kt)("inlineCode",{parentName:"h4"},"radiogroup"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2713 element has role radiogroup --\x3e\n<div aria-label="Delivery Method" role="radiogroup">\n  <input aria-checked="true" aria-label="Pickup" type="radio" />\n  <input aria-checked="true" aria-label="Delivery" type="radio" />\n</div>\n\n\x3c!-- \u274c element is missing role radiogroup --\x3e\n<div>\n  <input aria-checked="true" aria-label="Pickup" type="radio" />\n  <input aria-checked="true" aria-label="Delivery" type="radio" />\n</div>\n')),(0,o.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("kbd",null,"Tab")," and ",(0,o.kt)("kbd",null,"Shift")," + Tab: Move focus into and out of the radio group. When focus moves into a radio group:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a radio button is checked, focus is set on the checked button."),(0,o.kt)("li",{parentName:"ul"},"If none of the radio buttons are checked, focus is set on the first radio button in the group.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("kbd",null,"Space"),": checks the focused radio button if it is not already checked."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("kbd",null,"Right Arrow")," and ",(0,o.kt)("kbd",null,"Down Arrow"),": move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("kbd",null,"Left Arrow")," and ",(0,o.kt)("kbd",null,"Up Arrow"),": move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.")))}b.isMDXComponent=!0}}]);