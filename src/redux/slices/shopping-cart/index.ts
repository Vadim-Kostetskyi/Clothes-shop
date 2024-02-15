export { reducer, name, actions } from './shopping-cart.slice';
export {
  selectQuantity,
  selectQuantityByProductId,
  selectCartItems,
  selectTotalQuantityForProductVariant,
  selectOrderTotalPrice,
} from './selectors';
export { type AddItemPayload } from './types/types';
