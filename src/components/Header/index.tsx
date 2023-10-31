import React from 'react';
import styles from './index.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <div className={styles.headerWrapper}>
    <img src={logo} className={styles.logo} alt="Logo" />
  </div>
);

export default Header;