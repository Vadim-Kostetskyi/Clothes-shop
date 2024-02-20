import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks';
import {
  memoizedSelectUniqueItems,
  selectOrderTotalPrice,
} from 'redux/slices/shopping-cart';
import ShoppingCart from 'modules/checkout/components/ShoppingCart';
import OrderSummary from 'modules/checkout/components/OrderSummary';

type Properties = {
  onClose: () => void;
};

const ShoppingCartModal: FC<Properties> = ({ onClose }): JSX.Element => {
  const { t } = useTranslation();
  const products = useAppSelector(memoizedSelectUniqueItems);
  const totalPrice = useAppSelector(selectOrderTotalPrice);

  return (
    <ShoppingCart
      title={t('shoppingCart.title')}
      onClose={onClose}
      products={products}
    >
      <OrderSummary totalPrice={totalPrice} />
    </ShoppingCart>
  );
};

export default ShoppingCartModal;
