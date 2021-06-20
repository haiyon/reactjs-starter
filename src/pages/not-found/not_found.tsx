import React from 'react';

import Page from '@/components/Page/Page';

interface Props {}

const NotFound: React.FC<Props> = () => (
  <Page title="404 | Not Found">
    <div className="flex flex-col justify-center items-center h-screen">Not Found</div>
  </Page>
);

NotFound.propTypes = {};

export default NotFound;
