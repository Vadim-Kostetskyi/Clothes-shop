import React from 'react';
import MenuLayout from './MenuLayout';
import TopBar from './TopBar';
import logo from '../../assets/images/logo.png';
import styles from './index.module.scss';

const Header = ({ homePage }: { homePage?: boolean }): JSX.Element => {
  return (
    <div>
      <div
        className={styles.headerWrapper}
        style={homePage ? { justifyContent: 'center' } : {}}
      >
        <nav className={!homePage ? styles.navigation : styles.invisible}>
          <MenuLayout />
        </nav>
        <img src={logo} className={styles.logo} alt="Logo" /> {/* home page */}
        <div className={!homePage ? styles.userBox : styles.invisible}>
          <TopBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
