import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const AuthLayout: React.FC<RouteConfigComponentProps> = React.memo(props => {
  const { route } = props;
  return <div className="flex flex-col justify-center items-center h-screen">{renderRoutes(route?.routes)}</div>;
});

export default AuthLayout;
