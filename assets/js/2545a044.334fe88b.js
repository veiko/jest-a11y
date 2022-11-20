"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[133],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>v});var l=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=u(e.components);return l.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(t),v=r,p=m["".concat(o,".").concat(v)]||m[v]||c[v]||n;return t?l.createElement(p,i(i({ref:a},d),{},{components:t})):l.createElement(p,i({ref:a},d))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>i});var l=t(7294),r=t(6010);const n="tabItem_Ymn6";function i(e){var a=e.children,t=e.hidden,i=e.className;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>v});var l=t(7462),r=t(7294),n=t(6010),i=t(2389),s=t(7392),o=t(7094),u=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var a,t,i=e.lazy,m=e.block,v=e.defaultValue,p=e.values,h=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),k=(0,s.l)(g,(function(e,a){return e.value===a.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===v?v:null!=(a=null!=v?v:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:f[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),x=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,r.useState)(w),E=T[0],A=T[1],O=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=x[h];null!=S&&S!==E&&g.some((function(e){return e.value===S}))&&A(S)}var C=function(e){var a=e.currentTarget,t=O.indexOf(a),l=g[t].value;l!==E&&(j(a),A(l),null!=h&&N(h,String(l)))},I=function(e){var a,t=null;switch(e.key){case"ArrowRight":var l,r=O.indexOf(e.currentTarget)+1;t=null!=(l=O[r])?l:O[0];break;case"ArrowLeft":var n,i=O.indexOf(e.currentTarget)-1;t=null!=(n=O[i])?n:O[O.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,key:a,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},i,{className:(0,n.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===a})}),null!=t?t:a)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})}))))}function v(e){var a=(0,i.Z)();return r.createElement(m,(0,l.Z)({key:String(a)},e))}},9103:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>v,toc:()=>h});var l=t(7462),r=t(3366),n=t(7294),i=t(3905),s=t(5488),o=t(5162),u=function(e){var a=e.list;return n.createElement("div",{className:"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",style:{"--prism-color":"#F8F8F2","--prism-background-color":"#282A36"}},n.createElement("pre",{className:"prism-code language-html codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar"},n.createElement("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"},a.map((function(e){return n.createElement("span",{className:"token-line code-block-test-pass",style:{color:"rgb(248, 248, 242)"}},n.createElement("span",{className:"token plain"},"\u2713 ",e),n.createElement("br",null))})))))},d=["components"],c={id:"slider",title:"toBeAccessibleSlider()"},m=void 0,v={unversionedId:"matchers/slider",id:"matchers/slider",title:"toBeAccessibleSlider()",description:"A slider is an input where the user selects a value from within a given range.",source:"@site/docs/matchers/to-be-accessible-slider.md",sourceDirName:"matchers",slug:"/matchers/slider",permalink:"/jest-a11y/matchers/slider",draft:!1,tags:[],version:"current",frontMatter:{id:"slider",title:"toBeAccessibleSlider()"},sidebar:"sidebar",previous:{title:"toBeAccessibleRadioGroup()",permalink:"/jest-a11y/matchers/radiogroup"},next:{title:"toBeAccessibleSpinButton()",permalink:"/jest-a11y/matchers/spinbutton"}},p={},h=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"1. The widget has a <code>role</code> of <code>slider</code>.",id:"1-the-widget-has-a-role-of-slider",level:4},{value:"2. The widget has an accessible label.",id:"2-the-widget-has-an-accessible-label",level:4},{value:"3. The widget has valid <code>aria-valuemax</code>, <code>aria-valuemin</code> and <code>aria-valuenow</code> values",id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values",level:4},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3}],b={toc:h};function f(e){var a=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,l.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"intro-text"},"A ",(0,i.kt)("strong",null,"slider")," is an input where the user selects a value from within a given range."),(0,i.kt)("p",null,"Sliders typically have a slider thumb that can be moved along a bar or track to change the value of the slider."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider/"},"WAI Slider Pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/slider/slider-color-viewer.html"},"Slider Example"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{label:"Vanilla JS",value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'test(\'slider\', () => {\n  document.body.innerHTML = \'<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" id="slider" role="slider" />\'\n\n  expect(document.getElementById(\'slider\')).toBeAccessibleSlider()\n})\n'))),(0,i.kt)(o.Z,{default:!0,label:"React + Testing Library",value:"rtl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { render, screen } from \'@testing-library/react\'\n\ntest(\'slider\', () => {\n  render(<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" data-testid="slider" role="slider" />)\n\n  expect(screen.getByTestId(\'slider\')).toBeAccessibleSlider()\n})\n')))),(0,i.kt)("h2",{id:"test-summary"},"Test Summary"),(0,i.kt)("p",null,"The matcher tests the following:"),(0,i.kt)(u,{list:["element has role slider","element has accessible label","element has aria-valuemin set to a decimal value less than aria-valuemax","element has valid aria-valuenow","element increases aria-valuenow when {arrowright} is pressed","element decreases aria-valuenow when {arrowleft} is pressed","home sets the value of the slider to the first allowed value in its range","end sets the value of the slider to the last allowed value in its range"],mdxType:"TestSummary"}),(0,i.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,i.kt)("h4",{id:"1-the-widget-has-a-role-of-slider"},"1. The widget has a ",(0,i.kt)("inlineCode",{parentName:"h4"},"role")," of ",(0,i.kt)("inlineCode",{parentName:"h4"},"slider"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has role slider --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />\n\n\x3c!-- \u274c element is missing role slider --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" />\n')),(0,i.kt)("h4",{id:"2-the-widget-has-an-accessible-label"},"2. The widget has an accessible label."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has accessible label --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />\n\n\x3c!-- \u2705 element has accessible label --\x3e\n<div id="slider-label">Brightness</div>\n<div aria-labelledby="slider-label" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />\n\n\x3c!-- \u274c element is missing accessible label --\x3e\n<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" />\n')),(0,i.kt)("h4",{id:"3-the-widget-has-valid-aria-valuemax-aria-valuemin-and-aria-valuenow-values"},"3. The widget has valid ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemax"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuemin")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"aria-valuenow")," values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u2705 element has role slider --\x3e\n<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />\n\n\x3c!-- \u274c element is missing aria-valuemax, aria-valuemin or aria-valuenow properties --\x3e\n<div aria-label="brightness" role="slider" />\n\n\x3c!-- \u274c element has aria-valuemin greater than aria-valuemax --\x3e\n<div aria-label="brightness" aria-valuemin="100" aria-valuemax="0" role="slider" />\n\n\x3c!-- \u274c element has aria-valuenow set to decimal number outside of range --\x3e\n<div aria-label="brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="200" role="slider" />\n')),(0,i.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Right Arrow")," and ",(0,i.kt)("kbd",null,"Up Arrow")," increase the value of the slider by one step"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Left Arrow")," and ",(0,i.kt)("kbd",null,"Down Arrow")," decrease the value of the slider by one step"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Home")," sets the value of the slider to the first allowed value in its range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"End")," sets the value of the slider to the last allowed value in its range")))}f.isMDXComponent=!0}}]);