(this["webpackJsonpbank-atm"]=this["webpackJsonpbank-atm"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(11),i=c.n(s),l=(c(18),c(19),c(20),c(27)),o=c.p+"static/media/banklogo.b00d71f1.png",r=c(3),j=c(25),b=c(26),d=c(0),u=function(e){var t=e.onChange,c=e.isDeposit,a=e.isValid,n=e.alert;return console.log("ATM isDeposit: ".concat(c)),Object(d.jsxs)("label",{className:"label huge, atm",children:[Object(d.jsxs)("h3",{children:[" ",["Deposit","Withdraw"][Number(!c)]]}),Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b.a,{md:12,className:"mt-2",children:Object(d.jsx)("input",{className:"input-field",id:"number-input",type:"number",width:"200",onChange:t})}),n&&Object(d.jsx)("div",{className:"alert",children:"* Amount not available"}),Object(d.jsx)(b.a,{md:12,className:"mt-3",children:Object(d.jsx)("input",{className:"submit-button",type:"submit",disabled:!a,width:"200",value:"Submit",id:"submit-input"})})]})]})},h=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(r.a)(s,2),l=i[0],o=i[1],h=Object(a.useState)(!0),m=Object(r.a)(h,2),O=m[0],p=m[1],x=Object(a.useState)(""),g=Object(r.a)(x,2),v=g[0],f=g[1],N=Object(a.useState)(!1),S=Object(r.a)(N,2),w=S[0],D=S[1],C=Object(a.useState)(!1),k=Object(r.a)(C,2),A=k[0],F=k[1],W=" $ ".concat(l," ");console.log("Account Rendered with isDeposit: ".concat(O));return Object(d.jsx)("div",{className:"header-form",children:Object(d.jsxs)("form",{onSubmit:function(e){o(O?l+c:l-c),D(!1),e.preventDefault()},children:[Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b.a,{md:12,children:Object(d.jsx)("h2",{children:"Account Balance"})}),Object(d.jsx)(b.a,{md:12,children:Object(d.jsx)("h2",{children:W})})]}),Object(d.jsxs)(j.a,{className:"mt-4",children:[Object(d.jsx)(b.a,{md:12,children:Object(d.jsx)("label",{children:"Select an action below to continue"})}),Object(d.jsx)(b.a,{md:12,className:"mt-1",children:Object(d.jsxs)("select",{onChange:function(e){return t=e,console.log(t.target.value),f(t.target.value),D(!1),void("Deposit"===t.target.value?p(!0):p(!1));var t},name:"mode",id:"mode-select",children:[Object(d.jsx)("option",{id:"no-selection",value:""}),Object(d.jsx)("option",{id:"deposit-selection",value:"Deposit",children:"Deposit"}),Object(d.jsx)("option",{id:"cashback-selection",value:"Withdraw",children:"Withdraw"})]})})]}),v&&Object(d.jsx)(u,{onChange:function(e){if(console.log(Number(e.target.value)),Number(e.target.value)<=0)return D(!1);"Withdraw"===v&&Number(e.target.value)>l?(D(!1),F(!0)):(D(!0),F(!1)),n(Number(e.target.value))},isDeposit:O,isValid:w,alert:A})]})})};var m=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(l.a,{src:o}),Object(d.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[24,1,2]]]);
//# sourceMappingURL=main.1f4dc926.chunk.js.map