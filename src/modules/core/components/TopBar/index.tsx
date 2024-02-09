import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import User from 'assets/svgs/User';
import Search from 'assets/svgs/Search';
import styles from './index.module.scss';
import {
  selectQuantity,
  actions as shoppingCartActions,
} from 'redux/slices/shopping-cart/shopping-cart';
import { useAppDispatch, useAppSelector } from 'hooks';
import { TimeConstants } from 'utils/constants';

const TopBar = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(selectQuantity);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (quantity > 0) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        dispatch(shoppingCartActions.clearCart());
      }, TimeConstants.TWO_DAYS);
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
      <button className={styles.shoppingCartButton}>
        <ShoppingBag className={styles.shoppingCartIcon} />
        {quantity > 0 ? (
          <div className={styles.quantity}>{quantity}</div>
        ) : null}
      </button>
    </>
  );
};

export default TopBar;
