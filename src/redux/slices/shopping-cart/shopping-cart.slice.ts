import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddItemPayload } from './libs/types/types';
import { SliceName } from '../libs/enums/enums';

type State = {
  items: AddItemPayload[];
  quantity: number;
  totalPrice: number;
};

const saveStateToLocalStorage = (state: State): void => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(SliceName.SHOPPING_CART, serializedState);
};

const loadStateFromLocalStorage = (): State | undefined => {
  const serializedState = localStorage.getItem(SliceName.SHOPPING_CART);
  return serializedState ? JSON.parse(serializedState) : undefined;
};

const initialState: State = loadStateFromLocalStorage() ?? {
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

  saveStateToLocalStorage(state);
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
    saveStateToLocalStorage(state);
  }
};

const clearCart: CaseReducer<State> = () => {
  saveStateToLocalStorage(initialState);

  return initialState;
};

const { reducer, actions, name } = createSlice({
  name: SliceName.SHOPPING_CART,
  initialState,
  reducers: {
    addItem,
    removeItem,
    clearCart,
  },
});

export { actions, name, reducer };
