import Vue from 'vue'
import VueRouter from 'vue-router'
import NOTFound from '../views/notFound.vue'
import SignIn from '../views/signIn.vue'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'SIGNIN',
    component: SignIn

  },
  {
    path: '/signup',
    name: 'SIGNUP',
    component: () => import('../views/signUp.vue')
  },
  {
    path: '/restaurants',
    name: 'RESTAURANTS',
    component: () => import('../views/Restaurants.vue')
  },
  {
    path: '/restaurants/feeds',
    name: 'RESTAURANTS-FEEDS',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'RESTAURANTS-TOP',
    component: () => import('../views/RestaurantsTop.vue')
  },

  {
    path: '/restaurants/:id',
    name: 'RESTAURANT',
    component: () => import('../views/Restaurant.vue')
  },

  {
    path: '/restaurants/:id/dashboard',
    name: 'DASHBOARD',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/users/top',
    name: 'USERS-TOP',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'USER-EDIT',
    component: () => import('../views/UserEdit.vue')
  },
  {
    path: '/users/:id',
    name: 'USER',
    component: () => import('../views/User.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurant'
  },
  {
    path: '/admin/restaurants',
    name: 'ADMIN-RESTAURANTS',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: '/admin/restaurants/new',
    name: 'ADMIN-RESTAURANTS-NEW',
    component: () => import('../views/AdminRestaurantNew.vue')
  },
  {
    path: '/admin/categories',
    name: 'ADMIN-CATEGORIES',
    component: () => import('../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'ADMIN-USERS',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'ADMIN-RESTAURANT-EDIT',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  {
    path: '/admin/restaurants/:id',
    name: 'ADMIN-RESTAURANT',
    component: () => import('../views/AdminRestaurant.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: NOTFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})
router.beforeEach((to, from, next) => {
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
