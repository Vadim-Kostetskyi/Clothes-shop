import React from 'react';
import Shopping_bag from 'assets/SVG/Header/Sopping_bag';
import User from 'assets/SVG/Header/User';
import Search from 'assets/SVG/Header/Search';
import styles from './index.module.scss';

const TopBar = (): JSX.Element => (
  <>
    <div className={styles.inputBox}>
      <input type="text" className={styles.input} placeholder="Search" />
      <button className={styles.searchBtn}>
        <Search className={styles.searchIcon} />
      </button>
    </div>
    <button className={styles.userBtn}>
      <User className={styles.userIcon} />
    </button>
    <button className={styles.userBtn}>
      <Shopping_bag className={styles.userIcon} />
    </button>
  </>
);

export default TopBar;
