import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { getTotalPrice, getValidClassNames } from 'helpers';
import { clothesColors, Color } from 'types/types';
import styles from './index.module.scss';

type OrderSummaryProps = {
  totalPrice: number;
  amountProducts?: number;
  isShoppingCartOpen?: boolean;
};

const OrderSummaryOrder: FC<OrderSummaryProps> = ({
  totalPrice,
  amountProducts,
  isShoppingCartOpen,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.orderContainer}>
      <div
        className={
          isShoppingCartOpen ? styles.container : styles.orderSummaryContainer
        }
      >
        <p
          className={clsx(styles.orderText, {
            [styles.hide]: isShoppingCartOpen,
          })}
        >
          {t('order.seeDetails')}
        </p>
        <div
          className={clsx(styles.imagesBox, {
            [styles.hide]: isShoppingCartOpen,
          })}
        >
          <img
            src={clothesColors.Beige}
            alt={Color.Beige}
            className={styles.image}
          />
          <img
            src={clothesColors.Black}
            alt={Color.Beige}
            className={styles.image}
          />
        </div>

        <div className={styles.itemsBox}>
          <p>
            {amountProducts} {''}
            {amountProducts && amountProducts > 1 ? t('items') : t('item')}
          </p>
          <p className={styles.black}>
            {getTotalPrice(1, totalPrice) + ' '}
            <span className={styles.currency}>{t('currency')}</span>
          </p>
        </div>

        <div
          className={getValidClassNames(
            styles.totalPrice,
            styles.text,
            styles.bold,
          )}
        >
          <p className={styles.black}>
            {t('shoppingCart.total').toUpperCase()}
          </p>
          <p className={styles.black}>
            {getTotalPrice(1, totalPrice) + ' '}
            <span className={styles.currency}>{t('currency')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryOrder;
