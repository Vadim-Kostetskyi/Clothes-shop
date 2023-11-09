import React from 'react';
import { useTranslation } from 'react-i18next';
import ShoppingBag from 'assets/SVG/shopping-bag';
import User from 'assets/SVG/user';
import Search from 'assets/SVG/search';
import styles from './index.module.scss';

const TopBar = (): JSX.Element => {
  const { t } = useTranslation();

  return (<>
    <div className={styles.inputBox}>
      <input type="text" className={styles.input} placeholder={t('searchPlaceholder')} />
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
