import { isLogin } from '@middlewares/authenticare';

export default [
  {
    path: '/',
    component: () => import('@layouts/AuthLayout.vue'),
    beforeEnter: [isLogin],
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          auth: false,
        },
        component: () => import('@pages/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'register',
        meta: {
          auth: false,
        },
        component: () => import('@pages/RegisterPage.vue'),
      },
    ]
  }
]