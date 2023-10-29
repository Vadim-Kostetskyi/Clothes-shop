import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice from './products/slice';
import authSlice from './auth/slice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const t = ''
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  category: categorySlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const myPersistStore = persistStore(store);

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;