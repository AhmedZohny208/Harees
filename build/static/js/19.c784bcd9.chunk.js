(this.webpackJsonpharees=this.webpackJsonpharees||[]).push([[19],{383:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var c=a(491),n=a(3);function i(e){var t=e.text,a=e.onclick;return Object(n.jsxs)("button",{className:"create-btn",onClick:a,children:[Object(n.jsx)(c.a,{}),t]})}},384:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(0);var c=a(454),n=a(416),i=a(3);function s(e){var t=e.onConfirm,a=e.visible,s=e.onCancel;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a,{className:"delete-popup",title:null,visible:a,onCancel:s,footer:null,closable:!1,centered:!0,children:Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("div",{children:Object(i.jsx)(n.a,{})}),Object(i.jsx)("h3",{children:"Sure want to delete?"}),Object(i.jsxs)("div",{className:"action-btns",children:[Object(i.jsx)("button",{className:"btn cancel",onClick:s,children:"Cancel"}),Object(i.jsx)("button",{className:"btn confirm",onClick:t,children:"Confirm Deletion"})]})]})})})}},387:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(13),n="#04d182",i="#ff6b72",s="#ffc107",l=["#3e82f7",n,i,s,"#a461d8","#fa8c16","#17bcff",i,n,s],r={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(l),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}};Object(c.a)({},r),[].concat(l),[].concat(l)},394:function(e,t,a){"use strict";var c=a(4),n=a(5),i=a(0),s=a(7),l=a(12),r=a(6),d=a.n(r),o=a(59),j=a(33),b=i.forwardRef((function(e,t){var a,c=e.prefixCls,r=void 0===c?"rc-switch":c,b=e.className,u=e.checked,h=e.defaultChecked,O=e.disabled,m=e.loadingIcon,x=e.checkedChildren,v=e.unCheckedChildren,f=e.onClick,p=e.onChange,N=e.onKeyDown,g=Object(l.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=Object(o.a)(!1,{value:u,defaultValue:h}),k=Object(s.a)(C,2),w=k[0],y=k[1];function A(e,t){var a=w;return O||(y(a=e),null===p||void 0===p||p(a,t)),a}var I=d()(r,b,(a={},Object(n.a)(a,"".concat(r,"-checked"),w),Object(n.a)(a,"".concat(r,"-disabled"),O),a));return i.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":w,disabled:O,className:I,ref:t,onKeyDown:function(e){e.which===j.a.LEFT?A(!1,e):e.which===j.a.RIGHT&&A(!0,e),null===N||void 0===N||N(e)},onClick:function(e){var t=A(!w,e);null===f||void 0===f||f(t,e)}}),m,i.createElement("span",{className:"".concat(r,"-inner")},w?x:v))}));b.displayName="Switch";var u=b,h=a(82),O=a(174),m=a(72),x=a(58),v=a(44),f=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},p=i.forwardRef((function(e,t){var a,s=e.prefixCls,l=e.size,r=e.loading,o=e.className,j=void 0===o?"":o,b=e.disabled,p=f(e,["prefixCls","size","loading","className","disabled"]);Object(v.a)("checked"in p||!("value"in p),"Switch","`value` is not a valid prop, do you mean `checked`?");var N=i.useContext(m.b),g=N.getPrefixCls,C=N.direction,k=i.useContext(x.b),w=g("switch",s),y=i.createElement("div",{className:"".concat(w,"-handle")},r&&i.createElement(h.a,{className:"".concat(w,"-loading-icon")})),A=d()((a={},Object(n.a)(a,"".concat(w,"-small"),"small"===(l||k)),Object(n.a)(a,"".concat(w,"-loading"),r),Object(n.a)(a,"".concat(w,"-rtl"),"rtl"===C),a),j);return i.createElement(O.a,{insertExtraNode:!0},i.createElement(u,Object(c.a)({},p,{prefixCls:w,className:A,disabled:b||r,ref:t,loadingIcon:y})))}));p.__ANT_SWITCH=!0,p.displayName="Switch";t.a=p},458:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var c=a(0),n=a(357),i=a(39),s=a(11),l=a(3);function r(){return Object(l.jsxs)(n.a,{children:[Object(l.jsx)(n.a.Item,{children:Object(l.jsx)(i.b,{to:"".concat(s.c,"/home"),children:"Home"})}),Object(l.jsx)(n.a.Item,{children:"Organization"})]})}var d=a(110),o=a(227),j=a(355),b=a(401),u=a(489),h=a(451),O=a(448),m=a(209),x=a(372),v=a(416),f=[{id:1,orgName:"EMAAR",represetativeName:"Ahmed Ali",represetativePosition:"CEO",phoneNumber:"+966233325255",email:"a.ali@emaar.com",createdDate:"30 June 2022",packageType:"Golden",isActivated:!0},{id:2,orgName:"EWAAN",represetativeName:"Jabal Omar",represetativePosition:"Ops Manager",phoneNumber:"+966252215223",email:"j.omar@ewaan.com",createdDate:"30 May 2022",packageType:"Free",isActivated:!1}],p=a(383),N=a(57),g=a(387),C=a(40),k=a(454),w=a(94),y=a(139),A=a(389),I=a(390),E=a(350),F=a(453),P=a(449),D=a(394),S=a(392),z=a.n(S),R=y.a.Option,T="YYYY/MM/DD",M=Object(l.jsxs)(y.a,{disabled:!0,value:"+966",style:{width:80},children:[Object(l.jsx)(R,{value:"86",children:"+86"}),Object(l.jsx)(R,{value:"966",children:"+966"}),Object(l.jsx)(R,{value:"87",children:"+87"})]});function Y(e){var t=e.visible,a=e.onCancel;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(k.a,{className:"display-modal",title:null,visible:t,onCancel:a,footer:null,closable:!1,centered:!0,children:[Object(l.jsx)("h3",{children:"EMAAR Details"}),Object(l.jsx)("div",{className:"create-form",children:Object(l.jsxs)(A.a,{gutter:16,children:[Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Organization Name"}),Object(l.jsx)(E.a,{disabled:!0,value:"EMAAR"})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Represetitive Name"}),Object(l.jsx)(E.a,{disabled:!0,value:"Ahmed Ali"})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Represetitive Position"}),Object(l.jsx)(E.a,{disabled:!0,value:"CEO"})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Phone Number"}),Object(l.jsx)(E.a,{disabled:!0,addonBefore:M,value:"233325255"})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Email Address"}),Object(l.jsx)(E.a,{disabled:!0,value:"a.ali@emaar.com"})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"PO Number"}),Object(l.jsx)(F.a,{disabled:!0,value:"100"})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Package Type"}),Object(l.jsxs)(y.a,{disabled:!0,dropdownAlign:{offset:[0,8]},value:"Platinum",children:[Object(l.jsx)(R,{value:"Platinum",children:"Platinum"}),Object(l.jsx)(R,{value:"Golden",children:"Golden"}),Object(l.jsx)(R,{value:"Silver",children:"Silver"}),Object(l.jsx)(R,{value:"Free-access",children:"Free-access"})]})]})}),Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Contract Start Date"}),Object(l.jsx)(P.a,{disabled:!0,value:z()("2022/01/10",T),format:T,className:"small w-100 mx-0",placeholder:""})]})}),Object(l.jsx)(I.a,{span:24,children:Object(l.jsxs)(A.a,{gutter:16,justify:"space-between",align:"bottom",children:[Object(l.jsx)(I.a,{span:12,children:Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("label",{htmlFor:"",children:"Username"}),Object(l.jsx)(E.a,{disabled:!0,value:"Ahmed Ali"})]})}),Object(l.jsx)(I.a,{span:8,children:Object(l.jsxs)("div",{className:"input is-active",children:[Object(l.jsx)("label",{htmlFor:"",children:"Is Active"}),Object(l.jsx)(D.a,{disabled:!0,defaultChecked:!0})]})})]})})]})}),Object(l.jsx)(w.a,{onClick:a,className:"close-btn"})]})})}var _=a(384);function B(){var e=Object(C.g)(),t=Object(c.useState)(""),a=Object(d.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(!1),k=Object(d.a)(r,2),w=k[0],y=k[1],A=Object(c.useState)(!1),I=Object(d.a)(A,2),E=I[0],F=I[1];Object(c.useEffect)((function(){console.log(n)}),[n]);var P=[{title:"ID",dataIndex:"id",hidden:!0},{title:"Organization Name",dataIndex:"orgName",render:function(e){return Object(l.jsx)("span",{className:"fw-600",children:e})}},{title:"Representative Name",dataIndex:"represetativeName",render:function(e,t,a){return Object(l.jsxs)("div",{className:"d-flex align-items-center",children:[Object(l.jsx)(j.a,{size:30,className:"font-size-sm",style:{backgroundColor:g.a[a%10]},children:N.a.getNameInitial(e)}),Object(l.jsx)("span",{className:"ml-2 fw-600",children:e})]})}},{title:"Representative Position",dataIndex:"represetativePosition"},{title:"Phone Number",dataIndex:"phoneNumber",hidden:!0},{title:"Email Address",dataIndex:"email",hidden:!0},{title:"Created Date",dataIndex:"createdDate",hidden:!0},{title:"Package Type",dataIndex:"packageType"},{title:"Activated",dataIndex:"isActivated",render:function(e){return!0===e?Object(l.jsx)(b.a,{color:"#2A9F20",children:"true"}):Object(l.jsx)(b.a,{color:"#EB001B",children:"false"})}},{title:"Action",key:"action",render:function(t,a){return Object(l.jsxs)(u.b,{children:[Object(l.jsx)(m.a,{className:"display-btn",onClick:function(){return e=a._id,i(e),void y(!0);var e}}),Object(l.jsx)(x.a,{className:"edit-btn",onClick:function(){return e.push("".concat(s.c,"/organization/update/").concat(a.id))}}),Object(l.jsx)(v.a,{className:"delete-btn",onClick:function(){return e=a._id,i(e),void F(!0);var e}})]})}}].filter((function(e){return!e.hidden}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.a,{title:"Organization Details",bordered:!1,style:{marginBottom:"480px"},extra:Object(l.jsx)(p.a,{text:"Create New Organization",onclick:function(){return e.push("".concat(s.c,"/organization/create"))}}),children:Object(l.jsx)(O.a,{columns:P,dataSource:f,pagination:!1})}),Object(l.jsx)(_.a,{onConfirm:function(){F(!1),o.b.success("Record has been deleted successfully")},visible:E,onCancel:function(){F(!1)}}),Object(l.jsx)(Y,{visible:w,onCancel:function(){y(!1)}})]})}function G(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r,{}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(B,{})})]})}}}]);
//# sourceMappingURL=19.c784bcd9.chunk.js.map