import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const BasicLayout: React.FC<RouteConfigComponentProps> = React.memo(props => {
  const { route } = props;
  return <>{renderRoutes(route?.routes)}</>;
});

export default BasicLayout;
