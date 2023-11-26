import React from 'react';
import { useTranslation } from 'react-i18next';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import User from 'assets/svgs/User';
import Search from 'assets/svgs/Search';
import styles from './index.module.scss';

const TopBar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={t('searchPlaceholder')}
        />
        <button className={styles.searchButton}>
          <Search className={styles.searchIcon} />
        </button>
      </div>
      <button className={styles.userButton}>
        <User className={styles.userIcon} />
      </button>
      <button className={styles.shoppingBagButton}>
        <ShoppingBag className={styles.shoppingBagIcon} />
      </button>
    </>
  );
};

export default TopBar;
