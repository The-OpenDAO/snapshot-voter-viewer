(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},4186:function(e,r,t){"use strict";t.r(r);var n,o=t(4051),i=t.n(o),c=t(5893),a=t(6908),s=t(3165),l=t(4040),u=t(9214),d=t(8220),f=t(9693),p=t(5566),h=t(7501),b=t(2816),v=t(7294),y=t(9669),m=t.n(y),g=t(381),x=t.n(g);function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function P(e,r,t,n,o,i,c){try{var a=e[i](c),s=a.value}catch(l){return void t(l)}a.done?r(s):Promise.resolve(s).then(n,o)}function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){w(e,r,t[r])}))}return e}function k(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e[e.None=0]="None",e[e.Pulling=1]="Pulling",e[e.Pulled=2]="Pulled"}(n||(n={}));r.default=function(){var e,r=(0,a.Z)("https://snapshot.org/#/theopendao.eth/proposal/0xacbc420c3696740786c76065c51cb8bc5ed0982d2162ee3f74441c14785b91c6"),t=(0,v.useState)([]),o=t[0],y=t[1],g=(0,v.useState)(n.None),j=g[0],w=g[1],O="".concat(null===(e="b8b86109ec4bd0658b8963afc74f616f2fe34b33")?void 0:e.substring(0,8),", ").concat(x()().format("yyyy-MM-DD")),$=(0,v.useMemo)((function(){var e="https://snapshot.org/#/theopendao.eth/proposal/",t=r.value.trim(),n={correct:!0,id:""};if(""===t)return n;if(!t.startsWith(e))return n.correct=!1,n;var o=t.substring(e.length);return/^0x[0-9a-zA-Z]{64}$/.test(o)?(n.id=o,n):(n.correct=!1,n)}),[r.value]),S=(0,v.useCallback)(function(){var e,r=(e=i().mark((function e(r){var t,o,c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y([]),w(n.Pulling),t=0,o=500;case 4:return e.next=7,m().post("https://hub.snapshot.org/graphql",{operationName:"Votes",query:"query Votes($id: String!, $first: Int, $skip: Int, $orderBy: String, $orderDirection: OrderDirection, $voter: String) {\n  votes(\n    first: $first\n    skip: $skip\n    where: {proposal: $id, vp_gt: 0, voter: $voter}\n    orderBy: $orderBy\n    orderDirection: $orderDirection\n  ) {\n    voter\n  }\n}",variables:{id:r,orderBy:"vp",orderDirection:"desc",first:o,skip:o*t}});case 7:if(c=e.sent,t++,0!==(a=c.data.data.votes.map((function(e){return e.voter}))).length){e.next=12;break}return e.abrupt("break",15);case 12:y((function(e){return k(e).concat(k(a))})),e.next=4;break;case 15:w(n.Pulled);case 16:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function c(e){P(i,n,o,c,a,"next",e)}function a(e){P(i,n,o,c,a,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}(),[y,w]),_=(0,v.useCallback)((function(){if(j===n.Pulled){var e=["voter"].concat(k(o)).join("\r\n"),r=new Blob([e],{type:"text/csv"}),t=document.createElement("a");t.href=window.URL.createObjectURL(r),t.download="voters-".concat($.id,"-").concat(+new Date,".csv"),t.click()}}),[o,j,$.id]);return(0,c.jsxs)(s.Z,{css:{marginTop:"5rem",marginBottom:"5rem"},gap:1,children:[(0,c.jsxs)(l.Z,{align:"baseline",children:[(0,c.jsx)(u.Z,{h1:!0,children:"Snapshot Voter Viewer"}),(0,c.jsxs)(u.Z,{span:!0,css:{paddingLeft:"1rem"},children:["(Version: ",O,")"]})]}),(0,c.jsx)(l.Z,{children:(0,c.jsx)(d.ZP,Z({},r.bindings,{label:"URL to the proposal",placeholder:"https://snapshot.org/#/theopendao.eth/proposal/0xexample",status:$.correct?"default":"error",color:$.correct?"default":"error",helperColor:$.correct?"default":"error",helperText:$.correct?"":"Invalid proposal URL",width:"50%"}))}),(0,c.jsx)(f.Z,{y:1}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(p.ZP,{onClick:function(){return S($.id)},clickable:!!$.id&&j!==n.Pulling,children:j===n.Pulling?(0,c.jsx)(h.ZP,{color:"white",size:"sm"}):"Load Voters"}),(0,c.jsx)(f.Z,{x:1}),j===n.Pulled&&(0,c.jsx)(p.ZP,{onClick:function(){return _()},children:"Export Voters"})]}),(0,c.jsx)(f.Z,{y:1}),j!==n.None&&(0,c.jsx)(l.Z,{children:(0,c.jsxs)(b.ZP,{compact:!0,css:{height:"auto",minWidth:"100%"},children:[(0,c.jsxs)(b.ZP.Header,{children:[(0,c.jsx)(b.ZP.Column,{children:"#"}),(0,c.jsxs)(b.ZP.Column,{children:["Voter (",o.length,")"]})]}),(0,c.jsx)(b.ZP.Body,{children:o.map((function(e,r){return(0,c.jsxs)(b.ZP.Row,{children:[(0,c.jsx)(b.ZP.Cell,{children:r+1}),(0,c.jsx)(b.ZP.Cell,{children:e})]},r)}))})]})})]})}}},function(e){e.O(0,[885,58,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);