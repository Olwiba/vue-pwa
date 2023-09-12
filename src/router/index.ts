import { createRouter, createWebHistory } from 'vue-router'
import rg4js from 'raygun4js'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// add tracking callback to the router after each route change
// this will register the virtual page view with Raygun
router.afterEach((to, from) => {
  rg4js('trackEvent', {
    type: 'pageView',
    path: to.path
  });
})

export default router