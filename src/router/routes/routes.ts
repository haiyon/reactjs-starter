import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';

// Layout
import AuthLayout from '@/layouts/auth';
import BasicLayout from '@/layouts/basic';
import MainLayout from '@/layouts/main';
import basicRoutes from '@/router/routes/basic';

const routes: RouteConfig[] = [
  {
    component: BasicLayout,
    routes: [
      {
        path: '/auth',
        component: AuthLayout,
        routes: [
          { path: '/auth/login', component: loadable(() => import('@/pages/auth/login')) },
          { path: '/auth/forget', component: loadable(() => import('@/pages/auth/forget')) }
        ]
      },
      {
        path: '/',
        component: MainLayout,
        routes: [{ path: '/welcome', component: loadable(() => import('@/pages/welcome/welcome')) }]
      },
      ...basicRoutes
    ]
  }
];

export default routes;
