(this["webpackJsonp@devtri/ami-travel"]=this["webpackJsonp@devtri/ami-travel"]||[]).push([[18],{1006:function(e,n,t){e.exports=t.p+"static/media/check-circle.1cd71805.gif"},1007:function(e,n,t){e.exports=t.p+"static/media/failed.66953387.png"},2685:function(e,n,t){"use strict";t.r(n);t(765);var a=t(767),r=t(150),i=t.n(r),c=t(218),o=t(42),s=t(0),l=t.n(s),p=t(25),u=t(620),d=t(214);function f(e){this.message=e}f.prototype=new Error,f.prototype.name="InvalidCharacterError";var m="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new f("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,a,r=0,i=0,c="";a=n.charAt(i++);~a&&(t=r%4?64*t+a:a,r++%4)?c+=String.fromCharCode(255&t>>(-2*r&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return c};function b(e){var n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(m(e).replace(/(.)/g,(function(e,n){var t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(n)}catch(e){return m(n)}}function g(e){this.message=e}g.prototype=new Error,g.prototype.name="InvalidTokenError";var h=function(e,n){if("string"!=typeof e)throw new g("Invalid token specified");var t=!0===(n=n||{}).header?0:1;try{return JSON.parse(b(e.split(".")[t]))}catch(e){throw new g("Invalid token specified: "+e.message)}},O=t(60),v=t(657),y=t(20),j=t(16),x=t(5);function w(){const e=Object(y.a)(["\n  text-align: center;\n\n  h2 {\n    font-size: 18px;\n    font-weight: 700px;\n    margin: 56px auto 30px;\n    color: ",";\n  }\n\n  a {\n    height: 37px;\n    padding: 0 14px;\n    font-size: 15px;\n    box-shadow: none;\n    font-weight: 700;\n    text-shadow: none;\n    display: inline-flex;\n    align-items: center;\n    border-radius: 3px;\n    color: ",";\n    border-color: ",";\n    background-color: ",";\n    &:focus,\n    &:hover {\n      outline: 0;\n      color: ",";\n      border-color: ",";\n      background-color: ",";\n    }\n  }\n"]);return w=function(){return e},e}function E(){const e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 890px;\n  padding: 0 25px;\n  margin: 60px auto;\n\n  img {\n    max-width: 560px;\n    @media only screen and (min-width: 1901px) {\n      max-width: 100%;\n    }\n    @media only screen and (max-width: 667px) {\n      max-width: 100%;\n    }\n  }\n"]);return E=function(){return e},e}const k=j.d.div(E()),S=j.d.div(w(),Object(x.a)("primary.0","#008489"),Object(x.a)("color.1","#ffffff"),Object(x.a)("primary.0","#008489"),Object(x.a)("primary.0","#008489"),Object(x.a)("color.1","#ffffff"),Object(x.a)("primary.1","#399C9F"),Object(x.a)("primary.1","#399C9F"));var N=k,C=t(1006),I=t.n(C),P=t(1007),U=t.n(P);n.default=()=>{const e=Object(p.h)().token,n=h(e),t=Object(s.useContext)(O.a).confirmEmail,r=Object(s.useState)(!0),f=Object(o.a)(r,2),m=f[0],b=f[1],g=Object(s.useState)(!0),y=Object(o.a)(g,2),j=y[0],x=y[1],w=n&&n.email,E=function(){var e=Object(c.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:e.sent?(b(!0),x(!1)):(b(!1),x(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(s.useEffect)(()=>{E(w)},[E,w]),console.log("token",e),l.a.createElement(N,null,l.a.createElement(S,null,j?l.a.createElement(a.a,{size:"large"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{src:m?I.a:U.a,alt:m?"Sukses":"Gagal",style:{maxWidth:125,margin:"0 auto"}}),l.a.createElement(u.a,{as:"h2",content:m?"Konfirmasi Email Berhasil":"Konfirmasi Email Gagal ! ! !"}),l.a.createElement(d.a,{link:"/",content:"Kembali ke Beranda"}))))}},620:function(e,n,t){"use strict";var a=t(88),r=t(0),i=t.n(r),c=t(16),o=t(13),s=t(89);const l=Object(c.d)("p")(s.a,o.k,o.m,o.x,o.q,o.p,Object(s.b)("Heading")),p=e=>{let n=e.content,t=Object(a.a)(e,["content"]);return i.a.createElement(l,t,n)};p.defaultProps={as:"h2",mt:0,mb:0,fontWeight:700},n.a=p},657:function(e,n,t){"use strict";var a=t(88),r=t(0),i=t.n(r),c=t(16),o=t(89);const s=Object(c.d)("img")({display:"block",maxWidth:"100%",height:"auto"},o.a,Object(o.b)("Image")),l=e=>{let n=e.src,t=e.alt,r=Object(a.a)(e,["src","alt"]);return i.a.createElement(s,Object.assign({src:n,alt:t},r))};n.a=l,l.defaultProps={m:0}},765:function(e,n,t){"use strict";t(87),t(766)},766:function(e,n,t){},767:function(e,n,t){"use strict";var a=t(3),r=t(2),i=t(9),c=t(10),o=t(11),s=t(12),l=t(0),p=t(6),u=t.n(p),d=t(24),f=t(340),m=t.n(f),b=t(221),g=t(55),h=t(23),O=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},v=(Object(g.a)("small","default","large"),null);var y=function(e){Object(o.a)(t,e);var n=Object(s.a)(t);function t(e){var c;Object(i.a)(this,t),(c=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||c.props).delay;n&&(c.cancelExistingSpin(),c.updateSpinning=m()(c.originalUpdateSpinning,n))},c.updateSpinning=function(){var e=c.props.spinning;c.state.spinning!==e&&c.setState({spinning:e})},c.renderSpin=function(e){var n,t=e.getPrefixCls,i=e.direction,o=c.props,s=o.prefixCls,p=o.className,f=o.size,m=o.tip,b=o.wrapperClassName,g=o.style,y=O(o,["prefixCls","className","size","tip","wrapperClassName","style"]),j=c.state.spinning,x=t("spin",s),w=u()(x,(n={},Object(r.a)(n,"".concat(x,"-sm"),"small"===f),Object(r.a)(n,"".concat(x,"-lg"),"large"===f),Object(r.a)(n,"".concat(x,"-spinning"),j),Object(r.a)(n,"".concat(x,"-show-text"),!!m),Object(r.a)(n,"".concat(x,"-rtl"),"rtl"===i),n),p),E=Object(d.a)(y,["spinning","delay","indicator"]),k=l.createElement("div",Object(a.a)({},E,{style:g,className:w}),function(e,n){var t=n.indicator,a="".concat(e,"-dot");return null===t?null:Object(h.b)(t)?Object(h.a)(t,{className:u()(t.props.className,a)}):Object(h.b)(v)?Object(h.a)(v,{className:u()(v.props.className,a)}):l.createElement("span",{className:u()(a,"".concat(e,"-dot-spin"))},l.createElement("i",{className:"".concat(e,"-dot-item")}),l.createElement("i",{className:"".concat(e,"-dot-item")}),l.createElement("i",{className:"".concat(e,"-dot-item")}),l.createElement("i",{className:"".concat(e,"-dot-item")}))}(x,c.props),m?l.createElement("div",{className:"".concat(x,"-text")},m):null);if(c.isNestedPattern()){var S=u()("".concat(x,"-container"),Object(r.a)({},"".concat(x,"-blur"),j));return l.createElement("div",Object(a.a)({},E,{className:u()("".concat(x,"-nested-loading"),b)}),j&&l.createElement("div",{key:"loading"},k),l.createElement("div",{className:S,key:"container"},c.props.children))}return k};var o=e.spinning,s=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(o,e.delay);return c.state={spinning:o&&!s},c.originalUpdateSpinning=c.updateSpinning,c.debouncifyUpdateSpinning(e),c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return l.createElement(b.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){v=e}}]),t}(l.Component);y.defaultProps={spinning:!0,size:"default",wrapperClassName:""},n.a=y}}]);
//# sourceMappingURL=Travel.835b9509.chunk.js.map