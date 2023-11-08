import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuLayout from './MenuLayout';
import TopBar from './TopBar';
import logo from '../../assets/images/logo.png';
import styles from './index.module.scss';

// interface HeaderProps {
//   homePage: boolean
// }

const Header = (): JSX.Element => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div>
      <div
        className={styles.headerWrapper}
        style={!isHomePage ? { justifyContent: 'center' } : {}}
      >
        <nav className={isHomePage ? styles.navigation : styles.invisible}>
          <MenuLayout />
        </nav>
        <img src={logo} className={styles.logo} alt="Logo" /> {/* home page */}
        <div className={isHomePage ? styles.userBox : styles.invisible}>
          <TopBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
