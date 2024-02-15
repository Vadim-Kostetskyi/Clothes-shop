import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddItemPayload } from './types/types';
import { SliceName } from '../enums/enums';
import { useLocalStorage } from 'hooks';
import { Color, Size } from 'types/types';

type State = {
  items: AddItemPayload[];
  quantity: number;
  totalPrice: number;
};

const initialState: State = {
  items: [],
  quantity: 0,
  totalPrice: 0,
};

const { getItem, setItem } = useLocalStorage<State>(
  SliceName.SHOPPING_CART,
  initialState,
);

const addItem: CaseReducer<State, PayloadAction<AddItemPayload>> = (
  state,
  action,
) => {
  const newItem = action.payload;
  state.items.push(newItem);
  state.quantity++;
  state.totalPrice += newItem.price;

  setItem(state);
};

type DeleteItemProps = { id: string; colour: Color; size: Size };

const removeItem: CaseReducer<State, PayloadAction<DeleteItemProps>> = (
  state,
  action,
) => {
  const { id: itemId, colour, size } = action.payload;

  const itemsToRemove = state.items.filter(
    item => item.id === itemId && item.colour === colour && item.size === size,
  );

  if (itemsToRemove.length > 0) {
    state.items = state.items.filter(
      item =>
        !(item.id === itemId && item.colour === colour && item.size === size),
    );

    state.quantity -= itemsToRemove.length;
    state.totalPrice -= itemsToRemove.reduce(
      (sum, item) => sum + item.price,
      0,
    );

    setItem(state);
  }
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
    clearCart,
  },
});

export { actions, name, reducer };
