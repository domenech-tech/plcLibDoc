"use strict";(self.webpackChunkplc_lib_docusaurus_git=self.webpackChunkplc_lib_docusaurus_git||[]).push([[525],{6302:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>A});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,A=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return n?r.createElement(A,s(s({ref:t},d),{},{components:n})):r.createElement(A,s({ref:t},d))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(4227),a=(n(6687),n(6302));const l={},s=void 0,o={unversionedId:"API/API_parseReq",id:"API/API_parseReq",title:"API_parseReq",description:"Description",source:"@site/docs/API/API_parseReq.md",sourceDirName:"API",slug:"/API/API_parseReq",permalink:"/plcLibDoc/API/API_parseReq",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/API_parseReq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/plcLibDoc/"},next:{title:"Abbreviations",permalink:"/plcLibDoc/Appendix/Abbreviations"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Universal code",id:"universal-code",level:2},{value:"Siemens code",id:"siemens-code",level:2},{value:"Omron code",id:"omron-code",level:2},{value:"Codesys code",id:"codesys-code",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This block parse API-requests to PLC commands. "),(0,a.kt)("p",null,"Accepted API request commands: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"API Req"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"setAuto"),(0,a.kt)("td",{parentName:"tr",align:"center"},"01"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Set device to automatic mode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"setMan"),(0,a.kt)("td",{parentName:"tr",align:"center"},"02"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Set device to manual mode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"reset"),(0,a.kt)("td",{parentName:"tr",align:"center"},"03"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Reset alarms")))),(0,a.kt)("h2",{id:"universal-code"},"Universal code"),(0,a.kt)("h2",{id:"siemens-code"},"Siemens code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FUNCTION_BLOCK \"parseAPIRequest\"\nTITLE = API Interface\n{ S7_Optimized_Access := 'TRUE' }\nAUTHOR : JDF\nFAMILY : API\nVERSION : 0.1\n//Interface with external operations for common elements\n   VAR_OUTPUT \n      aut { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;\n      man { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;\n      rst { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;\n      run { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;\n      stop { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;\n      lastCmdDesc { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : String[4];\n      lastCmdTime {InstructionName := 'DTL'; LibVersion := '1.0'; ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : DTL;\n   END_VAR\n\n   VAR_IN_OUT \n      apiCmd { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Word;   // API request command\n   END_VAR\n\n   VAR_TEMP \n      tmpError : Bool;\n   END_VAR\n\n   VAR CONSTANT \n      API_CMD_NOP : Word := 16#0;\n      API_CMD_AUT : Word := 16#1;\n      API_CMD_MAN : Word := 16#2;\n      API_CMD_RUN : Word := 16#3;\n      API_CMD_STOP : Word := 16#4;\n      API_CMD_RST : Word := 16#5;\n      API_CMD_NOTVALID : Word := 16#6;\n   END_VAR\n\n\nBEGIN\n    REGION Formal parameters\n      #aut := (#apiCmd = #API_CMD_AUT);\n      #man := (#apiCmd = #API_CMD_MAN);\n      #run := (#apiCmd = #API_CMD_RUN);\n      #stop := (#apiCmd = #API_CMD_STOP);\n      #rst := (#apiCmd = #API_CMD_RST);\n      // Save last API command (as string[4]) and UTC time\n      IF (#apiCmd > #API_CMD_NOP) THEN\n        CASE (#apiCmd) OF\n          #API_CMD_AUT:\n            #lastCmdDesc := 'aut';\n          #API_CMD_MAN:\n            #lastCmdDesc := 'man';\n          #API_CMD_NOP:\n            #lastCmdDesc := 'nop';\n          #API_CMD_NOTVALID:\n            #lastCmdDesc := 'nval';\n          #API_CMD_RST:\n            #lastCmdDesc := 'rst';\n          #API_CMD_RUN:\n            #lastCmdDesc := 'run';\n          #API_CMD_STOP:\n            #lastCmdDesc := 'stop';\n          ELSE\n            #lastCmdDesc := 'err';\n        END_CASE;\n        #lastCmdTime := \"ReadPlcUTC\"(err => #tmpError);\n      END_IF;\n    END_REGION\n    \n    REGION Reset Cmd \n      #apiCmd := 16#0000;\n    END_REGION\n    \nEND_FUNCTION_BLOCK\n")),(0,a.kt)("h2",{id:"omron-code"},"Omron code"),(0,a.kt)("h2",{id:"codesys-code"},"Codesys code"))}m.isMDXComponent=!0}}]);