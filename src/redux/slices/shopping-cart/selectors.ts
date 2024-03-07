import { type RootState } from 'redux/store';
import { name as shoppingCartName } from './shopping-cart.slice';
import { AddItemPayload, GetQuantityUniqueProducts } from './types/types';
import { createSelector } from 'reselect';
import { generateKey } from 'helpers';

const selectTotalQuantity = (state: RootState): number =>
  Object.values(state[shoppingCartName]?.quantity).reduce(
    (total, currentQuantity) => total + currentQuantity,
    0,
  );

const selectQuantityByProductId = (
  state: RootState,
  productId: string,
): number => {
  const existingItems =
    state?.[shoppingCartName]?.items?.filter(({ id }) => id === productId) ||
    [];
  const keys = existingItems.map(({ id, colour, size }) =>
    generateKey(id, colour, size),
  );

  return keys.reduce((count, key) => {
    count += state?.[shoppingCartName]?.quantity[key] ?? 0;
    return count;
  }, 0);
};

const selectTotalQuantityForProductVariant = ({
  state,
  id,
  colour,
  size,
}: GetQuantityUniqueProducts): number =>
  state[shoppingCartName]?.quantity[generateKey(id, colour, size)] ?? 0;

const selectOrderTotalPrice = (state: RootState): number =>
  state[shoppingCartName]?.totalPrice ?? 0;

const selectStockQuantity = (state: RootState, productId: string): number =>
  state[shoppingCartName]?.items?.find(({ id }) => id === productId)?.count ??
  0;

const memoizedSelectUniqueItems = createSelector(
  (state: RootState) => state[shoppingCartName]?.items ?? [],
  items => {
    const uniqueItems = new Set<string>();
    const result: AddItemPayload[] = [];

    items.forEach(item => {
      const { id, colour, size } = item;
      const compositeKey = generateKey(id, colour, size);

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
