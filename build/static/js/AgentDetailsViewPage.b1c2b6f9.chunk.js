(this["webpackJsonp@devtri/ami-travel"]=this["webpackJsonp@devtri/ami-travel"]||[]).push([[9],{2682:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return cn}));t(673);var a=t(684),r=(t(107),t(17)),o=t(0),i=t.n(o),c=t(15),l=t(25),s=t(123),d=t.n(s),m=t(210),p=t(640),u=t(657),h=t(620),b=t(212),x=t(701),f=t(683),g=t(60),E=t(732),y=t(637),w=t(7);var j=()=>{const n=Object(y.a)("/data/agent.json"),e=n.data,t=n.loadMoreData,a=n.loading,r=n.total,o=e[0]&&e[0].listed_post?e[0].listed_post:[];return i.a.createElement(E.a,{link:w.t,data:o,loading:a,limit:8,totalItem:r.length,columnWidth:[.5,.5,1/3,1/4,.2,1/6],placeholder:i.a.createElement(x.a,null),handleLoadMore:t})};var v=()=>{const n=Object(y.a)("/data/agent.json"),e=n.data,t=n.loadMoreData,a=n.loading,r=e[0]&&e[0].favourite_post?e[0].favourite_post:[];return i.a.createElement(E.a,{link:w.t,data:r,loading:a,limit:6,totalItem:r.length,columnWidth:[.5,.5,1/3,1/4,.2,1/6],placeholder:i.a.createElement(x.a,null),handleLoadMore:t})},O=(t(629),t(633)),k=(t(630),t(632)),C=(t(208),t(122)),_=(t(674),t(681)),N=(t(338),t(209)),F=t(638),z=t(622);var S=()=>{var n,e,t,a;const r=Object(F.b)({mode:"onChange"}),o=r.control,c=r.errors,l=r.handleSubmit;return i.a.createElement("form",{onSubmit:l(n=>console.log(n))},i.a.createElement(z.a,{label:"Your message",htmlFor:"message",error:c.message&&i.a.createElement("span",null,"This field is required!")},i.a.createElement(F.a,{as:i.a.createElement(N.a.TextArea,{rows:5}),id:"message",name:"message",defaultValue:"",control:o,rules:{required:!0}})),i.a.createElement(O.a,{gutter:30},i.a.createElement(k.a,{md:12},i.a.createElement(z.a,{label:"Your email",htmlFor:"email",error:c.email&&i.a.createElement(i.a.Fragment,null,"required"===(null===(n=c.email)||void 0===n?void 0:n.type)&&i.a.createElement("span",null,"This field is required!"),"pattern"===(null===(e=c.email)||void 0===e?void 0:e.type)&&i.a.createElement("span",null,"Please enter a valid email address!"))},i.a.createElement(F.a,{as:i.a.createElement(N.a,null),type:"email",id:"email",name:"email",defaultValue:"",control:o,rules:{required:!0,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}}))),i.a.createElement(k.a,{md:12},i.a.createElement(z.a,{label:"Your contact number",htmlFor:"phone",error:c.phone&&i.a.createElement(i.a.Fragment,null,"required"===(null===(t=c.phone)||void 0===t?void 0:t.type)&&i.a.createElement("span",null,"This field is required!"),"pattern"===(null===(a=c.phone)||void 0===a?void 0:a.type)&&i.a.createElement("span",null,"Please enter your valid number!"))},i.a.createElement(F.a,{as:i.a.createElement(N.a,null),defaultValue:"",control:o,id:"phone",name:"phone",rules:{required:!0,pattern:/^[0-9]*$/}})))),i.a.createElement(z.a,null,i.a.createElement(F.a,{name:"cookie",onChange:([n])=>n.target.checked,as:i.a.createElement(_.a,null,"Save my email in the browser fro the next time I contact"),control:o})),i.a.createElement(z.a,null,i.a.createElement(C.a,{type:"primary",htmlType:"submit",size:"large"},"Submit")))},T=t(20),P=t(16),M=t(5);function A(){const n=Object(T.a)(["\n  border-radius: 3px;\n  padding: 30px;\n  box-sizing: border-box;\n  background-color: ",";\n\n  > h3 {\n    margin-top: 30px;\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n"]);return A=function(){return n},n}function I(){const n=Object(T.a)(["\n  padding: 25px 0 30px;\n\n  > h2 {\n    color: ",";\n    font-size: 25px;\n    line-height: 30px;\n    font-weight: 700;\n    margin-bottom: 22px;\n\n    @media only screen and (max-width: 480px) {\n      font-size: 17px;\n      line-height: 21px;\n    }\n  }\n\n  > .ant-row {\n    > div {\n      @media only screen and (max-width: 991px) {\n        margin-bottom: 40px;\n      }\n    }\n  }\n"]);return I=function(){return n},n}function D(){const n=Object(T.a)(["\n  margin-bottom: 30px;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media only screen and (max-width: 667px) {\n      flex-wrap: wrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      flex-direction: column;\n      padding-left: 25px;\n      padding-right: 25px;\n      padding-bottom: 20px;\n    }\n  }\n\n  .add_card {\n    display: inline-flex;\n    align-items: center;\n    padding: 11px 22px;\n    border-radius: 3px;\n    font-size: 15px;\n    text-transform: capitalize;\n    color: ",";\n    background-color: ",";\n    transition: all 0.3s ease;\n\n    @media only screen and (max-width: 480px) {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n\n    svg {\n      font-size: 22px;\n      margin-right: 5px;\n      margin-left: -5px;\n    }\n\n    &:hover,\n    &:focus {\n      background-color: ",";\n    }\n  }\n\n  .ant-menu {\n    border: 0;\n    display: flex;\n    align-items: center;\n\n    @media only screen and (max-width: 480px) {\n      flex-direction: column;\n      width: 100%;\n      padding-bottom: 10px;\n    }\n\n    li {\n      margin: 0 !important;\n      height: auto;\n      line-height: 1;\n\n      @media only screen and (max-width: 480px) {\n        width: 100%;\n        padding: 0;\n      }\n\n      &.ant-menu-item-selected {\n        background-color: transparent;\n      }\n\n      &:first-child {\n        padding-left: 0;\n      }\n\n      &:last-child {\n        padding-right: 0;\n      }\n\n      a {\n        display: block;\n        font-size: 15px;\n        line-height: 25px;\n        padding: 23px 8px;\n        color: ",";\n        position: relative;\n\n        @media only screen and (max-width: 480px) {\n          padding: 15px 10px;\n        }\n\n        &::after {\n          content: '';\n          display: block;\n          width: 0%;\n          height: 2px;\n          border-radius: 4px;\n          position: absolute;\n          left: 0;\n          bottom: 0;\n          opacity: 0;\n          visibility: hidden;\n          background-color: ",";\n          transition: all 0.3s ease;\n        }\n\n        &.active {\n          font-weight: 700;\n\n          &::after {\n            opacity: 1;\n            visibility: visible;\n            width: 100%;\n          }\n        }\n\n        &:hover {\n          &::after {\n            opacity: 1;\n            visibility: visible;\n            width: 100%;\n          }\n        }\n\n        &:hover,\n        &:focus {\n          text-decoration: none;\n        }\n      }\n    }\n  }\n"]);return D=function(){return n},n}function L(){const n=Object(T.a)(["\n  flex-shrink: 0;\n\n  a {\n    margin-right: 30px;\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n\n    fill: ",";\n    cursor: pointer;\n    transition: all 0.2s ease;\n\n    &:first-child {\n      margin-left: 0;\n    }\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &.twitter {\n      &:hover {\n        fill: ",";\n      }\n    }\n\n    &.facebook {\n      &:hover {\n        fill: ",";\n      }\n    }\n\n    &.instagram {\n      &:hover {\n        fill: ",";\n      }\n    }\n  }\n"]);return L=function(){return n},n}function B(){const n=Object(T.a)(["\n  > * {\n    max-width: 864px;\n    width: 100%;\n  }\n\n  h2 {\n    font-size: 25px;\n    line-height: 28px;\n    font-weight: 700;\n    color: ",";\n    margin-bottom: 23px;\n    @media only screen and (max-width: 480px) {\n      font-size: 22px;\n      margin-bottom: 15px;\n    }\n  }\n\n  p {\n    font-size: 15px;\n    line-height: 25px;\n    color: ",";\n    margin-bottom: 30px;\n  }\n"]);return B=function(){return n},n}function q(){const n=Object(T.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  @media only screen and (max-width: 667px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-bottom: 30px;\n  }\n"]);return q=function(){return n},n}function H(){const n=Object(T.a)(["\n  width: 180px;\n  height: 180px;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 5px solid ",";\n  box-shadow: 0 3px 6px ",";\n  margin-bottom: 27px;\n  @media only screen and (max-width: 480px) {\n    width: 150px;\n    height: 150px;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);return H=function(){return n},n}function W(){const n=Object(T.a)(["\n  margin-top: -139px;\n  @media only screen and (max-width: 480px) {\n    margin-top: -120px;\n  }\n"]);return W=function(){return n},n}function G(){const n=Object(T.a)(["\n  height: 400px;\n  @media only screen and (max-width: 480px) {\n    height: 250px;\n  }\n"]);return G=function(){return n},n}function R(){const n=Object(T.a)([""]);return R=function(){return n},n}const V=P.d.div(R()),U=P.d.div(G()),Y=P.d.div(W()),J=P.d.div(H(),Object(M.a)("color.1","#ffffff"),Object(M.a)("boxShadow.1","rgba(26, 68, 116, 0.16)")),$=P.d.div(q()),Z=P.d.div(B(),Object(M.a)("text.0","#2C2C2C"),Object(M.a)("text.0","#2C2C2C")),K=P.d.div(L(),Object(M.a)("color.6","#273343"),Object(M.a)("color.8","#55ADEE"),Object(M.a)("color.7","#3b5998"),Object(M.a)("color.12","#e4405f")),Q=P.d.div(D(),Object(M.a)("border.3","#E6E6E6"),Object(M.a)("border.3","#E6E6E6"),Object(M.a)("color.1","#ffffff"),Object(M.a)("primary.0","#008489"),Object(M.a)("primary.1","#399C9F"),Object(M.a)("text.0","#2C2C2C"),Object(M.a)("primary.0","#008489")),X=P.d.div(I(),Object(M.a)("text.0","#2C2C2C")),nn=P.d.div(A(),Object(M.a)("color.2","#F7F7F7"));var en=V;var tn=()=>{const n=Object(y.a)("/data/agent.json"),e=n.data,t=n.loading;if(d()(e)||t)return i.a.createElement(f.a,null);const a=e[0],r=a.agent_location,o=a.cell_number,c=a.email;return i.a.createElement(X,null,i.a.createElement(h.a,{content:"Send Message"}),i.a.createElement(O.a,{gutter:30},i.a.createElement(k.a,{lg:16},i.a.createElement(S,null)),i.a.createElement(k.a,{lg:8},i.a.createElement(nn,null,i.a.createElement(h.a,{as:"h3",content:"Phone No"}),i.a.createElement(b.a,{content:o}),i.a.createElement(h.a,{as:"h3",content:"Email"}),i.a.createElement(b.a,{content:c}),i.a.createElement(h.a,{as:"h3",content:"Address"}),i.a.createElement(b.a,{content:r.formattedAddress})))))};const an=n=>{const e=n.match,t=n.className,a=Object(o.useContext)(g.a).loggedIn;return i.a.createElement(Q,null,i.a.createElement(p.a,{fluid:!0},i.a.createElement(r.a,{className:t},i.a.createElement(r.a.Item,{key:"0"},i.a.createElement(c.c,{exact:!0,to:"".concat(e.url)},"Listing")),i.a.createElement(r.a.Item,{key:"1"},i.a.createElement(c.c,{to:"".concat(e.url).concat(w.f)},"Favourite")),i.a.createElement(r.a.Item,{key:"2"},i.a.createElement(c.c,{to:"".concat(e.url).concat(w.e)},"Contact"))),a&&i.a.createElement(c.b,{className:"add_card",to:w.a},i.a.createElement(m.a,null)," Add Hotel")))},rn=n=>{const e=n.match;return i.a.createElement(p.a,{fluid:!0},i.a.createElement(l.b,{exact:!0,path:"".concat(e.path),component:j}),i.a.createElement(l.b,{path:"".concat(e.path).concat(w.f),component:v}),i.a.createElement(l.b,{path:"".concat(e.path).concat(w.e),component:tn}))},on=()=>{const n=Object(y.a)("/data/agent.json"),e=n.data,t=n.loading;if(d()(e)||t)return i.a.createElement(f.a,null);const r=e[0],c=r.first_name,l=r.last_name,s=r.content,g=r.profile_pic,E=r.cover_pic,w=r.social_profile,j="".concat(c," ").concat(l);return i.a.createElement(o.Fragment,null,i.a.createElement(U,{style:{background:"url(".concat(E.url,") center center / cover no-repeat")}}),i.a.createElement(Y,null,i.a.createElement(p.a,{fluid:!0},i.a.createElement(J,null,g?i.a.createElement(u.a,{src:g.url,alt:"Profile Pic"}):i.a.createElement(x.b,null)),i.a.createElement($,null,i.a.createElement(Z,null,i.a.createElement(h.a,{content:j}),i.a.createElement(b.a,{content:s})),i.a.createElement(K,null,i.a.createElement(a.a,{content:"Twitter"},i.a.createElement("a",{href:w.twitter,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m.k,{className:"twitter"}))),i.a.createElement(a.a,{content:"Facebook"},i.a.createElement("a",{href:w.facebook,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m.i,{className:"facebook"}))),i.a.createElement(a.a,{content:"Instagram"},i.a.createElement("a",{href:w.instagram,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m.j,{className:"instagram"}))))))))};function cn(n){return i.a.createElement(en,null,i.a.createElement(g.b,null,i.a.createElement(on,null),i.a.createElement(an,n),i.a.createElement(rn,n)))}},620:function(n,e,t){"use strict";var a=t(88),r=t(0),o=t.n(r),i=t(16),c=t(13),l=t(89);const s=Object(i.d)("p")(l.a,c.k,c.m,c.x,c.q,c.p,Object(l.b)("Heading")),d=n=>{let e=n.content,t=Object(a.a)(n,["content"]);return o.a.createElement(s,t,e)};d.defaultProps={as:"h2",mt:0,mb:0,fontWeight:700},e.a=d},622:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(627),i=t(20),c=t(16),l=t(5);function s(){const n=Object(i.a)(["\n  margin-bottom: 24px;\n\n  .field-label {\n    display: block;\n    color: ",";\n    font-size: 15px;\n    line-height: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n  }\n\n  .ant-input,\n  .ant-picker,\n  .ant-input-number,\n  .ant-input-password {\n    width: 100%;\n    min-height: 48px;\n    border-radius: 3px;\n    border-color: ",";\n    &:focus,\n    &.ant-input-focused,\n    &.ant-picker-focused,\n    &.ant-input-number-focused,\n    &.ant-input-password-focused {\n      box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n    }\n  }\n\n  .ant-checkbox-wrapper {\n    .ant-checkbox {\n      + span {\n        font-size: 15px;\n        font-weight: 700;\n        color: ",";\n        line-height: 1;\n      }\n      .ant-checkbox-inner {\n        border-radius: 0;\n        border-color: ",";\n      }\n      &.ant-checkbox-checked {\n        .ant-checkbox-inner {\n          border-color: ",";\n          background-color: ",";\n        }\n      }\n    }\n  }\n\n  .ant-input-number {\n    max-width: 100px;\n    .ant-input-number-input {\n      min-height: 48px;\n    }\n    &:hover {\n      border-color: ",";\n    }\n  }\n  .ant-input-number-handler:hover {\n    .ant-input-number-handler-up-inner,\n    .ant-input-number-handler-down-inner {\n      color: ",";\n    }\n  }\n\n  .ant-picker {\n    &:hover {\n      border-color: ",";\n    }\n  }\n\n  .ant-select {\n    &.ant-select-single:not(.ant-select-customize-input) {\n      width: 100%;\n      .ant-select-selector {\n        border-radius: 3px;\n        border-color: ",";\n        min-height: 48px;\n        .ant-select-selection-search-input {\n          min-height: 48px;\n        }\n        .ant-select-selection-item {\n          display: flex;\n          align-items: center;\n        }\n      }\n    }\n    &.ant-select-focused {\n      &.ant-select-single:not(.ant-select-customize-input) {\n        .ant-select-selector {\n          box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n        }\n      }\n    }\n  }\n\n  &.has-error {\n    .ant-input,\n    .ant-input-password {\n      border-color: ",";\n    }\n    .feedback {\n      color: ",";\n    }\n    .ant-input-password {\n      .ant-input {\n        border-color: transparent;\n      }\n    }\n  }\n\n  .ant-input-password {\n    .ant-input {\n      min-height: auto;\n      border-radius: initial;\n      border-color: transparent;\n      &:focus {\n        box-shadow: none;\n      }\n    }\n  }\n\n  .ant-radio-group-solid {\n    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n      border-color: ",";\n      background-color: ",";\n      &::before {\n        content: none;\n      }\n      &:hover {\n        color: #fff;\n        &::before {\n          content: none;\n        }\n      }\n    }\n    .ant-radio-button-wrapper {\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  button[type='submit'] {\n    border-radius: 3px;\n    height: 47px;\n    border-color: ",";\n    background-color: ",";\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n    padding-left: 28px;\n    padding-right: 28px;\n    line-height: 1;\n\n    &::after {\n      content: none;\n    }\n  }\n"]);return s=function(){return n},n}var d=c.d.div(s(),Object(l.a)("text.0","#2C2C2C"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("text.0","#2C2C2C"),Object(l.a)("text.1","#909090"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("primary.0","#008489"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("error.0","#F9503D"),Object(l.a)("error.0","#F9503D"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"));e.a=({className:n,label:e,labelTag:t,htmlFor:a,children:i,error:c})=>{const l=["form-control"];return c&&l.push("has-error"),n&&l.push(n),r.a.createElement(d,{className:l.join(" ")},e&&r.a.createElement(o.a,{className:"field-label",as:t,htmlFor:a,content:e}),i,c&&r.a.createElement("div",{className:"feedback"},c))}},627:function(n,e,t){"use strict";var a=t(88),r=t(0),o=t.n(r),i=t(16),c=t(13),l=t(89);const s=Object(i.d)("label")(l.a,c.k,c.m,c.x,c.q,c.p,Object(l.b)("Heading"));e.a=n=>{let e=n.htmlFor,t=n.content,r=Object(a.a)(n,["htmlFor","content"]);return o.a.createElement(s,Object.assign({htmlFor:e},r),t)}},637:function(n,e,t){"use strict";var a=t(150),r=t.n(a),o=t(42),i=t(27),c=t(218),l=t(0);function s(n){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function n(e,t="GET",a={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},o={}){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={method:t,headers:a},"POST"!==t&&"PUT"!==t||(c=Object(i.a)(Object(i.a)({},c),{},{body:o})),n.abrupt("return",fetch(e,c).then(n=>Promise.resolve(n.json())).catch(n=>Promise.reject(n)));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,e){switch(e.type){case"FETCH_INIT":return Object(i.a)(Object(i.a)({},n),{},{loading:!0,error:!1});case"FETCH_SUCCESS":return Object(i.a)(Object(i.a)({},n),{},{data:e.payload.slice(0,n.limit),total:e.payload,loading:!1,error:!1});case"FETCH_FAILURE":return Object(i.a)(Object(i.a)({},n),{},{loading:!1,error:!0});case"LOAD_MORE":return Object(i.a)(Object(i.a)({},n),{},{data:[...n.data,...n.total.slice(n.data.length,n.data.length+n.limit)],loading:!1,error:!1});default:throw new Error}}e.a=(n,e=10,t=[])=>{const a=Object(l.useState)(n),d=Object(o.a)(a,2),p=d[0],u=d[1],h=Object(l.useReducer)(m,{loading:!1,error:!1,data:t,total:t,limit:e}),b=Object(o.a)(h,2),x=b[0],f=b[1];Object(l.useEffect)(()=>{let n=!1;return function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({type:"FETCH_INIT"}),e.prev=1,e.next=4,s(p);case 4:t=e.sent,n||f({type:"FETCH_SUCCESS",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n||f({type:"FETCH_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()(),()=>{n=!0}},[p]);return Object(i.a)(Object(i.a)({},x),{},{doFetch:n=>{u(n)},loadMoreData:()=>{f({type:"LOAD_MORE"})}})}},640:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(641);e.a=({children:n,className:e,fullWidth:t,noGutter:a,fluid:i})=>r.a.createElement(o.a,{className:e,fullWidth:t,noGutter:a,fluid:i},n)},641:function(n,e,t){"use strict";var a=t(20),r=t(16);function o(){const n=Object(a.a)(["\n      width: 100% !important;\n      max-width: 1920px !important;\n      @media only screen and (min-width: 1441px) {\n        padding-left: 75px;\n        padding-right: 75px;\n      }\n    "]);return o=function(){return n},n}function i(){const n=Object(a.a)(["\n      padding-left: 30px;\n      padding-right: 30px;\n\n      @media only screen and (max-width: 480px) {\n        padding-left: 25px;\n        padding-right: 25px;\n      }\n    "]);return i=function(){return n},n}function c(){const n=Object(a.a)(["\n        padding-left: 0;\n        padding-right: 0;\n      "]);return c=function(){return n},n}function l(){const n=Object(a.a)(["\n      width: 100%;\n      max-width: none !important;\n    "]);return l=function(){return n},n}function s(){const n=Object(a.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  ",";\n  ",";\n\n  ","\n\n  @media (min-width: 768px) {\n    max-width: 750px;\n    width: 100%;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 970px;\n    width: 100%;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1170px;\n    width: 100%;\n  }\n"]);return s=function(){return n},n}const d=r.d.div(s(),n=>n.fullWidth&&Object(r.c)(l()),n=>n.noGutter&&Object(r.c)(c())||Object(r.c)(i()),n=>n.fluid&&Object(r.c)(o()));e.a=d},646:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(210);e.a=n=>{const e=n.rating,t=n.ratingCount,a=n.type,i=n.ratingFieldName;let c,l,s,d,m=[];if(e&&0!==e)for(l=Math.floor(e),c=0;c<5;c++)c<l?m.push(r.a.createElement(o.g,{key:c})):m.push(r.a.createElement(o.h,{key:c}));return s=e&&5===e?"Awesome":4<=e&&e<5?"Good":3<=e&&e<4?"Average":2<=e&&e<3?"Bad":e>=1?"Terrible":"",d=t?"("+t+")":"",r.a.createElement(r.a.Fragment,null,a&&"bulk"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,m),r.a.createElement("strong",null," ".concat(s)," ","".concat(d))):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,i)," ",m))}},651:function(n,e,t){"use strict";var a=t(42),r=t(0),o=t.n(r);var i=n=>{const e=Object(r.useState)(n),t=Object(a.a)(e,2),o=t[0],i=t[1];return[o,Object(r.useCallback)(()=>i(n=>!n),[])]},c=t(20),l=t(16),s=t(5);function d(){const n=Object(c.a)(["\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  padding: 10px;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    border: 0;\n    box-shadow: none;\n    outline: none;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n    ","\n    path {\n      fill: ",";\n      stroke: ",";\n      stroke-width: 2px;\n      transition: fill 1s ease;\n    }\n  }\n\n  &.active {\n    svg {\n      ",";\n      path {\n        fill: ",";\n      }\n    }\n  }\n"]);return d=function(){return n},n}function m(){const n=Object(c.a)(["\n  animation: "," 0.55s cubic-bezier(0.38, 0.7, 0.6, 0.29);\n"]);return m=function(){return n},n}function p(){const n=Object(c.a)(["\n  animation: "," 0.4s cubic-bezier(0.38, 0.7, 0.6, 0.29);\n"]);return p=function(){return n},n}function u(){const n=Object(c.a)(["\n  0% {\n    transform: scale(1.34) rotateY(90deg);\n  }\n  50% {\n    transform: scale(1) rotateY(0);\n  }\n"]);return u=function(){return n},n}function h(){const n=Object(c.a)(["\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  50% {\n    transform: scale(1.34) rotateY(90deg);\n  }\n"]);return h=function(){return n},n}const b=Object(l.e)(h()),x=Object(l.e)(u()),f=Object(l.c)(p(),b),g=Object(l.c)(m(),x);var E=l.d.button(d(),g,Object(s.a)("color.5","rgba(0, 0, 0, 0.25)"),Object(s.a)("color.1","#ffffff"),f,Object(s.a)("color.4","#FC5C63"));const y=({className:n,content:e,onClick:t})=>{const r=i(!1),c=Object(a.a)(r,2),l=c[0],s=c[1],d=["favorite"];n&&d.push(n);return o.a.createElement(E,{onClick:n=>{s(),t(!l)},className:"".concat(d.join(" ")," ").concat(l?"active":"")},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.64 18.232"},o.a.createElement("path",{d:"M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",transform:"translate(-47 -55)"})),o.a.createElement("span",null,e))};y.defaultProps={onClick:()=>{}};e.a=y},657:function(n,e,t){"use strict";var a=t(88),r=t(0),o=t.n(r),i=t(16),c=t(89);const l=Object(i.d)("img")({display:"block",maxWidth:"100%",height:"auto"},c.a,Object(c.b)("Image")),s=n=>{let e=n.src,t=n.alt,r=Object(a.a)(n,["src","alt"]);return o.a.createElement(l,Object.assign({src:e,alt:t},r))};e.a=s,s.defaultProps={m:0}},673:function(n,e,t){"use strict";t(87),t(761)},683:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(20);function i(){const n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    width: 52px;\n    height: 100px;\n    display: inline-block;\n  }\n"]);return i=function(){return n},n}var c=t(16).d.div(i());const l=({fill:n,className:e})=>{const t=["loader"];return e&&t.push(e),r.a.createElement(c,{className:t.join(" ")},r.a.createElement("svg",{enableBackground:"new 0 0 0 0"},r.a.createElement("circle",{fill:n,stroke:"none",cx:"6",cy:"50",r:"6"},r.a.createElement("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})),r.a.createElement("circle",{fill:n,stroke:"none",cx:"26",cy:"50",r:"6"},r.a.createElement("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})),r.a.createElement("circle",{fill:n,stroke:"none",cx:"46",cy:"50",r:"6"},r.a.createElement("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"}))))};l.defaultProps={fill:"#008489"};e.a=l},684:function(n,e,t){"use strict";var a=t(3),r=t(0),o=t(216),i=t(221),c=function(n){return n?"function"===typeof n?n():n:null},l=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},s=r.forwardRef((function(n,e){var t=n.prefixCls,s=n.title,d=n.content,m=l(n,["prefixCls","title","content"]),p=(0,r.useContext(i.b).getPrefixCls)("popover",t);return r.createElement(o.a,Object(a.a)({},m,{prefixCls:p,ref:e,overlay:function(n){return r.createElement(r.Fragment,null,s&&r.createElement("div",{className:"".concat(n,"-title")},c(s)),r.createElement("div",{className:"".concat(n,"-inner-content")},c(d)))}(p)}))}));s.displayName="Popover",s.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};e.a=s},685:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(20),i=t(16),c=t(5);function l(){const n=Object(o.a)(["\n  padding-top: 7px;\n\n  @media only screen and (min-width: 481px) {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  > a {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 700;\n    color: ",";\n    transition: all 0.3s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: ",";\n    }\n\n    svg {\n      margin-right: 5px;\n      width: 18px;\n      height: 18px;\n    }\n  }\n"]);return l=function(){return n},n}function s(){const n=Object(o.a)(["\n  position: relative;\n  transition: all 0.3s ease-out;\n"]);return s=function(){return n},n}function d(){const n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 13px;\n  margin-top: 4px;\n  /* @media only screen and (max-width: 480px) {\n\t\tmargin-top: 7px;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t} */\n\n  span {\n    flex-shrink: 0;\n  }\n\n  i {\n    color: ",";\n  }\n\n  svg {\n    fill: ",";\n  }\n\n  strong {\n    margin-top: -2px;\n    font-weight: 700;\n    margin-left: 8px;\n    /* @media only screen and (max-width: 480px) {\n\t\t\tmargin-left: 0;\n\t\t} */\n  }\n\n  .ant-rate {\n    /* margin-top: -2px; */\n    .ant-rate-star {\n      margin-right: 4px;\n      font-size: 15px;\n    }\n  }\n"]);return d=function(){return n},n}function m(){const n=Object(o.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 1px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return m=function(){return n},n}function p(){const n=Object(o.a)(["\n  color: ",";\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media only screen and (max-width: 480px) {\n    font-size: 15px;\n    margin: 4px 0 5px;\n  }\n\n  a {\n    color: ",";\n    font-size: 17px;\n    font-weight: 700;\n    margin-bottom: 2px;\n    @media only screen and (max-width: 480px) {\n      font-size: 15px;\n      margin: 4px 0 5px;\n    }\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return p=function(){return n},n}function u(){const n=Object(o.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return u=function(){return n},n}function h(){const n=Object(o.a)(["\n  padding: 15px;\n  border-width: 1px;\n  border-style: solid;\n  border-top-width: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-color: ",";\n  transition: border-color 0.2s ease;\n"]);return h=function(){return n},n}function b(){const n=Object(o.a)(["\n  position: absolute;\n  top: 10px;\n  right: 8px;\n  z-index: 9;\n"]);return b=function(){return n},n}function x(){const n=Object(o.a)(["\n  > img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .react-multi-carousel-list {\n    min-height: 150px;\n    background-color: #e9e8ec;\n  }\n\n  .react-multi-carousel-item {\n    height: 170px;\n  }\n\n  .react-multiple-carousel__arrow {\n    top: 0;\n    width: 22%;\n    height: 100%;\n    border-radius: 0;\n    padding: 0;\n    opacity: 0;\n    visibility: hidden;\n    z-index: 1;\n\n    &::before {\n      font-weight: 700;\n    }\n  }\n\n  .react-multiple-carousel__arrow--left {\n    left: 0;\n    background: linear-gradient(\n      to left,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    &:hover {\n      background: linear-gradient(\n        to left,\n        transparent 0%,\n        rgba(0, 0, 0, 0.25) 100%\n      );\n    }\n  }\n\n  .react-multiple-carousel__arrow--right {\n    right: 0;\n    background: linear-gradient(\n      to right,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    &:hover {\n      background: linear-gradient(\n        to right,\n        transparent 0%,\n        rgba(0, 0, 0, 0.25) 100%\n      );\n    }\n  }\n\n  .react-multi-carousel-dot-list {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    transition: bottom 0.3s ease;\n  }\n\n  .react-multi-carousel-dot {\n    align-items: center;\n\n    button {\n      width: 6px;\n      height: 6px;\n      border: 0;\n      background-color: ",";\n      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);\n      transition: all 0.3s ease;\n    }\n  }\n\n  .react-multi-carousel-dot--active {\n    button {\n      width: 8px;\n      height: 8px;\n      background-color: ",";\n    }\n  }\n"]);return x=function(){return n},n}function f(){const n=Object(o.a)(["\n  position: relative;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 30px;\n\n  @media only screen and (max-width: 480px) {\n    margin-bottom: 20px;\n  }\n\n  &.has_btn {\n    .button_group {\n      @media only screen and (min-width: 481px) {\n        position: absolute;\n        top: 5px;\n        padding-top: 3px;\n      }\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 6px 12px ",";\n\n    .content_wrapper {\n      border-color: transparent;\n    }\n\n    &.has_btn {\n      .meta_wrapper {\n        .rating {\n          @media only screen and (min-width: 481px) {\n            opacity: 0;\n            visibility: hidden;\n          }\n        }\n      }\n\n      @media only screen and (min-width: 481px) {\n        .button_group {\n          top: 19px;\n          opacity: 1;\n          visibility: visible;\n        }\n      }\n    }\n\n    .react-multiple-carousel__arrow {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .react-multi-carousel-dot-list {\n      bottom: 0;\n    }\n  }\n"]);return f=function(){return n},n}const g=i.d.div(f(),Object(c.a)("boxShadow.2","rgba(0, 0, 0, 0.16)")),E=i.d.div(x(),Object(c.a)("color.3","#E9E8E8"),Object(c.a)("color.1","#ffffff")),y=i.d.div(b()),w=i.d.div(h(),Object(c.a)("border.3","#E6E6E6")),j=i.d.div(u(),Object(c.a)("text.1","#909090")),v=i.d.div(p(),Object(c.a)("text.0","#2C2C2C"),Object(c.a)("text.0","#2C2C2C"),Object(c.a)("primary.0","#008489")),O=i.d.div(m(),Object(c.a)("text.0","#2C2C2C")),k=i.d.div(d(),Object(c.a)("text.0","#2C2C2C"),Object(c.a)("primary.0","#008489"),Object(c.a)("primary.0","#008489")),C=i.d.div(s()),_=i.d.div(l(),Object(c.a)("primary.0","#008489"),Object(c.a)("primary.1","#399C9F"));var N=g;e.a=({className:n,favorite:e,location:t,title:a,price:o,rating:i,editBtn:c,viewDetailsBtn:l,children:s})=>{let d=l||c?"has_btn ".concat(n):n;return r.a.createElement(N,{className:"grid_card ".concat(d).trim()},r.a.createElement(E,{className:"media_wrapper"},s),r.a.createElement(w,{className:"content_wrapper"},t&&r.a.createElement(j,null,t),a&&r.a.createElement(v,null,a),r.a.createElement(C,{className:"meta_wrapper"},o&&r.a.createElement(O,{className:"price"},o),i&&r.a.createElement(k,{className:"rating"},i),l||c?r.a.createElement(_,{className:"button_group"},l,c):null)),e&&r.a.createElement(y,null,e))}},701:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return c}));var a=t(0),r=t.n(a),o=t(853);const i=n=>r.a.createElement(o.a,Object.assign({height:400,width:400,speed:2,className:"placeholder",backgroundColor:"#f3f3f3",foregroundColor:"#e9e8ec"},n),r.a.createElement("circle",{cx:"39.34",cy:"17.32",r:"0.71"}),r.a.createElement("circle",{cx:"751.46",cy:"58.81",r:"40.21"}),r.a.createElement("rect",{x:"605.25",y:"39.6",rx:"0",ry:"0",width:"66",height:"41"}),r.a.createElement("rect",{x:"639.25",y:"59.6",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"518.25",y:"38.6",rx:"0",ry:"0",width:"66",height:"41"}),r.a.createElement("rect",{x:"435.25",y:"40.6",rx:"0",ry:"0",width:"66",height:"41"}),r.a.createElement("rect",{x:"264.25",y:"216.6",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"31.25",y:"451.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),r.a.createElement("rect",{x:"399.25",y:"531.94",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"217.25",y:"450.94",rx:"0",ry:"0",width:"176.33",height:"147.66"}),r.a.createElement("rect",{x:"415.25",y:"449.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),r.a.createElement("rect",{x:"608.17",y:"448.94",rx:"0",ry:"0",width:"171.75",height:"147.66"}),r.a.createElement("rect",{x:"30.25",y:"609.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),r.a.createElement("rect",{x:"417.25",y:"612.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),r.a.createElement("rect",{x:"609.25",y:"612.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),r.a.createElement("rect",{x:"220.25",y:"612.94",rx:"0",ry:"0",width:"174.04",height:"147.66"}),r.a.createElement("rect",{x:"9.63",y:"18.61",rx:"0",ry:"0",width:"381.03",height:"186"}),r.a.createElement("rect",{x:"80.63",y:"132.61",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"9.63",y:"218.61",rx:"0",ry:"0",width:"183",height:"25"}),r.a.createElement("rect",{x:"8.63",y:"258.61",rx:"0",ry:"0",width:"381",height:"43"}),r.a.createElement("rect",{x:"8.63",y:"319.61",rx:"0",ry:"0",width:"204",height:"24"}),r.a.createElement("rect",{x:"229.63",y:"320.61",rx:"0",ry:"0",width:"164.45",height:"23"}),r.a.createElement("rect",{x:"336.63",y:"328.61",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("circle",{cx:"20.56",cy:"370.54",r:"11.93"}),r.a.createElement("circle",{cx:"53.63",cy:"376.61",r:"1"}),r.a.createElement("circle",{cx:"52.56",cy:"370.54",r:"11.93"}),r.a.createElement("circle",{cx:"81.56",cy:"370.54",r:"11.93"}),r.a.createElement("circle",{cx:"112.56",cy:"371.54",r:"11.93"}),r.a.createElement("circle",{cx:"141.56",cy:"371.54",r:"11.93"}),r.a.createElement("rect",{x:"168.63",y:"360.61",rx:"0",ry:"0",width:"104",height:"24"}),r.a.createElement("rect",{x:"213.63",y:"397.61",rx:"0",ry:"0",width:"0",height:"0"})),c=()=>r.a.createElement(o.a,{height:180,width:180,speed:3,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},r.a.createElement("circle",{cx:"76",cy:"60",r:"1"}),r.a.createElement("circle",{cx:"90",cy:"50",r:"41"}),r.a.createElement("rect",{x:"16",y:"94",rx:"0",ry:"0",width:"149",height:"80"}))},732:function(n,e,t){"use strict";t.d(e,"a",(function(){return O}));t(208);var a=t(122),r=t(0),o=t.n(r),i=t(88),c=t(16),l=t(13),s=t(89);const d=Object(c.d)("div")(s.a,Object(s.b)("Box"),n=>n.flexBox&&Object(c.c)({display:"flex"},l.j,l.i,l.a,l.o,Object(s.b)("FlexBox"))),m=n=>{let e=n.children,t=Object(i.a)(n,["children"]);return o.a.createElement(d,t,e)};var p=m;m.defaultProps={as:"div"};var u=t(212),h=t(610),b=t(214),x=t(646),f=t(651),g=t(854),E=t.n(g),y=(t(857),t(685));const w={desktop:{breakpoint:{max:3e3,min:1024},items:1,paritialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,paritialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:1,paritialVisibilityGutter:30}};var j=({title:n,rating:e,location:t,price:a,ratingCount:r,gallery:i,slug:c,link:l})=>o.a.createElement(y.a,{isCarousel:!0,favorite:o.a.createElement(f.a,{onClick:n=>{console.log(n)}}),location:t.formattedAddress,title:o.a.createElement(b.a,{link:"".concat(l,"/").concat(c),content:n}),price:"Rp ".concat(a,"/ Day - Free Cancellation"),rating:o.a.createElement(x.a,{rating:e,ratingCount:r,type:"bulk"}),viewDetailsBtn:o.a.createElement(b.a,{link:"".concat(l,"/").concat(c),icon:o.a.createElement(h.a,null),content:"View Details"})},o.a.createElement(E.a,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,containerClass:"container",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",renderDotsOutside:!1,responsive:w,showDots:!0,sliderClass:"",slidesToSlide:1},i.map(({url:n,title:e},t)=>o.a.createElement("img",{src:n,alt:e,key:t,draggable:!1,style:{width:"100%",height:"100%",objectFit:"cover",position:"relative"}}))));const v=({handleLoadMore:n,showButton:e,buttonText:t,loading:r,loadMoreComponent:i,loadMoreStyle:c})=>!!e&&o.a.createElement(p,Object.assign({className:"loadmore_wrapper"},c),i||o.a.createElement(a.a,{loading:r,onClick:n},t||"Load More"));function O({data:n=[],totalItem:e,limit:t,columnWidth:a,paginationComponent:r,handleLoadMore:i,loadMoreComponent:c,placeholder:l,loading:s,buttonText:d,rowStyle:m,columnStyle:h,loadMoreStyle:b,link:x}){const f=t?Number(t):1,g=Array(f).fill(0);let E=n.length<e;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,Object.assign({className:"grid_wrapper"},m),n&&n.length?n.map(n=>o.a.createElement(p,Object.assign({className:"grid_column",width:a,key:n.id},h),o.a.createElement(j,Object.assign({link:x},n)))):null,s&&g.map((n,e)=>o.a.createElement(p,Object.assign({className:"grid_column",width:a,key:e},h),l||o.a.createElement(u.a,{content:"Loading ..."})))),E&&o.a.createElement(v,{showButton:E,handleLoadMore:i,loading:s,buttonText:d,loadMoreComponent:c,loadMoreStyle:b}),r&&o.a.createElement(p,{className:"pagination_wrapper"},r))}O.defaultProps={rowStyle:{flexBox:!0,flexWrap:"wrap",mr:["-10px","-10px","-10px","-10px","-10px","-15px"],ml:["-10px","-10px","-10px","-10px","-10px","-15px"]},columnStyle:{pr:["10px","10px","10px","10px","10px","15px"],pl:["10px","10px","10px","10px","10px","15px"]},loadMoreStyle:{flexBox:!0,justifyContent:"center",mt:"1rem"}}},761:function(n,e,t){}}]);
//# sourceMappingURL=AgentDetailsViewPage.b1c2b6f9.chunk.js.map