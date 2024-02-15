import React from 'react';
import {
  selectCartItems,
  selectOrderTotalPrice,
} from 'redux/slices/shopping-cart';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks';
import ShoppingCart from 'modules/checkout/components/ShoppingCart';
import OrderSummary from 'modules/checkout/components/OrderSummary';

type Properties = {
  onClose: () => void;
};

const ShoppingCartModal: React.FC<Properties> = ({ onClose }) => {
  const { t } = useTranslation();
  const products = useAppSelector(selectCartItems);
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
