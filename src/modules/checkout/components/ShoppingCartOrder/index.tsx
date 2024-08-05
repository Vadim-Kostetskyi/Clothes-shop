import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { type AddItemPayload } from 'redux/slices/shopping-cart';
import ShoppingCartHeader from 'modules/checkout/components/ShoppingCartHeader';
import ShoppingCartList from 'modules/checkout/components/ShoppingCartList';
import { useGetViewportWidth } from 'hooks';
import { ViewportWidth } from 'utils/constants';
import styles from './index.module.scss';

type ShoppingCartProps = {
  title: string;
  products: AddItemPayload[];
  children: React.ReactNode;
  onClose: () => void;
  isShoppingCartOpen: boolean;
};

const ShoppingCartOrder: FC<ShoppingCartProps> = ({
  products,
  title,
  children,
  isShoppingCartOpen,
  onClose,
}): JSX.Element => {
  const { t } = useTranslation();
  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  return (
    <div
      className={!isShoppingCartOpen ? styles.orderContainer : styles.container}
    >
      <div
        className={clsx(styles.box, {
          [styles.cartBox]: !isShoppingCartOpen,
        })}
      >
        <ShoppingCartHeader
          title={title}
          isShoppingCartOpen={isShoppingCartOpen}
          onClose={onClose}
          isOrder={true}
        />
        {isShoppingCartOpen ? children : null}
        <ShoppingCartList className={styles.content} products={products} />
        <div className={styles.promotionalCode}>
          <div>{t('shoppingCart.promotionalCode')}</div>
          <div>{t('shoppingCart.action')}</div>
        </div>
      </div>
      {isMobile && !isShoppingCartOpen ? (
        <button onClick={onClose}>{children}</button>
      ) : null}
      {isMobile ? null : children}
    </div>
  );
};

export default ShoppingCartOrder;
