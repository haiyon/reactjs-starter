import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const MainLayout: React.FC<RouteConfigComponentProps> = React.memo(props => {
  const { route } = props;
  console.log(route);
  return <>{renderRoutes(route?.routes)}</>;
});

export default MainLayout;
