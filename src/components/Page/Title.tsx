import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  suffix?: string;
  children?: string;
}

const Title: React.FC<Props> = ({ suffix, children }) => {
  const title = children ? children + (suffix ? ` - ${suffix}` : '') : 'React.js Starter';
  return (
    <Helmet>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Helmet>
  );
};

Title.propTypes = {
  suffix: PropTypes.string,
  children: PropTypes.string
};

export default Title;
