import React from 'react';
import { Navigate } from 'react-router-dom';

import { Welcome as WelcomeView, NotFound as NotFoundView } from '@/views';
import MainLayout from '@/layouts/Main/Main';

const routes = [
  // {
  //   path: 'app',
  //   element: <AppLayout />,
  //   children: [{ path: '*', element: <Navigate to="/404" /> }]
  // },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'welcome', element: <WelcomeView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/welcome" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
