import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://';

interface IProductData {
  data: object[];
}

interface Price {
  min: number;
  max: number;
}

export const categories = createAsyncThunk<IProductData>(
  'products',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProductData>('categories');

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const productsByName = createAsyncThunk<IProductData, string>(
  'productsByName',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProductData>(`products/?title=${name}`);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const productsByPrice = createAsyncThunk<IProductData, Price>(
  'productsByPrice',
  async (price, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProductData>(
        `products/?price_min=${price.min}&price_max=${price.max}`,
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const productsByCategory = createAsyncThunk<IProductData, number>(
  'productsByCategory',
  async (Id, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProductData>(
        `products/?categoryId=${Id}`,
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
