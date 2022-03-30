(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},4186:function(r,e,t){"use strict";t.r(e);var n,o=t(4051),i=t.n(o),c=t(5893),a=t(6908),s=t(3165),l=t(4040),u=t(9214),d=t(8220),f=t(9693),p=t(5566),h=t(7501),b=t(2816),v=t(7294),y=t(9669),m=t.n(y),g=t(381),x=t.n(g);function j(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function P(r,e,t,n,o,i,c){try{var a=r[i](c),s=a.value}catch(l){return void t(l)}a.done?e(s):Promise.resolve(s).then(n,o)}function w(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Z(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){w(r,e,t[e])}))}return r}function k(r){return function(r){if(Array.isArray(r))return j(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"===typeof r)return j(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(r){r[r.None=0]="None",r[r.Pulling=1]="Pulling",r[r.Pulled=2]="Pulled"}(n||(n={}));e.default=function(){var r,e=(0,a.Z)("https://snapshot.org/#/theopendao.eth/proposal/0xacbc420c3696740786c76065c51cb8bc5ed0982d2162ee3f74441c14785b91c6"),t=(0,v.useState)([]),o=t[0],y=t[1],g=(0,v.useState)(n.None),j=g[0],w=g[1],O="".concat(null===(r="bcb31d4b3bb12b8a55577a2f4482fea5dda998fd")?void 0:r.substring(0,8),", ").concat(x()().format("yyyy-MM-DD")),$=(0,v.useMemo)((function(){var r="https://snapshot.org/#/theopendao.eth/proposal/",t=e.value.trim(),n={correct:!0,id:""};if(""===t)return n;if(!t.startsWith(r))return n.correct=!1,n;var o=t.substring(r.length);return/^0x[0-9a-zA-Z]{64}$/.test(o)?(n.id=o,n):(n.correct=!1,n)}),[e.value]),S=(0,v.useCallback)(function(){var r,e=(r=i().mark((function r(e){var t,o,c,a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:y([]),w(n.Pulling),t=0,o=500;case 4:return r.next=7,m().post("https://hub.snapshot.org/graphql",{operationName:"Votes",query:"query Votes($id: String!, $first: Int, $skip: Int, $orderBy: String, $orderDirection: OrderDirection, $voter: String) {\n  votes(\n    first: $first\n    skip: $skip\n    where: {proposal: $id, vp_gt: 0, voter: $voter}\n    orderBy: $orderBy\n    orderDirection: $orderDirection\n  ) {\n    voter\n  }\n}",variables:{id:e,orderBy:"vp",orderDirection:"desc",first:o,skip:o*t}});case 7:if(c=r.sent,t++,0!==(a=c.data.data.votes.map((function(r){return r.voter}))).length){r.next=12;break}return r.abrupt("break",15);case 12:y((function(r){return k(r).concat(k(a))})),r.next=4;break;case 15:w(n.Pulled);case 16:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function c(r){P(i,n,o,c,a,"next",r)}function a(r){P(i,n,o,c,a,"throw",r)}c(void 0)}))});return function(r){return e.apply(this,arguments)}}(),[y,w]),_=(0,v.useCallback)((function(){if(j===n.Pulled){var r=["voter"].concat(k(o)).join("\r\n"),e=new Blob([r],{type:"text/csv"}),t=document.createElement("a");t.href=window.URL.createObjectURL(e),t.download="voters-".concat($.id,"-").concat(+new Date,".csv"),t.click()}}),[o,j,$.id]);return(0,c.jsxs)(s.Z,{css:{marginTop:"5rem",marginBottom:"5rem"},gap:1,children:[(0,c.jsxs)(l.Z,{align:"baseline",children:[(0,c.jsx)(u.Z,{h1:!0,children:"Snapshot Voter Viewer"}),(0,c.jsxs)(u.Z,{span:!0,css:{paddingLeft:"1rem"},children:["(Version: ",O,")"]})]}),(0,c.jsx)(l.Z,{children:(0,c.jsx)(d.ZP,Z({},e.bindings,{label:"URL to the proposal",placeholder:"https://snapshot.org/#/theopendao.eth/proposal/0xexample",status:$.correct?"default":"error",color:$.correct?"default":"error",helperColor:$.correct?"default":"error",helperText:$.correct?"":"Invalid proposal URL",width:"50%"}))}),(0,c.jsx)(f.Z,{y:1}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(p.ZP,{onClick:function(){return S($.id)},clickable:!!$.id&&j!==n.Pulling,children:j===n.Pulling?(0,c.jsx)(h.ZP,{color:"white",size:"sm"}):"Load Voters"}),(0,c.jsx)(f.Z,{x:1}),j===n.Pulled&&(0,c.jsx)(p.ZP,{onClick:function(){return _()},children:"Export Voters"})]}),(0,c.jsx)(f.Z,{y:1}),j!==n.None&&(0,c.jsx)(l.Z,{children:(0,c.jsxs)(b.ZP,{compact:!0,css:{height:"auto",minWidth:"100%"},children:[(0,c.jsxs)(b.ZP.Header,{children:[(0,c.jsx)(b.ZP.Column,{children:"#"}),(0,c.jsxs)(b.ZP.Column,{children:["Voter (",o.length,")"]})]}),(0,c.jsx)(b.ZP.Body,{children:o.map((function(r,e){return(0,c.jsxs)(b.ZP.Row,{children:[(0,c.jsx)(b.ZP.Cell,{children:e+1}),(0,c.jsx)(b.ZP.Cell,{children:r})]},e)}))})]})})]})}}},function(r){r.O(0,[885,58,774,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);