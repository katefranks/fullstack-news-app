(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{12:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),s=n(13),r=n.n(s),o=(n(18),n(8)),c=n.n(o),l=n(10),u=n(4),h=n(5),b=n(1),d=n(7),j=n(6),p=(n(12),n(3)),m=n.n(p),g=n(9),v=n(0),f=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(g.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){var t=this;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{className:"form-login",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{className:"login-label",children:["New User? ",Object(v.jsx)("br",{})," Register!"]}),Object(v.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("label",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleInput}),Object(v.jsx)("label",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"password",type:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(v.jsx)("label",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"re-type password",type:"password",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(v.jsx)("button",{className:"submit-button",type:"submit",children:"Submit"}),Object(v.jsx)("button",{className:"toggle-register",onClick:function(){return t.props.handleNavigation("login")},children:"Current User Login"})]})})}}]),n}(i.a.Component),O=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(g.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){var t=this;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{className:"form-login",onSubmit:this.handleSubmit,children:[Object(v.jsx)("label",{className:"login-label",htmlFor:"login",children:"Login:"}),Object(v.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("input",{className:"login-input",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(v.jsx)("input",{className:"login-input",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(v.jsx)("button",{className:"submit-button",type:"submit",children:"Submit"}),Object(v.jsx)("button",{className:"toggle-register",onClick:function(){return t.props.handleNavigation("register")},children:"Create New Account"})]})})}}]),n}(i.a.Component),x=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={display_name:"",avatar:null,preview:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleImage=a.handleImage.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/users/profiles/user/").then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(e){return t.setState({data:e})})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}))}},{key:"handleInput",value:function(t){this.setState(Object(g.a)({},t.target.name,t.target.value))}},{key:"handleImage",value:function(t){var e=this,n=t.target.files[0];this.setState(Object(g.a)({},t.target.name,n));var a=new FileReader;a.onloadend=function(){e.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),a={method:"POST",headers:{"X-CSRFToken":m.a.get("csrftoken")},body:n},t.next=7,fetch("/api/v1/users/profiles/",a);case 7:i=t.sent,this.setState({response:i});case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.state.data?Object(v.jsxs)("div",{className:"user-profile",children:[Object(v.jsx)("p",{className:"login-label",children:this.state.data.display_name}),Object(v.jsx)("img",{className:"user-avatar",src:this.state.data.avatar,alt:""}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:"submit-button",onClick:this.props.handleLogout,children:"Logout"})]}):Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("p",{className:"login-label",children:"Create a Profile!"}),Object(v.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(v.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),this.state.avatar?Object(v.jsx)("img",{className:"avatar-preview",src:this.state.preview,alt:""}):null,Object(v.jsx)("button",{className:"submit-button",type:"submit",children:"Save Profile"}),Object(v.jsx)("button",{className:"submit-button",onClick:this.props.handleLogout,children:"Logout"})]})})}}]),n}(a.Component),y=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={articles:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/articles/").then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(e){return t.setState({articles:e})})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}))}},{key:"render",value:function(){var t=this.state.articles.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:t.title})},t.id)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Articles"}),Object(v.jsx)("ul",{children:t})]})}}]),n}(a.Component),k=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={author:"",title:"",body:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(g.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(this.state)};fetch("/api/v1/articles/",n).then((function(t){return t.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"article-form-container",children:[Object(v.jsx)("p",{children:"Create New Article"}),Object(v.jsxs)("form",{className:"article-form",onSubmit:this.handleSubmit,children:[Object(v.jsx)("label",{htmlFor:"author"}),Object(v.jsx)("input",{type:"text",name:"author",value:this.state.author,onChange:this.handleInput,placeholder:"author"}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{htmlFor:"title"}),Object(v.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleInput,placeholder:"Title"}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{htmlFor:"body"}),Object(v.jsx)("input",{type:"text",name:"body",value:this.state.body,onChange:this.handleInput,placeholder:"Article Content"}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",value:"Submit",children:"SAVE"})]})]})}}]),n}(i.a.Component),N=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={selection:"login"},a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a.handleNavigation=a.handleNavigation.bind(Object(b.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleNavigation",value:function(t){this.setState({selection:t})}},{key:"handleLogin",value:function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(e)},a=function(t){return console.warn(t)},t.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(i=t.sent).ok){t.next=13;break}return t.next=8,i.json().catch(a);case 8:s=t.sent,m.a.set("Authorization","Token ".concat(s.key)),this.setState({selection:"profile"}),t.next=14;break;case 13:alert("Incorrect Username or Password, Please Try Again!");case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(e)},a=function(t){return console.warn(t)},t.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(i=t.sent).ok){t.next=13;break}return t.next=8,i.json().catch(a);case 8:s=t.sent,m.a.set("Authorization","Token ".concat(s.key)),this.setState({selection:"profile"}),t.next=13;break;case 13:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"Post",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")}},n=function(t){return console.warn(t)},t.next=4,fetch("/rest-auth/logout/",e).catch(n);case 4:t.sent.ok&&(m.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{}),Object(v.jsxs)("nav",{children:[Object(v.jsx)("button",{className:"nav-bar-button",onClick:function(){return t.handleNavigation("registration")},children:"Registration"}),Object(v.jsx)("button",{className:"nav-bar-button",onClick:function(){return t.handleNavigation("login")},children:"Login"}),Object(v.jsx)("button",{className:"nav-bar-button",onClick:function(){return t.handleNavigation("articles")},children:"Articles"}),Object(v.jsx)("button",{className:"nav-bar-button",onClick:function(){return t.handleNavigation("profile")},children:"Profile"}),Object(v.jsx)("button",{className:"nav-bar-button",onClick:function(){return t.handleNavigation("article-form")},children:"Add Article"})]}),Object(v.jsxs)("div",{children:[!!m.a.get("Authorization")&&"profile"===this.state.selection&&Object(v.jsx)(x,{selection:this.state.selection,handleNavigation:this.handleNavigation,handleLogin:this.handleLogin,handleLogout:this.handleLogout}),!m.a.get("Authorization")&&"profile"===this.state.selection&&Object(v.jsx)("p",{children:"Please Register to create a profile!"})&&Object(v.jsx)(f,{handleRegistration:this.handleRegistration,handleNavigation:this.handleNavigation}),"articles"===this.state.selection&&Object(v.jsx)(y,{selection:this.state.selection,handleNavigation:this.handleNavigation,handleLogin:this.handleLogin,handleLogout:this.handleLogout}),"login"===this.state.selection&&Object(v.jsx)(O,{handleLogin:this.handleLogin,handleNavigation:this.handleNavigation}),"registration"===this.state.selection&&Object(v.jsx)(f,{handleRegistration:this.handleRegistration,handleNavigation:this.handleNavigation}),"article-form"===this.state.selection&&Object(v.jsx)(k,{})]})]})}}]),n}(a.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),s(t),r(t)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),S()}},[[21,1,2]]]);
//# sourceMappingURL=main.4bbeec8f.chunk.js.map