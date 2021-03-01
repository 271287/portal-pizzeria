import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => (
  <nav className={styles.component}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active" >dashboard</Button>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/login`} activeClassName="active" >login</Button>
  </nav>
);

export default PageNav;