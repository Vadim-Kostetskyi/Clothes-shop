import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks';
import {
  memoizedSelectUniqueItems,
  selectOrderTotalPrice,
} from 'redux/slices/shopping-cart';
import ShoppingCart from 'modules/checkout/components/ShoppingCart';
import OrderSummary from 'modules/checkout/components/OrderSummary';
import ShoppingCartOrder from 'modules/checkout/components/ShoppingCartOrder';
import OrderSummaryOrder from 'modules/checkout/components/OrderSummaryOrder';

type Properties = {
  onClose?: () => void;
  isOrder?: boolean;
};

const ShoppingCartModal: FC<Properties> = ({
  onClose = () => {},
  isOrder,
}): JSX.Element => {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const { t } = useTranslation();
  const products = useAppSelector(memoizedSelectUniqueItems);
  const totalPrice = useAppSelector(selectOrderTotalPrice);

  const onShoppingCartOpen = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  };

  return (
    <>
      {isOrder ? (
        <ShoppingCartOrder
          title={t('order.summaryTitle')}
          onClose={onShoppingCartOpen}
          products={products}
          isShoppingCartOpen={isShoppingCartOpen}
        >
          <OrderSummaryOrder
            totalPrice={totalPrice}
            amountProducts={products?.length}
            isShoppingCartOpen={isShoppingCartOpen}
          />
        </ShoppingCartOrder>
      ) : (
        <ShoppingCart
          title={t('shoppingCart.title')}
          onClose={onClose}
          products={products}
        >
          <OrderSummary totalPrice={totalPrice} />
        </ShoppingCart>
      )}
    </>
  );
};

export default ShoppingCartModal;
