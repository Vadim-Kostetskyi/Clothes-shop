import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddItemPayload } from './libs/types/types';

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

const addItem: CaseReducer<State, PayloadAction<AddItemPayload>> = (
  state,
  action,
) => {
  const newItem = action.payload;
  state.items.push(newItem);
  state.quantity++;
  state.totalPrice += newItem.price;
};

const removeItem: CaseReducer<State, PayloadAction<string>> = (
  state,
  action,
) => {
  const itemId = action.payload;
  const itemToRemove = state.items.find(item => item.id === itemId);
  if (itemToRemove) {
    state.items = state.items.filter(item => item.id !== itemId);
    state.quantity--;
    state.totalPrice -= itemToRemove.price;
  }
};

const clearCart: CaseReducer<State> = () => initialState;

const { reducer, actions, name } = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem,
    removeItem,
    clearCart,
  },
});

export { actions, name, reducer };