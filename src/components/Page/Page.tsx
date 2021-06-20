import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

import Title from '@/components/Page/Title';

interface Props {
  children: ReactNode;
  title?: string | '';
}

const Page: React.FC<Props> = ({ children, title }) => (
  <>
    <Title suffix="React.js Starter">{title}</Title>
    {children}
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
