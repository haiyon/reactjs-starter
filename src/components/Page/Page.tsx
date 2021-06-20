import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

interface Props {
  children: ReactNode;
  title?: string | '';
}

const Page: React.FC<Props> = ({ children, title }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
