import React from 'react';
import { useTranslation } from 'react-i18next';
import ShoppingBag from 'assets/svgs/Shopping-bag';
import User from 'assets/svgs/User';
import Search from 'assets/svgs/Search';
import styles from './index.module.scss';

const TopBar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.inputBox}>
        <input
          type="text"
          className={styles.input}
          placeholder={t('searchPlaceholder')}
        />
        <button className={styles.searchBtn}>
          <Search className={styles.searchIcon} />
        </button>
      </div>
      <button className={styles.userBtn}>
        <User className={styles.userIcon} />
      </button>
      <button className={styles.userBtn}>
        <ShoppingBag className={styles.userIcon} />
      </button>
    </>
  );
};

export default TopBar;
