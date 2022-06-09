"use strict";(self["webpackChunkforum_front_end_vue2"]=self["webpackChunkforum_front_end_vue2"]||[]).push([[300],{9077:function(t,e,a){a.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},r=[],i=a(1001),s={},o=(0,i.Z)(s,n,r,!1,null,null,null),c=o.exports},1300:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategory,expression:"newCategory"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategory},on:{input:function(e){e.target.composing||(t.newCategory=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory(t.newCategory)}}},[t._v(" 新增 ")])])])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(e.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return t.handleCancel(e.id)}}},[t._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v(" Delete ")])])])})),0)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],i=a(9077),s=a(9032),o=a(1926),c={components:{AdminNav:i.Z},data(){return{categories:[],newCategory:""}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const{data:t}=await s.Z.categories.get();console.log(t),this.categories=t.categories.map((t=>({...t,isEditing:!1,nameCached:""})))}catch(t){o.F.fire({icon:"warning",title:"讀取類別資料失敗"})}},async createCategory(t){try{if(!t)return;const e=await s.Z.categories.create({name:t}),a=e.data.categoryId;this.categories.push({name:t,id:a}),this.newCategory=""}catch(e){o.F.fire({icon:"warning",title:"無法新增類別"})}},async deleteCategory(t){try{await s.Z.categories["delete"]({categoryId:t}),this.categories=this.categories.filter((e=>e.id!==t))}catch(e){o.F.fire({icon:"warning",title:"無法刪除類別"})}},toggleIsEditing(t){this.categories=this.categories.map((e=>e.id===t?{...e,isEditing:!e.isEditing,nameCached:e.name}:e))},async updateCategory({categoryId:t,name:e}){try{const a=await s.Z.categories.update({categoryId:t,name:e});console.log(a),this.toggleIsEditing(t)}catch(a){o.F.fire({icon:"warning",title:"無法修改"})}},handleCancel(t){this.categories=this.categories.map((e=>e.id===t?{...e,name:e.nameCached}:e)),this.toggleIsEditing(t)}}},l=c,d=a(1001),u=(0,d.Z)(l,n,r,!1,null,"3ccced03",null),g=u.exports},9032:function(t,e,a){var n=a(1926);e["Z"]={users:{get(){return n.l.get("/admin/users")},update({userId:t,isAdmin:e}){return n.l.put(`/admin/users/${t}`,{isAdmin:e})}},categories:{get(){return n.l.get("/admin/categories")},create({name:t}){return n.l.post("/admin/categories",{name:t})},update({categoryId:t,name:e}){return n.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return n.l["delete"](`/admin/categories/${t}`)}},restaurants:{getDetail({restaurantId:t}){return n.l.get(`/admin/restaurants/${t}`)},create({formData:t}){return n.l.post("/admin/restaurants",t)},get(){return n.l.get("/admin/restaurants")},delete(t){return n.l["delete"](`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return n.l.put(`/admin/restaurants/${t}`,e)}}}}}]);
//# sourceMappingURL=300.d92f560b.js.map