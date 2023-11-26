import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  id: number;
  name: string;
  role: string;
  email: string;
  password: string;
  avatar: string;
}

export interface IAuthData {
  user: IUser;
  accessToken: string | null;
  refreshToken: string | null;
  sessionId: string | null;
  isLoggedIn: boolean;
  isFetchingCurrent: boolean;
}

export interface ICategoryState {
  userInfo: IAuthData;
}

const initialState: ICategoryState = {
  userInfo: {
    user: {
      id: 0,
      name: '',
      role: '',
      email: '',
      password: '',
      avatar: '',
    },
    accessToken: null,
    refreshToken: null,
    sessionId: null,
    isLoggedIn: false,
    isFetchingCurrent: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
