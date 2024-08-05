import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { type AddItemPayload } from 'redux/slices/shopping-cart';
import ShoppingCartHeader from 'modules/checkout/components/ShoppingCartHeader';
import ShoppingCartList from 'modules/checkout/components/ShoppingCartList';
import styles from './index.module.scss';

type ShoppingCartProps = {
  title: string;
  products: AddItemPayload[];
  children: React.ReactNode;
  onClose: () => void;
};

const ShoppingCart: FC<ShoppingCartProps> = ({
  onClose,
  products,
  title,
  children,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ShoppingCartHeader title={title} onClose={onClose} />
        <ShoppingCartList className={styles.content} products={products} />
        <div className={styles.promotionalCode}>
          <div>{t('shoppingCart.promotionalCode')}</div>
          <div>{t('shoppingCart.action')}</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ShoppingCart;
