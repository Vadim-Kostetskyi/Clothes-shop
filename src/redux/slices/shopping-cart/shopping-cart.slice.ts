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
  const newItem = action.payload;
  const { id, colour, size, price } = newItem;
  const existingItemIndex = state.items.findIndex(item =>
    isMatchingItem(item, id, colour, size),
  );

  if (existingItemIndex === -1) {
    state.items.push(newItem);
  }

  const key = generateKey(id, colour, size);
  state.quantity[key] = (state.quantity[key] ?? 0) + 1;
  updateTotalPrice(state, price);
  setItem(state);
};

type DeleteItemProps = { id: string; colour: Color; size: Size };

const removeItem: CaseReducer<State, PayloadAction<DeleteItemProps>> = (
  state,
  action,
) => {
  const { id, colour, size } = action.payload;
  const key = generateKey(id, colour, size);
  const itemsToRemove = state.items.filter(item =>
    isMatchingItem(item, id, colour, size),
  );

  if (itemsToRemove.length > 0) {
    state.items = state.items.filter(
      item => !isMatchingItem(item, id, colour, size),
    );
    const removedPrice = state.quantity[key] * itemsToRemove[0]?.price;
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
  const index = state.items.findIndex(item =>
    isMatchingItem(item, id, oldColor, oldSize),
  );
  const oldCount = state.quantity[oldKey] ?? 0;

  if (index !== -1) {
    const price = state.items[index].price;
    if (oldColor === newColor && oldSize === newSize) {
      state.quantity[oldKey] = newCount;
    } else {
      const updatedItem = {
        ...state.items[index],
        colour: newColor,
        size: newSize,
      };

      const updatedIndex = state.items.findIndex(item =>
        isMatchingItem(
          item,
          updatedItem.id,
          updatedItem.colour,
          updatedItem.size,
        ),
      );

      if (updatedIndex === -1) {
        state.items = [
          ...state.items.slice(0, index),
          updatedItem,
          ...state.items.slice(index + 1),
        ];
      }
      if (oldKey !== newKey) {
        delete state.quantity[oldKey];
        state.quantity[newKey] = (state.quantity[newKey] ?? 0) + newCount;
        state.items = state.items.filter(
          item => !isMatchingItem(item, id, oldColor, oldSize),
        );
      } else {
        state.quantity[newKey] = oldCount + newCount;
      }
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
