import { createRouter, createWebHistory } from 'vue-router'
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
    },
    {
      path: '/components/tabmenu',
      name: 'tabmenu',
      component: () => import('../views/TabMenuView.vue'),
      children: [
        {
          path: 'child1',
          name: 'tabmenuchild1',
          component: () => import('../views/TabMenuChild1View.vue')
        },
        {
          path: 'child2',
          name: 'tabmenuchild2',
          component: () => import('../views/TabMenuChild2View.vue')
        }
      ]
    }
  ]
})

export default router
