(this.webpackJsonproboredux=this.webpackJsonproboredux||[]).push([[0],{26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(7),c=n.n(r),i=n(8),s=n(6),a=n(15),u=n(16),l=(n(26),n(27),n(2)),d=n(3),h=n(5),b=n(4),j=n(1),f=function(e){var t=e.name,n=e.email,o=e.id;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("p",{children:n})]})]})},p=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e,n){return Object(j.jsx)(f,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},g=function(e){var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b- -green bg-lightest-blue",type:"search",placeholder:"Search robotfriends",onChange:t})})},v=(n(29),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return Object(j.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.PureComponent)),O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(j.jsx)(v,{color:"red"})]})}}]),n}(o.Component),w=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",border:"1px transparent",height:"500px"},children:e.children})},m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:" Oooops. That is not good"}):this.props.children}}]),n}(o.Component),x="CHANGE_SEARCH_FIELD",y="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",k=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,r=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?Object(j.jsx)("h1",{className:"tc",children:"Loading"}):Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)(O,{}),Object(j.jsx)(g,{searchChange:n}),Object(j.jsx)(w,{children:Object(j.jsx)(m,{children:Object(j.jsx)(p,{robots:c})})})]})}}]),n}(o.Component),E=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:C,payload:t})})).catch((function(t){return e({type:S,payload:t})}))}))}}}))(k),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},F={searchField:""},P={isPending:!1,robots:[],error:""},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=Object(a.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case x:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case C:return Object.assign({},e,{robots:t.payload,isPending:!1});case S:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),A=Object(s.d)(_,Object(s.a)(u.a,T));c.a.render(Object(j.jsx)(i.a,{store:A,children:Object(j.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriendswredux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriendswredux","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}(),R()}},[[30,1,2]]]);
//# sourceMappingURL=main.a1fbd34b.chunk.js.map