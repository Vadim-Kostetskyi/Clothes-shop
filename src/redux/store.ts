import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filesApi } from './filesApi';
import { productsApi } from './productsApi';
import {
  reducer as bucketReducer,
  name as bucketName,
} from './slices/bucket/bucket';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [filesApi.reducerPath]: filesApi.reducer,
    [bucketName]: bucketReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
    filesApi.middleware,
  ],
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
