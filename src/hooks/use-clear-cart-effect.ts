import { useCallback, useEffect, useRef } from 'react';
import { TimeConstants } from 'utils/constants';
import { useAppDispatch } from 'hooks';
import { actions as shoppingCartActions } from 'redux/slices/shopping-cart';

const useClearCartEffect = (quantity: number): void => {
  const dispatch = useAppDispatch();
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const handleClearCart = useCallback(() => {
    dispatch(shoppingCartActions.clearCart());
  }, [dispatch]);

  useEffect(() => {
    const clearCartWithDelay = (): void => {
      timeoutIdRef.current = setTimeout(
        handleClearCart,
        TimeConstants.TWO_DAYS,
      );
    };

    if (quantity > 0) {
      clearTimeout(timeoutIdRef.current);
      clearCartWithDelay();
    }

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [quantity, handleClearCart]);
};

export { useClearCartEffect };
