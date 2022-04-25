import Vue from 'vue'
import VueRouter from 'vue-router'
import NOTFound from '../views/notFound.vue'
import SignIn from '../views/signIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
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
  }, {
    path: '/users/top',
    name: 'USERS-TOP',
    component: () => import('../views/UsersTop.vue')
  }, {
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
    path: '/admin/restaurant',
    name: 'ADMIN-RESTAURANT',
    component: () => import('../views/AdminRestaurants.vue')
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

export default router
