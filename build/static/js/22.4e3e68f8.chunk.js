(this.webpackJsonpharees=this.webpackJsonpharees||[]).push([[22],{383:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c(0);var n=c(491),a=c(3);function s(e){var t=e.text,c=e.onclick;return Object(a.jsxs)("button",{className:"create-btn",onClick:c,children:[Object(a.jsx)(n.a,{}),t]})}},384:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0);var n=c(454),a=c(416),s=c(3);function i(e){var t=e.onConfirm,c=e.visible,i=e.onCancel;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(n.a,{className:"delete-popup",title:null,visible:c,onCancel:i,footer:null,closable:!1,centered:!0,children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("div",{children:Object(s.jsx)(a.a,{})}),Object(s.jsx)("h3",{children:"Sure want to delete?"}),Object(s.jsxs)("div",{className:"action-btns",children:[Object(s.jsx)("button",{className:"btn cancel",onClick:i,children:"Cancel"}),Object(s.jsx)("button",{className:"btn confirm",onClick:t,children:"Confirm Deletion"})]})]})})})}},387:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(13),a="#04d182",s="#ff6b72",i="#ffc107",r=["#3e82f7",a,s,i,"#a461d8","#fa8c16","#17bcff",s,a,i],l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(r),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}};Object(n.a)({},l),[].concat(r),[].concat(r)},460:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return M}));var n=c(0),a=c(357),s=c(39),i=c(11),r=c(3);function l(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(s.b,{to:"".concat(i.c,"/home"),children:"Home"})}),Object(r.jsx)(a.a.Item,{children:"Supervisors"})]})}var o=c(110),d=c(355),j=c(489),b=c(451),u=c(448),h=c(209),x=c(372),m=c(416),O=[{id:1,supervisorName:"Mohamed Alaa",phoneNumber:"+96668025731"},{id:2,supervisorName:"Sarat ravit",phoneNumber:"+96668025700"}],f=c(383),v=c(57),p=c(387),N=c(40),g=c(454),C=c(94),k=c(139),w=c(389),y=c(390),F=c(350),I=k.a.Option,S=Object(r.jsxs)(k.a,{disabled:!0,value:"+966",style:{width:80},children:[Object(r.jsx)(I,{value:"86",children:"+86"}),Object(r.jsx)(I,{value:"966",children:"+966"}),Object(r.jsx)(I,{value:"87",children:"+87"})]});function A(e){var t=e.visible,c=e.onCancel;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(g.a,{className:"display-modal",title:null,visible:t,onCancel:c,footer:null,closable:!1,centered:!0,children:[Object(r.jsx)("h3",{children:"Asif Khan"}),Object(r.jsx)("div",{className:"create-form",children:Object(r.jsxs)(w.a,{gutter:16,children:[Object(r.jsx)(y.a,{span:24,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Address"}),Object(r.jsx)(F.a,{disabled:!0,defaultValue:"western region, Riyad city, 12 nahda street, 3rd floor"})]})}),Object(r.jsx)(y.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Name"}),Object(r.jsx)(F.a,{disabled:!0,defaultValue:"Mohamed Alaa"})]})}),Object(r.jsx)(y.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Phone Number"}),Object(r.jsx)(F.a,{disabled:!0,defaultValue:"68025731",addonBefore:S})]})}),Object(r.jsx)(y.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Email Address"}),Object(r.jsx)(F.a,{disabled:!0,defaultValue:"k.bommini@gmail.com"})]})}),Object(r.jsx)(y.a,{span:12,children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",children:"Username"}),Object(r.jsx)(F.a,{disabled:!0,defaultValue:"k.bommini@gmail.com"})]})})]})}),Object(r.jsx)(C.a,{onClick:c,className:"close-btn"})]})})}var V=c(384);function z(){var e=Object(N.g)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)(!1),g=Object(o.a)(l,2),C=g[0],k=g[1],w=Object(n.useState)(!1),y=Object(o.a)(w,2),F=y[0],I=y[1];Object(n.useEffect)((function(){console.log(a)}),[a]);var S=[{title:"ID",dataIndex:"id",hidden:!0},{title:"Supervisor Name",dataIndex:"supervisorName",render:function(e,t,c){return Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)(d.a,{size:30,className:"font-size-sm",style:{backgroundColor:p.a[c%10]},children:v.a.getNameInitial(e)}),Object(r.jsx)("span",{className:"ml-2 fw-600",children:e})]})}},{title:"Phone Number",dataIndex:"phoneNumber",render:function(e){return Object(r.jsx)("span",{className:"fw-600",children:e})}},{title:"Action",key:"action",width:"15%",render:function(t,c){return Object(r.jsxs)(j.b,{children:[Object(r.jsx)(h.a,{className:"display-btn",onClick:function(){return e=c._id,s(e),void k(!0);var e}}),Object(r.jsx)(x.a,{className:"edit-btn",onClick:function(){return e.push("".concat(i.c,"/supervisors/update/").concat(c.id))}}),Object(r.jsx)(m.a,{className:"delete-btn",onClick:function(){return e=c._id,s(e),void I(!0);var e}})]})}}].filter((function(e){return!e.hidden}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{title:"Supervisors",bordered:!1,style:{marginBottom:"480px"},extra:Object(r.jsx)(f.a,{text:"Create a new supervisor",onclick:function(){return e.push("".concat(i.c,"/supervisors/create"))}}),children:Object(r.jsx)(u.a,{columns:S,dataSource:O,pagination:!1})}),Object(r.jsx)(V.a,{visible:F,onCancel:function(){I(!1)}}),Object(r.jsx)(A,{visible:C,onCancel:function(){k(!1)}})]})}function M(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"mt-4",children:Object(r.jsx)(z,{})})]})}}}]);
//# sourceMappingURL=22.4e3e68f8.chunk.js.map