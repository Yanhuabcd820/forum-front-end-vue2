import Vue from 'vue'
import VueRouter from 'vue-router'
import NOTFound from '../views/notFound.vue'
import SignIn from '../views/signIn.vue'
import store from './../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }

  next()
}

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
    component: () => import('../views/AdminRestaurants.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'ADMIN-RESTAURANTS-NEW',
    component: () => import('../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'ADMIN-CATEGORIES',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'ADMIN-USERS',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'ADMIN-RESTAURANT-EDIT',
    component: () => import('../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'ADMIN-RESTAURANT',
    component: () => import('../views/AdminRestaurant.vue'),
    beforeEnter: authorizeIsAdmin
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
router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['SIGNUP', 'SIGNIN']

  // 如果 token 無效則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果 token 有效則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    console.log(5555)
    next('/restaurants')
    return
  }


  next()
})


export default router
