import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';

const basicRoutes: RouteConfig[] = [
  {
    component: loadable(() => import('@/pages/not-found/not_found'))
  }
];

export default basicRoutes;
