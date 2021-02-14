import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <div>
    {children}
  </div>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.any,
};