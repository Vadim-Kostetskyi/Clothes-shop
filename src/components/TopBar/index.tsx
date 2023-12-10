import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import User from 'assets/svgs/User';
import Search from 'assets/svgs/Search';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuantity,
  actions as bucketActions,
} from 'redux/slices/bucket/bucket';

enum BucketTimerConfig {
  SECOND = 1000,
  MINUTE = 60 * BucketTimerConfig.SECOND,
  TWENTY_MINUTES = 20 * BucketTimerConfig.MINUTE,
}

const TopBar = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantity);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (quantity > 0) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        dispatch(bucketActions.clearBucket());
      }, BucketTimerConfig.TWENTY_MINUTES);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [quantity, dispatch]);

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
        {quantity > 0 && <div className={styles.quantity}>{quantity}</div>}
      </button>
    </>
  );
};

export default TopBar;
