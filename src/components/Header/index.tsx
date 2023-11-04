import React from 'react';
import { menuName, menuList } from './MenuList';
import logo from '../../assets/images/logo.png';
import Shopping_bag from 'assets/SVG/Header/Sopping_bag';
import User from 'assets/SVG/Header/User';
import Search from 'assets/SVG/Header/Search';
import styles from './index.module.scss';

const Header = ({ homePage }: { homePage?: boolean }): JSX.Element => {
  return (
    <div>
      <div
        className={styles.headerWrapper}
        style={homePage ? { justifyContent: 'center' } : {}}
      >
        <nav className={!homePage ? styles.navigation : styles.invisible}>
          <div className={styles.menuNameBox}>
            {menuName.map(({ id, label }) => (
              <div className={styles.menuName} key={id}>
                <p className={styles.menuNameText}>{label}</p>
                <div className={styles.menList}>
                  {menuList[label].map(({ id, href, label }) => (
                    <a href={href} key={id} className={styles.link}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
        <img src={logo} className={styles.logo} alt="Logo" /> {/* home page */}
        <div className={!homePage ? styles.userBox : styles.invisible}>
          <div className={styles.inputBox}>
            <input type="text" className={styles.input} placeholder="Search" />
            <button className={styles.searchBtn}>
              <Search className={styles.searchIcon} />
            </button>
          </div>
          <button className={styles.btn}>
            <User className={styles.menuIcon} />
          </button>
          <button className={styles.btn}>
            <Shopping_bag className={styles.menuIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
