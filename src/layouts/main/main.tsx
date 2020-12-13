import React from 'react';
import { Outlet } from 'react-router-dom';

interface Props {}

const Main: React.FC<Props> = (props) => {
  return <Outlet />;
};

export default Main;
