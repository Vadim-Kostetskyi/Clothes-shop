import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MenuLayout from './MenuLayout';
import TopBar from './TopBar';
import logo from '../../assets/images/logo.png';
import styles from './index.module.scss';

const Header = (): JSX.Element => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <div
        className={!isHomePage ? styles.headerWrapperHomePage : styles.headerWrapper}
      >
        <nav className={isHomePage ? styles.navigation : styles.invisible}>
          <MenuLayout />
        </nav>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="Logo" />
        </Link>
        <div className={isHomePage ? styles.userBox : styles.invisible}>
          <TopBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
