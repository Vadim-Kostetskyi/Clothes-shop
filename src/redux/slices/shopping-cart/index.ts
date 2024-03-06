export { reducer, name, actions } from './shopping-cart.slice';
export {
  selectTotalQuantity,
  selectQuantityByProductId,
  selectTotalQuantityForProductVariant,
  selectOrderTotalPrice,
  selectStockQuantity,
  memoizedSelectUniqueItems,
} from './selectors';
export { type AddItemPayload } from './types/types';
