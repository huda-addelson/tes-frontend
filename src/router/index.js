import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/Index.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/Index.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/Dashboard.vue'),
      },
      {
        path: 'users',
        component: () => import('../components/Users.vue'),
      },
    ],
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../components/Users.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../components/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
