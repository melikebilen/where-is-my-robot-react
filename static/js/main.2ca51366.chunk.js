(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{16:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(29),s=a.n(c),i=a(30),o=a(31),r=a(19),l=a(34),b=a(33),j=(a(16),a(26)),u=(a(39),a(14)),d=a(2),m=["btn--primary","btn--outline","btn--test"],h=["btn--medium","btn--large"],O=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,s=e.buttonSize,i=m.includes(c)?c:m[0],o=h.includes(s)?s:h[0];return Object(d.jsx)(u.b,{to:"/sign-up",className:"btn-mobile",children:Object(d.jsx)("button",{className:"btn ".concat(i," ").concat(o),onClick:n,type:a,children:t})})};a(48);var v=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(j.a)(s,2),o=i[0],r=i[1],l=function(){return c(!1)},b=function(){window.innerWidth<=960?r(!1):r(!0)};return Object(n.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsxs)(u.b,{to:"/",className:"navbar-logo",onClick:l,children:["RobotLocation",Object(d.jsx)("i",{className:"bars"})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(d.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{to:"/aboutus",className:"nav-links",onClick:l,children:"About Us"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{to:"/aboutrobot",className:"nav-links",onClick:l,children:"About Robot"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{to:"/products",className:"nav-links",onClick:l,children:"Products"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/sign-up",className:"nav-links-mobile",onClick:l,children:"Sign Up"})})]}),o&&Object(d.jsx)(O,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})},p=a(21);p.a.initializeApp({apiKey:"AIzaSyBQjxxJqCcYhjYDH6GFwjSGdQ7VeqVGhCI",authDomain:"tdoa-23cf7.firebaseapp.com",databaseURL:"https://tdoa-23cf7-default-rtdb.firebaseio.com",projectId:"tdoa-23cf7",storageBucket:"tdoa-23cf7.appspot.com",messagingSenderId:"611153024504",appId:"1:611153024504:web:0f5e82fbf77d611aaf720d",measurementId:"G-YYER7FY9DQ"});p.a;var x=p.a.database(),f=a(8);a(52);var g=function(){return Object(d.jsx)("div",{className:"hero-container",children:Object(d.jsx)("video",{src:"/videos/robot.mp4",autoPlay:!0,loop:!0,muted:!0})})};var N=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g,{})})};a(28);var y=function(){return Object(d.jsxs)("div",{className:"hero-container",children:[Object(d.jsx)("img",{className:"ourpictures",src:"/images/melike.jpeg"}),Object(d.jsx)("img",{className:"ourpictures",src:"/images/pinar.JPG"}),Object(d.jsx)("video",{className:"frontvideo",src:"/videos/robotvideo2.mp4",autoPlay:!0,loop:!0,muted:!0})]})};var k=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{})})};var S=function(){return Object(d.jsxs)("div",{className:"hero-container",children:[Object(d.jsx)("img",{className:"ourpictures",src:"/images/robotimg.JPG"}),Object(d.jsx)("video",{className:"frontvideo",src:"/videos/robotvideo2.mp4",autoPlay:!0,loop:!0,muted:!0})]})};var C=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(S,{})})},w=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:null},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.ref().on("value",(function(t){e.setState({data:t.val(),newData:"",count:t.child("Count/count").val(),x:t.child("RobotLocation/x").val(),y:t.child("RobotLocation/y").val()})}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({newData:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),x.ref().child("AMAZINGNEWDATA").set(this.state.newData)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"App--header",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(v,{}),Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/",exact:!0,component:N}),Object(d.jsx)(f.a,{path:"/aboutus",exact:!0,component:k}),Object(d.jsx)(f.a,{path:"/aboutrobot",exact:!0,component:C})]})]})})}),Object(d.jsxs)("div",{className:"App--position",children:[Object(d.jsxs)("h3",{children:[" Count : ",JSON.stringify(this.state.count,null,2)]}),Object(d.jsxs)("h3",{children:[" X : ",JSON.stringify(this.state.x,null,2)]}),Object(d.jsxs)("h3",{children:[" Y : ",JSON.stringify(this.state.y,null,2)]})]}),Object(d.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/tdoa-23cf7.appspot.com/o/images%2Fxyplot.png?alt=media&token=dccacb98-a0f4-4c5d-b2a7-865ca59c948c"})]})}}]),a}(n.Component);a(53);s.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2ca51366.chunk.js.map