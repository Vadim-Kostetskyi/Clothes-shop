import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type AddItemPayload } from 'redux/slices/shopping-cart';
import ShoppingCartHeader from 'modules/checkout/components/ShoppingCartHeader';
import ShoppingCartList from 'modules/checkout/components/ShoppingCartList';
import styles from './index.module.scss';
import clsx from 'clsx';

type ShoppingCartProps = {
  title: string;
  products: AddItemPayload[];
  children: React.ReactNode;
  onClose: () => void;
  isOrder?: boolean;
};

const ShoppingCart: FC<ShoppingCartProps> = ({
  onClose,
  products,
  title,
  children,
  isOrder,
}): JSX.Element => {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const { t } = useTranslation();

  const onShoppingCartOpen = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  };

  return (
    <div className={isOrder ? styles.orderContainer : styles.container}>
      <div className={clsx(styles.box, { [styles.cartBox]: isOrder })}>
        <ShoppingCartHeader title={title} onClose={onClose} isOrder={isOrder} />
        <ShoppingCartList className={styles.content} products={products} />
        <div className={styles.promotionalCode}>
          <div>{t('shoppingCart.promotionalCode')}</div>
          <div>{t('shoppingCart.action')}</div>
        </div>
      </div>
      {!isOrder ? (
        children
      ) : (
        <button onClick={onShoppingCartOpen}>{children}</button>
      )}
    </div>
  );
};

export default ShoppingCart;
