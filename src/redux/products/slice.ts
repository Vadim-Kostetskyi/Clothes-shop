import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from './operations';

export interface IProductData {
  id: number;
  name: string;
  price: number;
}


export type categoryState = {
   categories: IProductData[]
}

const initialState: categoryState = {
  categories: []
};

const categorySlice = createSlice({
  name: 'userDaily',
  initialState,
  reducers: {
    addCase(state, action: PayloadAction<[]>) {
      state.categories = action.payload
    }
  }
});

export const {addCase} = categorySlice.actions

export default categorySlice.reducer;

