/*! For license information please see 9b1a58cb.6410fce9.js.LICENSE.txt */
(self.webpackChunkjest_a11y=self.webpackChunkjest_a11y||[]).push([[803],{6377:(e,t,n)=>{"use strict";n.d(t,{S_:()=>v,Ui:()=>u});var a=n(7462),r=n(7294),i=function(e){var t=e.color,n=e.size,a=void 0===n?80:n;return r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.33408546987926 80.76119836334146",width:a,style:{color:t},height:a},r.createElement("g",{strokeLinecap:"round"},r.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},r.createElement("path",{d:"M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"})),r.createElement("g",{transform:"translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)"},r.createElement("path",{d:"M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84",stroke:"none",strokeWidth:"0",fill:"currentColor",fillRule:"evenodd"}),r.createElement("path",{d:"M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78",stroke:"currentColor",strokeWidth:"2",fill:"none"}))))},l=function(e){var t=e.color,n=e.size,a=(0,r.useContext)(u),l=a.exampleText,s=void 0===l?{text:null}:l,o=a.tooltip,c=(0,r.useState)(s.text),d=c[0],m=c[1],p=(0,r.useRef)(null),h=(0,r.useRef)(null),v=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e,t,n,a=(null==(e=v.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0,r=h.current;r&&(r.classList.add("fade-in"),null==(n=p.current)||n.classList.add("fade-in"),r.style.transform="scale(1.5)",r.style.transition="ease-out 640ms max-height",requestAnimationFrame((function(){var e;r.classList.remove("fade-in"),null==(e=p.current)||e.classList.remove("fade-in"),r.style.maxHeight=a+"px",r.style.transition="",r.style.transform=""})),m(s.text))})),o&&s.text?r.createElement("div",{className:"arrow-pointer",style:{transform:"translateY("+s.transformY+"px)"}},r.createElement("div",{className:"arrow-text",key:"my-arrow-text",ref:h},r.createElement("div",null,d)),r.createElement("div",{className:"arrow-text",ref:v,style:{visibility:"hidden"}},s.text),r.createElement("div",{className:"arrow-wrapper",ref:p},r.createElement(i,{color:t,size:n})),r.createElement("div",null)):null},s=function(e){var t=e.id,n=e.label,a=e.max,i=e.min,l=e.onChange,s=e.value;return r.createElement("div",null,n?r.createElement("div",{className:"slider-label"},r.createElement("label",{htmlFor:t},n,":"),r.createElement("div",null,s)):null,r.createElement("input",{"aria-label":"slider",className:"slider",id:t,max:a,min:i,onChange:function(e){l(parseInt(e.currentTarget.value,10))},role:"slider",style:{"--percent-value":s/a+"%"},tabIndex:0,type:"range",value:s}))},o=function(e){var t=e.label,n=e.type,a=e.value;return"slider"===n?r.createElement(s,{id:t,label:t,max:10,min:0,onChange:function(){},value:a}):r.createElement("span",null,JSON.stringify({type:n,value:a}))},c=n(6906),d=function(e){var t=e.onClick;return r.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 18 18",fill:"none"},r.createElement("path",{d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor"}),r.createElement("path",{d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",stroke:"currentColor"}),r.createElement("path",{d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",stroke:"currentColor"}))},u=r.createContext({actions:[],addControl:function(){},controls:[],getControlValue:function(){},setAccessibleLabel:function(){},setActions:function(){},setExampleText:function(){},setTooltip:function(){},tooltip:!0}),m=function(e){var t=e.children,n=(0,r.useState)([]),a=n[0],i=n[1],l=(0,r.useState)([]),s=l[0],o=l[1],c=(0,r.useState)(),d=c[0],m=(c[1],(0,r.useState)()),p=m[0],h=(m[1],(0,r.useState)(!0)),v=h[0],f=h[1],k=(0,r.useCallback)((function(e){return o((function(t){return[].concat(t,[e])}))}),[o]),g=(0,r.useCallback)((function(){}),[]);return r.createElement(u.Provider,{value:{accessibleLabel:d,actions:a,addControl:k,controls:s,exampleText:p,getControlValue:g,setAccessibleLabel:function(){},setActions:i,setExampleText:function(){},setTooltip:f,tooltip:v}},t)},p=function(){var e=r.useContext(u).controls;return r.createElement("div",{className:"example-controls"},e.map((function(e,t){return r.createElement(o,(0,a.Z)({key:t},e))})))},h=function(){var e=r.useContext(u),t=e.actions,n=e.accessibleLabel;return r.createElement("div",{className:"example-actions"},n?r.createElement("div",{style:{alignItems:"center",display:"inline-flex",gap:"4px"}},r.createElement("div",{className:"audio-btn"},r.createElement(d,{onClick:function(){var e=new SpeechSynthesisUtterance(n);speechSynthesis.speak(e)}})),r.createElement("span",null,r.createElement("strong",null,"Accessible Label: "),n)):null,t.length>0&&r.createElement("div",null,r.createElement(c.a,{items:t})))},v=function(e){var t=e.height,n=e.size,a=void 0===n?1:n,i=e.children;return r.createElement(m,null,r.createElement("div",{className:"example-wrapper"},r.createElement("div",{className:"example centered",style:{"--arrow-size":"40px","--grid-size":a+"fr",height:t}},r.createElement("div",{className:"left"}),r.createElement("div",{className:"center"},i),r.createElement("div",{className:"right"},r.createElement(l,{color:"var(--purple)",size:40})))),r.createElement(p,null),r.createElement(h,null))}},6906:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var a=n(7294),r=function(e){var t=e.items;return a.createElement("ul",{className:"list"},t.map((function(e,t){return a.createElement("li",{key:"item-"+t},a.createElement("div",{className:"li-icon"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--greySecondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.createElement("polyline",{points:"12 5 19 12 12 19"}))),a.createElement("div",null,e))})))}},4514:(e,t,n)=>{"use strict";n.d(t,{Y:()=>r});var a=n(7294),r=function(e){var t=e.addChecks,n=void 0===t||t,r=e.list,i=void 0===r?[]:r,l=e.showTotal,s=function(e){var t=0,n=0;return e.forEach((function(e){e.includes("\u2713")&&t++,(e.includes("\u2713")||e.includes("\u2715"))&&n++})),{failed:n-t,passed:t,total:n}}(i),o=s.failed,c=s.passed,d=s.total;return a.createElement("div",{className:"test-summary codeBlockContent_",style:{"--prism-color":"#F8F8F2","--prism-background-color":"#282A36"}},a.createElement("pre",{className:"prism-code language-html codeBlock_ thin-scrollbar"},a.createElement("code",{className:"codeBlockLines_"},a.createElement("ul",{style:{margin:0,listStyleType:"none",padding:0}},i.filter((function(e){return n||((t=e).includes("\u2713")||t.includes("\u2715"));var t})).map((function(e){var t,r=n?"code-block-test-pass":(t=e).includes("\u2713")?"code-block-test-pass":t.includes("\u2715")?"code-block-test-fail":"";return a.createElement("li",{className:"token-line "+r,key:e,style:{color:"rgb(248, 248, 242)"}},n?a.createElement("span",{className:"token plain"},a.createElement("i",{"aria-hidden":"true",className:"fa-solid fa-check",style:{color:"var(--green)",fontSize:"80%"}})," ",e):a.createElement("span",{className:"token plain"},e),a.createElement("br",null))}))),l&&a.createElement(a.Fragment,null,a.createElement("br",null),"\xa0 Tests:"," ",o?a.createElement(a.Fragment,null,a.createElement("strong",{className:"failed"},o," failed"),","," "):null,a.createElement("strong",null,c," passed"),", ",d," total"))))}},4968:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>F,default:()=>H,frontMatter:()=>Z,metadata:()=>R,toc:()=>W});var a,r=n(7462),i=n(3366),l=n(7294),s=n(3905),o=n(5488),c=n(5162),d=n(6377),u=n(4514),m=n(412),p=n(3618),h=n(5210);m.Z.canUseDOM&&(a=document.createElement("div"));var v=function(e){var t=e.code,n=e.matcher,r=e.title,i=(0,l.useState)(t),s=i[0],o=i[1],c=[];return a&&(a.innerHTML=s,c=n(a).message().split("\n")),l.createElement(h.nu,{code:s,language:"jsx",theme:p.Z},l.createElement("div",{className:"test-runner with-title"},r&&l.createElement("div",{className:"test-runner-title"},r),l.createElement(h.uz,{autoFocus:!1,className:"live-editor",onChange:o}),l.createElement(u.Y,{addChecks:!1,list:c,showTotal:!0}),l.createElement(h.IF,{className:"test-runner-error"})))},f=n(4165),k=n(531),g=n(6541),b=n(1566),w=n(213);function E(e,t){var n=void 0===t?{}:t,a=n.show,r=void 0===a?[]:a,i=n.length,l=void 0===i?60:i;return e.outerHTML.length>l?"<"+e.tagName.toLowerCase()+" "+r.map((function(t){return t+'="'+e.getAttribute(t)+'"'})).join(" ")+"...>"+e.innerHTML+"</"+e.tagName.toLowerCase()+">":e.outerHTML}var y=function(e,t){var n=void 0===t?{}:t,a=n.expected,r=n.hints,i=n.received,l=w.JP("\u2715")+" "+w.VA(e)+(null!=r&&r.length?"\n\n  "+r:"")+"\n";return(a||i)&&(l+="\n"),a&&(l+="  Expected: "+w.Xi(a)+"\n"),i&&(l+="  Received: "+w.pH(i)+"\n\n"),l},x=function(e){return w.yA("\u2713")+" "+w.VA(e)+"\n"},N=function(e,t){var n=t.element;return"\n"+(t.pass?w.yA:w.JP)("\u25cf")+" Testing: "+E(n)+"\n\n"+e},A=function(e){var t=e.element;e.message,e.userEvent;return{message:function(){return"element has attribute aria-expanded"},pass:t.hasAttribute("aria-expanded")}},C=function(e){var t=e.attribute,n=e.element,a=e.elementName,r=void 0===a?"element":a,i=e.message,l=e.value,s="",o=!0,c="function"==typeof l?l:function(e){return e===l};return n.hasAttribute(t)?l&&c(n.getAttribute(t)||"")?s+=x(r+" "+(i||"has "+t+'="'+l+'"')):l?(s+=y(r+" "+(i||"has "+t+'="'+l+'"'),{expected:"function"==typeof l?void 0:l,received:n.getAttribute(t)}),o=!1):s+=x(r+" "+(i||"has attribute "+t)):(s+=y(r+" "+(i||"has attribute "+t),{received:n}),o=!1),{message:function(){return s},pass:o}};function T(e){var t="",n=!0,a=(0,g.within)(e).queryAllByRole("button");return a.length?(a.forEach((function(a){var r="",i=!0,l=function(e){var t=e.description,n=e.element,a=e.message,r=e.test,i="",l=!0,s=function(e,t){for(var n=e;n;){if(t(n))return n;n=n.parentElement}return null}(n,r);return s?i+=x(a||"element is wrapped in an element "+t):(i+=y(a||"element is wrapped in an element "+t),l=!1),{closest:s,message:function(){return i},pass:l}}({description:"with role heading",element:a,test:function(e){return"h1h2h3h4h5h6".includes(e.tagName.toLowerCase())||"heading"===e.getAttribute("role")}});if(r+="  "+l.message(),i=!!i&&l.pass,l.closest&&!"h1h2h3h4h5h6".includes(l.closest.tagName.toLowerCase())){var s=C({attribute:"aria-level",element:l.closest,message:"is wrapped in an element with aria-level"});r+="  "+s.message(),i=!1!==i&&s.pass}else r+="  "+x("element is wrapped in an element with aria-level");var o=C({attribute:"aria-controls",element:a,message:"has attribute aria-controls",value:function(t){return!!e.querySelector("#"+function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");var t,n=String(e),a=n.length,r=-1,i="",l=n.charCodeAt(0);if(1==a&&45==l)return"\\"+n;for(;++r<a;)0!=(t=n.charCodeAt(r))?i+=t>=1&&t<=31||127==t||0==r&&t>=48&&t<=57||1==r&&t>=48&&t<=57&&45==l?"\\"+t.toString(16)+" ":t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r):i+="\ufffd";return i}(t))}});r+="  "+o.message(),i=!1!==i&&o.pass;var c,d=A({element:a,message:"aria-expanded toggled on {enter}",userEvent:(c=(0,k.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.focus(),b.ZP.keyboard("{enter}");case 2:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})});r+="  "+d.message(),i=!1!==i&&d.pass;var u,m=A({element:a,message:"aria-expanded toggled on {space}",userEvent:(u=(0,k.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.focus(),b.ZP.keyboard("{space}");case 2:case"end":return e.stop()}}),e)}))),function(){return u.apply(this,arguments)})});r+="  "+m.message(),(i=!1!==i&&m.pass)||(t+=N(r,{element:a,pass:i})),n=!1!==i&&n})),{pass:n,message:function(){return t}}):{pass:!1,message:function(){return y("No elements with role button found",{received:e})}}}var I=function(){return l.createElement(v,{className:"accordion",matcher:T,title:"Accordion",code:'<div className="accordion">\n  <h3>\n    <button aria-controls="panel-1">\n      Accordion Item 1\n    </button>\n    <div id="panel-1"></div>\n  </h3>\n</div>'})},S=["onFocus"],L=function(e){var t=e.btnId,n=e.buttonProps,a=n.onFocus,s=(0,i.Z)(n,S),o=e.children,c=e.id,u=e.title,m=l.useState(!1),p=m[0],h=m[1],v=(0,l.useContext)(d.Ui).setAccessibleLabel;return l.createElement(l.Fragment,null,l.createElement("h3",null,l.createElement("button",(0,r.Z)({"aria-expanded":p,"aria-controls":c,id:t,onClick:function(){return h(!p)},onFocus:function(e){v(u),a&&a(e)}},s),l.createElement("span",null,u))),l.createElement("div",{"aria-hidden":!p,"aria-labelledby":t,className:"panel "+(p?"open":""),id:c,role:"region"},l.createElement("div",{className:"panel-content"},o)))},M=function(e){var t=e.id,n=(0,l.useContext)(d.Ui),a=n.setAccessibleLabel,r=n.setExampleText,i=n.setTooltip;return(0,l.useEffect)((function(){r(l.createElement(l.Fragment,null,l.createElement("kbd",null,"Tab")," should focus the first accordion item"),{transformY:-45})}),[]),l.createElement("div",{className:"accordion","data-testid":t},l.createElement(L,{btnId:"accordion1id",id:"sect1",buttonProps:{onFocus:function(){return r(l.createElement(l.Fragment,null,l.createElement("kbd",null,"Tab")," to navigate to the next item"))}},title:"Section 1"},"Item 1"),l.createElement(L,{btnId:"accordion1id",id:"sect1",buttonProps:{onFocus:function(){return r(l.createElement(l.Fragment,null,l.createElement("kbd",null,"Enter")," or ",l.createElement("kbd",null,"Space")," will expand the accordion panel. Make this very long so that it wraps even more."),{transformY:0})},onKeyDown:function(e){"Tab"===e.key&&(a(void 0),i(!1))}},title:"Section 2"},"Item 2"))},B=["components"],Z={id:"accordion",title:"toBeAccessibleAccordion()"},F=void 0,R={unversionedId:"matchers/accordion",id:"matchers/accordion",title:"toBeAccessibleAccordion()",description:"An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.",source:"@site/docs/matchers/to-be-accessible-accordion.md",sourceDirName:"matchers",slug:"/matchers/accordion",permalink:"/jest-a11y/matchers/accordion",draft:!1,tags:[],version:"current",frontMatter:{id:"accordion",title:"toBeAccessibleAccordion()"},sidebar:"sidebar",previous:{title:"Summary",permalink:"/jest-a11y/matchers/"},next:{title:"toBeAccessibleAlertDialog()",permalink:"/jest-a11y/matchers/alertdialog"}},P={},W=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Test Summary",id:"test-summary",level:2},{value:"Known Limitations",id:"known-limitations",level:4},{value:"WAI-ARIA Roles, States, and Properties",id:"wai-aria-roles-states-and-properties",level:3},{value:"Keyboard Interaction",id:"keyboard-interaction",level:3},{value:"Playground",id:"playground",level:2},{value:"External Resources",id:"external-resources",level:2},{value:"Web Accessibility Initiative",id:"web-accessibility-initiative",level:4}],j={toc:W};function H(e){var t=e.components,n=(0,i.Z)(e,B);return(0,s.kt)("wrapper",(0,r.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"intro-text"},"An ",(0,s.kt)("strong",null,"accordion")," is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content."),(0,s.kt)("p",null,"The headings function as controls that enable users to reveal or hide their associated sections of content."),(0,s.kt)(d.S_,{height:"340px",mdxType:"ExampleContainer"},(0,s.kt)(M,{mdxType:"Accordion"})),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeAccessibleAccordion")," matcher should be called on the HTML element wrapped around the interactive headings and their content. It will find each accordion header item and verify that it has ",(0,s.kt)("inlineCode",{parentName:"p"},'role="button"')," and is wrapped in a heading element."),(0,s.kt)("h3",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,"To use the matcher pass a valid HTML element to the ",(0,s.kt)("inlineCode",{parentName:"p"},"expect")," function and verify its DOM output and keyboard interactions with ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeAccessibleAccordion()"),"."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"js",label:"JS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"test('accordion', () => {\n  document.body.innerHTML = `\n    <div id=\"accordion\">\n      <h3>\n        <button ...>\n          Item 1\n        </button>\n      </h3>\n      <div id=\"panel\">Accordion Panel 1</div>\n    </div>`\n\n  // highlight-next-line\n  expect(document.getElementById('accordion')).toBeAccessibleAccordion()\n})\n"))),(0,s.kt)(c.Z,{default:!0,label:"React",value:"react",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react'\n\ntest('accordion', () => {\n  render(<Accordion id=\"accordion\">...</Accordion>)\n\n  // highlight-next-line\n  expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()\n})\n")))),(0,s.kt)("h2",{id:"test-summary"},"Test Summary"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeAccessibleAccordion")," matcher will loop through the accordion items and test the following for each:"),(0,s.kt)(u.Y,{list:["element is wrapped in an element with role heading","element is wrapped in an element with aria-level","element has attribute aria-controls","aria-expanded toggled on {enter}","aria-expanded toggled on {space}"],mdxType:"TestSummary"}),(0,s.kt)("h4",{id:"known-limitations"},"Known Limitations"),(0,s.kt)("p",null,"There are many ways in which an element can be hidden in the UI. Because of this, there is no consistent way for us to test whether the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"aria-expanded")," tag is in sync with the visibility of its content panel."),(0,s.kt)("admonition",{title:"Not tested",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If the accordion panel associated with an accordion header is visible, the header button element has ",(0,s.kt)("inlineCode",{parentName:"p"},'aria-expanded="true"'),". If the panel is not visible, ",(0,s.kt)("inlineCode",{parentName:"p"},"aria-expanded")," is set to false.")),(0,s.kt)("h3",{id:"wai-aria-roles-states-and-properties"},"WAI-ARIA Roles, States, and Properties"),(0,s.kt)("p",null,"Each accordion item will be composed of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("span",{className:"handwritten"},"heading")," element."),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("span",{className:"handwritten"},"button")," element."),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("span",{className:"handwritten"},"content")," element.")),(0,s.kt)("p",null,"The elements will be checked for the following when passed through the matcher:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The title of each accordion item is contained in a ",(0,s.kt)("span",{className:"handwritten"},"button")," element."),(0,s.kt)("li",{parentName:"ul"},"Each ",(0,s.kt)("span",{className:"handwritten"},"button")," is wrapped in a ",(0,s.kt)("span",{className:"handwritten"},"heading")," that has a value set for ",(0,s.kt)("code",null,"aria-level")," that is appropriate for the information architecture of the page"),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("span",{className:"handwritten"},"button")," has ",(0,s.kt)("code",null,"aria-controls")," set to the ID of the ",(0,s.kt)("span",{className:"handwritten"},"content")," element."),(0,s.kt)("li",{parentName:"ul"},"If the ",(0,s.kt)("span",{className:"handwritten"},"content")," associated with an accordion item is visible, the ",(0,s.kt)("span",{className:"handwritten"},"button")," element has ",(0,s.kt)("code",null,'aria-expanded="true"'),". If the panel is not visible, ",(0,s.kt)("code",null,'aria-expanded="false"'),".")),(0,s.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,s.kt)("p",null,"Each ",(0,s.kt)("span",{className:"handwritten"},"button")," element in an accordion should be part of the tab sequence and can be activated with the keyboard to show or hide its contents."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("span",{className:"handwritten"},"button")," can receive focus."),(0,s.kt)("li",{parentName:"ul"},"When the ",(0,s.kt)("span",{className:"handwritten"},"button")," has focus, ",(0,s.kt)("kbd",null,"Space")," or ",(0,s.kt)("kbd",null,"Enter")," toggles ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-expanded")," on the ",(0,s.kt)("span",{className:"handwritten"},"button")," and the visibility of the ",(0,s.kt)("span",{className:"handwritten"},"content"),"."),(0,s.kt)("li",{parentName:"ul"},"If the ",(0,s.kt)("span",{className:"handwritten"},"content")," is visible, and the user presses ",(0,s.kt)("kbd",null,"Tab"),", focus will move to the first tabbable element within the ",(0,s.kt)("span",{className:"handwritten"},"content"),".")),(0,s.kt)("h2",{id:"playground"},"Playground"),(0,s.kt)("p",null,"Test out the DOM structure of an accordion element here:"),(0,s.kt)("admonition",{title:"Note",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This Playground does not test any keyboard interactions")),(0,s.kt)(I,{mdxType:"AccordionTestRunner"}),(0,s.kt)("h2",{id:"external-resources"},"External Resources"),(0,s.kt)("h4",{id:"web-accessibility-initiative"},"Web Accessibility Initiative"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"},"WAI Accordion Pattern")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html"},"Accordion Example"))))}H.isMDXComponent=!0},4654:()=>{}}]);