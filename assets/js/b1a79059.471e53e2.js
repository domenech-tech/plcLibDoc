"use strict";(self.webpackChunkplc_lib_docusaurus_git=self.webpackChunkplc_lib_docusaurus_git||[]).push([[341],{6302:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(6687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(4227),o=(t(6687),t(6302));const i={},c=void 0,a={unversionedId:"Resources/Function Template",id:"Resources/Function Template",title:"Function Template",description:"Siemens",source:"@site/docs/Resources/Function Template.md",sourceDirName:"Resources",slug:"/Resources/Function Template",permalink:"/plcLibDoc/Resources/Function Template",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Resources/Function Template.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"valve",permalink:"/plcLibDoc/Devices/valve"}},s={},l=[{value:"Siemens",id:"siemens",level:2},{value:"Omron",id:"omron",level:2},{value:"Codesys",id:"codesys",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"siemens"},"Siemens"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//=============================================================================\n// Library/Family: ${family}                                                         \n// Title: ${Title}                                                                   \n// Description: ${shortDescription}||${descriptionLink}                              \n// Author: ${authorEmail}                                                            \n// Target System: ${targetSystem}                                                    \n// Engineering: ${engineeringSystem}                                                 \n// Dependecies: ${dependencies}                                                      \n// Requirements: ${requirements}                                                     \n// References: ${references}                                                         \n// Change log:                                                               \n// Version    | Date       | Author     | Description                        \n//  # . # . #   yyyy-mm-dd  ${author}     ${Description}                       \n// ============================================================================ \n\n")),(0,o.kt)("h2",{id:"omron"},"Omron"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(*===========================================================================*)\n(* Library/Family: ${family}                                                 *)\n(* Title: ${Title}                                                           *)\n(* Description: ${shortDescription}||${descriptionLink}                      *)\n(* Author: ${authorEmail}                                                    *)\n(* Target System: ${targetSystem}                                            *)\n(* Engineering: ${engineeringSystem}                                         *)\n(* Dependecies: ${dependencies}                                              *)\n(* Requirements: ${requirements}                                             *)\n(* References: ${references}                                                 *)\n(*---------------------------------------------------------------------------*)\n(* Change log:                                                               *)\n(* Version    | Date       | Author     | Description                        *)\n(*  # . # . #   yyyy-mm-dd  ${author}     ${Description}                     *)\n(*===========================================================================*)\n")),(0,o.kt)("h2",{id:"codesys"},"Codesys"))}m.isMDXComponent=!0}}]);