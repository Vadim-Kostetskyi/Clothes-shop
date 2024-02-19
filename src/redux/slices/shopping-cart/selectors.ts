import { type RootState } from 'redux/store';
import { name as shoppingCartName } from './shopping-cart.slice';
import { AddItemPayload, GetQuantityUniqueProducts } from './types/types';
import { createSelector } from 'reselect';

const selectTotalQuantity = (state: RootState): number =>
  Object.values(state[shoppingCartName].quantity).reduce(
    (total, currentQuantity) => total + currentQuantity,
    0,
  );

const selectQuantityByProductId = (
  state: RootState,
  productId: string,
): number => {
  const existingItems = state[shoppingCartName].items.filter(
    it => it.id === productId,
  );
  const keys = existingItems.map(it => it.id + it.colour + it.size);

  return keys.reduce((count, key) => {
    count += state[shoppingCartName].quantity[key];
    return count;
  }, 0);
};

const selectTotalQuantityForProductVariant = ({
  state,
  id,
  colour,
  size,
}: GetQuantityUniqueProducts): number =>
  state[shoppingCartName].quantity[id + colour + size];

const selectOrderTotalPrice = (state: RootState): number =>
  state[shoppingCartName].totalPrice;

const selectStockQuantity = (state: RootState, id: string): number => {
  return state[shoppingCartName].items.find(item => item.id === id)?.count ?? 0;
};

const memoizedSelectUniqueItems = createSelector(
  (state: RootState) => state[shoppingCartName].items,
  items => {
    const uniqueItems = new Set<string>();
    const result: AddItemPayload[] = [];

    items.forEach(item => {
      const compositeKey = `${item.id}-${item.colour}-${item.size}`;

      if (!uniqueItems.has(compositeKey)) {
        uniqueItems.add(compositeKey);
        result.push(item);
      }
    });

    return result;
  },
);

export {
  selectTotalQuantity,
  selectQuantityByProductId,
  memoizedSelectUniqueItems,
  selectTotalQuantityForProductVariant,
  selectOrderTotalPrice,
  selectStockQuantity,
};
