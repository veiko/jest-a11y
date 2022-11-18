"use strict";(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,d=u["".concat(c,".").concat(b)]||u[b]||p[b]||i;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"index",title:"Summary",sidebar_position:10},c=void 0,s={unversionedId:"matchers/index",id:"matchers/index",title:"Summary",description:"Component Matchers",source:"@site/docs/matchers/index.md",sourceDirName:"matchers",slug:"/matchers/",permalink:"/jest-a11y/matchers/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"index",title:"Summary",sidebar_position:10},sidebar:"sidebar",previous:{title:"Contributing",permalink:"/jest-a11y/getting-started/contributing"},next:{title:"toBeAccessibleAccordion()",permalink:"/jest-a11y/matchers/accordion"}},m={},p=[{value:"Component Matchers",id:"component-matchers",level:4},{value:"Keyboard Functionality Matchers",id:"keyboard-functionality-matchers",level:4},{value:"Coming Soon",id:"coming-soon",level:3}],u={toc:p};function b(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"component-matchers"},"Component Matchers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/accordion"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleAccordion"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/alertdialog"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleAlertDialog"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/alert"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleAlert"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/button"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleButton"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/checkbox"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleCheckbox"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/dialog"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleDialog"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/link"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleLink"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/meter"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleMeter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/radiogroup"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeAccessibleRadioGroup")))),(0,i.kt)("h4",{id:"keyboard-functionality-matchers"},"Keyboard Functionality Matchers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/matchers/focuslock"},(0,i.kt)("inlineCode",{parentName:"a"},"toHaveFocusLock")))),(0,i.kt)("h3",{id:"coming-soon"},"Coming Soon"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleBreadcrumb"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleCarousel"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleCombobox"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleDisclosure"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleFeed"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleGrid"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleListbox"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleMenu"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleModal"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleSlider"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleSpinbutton"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleSwitch"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleTable"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleTabs"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleToolbar"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleTooltip"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleTreeView"),(0,i.kt)("li",{parentName:"ul"},"toBeAccessibleTreegrid")))}b.isMDXComponent=!0}}]);