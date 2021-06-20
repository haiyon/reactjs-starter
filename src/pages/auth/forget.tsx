import React from 'react';

import Page from '@/components/Page/Page';

interface Props {}

const Forget: React.FC<Props> = () => (
  <Page title="Forget">
    <div className="flex flex-col justify-center items-center h-screen">Forget View</div>
  </Page>
);

Forget.propTypes = {};

export default Forget;
