"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,u=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return a?n.createElement(u,o(o({ref:t},h),{},{components:a})):n.createElement(u,o({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>b});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),o=["components"],l={id:"checkbox",title:"toBeAccessibleCheckbox()"},i=void 0,s={unversionedId:"matchers/checkbox",id:"matchers/checkbox",title:"toBeAccessibleCheckbox()",description:"There are two types of checkbox widgets:",source:"@site/docs/matchers/to-be-accessible-checkbox.md",sourceDirName:"matchers",slug:"/matchers/checkbox",permalink:"/jest-a11y/matchers/checkbox",draft:!1,tags:[],version:"current",frontMatter:{id:"checkbox",title:"toBeAccessibleCheckbox()"},sidebar:"sidebar",previous:{title:"toBeAccessibleButton()",permalink:"/jest-a11y/matchers/button"},next:{title:"toBeAccessibleDialog()",permalink:"/jest-a11y/matchers/dialog"}},h={},b=[{value:"Other Resources",id:"other-resources",level:4},{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The checkbox has <code>role</code> of <code>checkbox</code>.",id:"1-the-checkbox-has-role-of-checkbox",level:4},{value:"2. The checkbox has an accessible label.",id:"2-the-checkbox-has-an-accessible-label",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"1. When the checkbox has focus, pressing the <code>space</code> key changes the state of the checkbox.",id:"1-when-the-checkbox-has-focus-pressing-the-space-key-changes-the-state-of-the-checkbox",level:4}],p={toc:b};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"There are two types of ",(0,c.kt)("inlineCode",{parentName:"p"},"checkbox")," widgets:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Dual-state:")," The most common type of checkbox, it allows the user to toggle between two choices\n-- checked and not checked."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Tri-state:")," This type of checkbox supports an additional third state known as partially\nchecked.")),(0,c.kt)("h4",{id:"other-resources"},"Other Resources"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/"},"WAI Checkbox Pattern")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html"},"Checkbox Pattern Examples"))),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("h3",{id:"syntax"},"Syntax"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import { screen } from '@testing-library/dom'\n\ntest('button', () => {\n  document.body.innerHTML = '<input aria-label=\"Remind me\" data-testid=\"chbx\" type=\"checkbox\" />'\n\n  expect(screen.getByTestId('chbx')).toBeAccessibleCheckbox()\n})\n")),(0,c.kt)("h2",{id:"test-summary"},"Test Summary"),(0,c.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,c.kt)("h4",{id:"1-the-checkbox-has-role-of-checkbox"},"1. The checkbox has ",(0,c.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,c.kt)("inlineCode",{parentName:"h4"},"checkbox"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 PASS - role is implicit --\x3e\n<input type="checkbox" />\n\n\x3c!-- \u2705 PASS - role is set with attribute --\x3e\n<div role="checkbox">\u2714</div>\n\n\x3c!-- \u274c FAIL - role is not set or implicit --\x3e\n<span>\u2714</span>\n')),(0,c.kt)("h4",{id:"2-the-checkbox-has-an-accessible-label"},"2. The checkbox has an accessible label."),(0,c.kt)("p",null,"The checkbox has an accessible label provided by one of the following:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Visible text content contained within the element with role checkbox."),(0,c.kt)("li",{parentName:"ul"},"A visible label referenced by the value of ",(0,c.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," set on the element with role\ncheckbox."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"aria-label")," set on the element with role checkbox.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 PASS - accessible label is contained within --\x3e\n<div role="checkbox">Remind me</div>\n\n\x3c!-- \u2705 PASS - accessible label is referenced with aria-labelledby --\x3e\n<body>\n  <label id="the-label">Remind me</label>\n  <input aria-labelledby="the-label" type="checkbox" />\n</body>\n\n\x3c!-- \u2705 PASS - accessible label is set with aria-label --\x3e\n<input aria-label="Remind me" type="checkbox" />\n\n\x3c!-- \u274c FAIL - accessible label is not set or implicit --\x3e\n<div><input type="checkbox" /> Remind me</div>\n')),(0,c.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,c.kt)("h4",{id:"1-when-the-checkbox-has-focus-pressing-the-space-key-changes-the-state-of-the-checkbox"},"1. When the checkbox has focus, pressing the ",(0,c.kt)("inlineCode",{parentName:"h4"},"space")," key changes the state of the checkbox."))}d.isMDXComponent=!0}}]);