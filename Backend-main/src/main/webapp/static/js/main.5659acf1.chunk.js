(this["webpackJsonptwitch-winter1"]=this["webpackJsonptwitch-winter1"]||[]).push([[0],{150:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),i=n.n(c),s=(n(150),n(11)),o=n(9),l=n(15),u=n(14),d=n(234),h=n(141),j=n(69),f=n(40),m=n(54),b=n(240),O=n(237),p=n(236),g=n(238),x=n(242),y=n(243),v="",S="".concat(v,"/login"),C=function(e){return fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to log in");return e.json()}))},w="".concat(v,"/register"),I=function(e){return fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to register")}))},F="".concat(v,"/logout"),P=function(){return fetch(F,{method:"POST",credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to log out")}))},k="".concat(v,"/game"),E=function(){return fetch(k).then((function(e){if(200!==e.status)throw Error("Fail to get top games");return e.json()}))},M="".concat(v,"/game?game_name="),T="".concat(v,"/search?game_id="),_=function(e){return fetch("".concat(T).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))},R=function(e){return function(e){return fetch("".concat(M).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))}(e).then((function(e){if(e&&e.id)return _(e.id);throw Error("Fail to find the game")}))},D="".concat(v,"/favorite"),L=function(){return fetch(D,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}))},A="".concat(v,"/recommendation"),G=function(){return fetch(A,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get recommended item");return e.json()}))},V=n(6),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signinOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){C(t).then((function(t){e.setState({displayModal:!1}),h.b.success("Welcome back, ".concat(t.name)),e.props.onSuccess()})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(m.a,{shape:"round",onClick:e.signinOnClick,style:{marginRight:"20px"},children:"Login"}),Object(V.jsx)(O.a,{title:"Log in",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(V.jsxs)(p.a,{name:"normal_login",onFinish:e.onFinish,preserve:!1,children:[Object(V.jsx)(p.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(V.jsx)(g.a,{prefix:Object(V.jsx)(x.a,{}),placeholder:"Username"})}),Object(V.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(V.jsx)(g.a,{prefix:Object(V.jsx)(y.a,{}),placeholder:"Password"})}),Object(V.jsx)(p.a.Item,{children:Object(V.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})},e}return Object(s.a)(n)}(a.a.Component),N=q,J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){I(t).then((function(){e.setState({displayModal:!1}),h.b.success("Successfully signed up")})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(m.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(V.jsx)(O.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(V.jsxs)(p.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(V.jsx)(p.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(V.jsx)(g.a,{prefix:Object(V.jsx)(x.a,{}),placeholder:"Username"})}),Object(V.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(V.jsx)(g.a,{prefix:Object(V.jsx)(y.a,{}),placeholder:"Password"})}),Object(V.jsx)(p.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(V.jsx)(g.a,{placeholder:"firstname"})}),Object(V.jsx)(p.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(V.jsx)(g.a,{placeholder:"lastname"})}),Object(V.jsx)(p.a.Item,{children:Object(V.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return Object(s.a)(n)}(a.a.Component),U=J,B=n(239),K=n(244),H=n(144),W=n(245),z=n(246),Q=b.a.SubMenu,X="streams",Y="videos",Z="clips",$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayDrawer:!1},e.onDrawerClose=function(){e.setState({displayDrawer:!1})},e.onFavoriteClick=function(){e.setState({displayDrawer:!0})},e.render=function(){var t=e.props.data,n=t.VIDEO,r=t.STREAM,a=t.CLIP;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(m.a,{type:"primary",shape:"round",onClick:e.onFavoriteClick,icon:Object(V.jsx)(K.a,{}),children:"My Favorites"}),Object(V.jsx)(B.a,{title:"My Favorites",placement:"right",width:720,visible:e.state.displayDrawer,onClose:e.onDrawerClose,children:Object(V.jsxs)(b.a,{mode:"inline",defaultOpenKeys:[X],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(V.jsx)(Q,{icon:Object(V.jsx)(H.a,{}),title:"Streams",children:r.map((function(e){return Object(V.jsx)(b.a.Item,{children:Object(V.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},X),Object(V.jsx)(Q,{icon:Object(V.jsx)(W.a,{}),title:"Videos",children:n.map((function(e){return Object(V.jsx)(b.a.Item,{children:Object(V.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Y),Object(V.jsx)(Q,{icon:Object(V.jsx)(z.a,{}),title:"Clips",children:a.map((function(e){return Object(V.jsx)(b.a.Item,{children:Object(V.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Z)]})})]})},e}return Object(s.a)(n)}(a.a.Component),ee=$,te=n(248),ne=n(249),re=n(109),ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.searchOnClick=function(){e.setState({displayModal:!0})},e.onSubmit=function(t){R(t.game_name).then((function(t){e.setState({displayModal:!1}),e.props.onSuccess(t)})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(m.a,{shape:"round",onClick:e.searchOnClick,icon:Object(V.jsx)(re.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:"Custom Search "}),Object(V.jsx)(O.a,{title:"Search",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,children:Object(V.jsxs)(p.a,{name:"custom_search",onFinish:e.onSubmit,children:[Object(V.jsx)(p.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(V.jsx)(g.a,{placeholder:"Game name"})}),Object(V.jsx)(p.a.Item,{children:Object(V.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},e}return Object(s.a)(n)}(a.a.Component),ce=ae,ie=n(138),se=n.n(ie),oe=n(118),le=n(102),ue=n(235),de=n(241),he=n(247),je=oe.a.TabPane,fe="stream",me="videos",be="clips",Oe=function(e,t,n,r){var a="".concat(e.broadcaster_name," - ").concat(e.title),c=n.find((function(t){return t.id===e.id}));return Object(V.jsxs)(V.Fragment,{children:[t&&Object(V.jsx)(le.a,{title:c?"Remove from favorite list":"Add to favorite list",children:Object(V.jsx)(m.a,{shape:"circle",icon:c?Object(V.jsx)(K.a,{}):Object(V.jsx)(he.a,{}),onClick:function(){var t;c?(t=e,fetch(D,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:t})}).then((function(e){if(200!==e.status)throw Error("Fail to delete favorite item")}))).then((function(){r()})).catch((function(e){h.b.error(e.message)})):function(e){return fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((function(e){if(200!==e.status)throw Error("Fail to add favorite item")}))}(e).then((function(){r()})).catch((function(e){h.b.error(e.message)}))}})}),Object(V.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(V.jsx)(le.a,{title:a,children:Object(V.jsx)("span",{children:a})})})]})},pe=function(e,t,n,r){return Object(V.jsx)(ue.b,{grid:{xs:1,sm:2,md:4,lg:4,xl:6},dataSource:e,renderItem:function(e){return Object(V.jsx)(ue.b.Item,{style:{marginRight:"20px"},children:Object(V.jsx)(de.a,{title:Oe(e,t,n,r),children:Object(V.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(V.jsx)("img",{alt:"Placeholder",src:(a=e.thumbnail_url,a.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480"))})})})});var a}})},ge=function(e){var t=e.resources,n=e.loggedIn,r=e.favoriteItems,a=e.favoriteOnChange,c=t.VIDEO,i=t.STREAM,s=t.CLIP,o=r.VIDEO,l=r.STREAM,u=r.CLIP;return Object(V.jsxs)(oe.a,{defaultActiveKey:fe,children:[Object(V.jsx)(je,{tab:"Streams",style:{height:"680px",overflow:"auto"},forceRender:!0,children:pe(i,n,l,a)},fe),Object(V.jsx)(je,{tab:"Videos",style:{height:"680px",overflow:"auto"},forceRender:!0,children:pe(c,n,o,a)},me),Object(V.jsx)(je,{tab:"Clips",style:{height:"680px",overflow:"auto"},forceRender:!0,children:pe(s,n,u,a)},be)]})},xe=d.a.Header,ye=d.a.Content,ve=d.a.Sider,Se=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,topGames:[],resources:{VIDEO:[],STREAM:[],CLIP:[]},favoriteItems:{VIDEO:[],STREAM:[],CLIP:[]}},e.favoriteOnChange=function(){L().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){h.b.error(e.message)}))},e.onGameSelect=function(t){var n=t.key;"Recommendation"!==n?_(n).then((function(t){e.setState({resources:t})})):G().then((function(t){e.setState({resources:t})}))},e.customSearchOnSuccess=function(t){e.setState({resources:t})},e.signinOnSuccess=function(){L().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){h.b.error(e.message)}))},e.signoutOnClick=function(){P().then((function(){e.setState({loggedIn:!1}),h.b.success("Successfull signed out")})).catch((function(e){h.b.error(e.message)}))},e.componentDidMount=function(){E().then((function(t){e.setState({topGames:t})})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(V.jsxs)(d.a,{children:[Object(V.jsx)(xe,{children:Object(V.jsxs)(j.a,{justify:"space-between",children:[Object(V.jsx)(f.a,{children:e.state.loggedIn&&Object(V.jsx)(ee,{data:e.state.favoriteItems})}),Object(V.jsx)(f.a,{children:e.state.loggedIn?Object(V.jsx)(m.a,{shape:"round",onClick:e.signoutOnClick,children:"Logout"}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(N,{onSuccess:e.signinOnSuccess}),Object(V.jsx)(U,{})]})})]})}),Object(V.jsxs)(d.a,{children:[Object(V.jsxs)(ve,{width:300,className:"site-layout-background",children:[Object(V.jsx)(ce,{onSuccess:e.customSearchOnSuccess}),Object(V.jsxs)(b.a,{mode:"inline",onSelect:e.onGameSelect,style:{marginTop:"10px"},children:[Object(V.jsx)(b.a.Item,{icon:Object(V.jsx)(te.a,{}),children:"Recommend for you!"},"Recommendation"),Object(V.jsx)(se.a,{icon:Object(V.jsx)(ne.a,{}),title:"Popular Games",className:"site-top-game-list",children:e.state.topGames.map((function(e){return Object(V.jsxs)(b.a.Item,{style:{height:"50px"},children:[Object(V.jsx)("img",{alt:"Placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}}),Object(V.jsx)("span",{children:e.name})]},e.id)}))},"Popular Games")]})]}),Object(V.jsx)(d.a,{style:{padding:"24px"},children:Object(V.jsx)(ye,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(V.jsx)(ge,{resources:e.state.resources,loggedIn:e.state.loggedIn,favoriteItems:e.state.favoriteItems,favoriteOnChange:e.favoriteOnChange})})})]})]})},e}return Object(s.a)(n)}(a.a.Component),Ce=Se,we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,250)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(Ce,{})}),document.getElementById("root")),we()}},[[233,1,2]]]);
//# sourceMappingURL=main.5659acf1.chunk.js.map