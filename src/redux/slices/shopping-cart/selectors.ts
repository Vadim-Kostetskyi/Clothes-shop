import { type RootState } from 'redux/store';
import { name as shoppingCartName } from './shopping-cart.slice';
import { AddItemPayload, GetQuantityUniqueProducts } from './types/types';

const selectQuantity = (state: RootState): number =>
  state[shoppingCartName].quantity;

const selectQuantityByProductId = (
  state: RootState,
  productId: string,
): number =>
  state[shoppingCartName].items.reduce(
    (count, item) => (item.id === productId ? ++count : count),
    0,
  );

const selectTotalQuantityForProductVariant = ({
  state,
  id,
  colour,
  size,
}: GetQuantityUniqueProducts): number =>
  state[shoppingCartName].items.reduce(
    (count, item) =>
      item.id === id && item.colour === colour && item.size === size
        ? ++count
        : count,
    0,
  );

const selectCartItems = (state: RootState): AddItemPayload[] => {
  const allItems = state[shoppingCartName].items;
  const uniqueItems = new Set<string>();
  const result: AddItemPayload[] = [];

  allItems.forEach(item => {
    const compositeKey = `${item.id}-${item.colour}-${item.size}`;

    if (!uniqueItems.has(compositeKey)) {
      uniqueItems.add(compositeKey);
      result.push(item);
    }
  });

  return result;
};

const selectOrderTotalPrice = (state: RootState): number =>
  state[shoppingCartName].totalPrice;

export {
  selectQuantity,
  selectQuantityByProductId,
  selectCartItems,
  selectTotalQuantityForProductVariant,
  selectOrderTotalPrice,
};
