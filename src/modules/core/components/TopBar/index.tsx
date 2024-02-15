import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'hooks';
import { TimeConstants } from 'utils/constants';
import {
  selectQuantity,
  actions as shoppingCartActions,
} from 'redux/slices/shopping-cart';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import User from 'assets/svgs/User';
import Search from 'assets/svgs/Search';
import ShoppingCartModal from 'modules/checkout/containers/ShoppingCartModal';
import styles from './index.module.scss';

const TopBar = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(selectQuantity);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
      <button className={styles.shoppingCartButton} onClick={openModal}>
        <ShoppingBag className={styles.shoppingBagIcon} />
        {quantity > 0 ? (
          <div className={styles.quantity}>{quantity}</div>
        ) : null}
      </button>
      {isModalOpen && <ShoppingCartModal onClose={closeModal} />}
    </>
  );
};

export default TopBar;
