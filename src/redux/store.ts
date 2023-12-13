import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filesApi } from './filesApi';
import { productsApi } from './productsApi';
import { topCategoriesApi } from './topCategoriesApi';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [filesApi.reducerPath]: filesApi.reducer,
    [topCategoriesApi.reducerPath]: topCategoriesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      filesApi.middleware,
      topCategoriesApi.middleware,
    ),
});
setupListeners(store.dispatch);
