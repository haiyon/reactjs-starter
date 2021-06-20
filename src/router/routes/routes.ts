import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';

// Layout
import AuthLayout from '@/layouts/Auth/Auth';
import BasicLayout from '@/layouts/Basic/Basic';
import MainLayout from '@/layouts/Main/Main';
import basicRoutes from '@/router/routes/basic';

const routes: RouteConfig[] = [
  {
    component: BasicLayout,
    routes: [
      {
        path: '/',
        component: MainLayout,
        exact: true,
        routes: [{ path: '/welcome', component: loadable(() => import('@/pages/welcome/welcome')) }]
      },
      {
        path: '/auth',
        component: AuthLayout,
        exact: false,
        routes: [
          { path: '/auth/login', component: loadable(() => import('@/pages/auth/login')) },
          { path: '/auth/forget', component: loadable(() => import('@/pages/auth/forget')) }
        ]
      },
      ...basicRoutes
    ]
  }
];

export default routes;
