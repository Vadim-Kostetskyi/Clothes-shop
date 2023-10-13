import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface IUserData {
  data: object[];
}

export const register = createAsyncThunk<IUserData>(
  'products',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get<IUserData>('/users');
        console.log(response);
        
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
