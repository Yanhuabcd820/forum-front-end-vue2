(function(){"use strict";var e={6047:function(e,t,n){var r=n(1926);t["Z"]={signIn({email:e,password:t}){return r.l.post("/signin",{email:e,password:t})},signup({name:e,email:t,password:n,passwordCheck:a}){return r.l.post("/signup",{name:e,email:t,password:n,passwordCheck:a})}}},3652:function(e,t,n){var r=n(1926);t["Z"]={getCurrentUser(){return r.l.get("/get_current_user")},get({userId:e}){return r.l.get(`/users/${e}`)},addFavorite({restaurantId:e}){return r.l.post(`/favorite/${e}`,null)},update({userId:e,formData:t}){return r.l.put(`/users/${e}`,t)},deleteFavorite({restaurantId:e}){return r.l["delete"](`/favorite/${e}`)},addLike({restaurantId:e}){return r.l.post(`/like/${e}`,null)},deleteLike({restaurantId:e}){return r.l["delete"](`/like/${e}`)},getTopUsers(){return r.l.get("/users/top")},addFollowing({userId:e}){return r.l.post(`/following/${e}`,null)},deleteFollowing({userId:e}){return r.l["delete"](`/following/${e}`)}}},6315:function(e,t,n){var r=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"restaurant-forum"}},[n("Navbar"),n("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[n("router-view")],1)],1)},o=[],i=(n(3734),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),n("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[n("div",{staticClass:"ml-auto d-flex align-items-center"},[e.isAuthenticated?[e.currentUser.isAdmin?n("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin/restaurants"}},[e._v(" 管理員後台 ")]):e._e(),n("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[e._v(" "+e._s(e.currentUser.name)+" 您好 ")]),n("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],u=n(629),l={data(){return{}},created(){},methods:{logout(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}},computed:{...(0,u.rn)(["currentUser","isAuthenticated"])}},c=l,d=n(1001),m=(0,d.Z)(c,i,s,!1,null,"7351163e",null),p=m.exports,f={name:"App",components:{Navbar:p}},h=f,v=(0,d.Z)(h,a,o,!1,null,"44c26c0a",null),b=v.exports,g=n(8345),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Not Found 404")])},A=[],C={},S=(0,d.Z)(C,w,A,!1,null,null,null),y=S.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container py-5"},[n("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),n("div",{staticClass:"form-label-group mb-2"},[n("label",{attrs:{for:"email"}},[e._v("email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"form-label-group mb-3"},[n("label",{attrs:{for:"password"}},[e._v("password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),n("div",{staticClass:"text-center mb-3"},[n("p",[n("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]),n("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center mb-4"},[n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],_=n(6047),N=n(1926),T={data(){return{email:"",password:"",isProcessing:!1}},methods:{async handleSubmit(e){try{if(!this.email||!this.password)return void N.F.fire({icon:"warning",title:"請填入 email 和 password"});this.isProcessing=!0;const e=await _.Z.signIn({email:this.email,password:this.password}),{data:t}=e;console.log("data",t),localStorage.setItem("token",t.token),this.$store.commit("setCurrentUser",t.user),this.$router.push("/restaurants")}catch(t){this.password="",N.F.fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),console.log("error",t),this.isProcessing=!1}}}},U=T,I=(0,d.Z)(U,E,k,!1,null,null,null),P=I.exports,x=n(3652);r.Z.use(u.ZP);var R=new u.ZP.Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},getters:{},mutations:{setCurrentUser(e,t){e.currentUser={...e.currentUser,...t},e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{async fetchCurrentUser({commit:e}){try{const{data:t}=await x.Z.getCurrentUser(),{id:n,name:r,email:a,image:o,isAdmin:i}=t;return e("setCurrentUser",{id:n,name:r,email:a,image:o,isAdmin:i}),!0}catch(t){return console.error("can not fetch user information"),e("revokeAuthentication"),!1}}},modules:{}});r.Z.use(g.Z);const $=(e,t,n)=>{const r=R.state.currentUser;!r||r.isAdmin?n():n("/404")},O=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"SIGNIN",component:P},{path:"/signup",name:"SIGNUP",component:()=>n.e(900).then(n.bind(n,6900))},{path:"/restaurants",name:"RESTAURANTS",component:()=>Promise.all([n.e(703),n.e(410)]).then(n.bind(n,8410))},{path:"/restaurants/feeds",name:"RESTAURANTS-FEEDS",component:()=>Promise.all([n.e(247),n.e(503)]).then(n.bind(n,6503))},{path:"/restaurants/top",name:"RESTAURANTS-TOP",component:()=>Promise.all([n.e(703),n.e(148)]).then(n.bind(n,148))},{path:"/restaurants/:id",name:"RESTAURANT",component:()=>Promise.all([n.e(247),n.e(13)]).then(n.bind(n,7013))},{path:"/restaurants/:id/dashboard",name:"DASHBOARD",component:()=>n.e(687).then(n.bind(n,9687))},{path:"/users/top",name:"USERS-TOP",component:()=>n.e(913).then(n.bind(n,1648))},{path:"/users/:id/edit",name:"USER-EDIT",component:()=>Promise.all([n.e(247),n.e(117)]).then(n.bind(n,6117))},{path:"/users/:id",name:"USER",component:()=>Promise.all([n.e(247),n.e(555)]).then(n.bind(n,555))},{path:"/admin",exact:!0,redirect:"/admin/restaurant"},{path:"/admin/restaurants",name:"ADMIN-RESTAURANTS",component:()=>n.e(29).then(n.bind(n,2029)),beforeEnter:$},{path:"/admin/restaurants/new",name:"ADMIN-RESTAURANTS-NEW",component:()=>Promise.all([n.e(703),n.e(918)]).then(n.bind(n,1918)),beforeEnter:$},{path:"/admin/categories",name:"ADMIN-CATEGORIES",component:()=>n.e(300).then(n.bind(n,1300)),beforeEnter:$},{path:"/admin/users",name:"ADMIN-USERS",component:()=>Promise.all([n.e(703),n.e(982)]).then(n.bind(n,7982)),beforeEnter:$},{path:"/admin/restaurants/:id/edit",name:"ADMIN-RESTAURANT-EDIT",component:()=>Promise.all([n.e(703),n.e(64)]).then(n.bind(n,3064)),beforeEnter:$},{path:"/admin/restaurants/:id",name:"ADMIN-RESTAURANT",component:()=>Promise.all([n.e(247),n.e(995)]).then(n.bind(n,2995)),beforeEnter:$},{path:"*",name:"notFound",component:y}],Z=new g.Z({linkExactActiveClass:"active",routes:O});Z.beforeEach((async(e,t,n)=>{const r=localStorage.getItem("token"),a=R.state.token;let o=R.state.isAuthenticated;r&&r!==a&&(o=await R.dispatch("fetchCurrentUser"));const i=["SIGNUP","SIGNIN"];if(o||i.includes(e.name))return o&&i.includes(e.name)?(console.log(5555),void n("/restaurants")):void n();n("/signin")}));var D=Z;r.Z.config.productionTip=!1,new r.Z({router:D,store:R,render:e=>e(b)}).$mount("#app")},1926:function(e,t,n){n.d(t,{F:function(){return c},l:function(){return l}});var r=n(9669),a=n.n(r),o=n(6455),i=n.n(o);const s="http://localhost:3001/api",u=a().create({baseURL:s});u.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=`Bearer ${t}`),e}),(e=>Promise.reject(e)));const l=u,c=i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{13:"3cde4bf6",29:"978de863",64:"488c306a",117:"4d86f346",148:"74e49f61",247:"ce8deb6f",300:"d92f560b",410:"f8e90d2b",503:"01332ebe",555:"0e7d95fe",687:"3d64b689",703:"83ed3adc",900:"b22b97c1",913:"291cd3c4",918:"5f934caa",982:"be01048d",995:"bdad97cf"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{13:"723d6251",148:"27917a7a",300:"0e42bb12",410:"9490d87b",503:"f85d4a9d",913:"27917a7a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="forum-front-end-vue2:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/forum-front-end-vue2/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={13:1,148:1,300:1,410:1,503:1,913:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkforum_front_end_vue2"]=self["webpackChunkforum_front_end_vue2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6315)}));r=n.O(r)})();
//# sourceMappingURL=app.d1a7cdea.js.map