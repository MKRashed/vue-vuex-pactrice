import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/posts',
    name: 'PostIndex',
    component: () => import('../views/Post/Index.vue'),
  },
  {
    path: '/posts/:id',
    name: 'PostShow',
    component: () => import('../views/Post/Show.vue'),
  },
  {
    path: '/schedules',
    name: 'ScheduleIndex',
    component: () => import('../views/Schedule/Index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
