import React from 'react';
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

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  onClose,
  products,
  title,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <ShoppingCartHeader title={title} onClose={onClose} />
      <ShoppingCartList className={styles.content} products={products} />
      <div className={styles.promotionalCode}>
        <div>{t('shoppingCart.promotionalCode')}</div>
        <div>{t('shoppingCart.action')}</div>
      </div>
      {children}
    </div>
  );
};

export default ShoppingCart;
