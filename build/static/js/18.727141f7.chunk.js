(this.webpackJsonpharees=this.webpackJsonpharees||[]).push([[18],{383:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));c(0);var n=c(491),a=c(3);function l(e){var t=e.text,c=e.onclick;return Object(a.jsxs)("button",{className:"create-btn",onClick:c,children:[Object(a.jsx)(n.a,{}),t]})}},384:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0);var n=c(454),a=c(416),l=c(3);function i(e){var t=e.onConfirm,c=e.visible,i=e.onCancel;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(n.a,{className:"delete-popup",title:null,visible:c,onCancel:i,footer:null,closable:!1,centered:!0,children:Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("div",{children:Object(l.jsx)(a.a,{})}),Object(l.jsx)("h3",{children:"Sure want to delete?"}),Object(l.jsxs)("div",{className:"action-btns",children:[Object(l.jsx)("button",{className:"btn cancel",onClick:i,children:"Cancel"}),Object(l.jsx)("button",{className:"btn confirm",onClick:t,children:"Confirm Deletion"})]})]})})})}},387:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(13),a="#04d182",l="#ff6b72",i="#ffc107",r=["#3e82f7",a,l,i,"#a461d8","#fa8c16","#17bcff",l,a,i],s={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(r),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}};Object(n.a)({},s),[].concat(r),[].concat(r)},394:function(e,t,c){"use strict";var n=c(4),a=c(5),l=c(0),i=c(7),r=c(12),s=c(6),o=c.n(s),d=c(59),b=c(33),j=l.forwardRef((function(e,t){var c,n=e.prefixCls,s=void 0===n?"rc-switch":n,j=e.className,u=e.checked,h=e.defaultChecked,m=e.disabled,f=e.loadingIcon,O=e.checkedChildren,x=e.unCheckedChildren,p=e.onClick,v=e.onChange,C=e.onKeyDown,N=Object(r.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),y=Object(d.a)(!1,{value:u,defaultValue:h}),g=Object(i.a)(y,2),k=g[0],w=g[1];function E(e,t){var c=k;return m||(w(c=e),null===v||void 0===v||v(c,t)),c}var I=o()(s,j,(c={},Object(a.a)(c,"".concat(s,"-checked"),k),Object(a.a)(c,"".concat(s,"-disabled"),m),c));return l.createElement("button",Object.assign({},N,{type:"button",role:"switch","aria-checked":k,disabled:m,className:I,ref:t,onKeyDown:function(e){e.which===b.a.LEFT?E(!1,e):e.which===b.a.RIGHT&&E(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var t=E(!k,e);null===p||void 0===p||p(t,e)}}),f,l.createElement("span",{className:"".concat(s,"-inner")},k?O:x))}));j.displayName="Switch";var u=j,h=c(82),m=c(174),f=c(72),O=c(58),x=c(44),p=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},v=l.forwardRef((function(e,t){var c,i=e.prefixCls,r=e.size,s=e.loading,d=e.className,b=void 0===d?"":d,j=e.disabled,v=p(e,["prefixCls","size","loading","className","disabled"]);Object(x.a)("checked"in v||!("value"in v),"Switch","`value` is not a valid prop, do you mean `checked`?");var C=l.useContext(f.b),N=C.getPrefixCls,y=C.direction,g=l.useContext(O.b),k=N("switch",i),w=l.createElement("div",{className:"".concat(k,"-handle")},s&&l.createElement(h.a,{className:"".concat(k,"-loading-icon")})),E=o()((c={},Object(a.a)(c,"".concat(k,"-small"),"small"===(r||g)),Object(a.a)(c,"".concat(k,"-loading"),s),Object(a.a)(c,"".concat(k,"-rtl"),"rtl"===y),c),b);return l.createElement(m.a,{insertExtraNode:!0},l.createElement(u,Object(n.a)({},v,{prefixCls:k,className:E,disabled:j||s,ref:t,loadingIcon:w})))}));v.__ANT_SWITCH=!0,v.displayName="Switch";t.a=v},401:function(e,t,c){"use strict";var n=c(5),a=c(4),l=c(7),i=c(0),r=c(6),s=c.n(r),o=c(34),d=c(94),b=c(72),j=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},u=function(e){var t,c=e.prefixCls,l=e.className,r=e.checked,o=e.onChange,d=e.onClick,u=j(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,i.useContext(b.b).getPrefixCls)("tag",c),m=s()(h,(t={},Object(n.a)(t,"".concat(h,"-checkable"),!0),Object(n.a)(t,"".concat(h,"-checkable-checked"),r),t),l);return i.createElement("span",Object(a.a)({},u,{className:m,onClick:function(e){null===o||void 0===o||o(!r),null===d||void 0===d||d(e)}}))},h=c(177),m=c(174),f=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},O=new RegExp("^(".concat(h.a.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(h.b.join("|"),")$")),p=function(e,t){var c,r=e.prefixCls,j=e.className,u=e.style,h=e.children,p=e.icon,v=e.color,C=e.onClose,N=e.closeIcon,y=e.closable,g=void 0!==y&&y,k=f(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=i.useContext(b.b),E=w.getPrefixCls,I=w.direction,S=i.useState(!0),P=Object(l.a)(S,2),T=P[0],F=P[1];i.useEffect((function(){"visible"in k&&F(k.visible)}),[k.visible]);var A=function(){return!!v&&(O.test(v)||x.test(v))},R=Object(a.a)({backgroundColor:v&&!A()?v:void 0},u),z=A(),V=E("tag",r),D=s()(V,(c={},Object(n.a)(c,"".concat(V,"-").concat(v),z),Object(n.a)(c,"".concat(V,"-has-color"),v&&!z),Object(n.a)(c,"".concat(V,"-hidden"),!T),Object(n.a)(c,"".concat(V,"-rtl"),"rtl"===I),c),j),K=function(e){e.stopPropagation(),null===C||void 0===C||C(e),e.defaultPrevented||"visible"in k||F(!1)},_="onClick"in k||h&&"a"===h.type,B=Object(o.a)(k,["visible"]),H=p||null,L=H?i.createElement(i.Fragment,null,H,i.createElement("span",null,h)):h,J=i.createElement("span",Object(a.a)({},B,{ref:t,className:D,style:R}),L,g?N?i.createElement("span",{className:"".concat(V,"-close-icon"),onClick:K},N):i.createElement(d.a,{className:"".concat(V,"-close-icon"),onClick:K}):null);return _?i.createElement(m.a,null,J):J},v=i.forwardRef(p);v.displayName="Tag",v.CheckableTag=u;t.a=v},461:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return V}));var n=c(0),a=c(357),l=c(39),i=c(11),r=c(3);function s(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(l.b,{to:"".concat(i.c,"/home"),children:"Home"})}),Object(r.jsx)(a.a.Item,{children:"Technician"})]})}var o=c(110),d=c(227),b=c(355),j=c(401),u=c(489),h=c(451),m=c(448),f=c(209),O=c(372),x=c(416),p=[{id:1,technicianName:"Asif Khan",teamName:"AC",teamlead:!1,phoneNumber:"+96668025731"},{id:2,technicianName:"Prem vihratt",teamName:"Carpentary",teamlead:!1,phoneNumber:"+96668025912"},{id:3,technicianName:"Sarat ravit",teamName:"ASE Company",teamlead:!0,phoneNumber:"+96668025700"}],v=c(383),C=c(57),N=c(387),y=c(40),g=c(454),k=c(94),w=c(139),E=c(389),I=c(390),S=c(350),P=c(394),T=w.a.Option,F=Object(r.jsxs)(w.a,{disabled:!0,value:"+966",style:{width:80},children:[Object(r.jsx)(T,{value:"86",children:"+86"}),Object(r.jsx)(T,{value:"966",children:"+966"}),Object(r.jsx)(T,{value:"87",children:"+87"})]});function A(e){var t=e.visible,c=e.onCancel;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(g.a,{className:"display-modal",title:null,visible:t,onCancel:c,footer:null,closable:!1,centered:!0,children:[Object(r.jsx)("h3",{children:"Asif Khan"}),Object(r.jsx)("div",{className:"create-form",children:Object(r.jsxs)(E.a,{gutter:16,children:[Object(r.jsx)(I.a,{span:24,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Address"}),Object(r.jsx)(S.a,{disabled:!0,defaultValue:"western region, Riyad city, 12 nahda street, 3rd floor"})]})}),Object(r.jsx)(I.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Team Name"}),Object(r.jsxs)(w.a,{disabled:!0,defaultValue:"Carpentry",dropdownAlign:{offset:[0,8]},children:[Object(r.jsx)(T,{value:"Carpentry",children:"Carpentry"}),Object(r.jsx)(T,{value:"Electricity",children:"Electricity"}),Object(r.jsx)(T,{value:"Security",children:"Security"})]})]})}),Object(r.jsx)(I.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Phone Number"}),Object(r.jsx)(S.a,{disabled:!0,defaultValue:"68025731",addonBefore:F})]})}),Object(r.jsx)(I.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Email Address"}),Object(r.jsx)(S.a,{disabled:!0,defaultValue:"k.bommini@gmail.com"})]})}),Object(r.jsx)(I.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Username"}),Object(r.jsx)(S.a,{disabled:!0,defaultValue:"k.bommini@gmail.com"})]})}),Object(r.jsx)(I.a,{span:12,children:Object(r.jsxs)("div",{className:"input is-active",children:[Object(r.jsx)("label",{htmlFor:"",children:"Team Lead"}),Object(r.jsx)(P.a,{disabled:!0,defaultChecked:!0})]})})]})}),Object(r.jsx)(k.a,{onClick:c,className:"close-btn"})]})})}var R=c(384);function z(){var e=Object(y.g)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],l=c[1],s=Object(n.useState)(!1),g=Object(o.a)(s,2),k=g[0],w=g[1],E=Object(n.useState)(!1),I=Object(o.a)(E,2),S=I[0],P=I[1];Object(n.useEffect)((function(){console.log(a)}),[a]);var T=[{title:"ID",dataIndex:"id",hidden:!0},{title:"Technician Name",dataIndex:"technicianName",render:function(e,t,c){return Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)(b.a,{size:30,className:"font-size-sm",style:{backgroundColor:N.a[c%10]},children:C.a.getNameInitial(e)}),Object(r.jsx)("span",{className:"ml-2 fw-600",children:e})]})}},{title:"Team Name",dataIndex:"teamName",render:function(e){return Object(r.jsx)("span",{className:"fw-600",children:e})}},{title:"Team Lead",dataIndex:"teamlead",render:function(e){return!0===e?Object(r.jsx)(j.a,{color:"#2A9F20",children:"true"}):Object(r.jsx)(j.a,{color:"#EB001B",children:"false"})}},{title:"Phone Number",dataIndex:"phoneNumber"},{title:"Action",key:"action",render:function(t,c){return Object(r.jsxs)(u.b,{children:[Object(r.jsx)(f.a,{className:"display-btn",onClick:function(){return e=c._id,l(e),void w(!0);var e}}),Object(r.jsx)(O.a,{className:"edit-btn",onClick:function(){return e.push("".concat(i.c,"/technician/update/").concat(c.id))}}),Object(r.jsx)(x.a,{className:"delete-btn",onClick:function(){return e=c._id,l(e),void P(!0);var e}})]})}}].filter((function(e){return!e.hidden}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h.a,{title:"Technician",bordered:!1,style:{marginBottom:"480px"},extra:Object(r.jsx)(v.a,{text:"Add New Technician",onclick:function(){return e.push("".concat(i.c,"/technician/create"))}}),children:Object(r.jsx)(m.a,{columns:T,dataSource:p,pagination:!1})}),Object(r.jsx)(R.a,{onConfirm:function(){P(!1),d.b.success("Record has been deleted successfully")},visible:S,onCancel:function(){P(!1)}}),Object(r.jsx)(A,{visible:k,onCancel:function(){w(!1)}})]})}function V(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(s,{}),Object(r.jsx)("div",{className:"mt-4",children:Object(r.jsx)(z,{})})]})}}}]);
//# sourceMappingURL=18.727141f7.chunk.js.map