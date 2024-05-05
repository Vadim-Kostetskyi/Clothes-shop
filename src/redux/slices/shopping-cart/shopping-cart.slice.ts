import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddItemPayload, Color, Size } from './types/types';
import { SliceName } from '../enums/enums';
import { useLocalStorage } from 'hooks';
import { isMatchingItem, generateKey } from 'helpers';

type State = {
  items: AddItemPayload[];
  quantity: Record<string, number>;
  totalPrice: number;
};

const initialState: State = {
  items: [],
  quantity: {} as Record<string, number>,
  totalPrice: 0,
};

const { getItem, setItem } = useLocalStorage<State>(
  SliceName.SHOPPING_CART,
  initialState,
);

const updateTotalPrice = (state: State, delta: number): void => {
  state.totalPrice += delta;
};

const addItem: CaseReducer<State, PayloadAction<AddItemPayload>> = (
  state,
  action,
) => {
  const { payload } = action;
  const { items = [], quantity } = state;
  const { id, colour, size, price } = payload;
  const existingItemIndex = items.findIndex(item =>
    isMatchingItem(item, id, colour, size),
  );

  if (existingItemIndex === -1) {
    items.push(payload);
  }

  const key = generateKey(id, colour, size);
  quantity[key] = (quantity?.[key] ?? 0) + 1;
  updateTotalPrice(state, price);
  setItem(state);
};

type DeleteItemProps = { id: string; colour: Color; size: Size };

const removeItem: CaseReducer<State, PayloadAction<DeleteItemProps>> = (
  state,
  action,
) => {
  const { id, colour, size } = action.payload;
  const { items, quantity } = state;
  const key = generateKey(id, colour, size);
  const itemsToRemove = items.filter(item =>
    isMatchingItem(item, id, colour, size),
  );

  if (itemsToRemove.length > 0) {
    state.items = items.filter(item => !isMatchingItem(item, id, colour, size));
    const removedPrice = quantity[key] * itemsToRemove[0]?.price;
    updateTotalPrice(state, -removedPrice);
    delete state.quantity[key];
    setItem(state);
  }
};

type ChangeItemProps = {
  id: string;
  oldColor: Color;
  oldSize: Size;
  newColor: Color;
  newSize: Size;
  newCount: number;
};

const changeItem: CaseReducer<State, PayloadAction<ChangeItemProps>> = (
  state,
  action,
) => {
  const { id, oldColor, oldSize, newColor, newSize, newCount } = action.payload;
  const oldKey = generateKey(id, oldColor, oldSize);
  const newKey = generateKey(id, newColor, newSize);
  const oldCount = state.quantity[oldKey];
  const index = state.items.findIndex(item =>
    isMatchingItem(item, id, oldColor, oldSize),
  );

  if (index >= 0) {
    const { price, ...oldItem } = state.items[index];

    if (oldKey !== newKey) {
      delete state.quantity[oldKey];
      state.items[index] = {
        ...oldItem,
        price,
        colour: newColor,
        size: newSize,
      };
      state.quantity[newKey] = (state.quantity[newKey] ?? 0) + newCount;
      state.items = state.items.filter(
        item => !isMatchingItem(item, id, oldColor, oldSize),
      );
    } else {
      state.quantity[oldKey] = newCount;
    }
    updateTotalPrice(state, (newCount - oldCount) * price);
  }
  setItem(state);
};

const clearCart: CaseReducer<State> = () => {
  setItem(initialState);

  return initialState;
};

const { reducer, actions, name } = createSlice({
  name: SliceName.SHOPPING_CART,
  initialState: { ...initialState, ...getItem() },
  reducers: {
    addItem,
    removeItem,
    changeItem,
    clearCart,
  },
});

export { actions, name, reducer };
