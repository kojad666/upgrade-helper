(this["webpackJsonpupgrade-helper"]=this["webpackJsonpupgrade-helper"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.57 includes 599 commits by 73 different contributors, it has improvements to Accessibility APIs, Babel 7 stable support and more.",links:[{title:"Tutorial on upgrading to React Native 0.57",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.57/"}]}}},127:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.58 is the first release of 2019, it includes work for modernizing and strengthening flow types for core components and  numerous crash fixes and resolutions for unexpected behaviors.",links:[{title:"Tutorial on upgrading to React Native 0.58",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.58/"}]}}},128:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.59 includes React Hooks, performance gains on Android and lots of cool stuff.",links:[{title:"Official blog post about the major changes on React Native 0.59",url:"https://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059"},{title:"Tutorial on upgrading to React Native 0.59",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.59/"}]}}},129:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2);t.default={usefulContent:{description:"React Native 0.60 includes Cocoapods integration by default, AndroidX support, auto-linking libraries, a brand new Start screen and more.",links:[{title:"Official blog post about the major changes on React Native 0.60",url:"https://facebook.github.io/react-native/blog/2019/07/03/version-60"},{title:"Tutorial on upgrading to React Native 0.60",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.60/"}]},comments:[{fileName:"ios/Podfile",lineNumber:4,lineChangeType:"add",content:Object(r.c)(o.Fragment,null,"All these libraries below have been removed from the Xcode project file and now live in the Podfile. Cocoapods handles the linking now. Here you can add more libraries with native modules.")},{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:9,lineChangeType:"neutral",content:Object(r.c)(o.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-support/issues/14) for an explanation and some help with upgrading this file.")}]}},130:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.61 includes Fast Refresh and more.",links:[{title:"Official blog post about the major changes on React Native 0.61",url:"https://facebook.github.io/react-native/blog/2019/09/18/version-0.61"},{title:"Tutorial on upgrading to React Native 0.61",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.61/"}]}}},131:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2);t.default={usefulContent:{description:"React Native 0.62 includes built-in integration with Flipper.",links:[{title:"Official blog post about the major changes on React Native 0.62",url:"https://reactnative.dev/blog/2020/03/26/version-0.62"},{title:"[iOS] Tutorial on upgrading Xcode-related files to React Native 0.62",url:"https://github.com/react-native-community/upgrade-helper/issues/191"}]},comments:[{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:19,lineChangeType:"add",content:Object(r.c)(o.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-support/issues/13) for an explanation and some help with upgrading this file.")}]}},172:function(e){e.exports=JSON.parse('{"a":"https://react-native-community.github.io/upgrade-helper"}')},173:function(e,t,n){e.exports=n.p+"static/media/logo.74ebf3f4.svg"},183:function(e,t,n){e.exports=n(330)},188:function(e,t,n){},225:function(e,t,n){var o={"./":65,"./0.57":126,"./0.57.js":126,"./0.58":127,"./0.58.js":127,"./0.59":128,"./0.59.js":128,"./0.60":129,"./0.60.js":129,"./0.61":130,"./0.61.js":130,"./0.62":131,"./0.62.js":131,"./__mocks__":71,"./__mocks__/":71,"./__mocks__/index":71,"./__mocks__/index.js":71,"./index":65,"./index.js":65};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=225},330:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(11),i=n.n(a),c=(n(188),n(55)),s=n(12),l=n(16),u=n(4),p=n(332),f=n(150),d=n(120),b=n(62),h=n.n(b),g=n(80),m=n(336),j=n(121),v=n(14),O=n.n(v),y=n(151),x=n.n(y),C=n(65),w="react-native-community/rn-diff-purge",V="https://raw.githubusercontent.com/".concat(w,"/master/RELEASES"),k=function(e){var t=e.fromVersion,n=e.toVersion;return"https://raw.githubusercontent.com/".concat(w,"/diffs/diffs/").concat(t,"..").concat(n,".diff")},S=function(e){var t=e.version,n=e.path;return"https://github.com/".concat(w,"/raw/release/").concat(t,"/").concat(n)},N=function(e,t){return e.replace(new RegExp("".concat(t||"RnDiffApp","/")),"")},D=function(e,t){return t?e.replace(new RegExp("RnDiffApp","g"),t).replace(new RegExp("RnDiffApp".toLowerCase(),"g"),t.toLowerCase()):e},P=function(e){var t=e.fromVersion,n=e.toVersion,o=O.a.valid(O.a.coerce(n));return C.default.filter((function(e){var n=e.version,r=O.a.coerce(n);return-1!==O.a.compare(o,r)&&![0,-1].includes(O.a.compare(r,t))}))},R=function(e){var t=e.version;return"".concat("https://github.com/react-native-community/releases/blob/master/CHANGELOG.md","#v").concat(t.replace(".",""),"0")},T="Show latest release candidates",z=n(15),A=n(333),E=n(2);var _=A.a.Option,q=Object(u.a)("div",{target:"e8azqbf0"})({name:"8atqhb",styles:"width:100%;"}),F=Object(u.a)(A.a,{target:"e8azqbf1"})({name:"8atqhb",styles:"width:100%;"}),L=function(e){var t=e.title,n=e.options,o=Object(l.a)(e,["title","options"]);return Object(E.c)(q,null,Object(E.c)("h4",null,t),Object(E.c)(F,Object(z.a)({size:"large"},o),n.map((function(e){return Object(E.c)(_,{key:e,value:e},e)}))))};var I=Object(u.a)("div",{target:"e1kwjzpc0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"}),M=Object(u.a)(L,{target:"e1kwjzpc1"})({name:"uux7qa",styles:"padding-right:5px;"}),B=Object(u.a)((function(e){var t=e.popover,n=Object(l.a)(e,["popover"]);return t?r.a.cloneElement(t,{children:Object(E.c)(L,n)}):Object(E.c)(L,n)}),{target:"e1kwjzpc2"})({name:"1sugwtq",styles:"padding-left:5px;"}),K=Object(u.a)("div",{target:"e1kwjzpc3"})({name:"1shcrr",styles:"display:flex;justify-content:center;height:auto;overflow:hidden;margin-top:25px;"}),U=function(e){var t=e.version,n=e.versionToCompare;return["prerelease","prepatch",null].includes(O.a.diff(t,n))},W=function(e){var t=e.releasedVersions,n=e.toVersion,o=e.latestVersion,r=e.showReleaseCandidates,a=null!==O.a.prerelease(n),i=null!==O.a.prerelease(o);return t.filter((function(e){return r&&function(e){var t=e.version,n=e.latestVersion;return O.a.prerelease(t)&&U({version:n,versionToCompare:t})}({version:e,latestVersion:o})||null===O.a.prerelease(e)||a&&U({version:n,versionToCompare:e})||i&&U({version:o,versionToCompare:e})}))},Y=function(e){var t=e.releasedVersions,n=e.minVersion,o=e.maxVersion,r=function(e){return O.a.valid(O.a.coerce(e.find((function(e){return!O.a.prerelease(e)&&0===O.a.patch(e)}))))}(t);return t.filter((function(e){return e.length>0&&(o&&O.a.lt(e,o)||n&&O.a.gt(e,n)&&!((t=e).includes("rc")&&O.a.valid(O.a.coerce(t))===r));var t}))},G=function(e){var t=e.releasedVersions,n=e.versionToCompare;return t.find((function(e){return O.a.lt(e,n)&&"minor"===O.a.diff(O.a.valid(O.a.coerce(e)),O.a.valid(O.a.coerce(n)))}))},H=function(e){var t=e.version,n=e.allVersions,o=e.minVersion;try{return t&&n.includes(t)&&(!o||o&&O.a.gt(t,o))}catch(r){return!1}},J=function(e){var t=e.showDiff,n=e.showReleaseCandidates,r=Object(o.useState)(!0),a=Object(s.a)(r,2),i=a[0],c=a[1],l=Object(o.useState)([]),u=Object(s.a)(l,2),p=u[0],f=u[1],d=Object(o.useState)([]),b=Object(s.a)(d,2),v=b[0],O=b[1],y=Object(o.useState)([]),C=Object(s.a)(y,2),w=C[0],k=C[1],S=Object(o.useState)(!1),N=Object(s.a)(S,2),D=N[0],P=N[1],R=Object(o.useState)(""),T=Object(s.a)(R,2),z=T[0],A=T[1],_=Object(o.useState)(""),q=Object(s.a)(_,2),F=q[0],L=q[1],U=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=function(){var e=x.a.parse(window.location.search);return{fromVersion:e.from,toVersion:e.to}}();(function(){var t=Object(g.a)(h.a.mark((function t(){var o,r,a,i,s,l,u,p,d;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(V);case 2:return o=t.sent,t.next=5,o.text();case 5:r=t.sent.split("\n"),a=H({version:e.fromVersion,allVersions:r}),i=H({version:e.toVersion,allVersions:r,minVersion:e.fromVersion}),s=r[0],l=i?e.toVersion:s,u=W({releasedVersions:r,toVersion:l,latestVersion:s,showReleaseCandidates:n}),f(u),p=a?e.fromVersion:G({releasedVersions:u,versionToCompare:l}),O(Y({releasedVersions:u,maxVersion:l})),k(Y({releasedVersions:u,minVersion:p})),A(p),L(l),c(!1),P(d=a&&i),d&&U.current.props.onClick();case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[A,L,n]),Object(o.useEffect)((function(){i||(O(Y({releasedVersions:p,maxVersion:F})),k(Y({releasedVersions:p,minVersion:z})))}),[i,p,z,F,D,n]);var J=function(e){var n=e.fromVersion,o=e.toVersion;t({fromVersion:n,toVersion:o}),function(e){var t=e.fromVersion,n=e.toVersion,o=window.location.href.replace(window.location.search,""),r="?from=".concat(t,"&to=").concat(n);window.history.replaceState(null,null,"".concat(o).concat(r))}({fromVersion:z,toVersion:F})};return Object(E.c)(o.Fragment,null,Object(E.c)(I,null,Object(E.c)(M,{title:"What's your current React Native version?",loading:i,value:z,options:v,onChange:function(e){return A(e)}}),Object(E.c)(B,{title:"To which version would you like to upgrade?",loading:i,value:F,options:w,popover:"0.60.1"===F&&Object(E.c)(m.a,{visible:!0,placement:"topLeft",content:"We recommend using the latest 0.60 patch release instead of 0.60.1."}),onChange:function(e){return L(e)}})),Object(E.c)(K,null,Object(E.c)(j.a,{ref:U,type:"primary",size:"large",onClick:function(){return J({fromVersion:z,toVersion:F})}},"Show me how to upgrade!")))},X=n(86),$=n(335),Q=n(37),Z=(n(285),n(81)),ee=n.n(Z),te=n(339),ne=n(341),oe=n(348),re=n(347),ae=n(340),ie=n(346),ce=n(345),se=n(156);var le=Object(u.a)("div",{target:"e1bx3rr90"})({name:"phu3xo",styles:"display:flex;justify-content:space-between;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;color:#24292e;line-height:32px;background-color:#fafbfc;border-bottom:1px solid #e1e4e8;border-top-left-radius:2px;border-top-right-radius:2px;padding:5px 10px;"}),ue=Object(u.a)(ne.a,{target:"e1bx3rr91"})({name:"terggw",styles:"font-size:10px;margin:0 5px;color:#f78206;"}),pe=function(e){var t=e.oldPath,n=e.newPath,o=e.type;e.appName;return"delete"===o?Object(E.c)("span",null,t):t!==n&&"add"!==o?Object(E.c)("span",null,t," ",Object(E.c)(ue,null)," ",n):Object(E.c)("span",null,n)},fe=function(e){var t=e.type,n=Object(l.a)(e,["type"]);return Object(E.c)(te.a,Object(z.a)({},n,{color:{add:"blue",modify:"green",delete:"red",rename:"orange"}[t]}),{add:"ADDED",modify:"MODIFIED",delete:"DELETED",rename:"RENAMED"}[t])},de=function(e){var t=e.visible,n=Object(l.a)(e,["visible"]);return t?Object(E.c)(te.a,Object(z.a)({},n,{color:"cyan"}),"BINARY"):null},be=Object(u.a)((function(e){var t=e.visible,n=e.version,o=e.path,r=Object(l.a)(e,["visible","version","path"]);return t?Object(E.c)(j.a,Object(z.a)({},r,{type:"ghost",shape:"circle",icon:Object(E.c)(oe.a,null),target:"_blank",href:S({version:n,path:o})})):null}),{target:"e1bx3rr92"})({name:"cnzq6",styles:"color:#24292e;font-size:12px;border-width:0;&:hover,&:focus{color:#24292e;}"}),he=Object(u.a)((function(e){var t=e.visible,n=e.version,o=e.path,r=Object(l.a)(e,["visible","version","path"]);return t?Object(E.c)(j.a,Object(z.a)({},r,{type:"link",target:"_blank",href:S({version:n,path:o})}),"View file"):null}),{target:"e1bx3rr93"})({name:"jskc3k",styles:"font-size:12px;color:#24292e;"}),ge="\n  font-size: 13px;\n  line-height: 0;\n  border-width: 0px;\n  width: 22px;\n  height: 22px;\n  margin: 5px 0;\n  border-radius: 50%;\n",me=Object(u.a)((function(e){var t=e.visible,n=e.onClick,o=Object(l.a)(e,["visible","onClick"]);return t?Object(E.c)(j.a,Object(z.a)({},o,{type:"ghost",icon:Object(E.c)(re.a,null),onClick:n})):Object(E.c)(j.a,Object(z.a)({},o,{type:"ghost",icon:Object(E.c)(ae.a,null),onClick:n}))}),{target:"e1bx3rr94"})(ge," &,&:hover,&:focus{color:",(function(e){return e.isDiffCompleted?"#52c41a":"#24292e"}),";}"),je=Object(u.a)((function(e){var t=e.oldPath,n=e.newPath,o=e.type,r=e.onCopy,a=e.copyPathPopoverContent,i=e.resetCopyPathPopoverContent,c=Object(l.a)(e,["oldPath","newPath","type","onCopy","copyPathPopoverContent","resetCopyPathPopoverContent"]);return Object(E.c)(se.CopyToClipboard,{text:"add"===o?n:t,onCopy:r},Object(E.c)(m.a,{content:a,trigger:"hover",overlayStyle:{width:"175px",textAlign:"center"}},Object(E.c)(j.a,Object(z.a)({},c,{type:"ghost",icon:Object(E.c)(ie.a,null),onMouseOver:i}))))}),{target:"e1bx3rr95"})(ge,""),ve=Object(u.a)("div",{target:"e1bx3rr96"})({name:"t4ptyc",styles:"display:inline-block;&:hover{cursor:pointer;}"}),Oe=Object(u.a)((function(e){var t=e.visible,n=(e.isDiffCollapsed,Object(l.a)(e,["visible","isDiffCollapsed"]));return t?Object(E.c)(j.a,Object(z.a)({},n,{type:"link",icon:Object(E.c)(ce.a,null)})):null}),{target:"e1bx3rr97"})("color:#24292e;margin-right:2px;font-size:10px;transform:",(function(e){return e.isDiffCollapsed?"rotate(-90deg)":"initial"}),";transition:transform 0.2s ease-in-out;transform-origin:center;line-height:0;height:auto;&:hover,&:focus{color:#24292e;}"),ye=function(e){var t=e.oldPath,n=e.newPath,r=e.toVersion,a=e.type,i=e.diffKey,c=e.hasDiff,s=e.isDiffCollapsed,u=e.setIsDiffCollapsed,p=e.isDiffCompleted,f=e.onCompleteDiff,d=e.onCopyPathToClipboard,b=e.copyPathPopoverContent,h=e.resetCopyPathPopoverContent,g=e.appName,m=Object(l.a)(e,["oldPath","newPath","toVersion","type","diffKey","hasDiff","isDiffCollapsed","setIsDiffCollapsed","isDiffCompleted","onCompleteDiff","onCopyPathToClipboard","copyPathPopoverContent","resetCopyPathPopoverContent","appName"]),j=function(e){var t=e.oldPath,n=e.newPath,o=e.appName,r=D(t,o),a=D(n,o);return{oldPath:N(r,o),newPath:N(a,o)}}({oldPath:t,newPath:n,appName:g});return Object(E.c)(le,m,Object(E.c)("div",null,Object(E.c)(ve,{onClick:function(e){var t=e.altKey;return u(!s,t)}},Object(E.c)(Oe,{visible:c,isDiffCollapsed:s}),Object(E.c)(pe,{oldPath:j.oldPath,newPath:j.newPath,type:a,appName:g})," ",Object(E.c)(fe,{type:a}),Object(E.c)(de,{visible:!c})),Object(E.c)(je,{oldPath:j.oldPath,newPath:j.newPath,type:a,onCopy:d,copyPathPopoverContent:b,resetCopyPathPopoverContent:h})),Object(E.c)("div",null,Object(E.c)(o.Fragment,null,Object(E.c)(he,{visible:c&&"delete"!==a,version:r,path:n}),Object(E.c)(be,{visible:!c&&"delete"!==a,version:r,path:n}),Object(E.c)(me,{visible:p,onClick:function(){return f(i)}}))))},xe=n(32),Ce=n(344),we=n(343),Ve=n(157);var ke=Object(u.a)((function(e){return Object(E.c)("a",Object(z.a)({target:"_blank"},e,{rel:"noopener"}))}),{target:"e1eys6y60"})({name:"mr5ph2",styles:"text-decoration:none;color:#045dc1;"}),Se=Object(u.a)("em",{target:"e1eys6y61"})({name:"j8y7sr",styles:"font-style:normal;background-color:rgba(27,31,35,0.07);border-radius:3px;font-size:85%;margin:0;padding:0.2em 0.4em;"}),Ne=function(e){var t=e.forceBlock,n=void 0!==t&&t,o=e.options,r=void 0===o?{}:o,a=Object(l.a)(e,["forceBlock","options"]);return Object(E.c)(Ve.a,Object(z.a)({},a,{options:Object(xe.a)({},r,{forceBlock:n,overrides:Object(xe.a)({},r.overrides,{a:ke,em:Se,code:Se,p:Object(u.a)("p",{target:"e1eys6y62"})({name:"gx0lhm",styles:"margin-bottom:0;"})})})}))};var De=Object(u.a)("div",{target:"e1qcg9nb0"})({name:"79elbk",styles:"position:relative;"}),Pe=Object(u.a)("div",{target:"e1qcg9nb1"})({name:"wts65a",styles:"margin:10px;border:1px solid #ddd;padding:16px;border-radius:3px;color:#000;"}),Re=Object(u.a)(j.a,{target:"e1qcg9nb2"})({name:"p0s5fv",styles:"min-width:initial;width:20px;height:20px;position:absolute;top:-1px;left:5px;font-size:8px;cursor:'pointer';"}),Te={ADD:"I",DELETE:"D",NEUTRAL:"N"},ze=function(e){var t=e.newPath,n=e.fromVersion,o=e.toVersion,r=e.appName,a=N(t,r);return P({fromVersion:n,toVersion:o}).filter((function(e){var t=e.comments;return t&&t.length>0&&t.some((function(e){return e.fileName===a}))})).reduce((function(e,t){var n=t.comments.reduce((function(e,t){var n=t.fileName,o=t.lineChangeType,r=t.lineNumber,i=t.content;return n!==a?e:Object(xe.a)({},e,Object(c.a)({},function(e){var t=e.lineChangeType,n=e.lineNumber;return"".concat(Te[t.toUpperCase()]).concat(n)}({lineChangeType:o,lineNumber:r}),Object(E.c)(Ae,{content:i})))}),{});return Object(xe.a)({},e,{},n)}),{})},Ae=function(e){var t=e.content,n=Object(o.useState)(!0),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(E.c)(De,null,Object(E.c)(Re,{shape:"circle",type:"primary",onClick:function(){return i(!a)},icon:a?Object(E.c)(Ce.a,null):Object(E.c)(we.a,null)}),a&&Object(E.c)(Pe,null,Object(E.c)(Ne,null,t.props.children)))};var Ee=Object(u.a)("div",{target:"ei7z45h0"})({name:"dd9piy",styles:"border:1px solid #ddd;border-radius:3px;margin-bottom:16px;margin-top:16px;"}),_e=Object(u.a)("div",{target:"ei7z45h1"})({name:"roblq6",styles:"background-color:#f1f8ff;margin-left:30px;padding-left:4px;color:'#1b1f23b3';"}),qe=Object(u.a)(Q.a,{target:"ei7z45h2"})({name:"pon55n",styles:"background-color:#dbedff;"}),Fe=Object(u.a)(Q.b,{target:"ei7z45h3"})({name:"k66cdi",styles:".diff-gutter-col{width:30px;}tr.diff-line{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;}td.diff-gutter{color:rgba(27,31,35,0.3);padding:0;text-align:center;font-size:12px;cursor:auto;}td.diff-gutter .diff-line-normal{background-color:#cdffd8;border-color:#bef5cb;}td.diff-gutter:hover{cursor:pointer;color:rgba(27,31,35,0.6);}td.diff-code{font-size:12px;color:#24292e;}td.diff-code-insert .diff-code-edit{background-color:#acf2bd;}td.diff-gutter-omit:before{width:0;background-color:transparent;}"}),Le=r.a.memo((function(e){var t=e.oldPath,n=e.newPath,r=e.type,a=e.hunks,i=e.fromVersion,c=e.toVersion,l=e.diffKey,u=e.isDiffCompleted,p=e.onCompleteDiff,f=e.selectedChanges,d=e.onToggleChangeSelection,b=e.areAllCollapsed,h=e.setAllCollapsed,g=e.diffViewStyle,m=e.appName,j=Object(o.useState)(function(e){var t=e.type,n=e.hunks;return"delete"===t||n.length>5||void 0}({type:r,hunks:a})),v=Object(s.a)(j,2),O=v[0],y=v[1],x="Click to copy file path",C="File path copied!",w=Object(o.useState)(x),V=Object(s.a)(w,2),k=V[0],S=V[1];return void 0!==b&&b!==O?y(b):u&&void 0===O&&y(!0),Object(E.c)(Ee,null,Object(E.c)(ye,{oldPath:t,newPath:n,toVersion:c,type:r,diffKey:l,hasDiff:a.length>0,isDiffCollapsed:O,setIsDiffCollapsed:function(e,t){if(t)return h(e);h(void 0),y(e)},isDiffCompleted:u,onCopyPathToClipboard:function(){S(C)},copyPathPopoverContent:k,resetCopyPathPopoverContent:function(){k===C&&S(x)},onCompleteDiff:p,appName:m}),!O&&Object(E.c)(Fe,{viewType:g,diffType:r,hunks:a,widgets:ze({newPath:n,fromVersion:i,toVersion:c,appName:m}),optimizeSelection:!0,selectedChanges:f},(function(e){var t={enhancers:[Object(Q.d)(e)]},n=Object(Q.f)(e,t);return e.map((function(e){return[Object(E.c)(qe,{key:"decoration-"+e.content},Object(E.c)(_e,null,e.content)),Object(E.c)(Q.c,{key:e.content,hunk:e,tokens:n,gutterEvents:{onClick:d}})]}))})))}),(function(e,t){return e.isDiffCompleted===t.isDiffCompleted&&e.areAllCollapsed===t.areAllCollapsed&&e.diffViewStyle===t.diffViewStyle}));var Ie=Object(u.a)("h1",{target:"e1jqko7g0"})({name:"l2z0vi",styles:"margin-top:0.5em;"}),Me=function(e){var t=e.diff,n=e.getDiffKey,r=e.title,a=e.completedDiffs,i=e.isDoneSection,c=e.fromVersion,l=e.toVersion,u=e.handleCompleteDiff,p=e.selectedChanges,f=e.onToggleChangeSelection,d=e.diffViewStyle,b=e.appName,h=e.doneTitleRef,g=Object(o.useState)(void 0),m=Object(s.a)(g,2),j=m[0],v=m[1],O=Object(o.useCallback)((function(){var e=ee.a.satisfies(c,">= 0.61.0 <= 0.62.0"),t=ee.a.satisfies(l,">= 0.62.0 <= 0.63.0");return e&&t}),[c,l])();return Object(E.c)("div",null,r&&a.length>0&&Object(E.c)(Ie,{ref:h},r),t.map((function(e){var t=n(e),o=a.includes(t);return i!==o||O&&e.oldPath.match(/gradlew.bat/)&&e.newPath.match(/gradlew.bat/)?null:Object(E.c)(Le,Object(z.a)({key:"".concat(e.oldRevision).concat(e.newRevision)},e,{type:"new"===e.type?"add":e.type,diffKey:t,diffViewStyle:d,fromVersion:c,toVersion:l,isDiffCompleted:a.includes(t),onCompleteDiff:u,selectedChanges:p,onToggleChangeSelection:f,areAllCollapsed:j,setAllCollapsed:v,appName:b}))})))},Be=n(56),Ke=n(57),Ue=n(60),We=n(58),Ye=n(61),Ge=n(116);var He=function(){return Object(E.c)(Ge.a,{speed:1,backgroundColor:"#eee",foregroundColor:"#e6e6e6",viewBox:"0 0 400 100"},Object(E.c)("rect",{width:"250",height:"6",rx:"1.5"}))},Je=function(){return Object(E.c)(Ge.a,{speed:1,backgroundColor:"#eee",foregroundColor:"#e6e6e6",viewBox:"0 0 400 100"},Object(E.c)("rect",{x:"0",y:"10",width:"47%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"10",width:"41%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"18",width:"43%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"34",width:"40%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"42",width:"45%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"42",width:"40%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"50",width:"44%",height:"6",rx:"1.5"}))},Xe=Object(u.a)("div",{target:"e1q7zk9m0"})({name:"h9hnq2",styles:"margin-top:16px;border:1px solid #e8e8e8;border-radius:3px;"}),$e=Object(u.a)("div",{target:"e1q7zk9m1"})({name:"1rk6upi",styles:"color:#24292e;background-color:#fafbfc;padding:10px;height:40px;"}),Qe={name:"10nze3y",styles:"padding:5px 10px;"},Ze=function(e){function t(){return Object(Be.a)(this,t),Object(Ue.a)(this,Object(We.a)(t).apply(this,arguments))}return Object(Ye.a)(t,e),Object(Ke.a)(t,[{key:"render",value:function(){return Object(E.c)(Xe,null,Object(E.c)($e,null,Object(E.c)(He,null)),Object(E.c)("div",{css:Qe},Object(E.c)(Je,null)))}}]),t}(o.Component);var et=Object(u.a)("div",{target:"e1n00l3l0"})("position:relative;",(function(e){return e.isVisible&&"margin-top: 16px;"})," color:rgba(0,0,0,0.65);",(function(e){return e.isVisible?"max-height: 800px;":"max-height: 0px;"})," overflow:hidden;transition:max-height 0.4s ease-out,margin-top 0.4s ease-out 0.2s;"),tt=Object(u.a)("div",{target:"e1n00l3l1"})({name:"1nq9zh6",styles:"padding:24px;color:rgba(0,0,0,0.65);border:1px solid #e8e8e8;border-radius:3px;"}),nt=Object(u.a)((function(e){return Object(E.c)("span",Object(z.a)({},e,{role:"img","aria-label":"Close useful content section"}),"\ud83d\udce3")}),{target:"e1n00l3l2"})({name:"9g4yx1",styles:"margin:0px 10px;"}),ot=Object(u.a)((function(e){var t=e.toggleVisibility,n=Object(l.a)(e,["toggleVisibility"]);return Object(E.c)(j.a,Object(z.a)({},n,{type:"link",icon:Object(E.c)(Ce.a,null),onClick:t}))}),{target:"e1n00l3l3"})({name:"1meph0h",styles:"float:right;position:absolute;top:11px;right:12px;font-size:12px;border-width:0px;width:20px;height:20px;color:rgba(0,0,0,0.45);&:hover,&:focus{color:#24292e;}"}),rt=Object(u.a)("hr",{target:"e1n00l3l4"})({name:"94b9fp",styles:"margin:15px 0;background-color:#e1e4e8;height:0.25em;border:0;"}),at=Object(u.a)("ol",{target:"e1n00l3l5"})({name:"jbbt8s",styles:"padding-inline-start:18px;margin:10px 0 0;"}),it=function(e){function t(){var e,n;Object(Be.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(Ue.a)(this,(e=Object(We.a)(t)).call.apply(e,[this].concat(r)))).state={isVisible:!0},n.handleToggleVisibility=function(){return n.setState((function(e){return{isVisible:!e.isVisible}}))},n}return Object(Ye.a)(t,e),Object(Ke.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.props.isLoading&&!e.isLoading,o=this.state.isVisible&&!t.isVisible;return n||o}},{key:"render",value:function(){var e=this.props,t=e.fromVersion,n=e.toVersion,r=this.state.isVisible,a=P({fromVersion:t,toVersion:n});if(!a.some((function(e){return!!e.usefulContent})))return null;var i=a.length>1;return Object(E.c)(et,{isVisible:r},Object(E.c)(tt,null,Object(E.c)("h2",null,Object(E.c)(nt,null)," Useful content for upgrading"),Object(E.c)(ot,{toggleVisibility:this.handleToggleVisibility}),a.map((function(e,t){var n=e.usefulContent,r=e.version.slice(0,4),a=[].concat(Object(X.a)(n.links),[{title:"React Native ".concat(r," changelog"),url:R({version:r})}]);return Object(E.c)(o.Fragment,{key:t},t>0&&Object(E.c)(rt,null),i&&Object(E.c)("h3",null,"Release ",r),Object(E.c)("span",null,n.description),Object(E.c)(at,null,a.map((function(e,t){var n=e.url,o=e.title;return Object(E.c)("li",{key:"".concat(n).concat(t)},Object(E.c)(ke,{href:n},o))}))))}))))}}]),t}(o.Component),ct=n(337);var st=Object(u.a)("div",{target:"end0ift0"})({name:"14dwkoc",styles:"position:relative;border-width:1px;margin-top:16px;flex-direction:row-reverse;display:flex;"}),lt=Object(u.a)((function(e){var t=e.handleViewStyleChange,n=e.diffViewStyle;return Object(E.c)(st,null,Object(E.c)(ct.a.Group,{value:n},Object(E.c)(ct.a.Button,{value:"split",onChange:function(){return t("split")}},"Split"),Object(E.c)(ct.a.Button,{value:"unified",onChange:function(){return t("unified")}},"Unified")))}),{target:"end0ift1"})({name:"zejs5o",styles:"float:right;position:absolute;top:10px;right:10px;font-size:12px;border-width:0px;width:20px;height:20px;margin-right:8px;&,&:hover,&:focus{color:#24292e;}"}),ut=n(159),pt=n(160),ft=n.n(pt);function dt(){var e=Object(ut.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n\n  10%, 90% {\n    transform: translate(0, -2px);\n  }\n\n  20%, 80% {\n    transform: translate(0, 3px);\n  }\n\n  30%, 50%, 70% {\n    transform: translate(0, -5px);\n  }\n\n  40%, 60% {\n    transform: translate(0, 5px);\n  }\n"]);return dt=function(){return e},e}var bt=Object(E.d)(dt()),ht=Object(u.a)((function(e){var t=e.completed,n=e.total,o=e.popoverContent,r=(e.popoverCursorType,Object(l.a)(e,["completed","total","popoverContent","popoverCursorType"]));return Object(E.c)("div",r,Object(E.c)(m.a,{content:o,trigger:"hover",placement:"right",overlayStyle:{position:"fixed"}},Object(E.c)("span",{className:"completedAmount"},0===t?1:t)," ","/",n),Object(E.c)(ft.a,{active:t===n,config:{elementCount:200,angle:130,startVelocity:30}}))}),{target:"eqjubm30"})("position:fixed;bottom:20px;right:20px;background:#d5eafd;padding:10px;border:1px solid #1890ff;border-radius:20px;color:#7dadda;transform:",(function(e){return e.completed?"translateY(0px)":"translateY(70px)"}),";display:flex;align-self:flex-end;transition:transform 0.3s;cursor:",(function(e){return e.popoverCursorType}),";",(function(e){return e.completed===e.total&&Object(E.b)("transform:translateY(70px);animation:",bt,";animation-duration:1.5s;")})," .completedAmount{color:#1890ff;}");var gt=Object(u.a)("div",{target:"epty4bk0"})({name:"f6mhdk",styles:"width:100%;margin-top:16px;"}),mt=function(){return Object(E.c)(gt,null,Object(E.c)($.a,{message:Object(E.c)(Ne,null,"Keep in mind that `RnDiffApp` and `rndiffapp` are placeholders. When upgrading, you should replace them with your actual project's name. You can also provide your app name by clicking the settings icon on the top right."),type:"info",closable:!0}))};var jt=Object(u.a)("div",{target:"exsbni10"})({name:"7822g1",styles:"width:90%;"}),vt=function(e){var t=e.oldRevision,n=e.newRevision;return"".concat(t).concat(n)},Ot=Object(Q.g)({multiple:!0})((function(e){var t=e.showDiff,n=e.fromVersion,r=e.toVersion,a=e.selectedChanges,i=e.onToggleChangeSelection,c=e.appName,l=Object(o.useState)(!0),u=Object(s.a)(l,2),p=u[0],f=u[1],d=Object(o.useState)(null),b=Object(s.a)(d,2),m=b[0],j=b[1],v=Object(o.useState)([]),O=Object(s.a)(v,2),y=O[0],x=O[1],C=Object(o.useState)(!1),w=Object(s.a)(C,2),V=w[0],S=w[1],N={content:"Scroll to Done section",cursorType:"s-resize"},D={content:"Scroll to Top",cursorType:"n-resize"},P=Object(o.useState)(N),R=Object(s.a)(P,2),T=R[0],A=R[1],_=Object(o.useRef)(null),q=Object(o.useState)(localStorage.getItem("viewStyle")||"split"),F=Object(s.a)(q,2),L=F[0],I=F[1];if(Object(o.useEffect)((function(){if(t){var e=function(){var e=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,fetch(k({fromVersion:n,toVersion:r}));case 3:return e.next=5,e.sent.text();case 5:t=e.sent,j(Object(Q.e)(t).sort((function(e){return e.newPath.includes("package.json")?-1:1}))),x([]),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=setTimeout((function(){e()}),750);return function(){clearTimeout(o)}}}),[c,n,t,r]),!t)return null;if(p)return Object(E.c)(jt,null,Object(E.c)(Ze,null));var M={diff:m,getDiffKey:vt,completedDiffs:y,fromVersion:n,toVersion:r,handleCompleteDiff:function(e){if(y.includes(e))return x((function(t){return t.filter((function(t){return t!==e}))}));x((function(t){return[].concat(Object(X.a)(t),[e])}))},selectedChanges:a,onToggleChangeSelection:i};return Object(E.c)(jt,null,Object(E.c)(it,{isLoading:p,fromVersion:n,toVersion:r}),Object(E.c)(mt,null),Object(E.c)(lt,{handleViewStyleChange:function(e){I(e),localStorage.setItem("viewStyle",e)},diffViewStyle:L}),Object(E.c)(Me,Object(z.a)({},M,{isDoneSection:!1,diffViewStyle:L,appName:c})),function(e){var t=e.diff,n=e.completedDiffs;return t.length===n.length&&Object(E.c)($.a,{style:{marginTop:16},message:"Your upgrade is done \ud83c\udf89\ud83c\udf89",type:"success",showIcon:!0,closable:!0})}({diff:m,completedDiffs:y}),Object(E.c)(Me,Object(z.a)({},M,{isDoneSection:!0,title:"Done",appName:c,doneTitleRef:_})),Object(E.c)(ht,{completed:y.length,total:m.length,onClick:function(){S(!V),V?(A(N),window.scrollTo({top:0,behavior:"smooth"})):(A(D),_.current.scrollIntoView({behavior:"smooth"}))},popoverContent:T.content,popoverCursorType:T.cursorType}))})),yt=n(342),xt=n(338),Ct=n(334);var wt=Object(u.a)("div",{target:"eg18p4w0"})({name:"1yuhvjn",styles:"margin-top:16px;"}),Vt=function(e){var t=e.handleSettingsChange,n=e.appName,a=e.setAppName,i=Object(o.useState)(!1),c=Object(s.a)(i,2),l=c[0],u=c[1];return Object(E.c)(m.a,{placement:"bottomRight",content:Object(E.c)(r.a.Fragment,null,Object(E.c)(xt.a.Group,{onChange:function(e){return t(e)}},Object(E.c)("div",null,Object(E.c)(xt.a,{value:T},T))),Object(E.c)(wt,null,Object(E.c)("h4",null,"What's your app name?"),Object(E.c)(Ct.a,{value:n,onChange:function(e){a(e.target.value)},placeholder:"MyAwesomeApp"}))),trigger:"click",visible:l,onVisibleChange:function(e){return u(e)}},Object(E.c)(j.a,{icon:Object(E.c)(yt.a,null)}))},kt=n(172),St=n(173),Nt=n.n(St);var Dt=Object(u.a)("div",{target:"el8swy00"})({name:"cqyjk8",styles:"display:flex;align-items:center;justify-content:center;flex-direction:column;padding-top:30px;"}),Pt=Object(u.a)(p.a,{target:"el8swy01"})({name:"140qzpr",styles:"width:90%;border-radius:3px;"}),Rt=Object(u.a)("div",{target:"el8swy02"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),Tt=Object(u.a)("img",{target:"el8swy03"})({name:"9f1yi3",styles:"width:100px;margin-bottom:15px;"}),zt=Object(u.a)("h1",{target:"el8swy04"})({name:"7kez8b",styles:"margin:0;margin-left:15px;"}),At=Object(u.a)((function(e){var t=e.className,n=Object(l.a)(e,["className"]);return Object(E.c)("div",{className:t},Object(E.c)(f.a,n))}),{target:"el8swy05"})({name:"z6j3nc",styles:"margin-top:10px;margin-left:15px;margin-right:auto;"}),Et=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),l=i[0],u=i[1],p=Object(o.useState)(!1),f=Object(s.a)(p,2),b=f[0],h=f[1],g=Object(o.useState)(Object(c.a)({},"".concat(T),!1)),m=Object(s.a)(g,2),j=m[0],v=m[1],O=Object(o.useState)(""),y=Object(s.a)(O,2),x=y[0],C=y[1];Object(o.useEffect)((function(){d.a.initialize("UA-136307971-1"),d.a.pageview("/")}),[]);return Object(E.c)(Dt,null,Object(E.c)(Pt,null,Object(E.c)(Rt,null,Object(E.c)(Tt,{alt:"React Native upgrade helper logo",title:"React Native upgrade helper logo",src:Nt.a}),Object(E.c)("a",{href:kt.a},Object(E.c)(zt,null,"React Native upgrade helper")),Object(E.c)(At,{href:"https://github.com/react-native-community/upgrade-helper","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star react-native-community/upgrade-helper on GitHub"},"Star"),Object(E.c)(Vt,{handleSettingsChange:function(e){var t=e.reduce((function(e,t){return e[t]=!0,e}),{});v(t)},appName:x,setAppName:C})),Object(E.c)(J,{showDiff:function(e){var t=e.fromVersion,n=e.toVersion;t!==n&&(r(t),u(n),h(!0))},showReleaseCandidates:j[T]})),Object(E.c)(Ot,{showDiff:b,fromVersion:n,toVersion:l,appName:x}))},_t=function(e){return Object(E.c)(Et,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(E.c)(_t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,n){"use strict";n.r(t);var o=n(32);t.default=["0.62","0.61","0.60","0.59","0.58","0.57"].map((function(e){return Object(o.a)({},n(225)("./".concat(e)).default,{version:e})}))},71:function(e,t){jest.setMock("../index.js",["0.59","0.58","0.57","0.56"].map((function(e){return{version:e}})))}},[[183,1,2]]]);
//# sourceMappingURL=main.113d5e6a.chunk.js.map