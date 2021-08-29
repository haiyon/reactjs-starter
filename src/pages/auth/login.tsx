import React from 'react';

import Page from '@/components/page';

interface Props {}

const Login: React.FC<Props> = () => (
  <Page title="Login">
    <div className="flex flex-col justify-center items-center h-screen">Login View</div>
  </Page>
);

Login.propTypes = {};

export default Login;
