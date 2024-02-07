import { name as shoppingCartName } from './shopping-cart.slice';
import { type RootState } from '../../store';

export const selectQuantity = (state: RootState): number =>
  state[shoppingCartName].quantity;

export const selectQuantityByProductId = (
  state: RootState,
  productId: string,
): number =>
  state[shoppingCartName].items.reduce((count, item) => {
    return item.id === productId ? ++count : count;
  }, 0);
