(self["webpackChunkforum_front_end_vue2"]=self["webpackChunkforum_front_end_vue2"]||[]).push([[148],{8448:function(t,r,n){"use strict";n.d(r,{Z:function(){return k}});var e,a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ul",{staticClass:"nav nav-tabs mb-4"},t._l(t.tabs,(function(r){return n("li",{key:r.id,staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:r.path}},[t._v(" "+t._s(r.title)+" ")])],1)})),0)},s=[],i=new Uint8Array(16);function o(){if(!e&&(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(i)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function c(t){return"string"===typeof t&&u.test(t)}for(var f=c,l=[],p=0;p<256;++p)l.push((p+256).toString(16).substr(1));function d(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[r+0]]+l[t[r+1]]+l[t[r+2]]+l[t[r+3]]+"-"+l[t[r+4]]+l[t[r+5]]+"-"+l[t[r+6]]+l[t[r+7]]+"-"+l[t[r+8]]+l[t[r+9]]+"-"+l[t[r+10]]+l[t[r+11]]+l[t[r+12]]+l[t[r+13]]+l[t[r+14]]+l[t[r+15]]).toLowerCase();if(!f(n))throw TypeError("Stringified UUID is invalid");return n}var v=d;function h(t,r,n){t=t||{};var e=t.random||(t.rng||o)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){n=n||0;for(var a=0;a<16;++a)r[n+a]=e[a];return r}return v(e)}var m=h,g={data:function(){return{tabs:[{id:m(),title:"首頁",path:"/restaurants"},{id:m(),title:"最新動態",path:"/restaurants/feeds"},{id:m(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:m(),title:"美食達人",path:"/users/top"}]}}},b=g,y=n(1001),_=(0,y.Z)(b,a,s,!1,null,"2ab0b204",null),k=_.exports},2261:function(t,r,n){"use strict";n.d(r,{Z:function(){return u}});var e=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"bouncing-loader"},[n("div"),n("div"),n("div")])])}],s=n(1001),i={},o=(0,s.Z)(i,e,a,!1,null,"74807b6a",null),u=o.exports},148:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return m}});var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container py-5"},[n("navTabs"),t.isLoading?n("Spinner"):[n("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),n("hr"),t._l(t.restaurants,(function(r){return n("div",{key:r.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-md-4"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"card-img",attrs:{src:r.image}})])]),n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(" "+t._s(r.name)+" ")]),n("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(r.FavoritedUsers.length))]),n("p",{staticClass:"card-text"},[t._v(" "+t._s(r.description)+" ")]),n("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"#"}},[t._v("Show")]),r.isFavorited?n("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.cancleFavorited(r.id)}}},[t._v(" 移除最愛 ")]):n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.addFavorited(r.id)}}},[t._v(" 加到最愛 ")])])])])])}))]],2)},a=[],s=n(3019),i=n(6198),o=(n(1703),n(1249),n(5666),n(8448)),u=n(1926),c={getTopRestaurants:function(){return u.l.get("/restaurants/top")}},f=n(2261),l=n(3652),p={name:"RestaurantsTop",components:{navTabs:o.Z,Spinner:f.Z},data:function(){return{restaurants:{},isLoading:!0}},created:function(){this.fetchTop()},methods:{fetchTop:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var n,e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.getTopRestaurants();case 3:n=r.sent,e=n.data,t.restaurants=e.restaurants,t.isLoading=!1,r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),t.isLoading=!1,u.F.fire({icon:"error",title:"無法取得資料，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()},cancleFavorited:function(t){var r=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.deleteFavorite({restaurantId:t});case 3:if(e=n.sent,a=e.data,"success"===a.status){n.next=7;break}throw new Error(a.message);case 7:r.restaurants=r.restaurants.map((function(r){return r.id===t?(0,s.Z)((0,s.Z)({},r),{},{isFavorited:!1}):r})),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log("error",n.t0),u.F.fire({icon:"error",title:"無法取得資料，請稍後再試"});case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},addFavorited:function(t){var r=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.addFavorite({restaurantId:t});case 3:if(e=n.sent,a=e.data,"success"===a.status){n.next=7;break}throw new Error(a.message);case 7:r.restaurants=r.restaurants.map((function(r){return r.id===t?(0,s.Z)((0,s.Z)({},r),{},{isFavorited:!0}):r})),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log("error",n.t0),u.F.fire({icon:"error",title:"無法取得資料，請稍後再試"});case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}},d=p,v=n(1001),h=(0,v.Z)(d,e,a,!1,null,null,null),m=h.exports},7741:function(t,r,n){var e=n(1702),a=Error,s=e("".replace),i=function(t){return String(a(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,u=o.test(i);t.exports=function(t,r){if(u&&"string"==typeof t&&!a.prepareStackTrace)while(r--)t=s(t,o,"");return t}},2914:function(t,r,n){var e=n(7293),a=n(9114);t.exports=!e((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",a(1,7)),7!==t.stack)}))},9587:function(t,r,n){var e=n(614),a=n(111),s=n(7674);t.exports=function(t,r,n){var i,o;return s&&e(i=r.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&s(t,o),t}},8340:function(t,r,n){var e=n(111),a=n(8880);t.exports=function(t,r){e(r)&&"cause"in r&&a(t,"cause",r.cause)}},6277:function(t,r,n){var e=n(1340);t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:e(t)}},2626:function(t,r,n){var e=n(3070).f;t.exports=function(t,r,n){n in t||e(t,n,{configurable:!0,get:function(){return r[n]},set:function(t){r[n]=t}})}},9191:function(t,r,n){"use strict";var e=n(5005),a=n(2597),s=n(8880),i=n(7976),o=n(7674),u=n(9920),c=n(2626),f=n(9587),l=n(6277),p=n(8340),d=n(7741),v=n(2914),h=n(9781),m=n(1913);t.exports=function(t,r,n,g){var b="stackTraceLimit",y=g?2:1,_=t.split("."),k=_[_.length-1],C=e.apply(null,_);if(C){var w=C.prototype;if(!m&&a(w,"cause")&&delete w.cause,!n)return C;var x=e("Error"),E=r((function(t,r){var n=l(g?r:t,void 0),e=g?new C(t):new C;return void 0!==n&&s(e,"message",n),v&&s(e,"stack",d(e.stack,2)),this&&i(w,this)&&f(e,this,E),arguments.length>y&&p(e,arguments[y]),e}));if(E.prototype=w,"Error"!==k?o?o(E,x):u(E,x,{name:!0}):h&&b in C&&(c(E,C,b),c(E,C,"prepareStackTrace")),u(E,C),!m)try{w.name!==k&&s(w,"name",k),w.constructor=E}catch(R){}return E}}},1249:function(t,r,n){"use strict";var e=n(2109),a=n(2092).map,s=n(1194),i=s("map");e({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},1703:function(t,r,n){var e=n(2109),a=n(7854),s=n(2104),i=n(9191),o="WebAssembly",u=a[o],c=7!==Error("e",{cause:7}).cause,f=function(t,r){var n={};n[t]=i(t,r,c),e({global:!0,forced:c},n)},l=function(t,r){if(u&&u[t]){var n={};n[t]=i(o+"."+t,r,c),e({target:o,stat:!0,forced:c},n)}};f("Error",(function(t){return function(r){return s(t,this,arguments)}})),f("EvalError",(function(t){return function(r){return s(t,this,arguments)}})),f("RangeError",(function(t){return function(r){return s(t,this,arguments)}})),f("ReferenceError",(function(t){return function(r){return s(t,this,arguments)}})),f("SyntaxError",(function(t){return function(r){return s(t,this,arguments)}})),f("TypeError",(function(t){return function(r){return s(t,this,arguments)}})),f("URIError",(function(t){return function(r){return s(t,this,arguments)}})),l("CompileError",(function(t){return function(r){return s(t,this,arguments)}})),l("LinkError",(function(t){return function(r){return s(t,this,arguments)}})),l("RuntimeError",(function(t){return function(r){return s(t,this,arguments)}}))}}]);
//# sourceMappingURL=148-legacy.ef4c792b.js.map