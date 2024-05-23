import { isLogin } from '@middlewares/authenticare';
import authRoutes from '@router/routes/auth';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@layouts/MainLayout.vue'),
    beforeEnter: [isLogin],
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        redirect: { name: 'home' },
      },
      {
        path: 'dashboard',
        name: 'home',
        component: () => import('@pages/IndexPage.vue')
      },
      {
        path: 'profile/:id',
        name: 'profile',
        component: () => import('@pages/ProfilePage.vue')
      },
      {
        path: 'dashboard/folder/:id',
        name: 'folders',
        component: () => import('@pages/FolderPage.vue')
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('@pages/InfoPage.vue')
      },
    ],
  },
  ...authRoutes,

  {
    path: '/:catchAll(.*)*',
    component: () => import('@pages/ErrorNotFound.vue'),
  },
];

export default routes;

