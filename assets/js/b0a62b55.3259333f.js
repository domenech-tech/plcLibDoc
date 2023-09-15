"use strict";(self.webpackChunkplc_lib_docusaurus_git=self.webpackChunkplc_lib_docusaurus_git||[]).push([[549],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return t?r.createElement(v,a(a({ref:n},d),{},{components:t})):r.createElement(v,a({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const c={},a=void 0,i={unversionedId:"Devices/valve",id:"Devices/valve",title:"valve",description:"Universal code",source:"@site/docs/Devices/valve.md",sourceDirName:"Devices",slug:"/Devices/valve",permalink:"/plcLibDoc/docs/Devices/valve",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Devices/valve.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"setMode",permalink:"/plcLibDoc/docs/Common/setMode"},next:{title:"Function Template",permalink:"/plcLibDoc/docs/Resources/Function Template"}},s={},l=[{value:"Universal code",id:"universal-code",level:2},{value:"Siemens code",id:"siemens-code",level:2},{value:"Omron code",id:"omron-code",level:2},{value:"Codesys code",id:"codesys-code",level:2}],d={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"universal-code"},"Universal code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Pascal"},"FUNCTION_BLOCK Valve\nVAR_INPUT\n    cmd : BOOLEAN := FALSE; // Command open\n    iLock : BOOLEAN := TRUE; // Interlock\n    fbkOpn : BOOLEAN := FALSE; // Feedback open\n    fbkCls: BOOLEAN := FALSE; // Feedback close\nEND_VAR;\n\nVAR_OUTPUT \n    Q : BOOLEAN := FALSE; // Command\n    isCls : BOOLEAN := FALSE; // is closed\n    isOpn : BOOLEAN := FALSE; // is opened\n    isUndf : BOOLEAN; // Undefined\n    isLck : BOOLEAN; // is interlocked\n    msg : WORD := 16#0000; // message word\nEND_VAR;\n\nBEGIN\n    Q := cmd and not iLock;\n    // State\n    isCls := fbkClose AND (NOT fbkOpen);\n    isOpn := fbk\n    isUndf := (NOT fbkClose) AND (NOT fbkOpen);\n    //Message\n    msg.%X0 := isUndef;\nEND;\n")),(0,o.kt)("h2",{id:"siemens-code"},"Siemens code"),(0,o.kt)("h2",{id:"omron-code"},"Omron code"),(0,o.kt)("h2",{id:"codesys-code"},"Codesys code"))}u.isMDXComponent=!0}}]);