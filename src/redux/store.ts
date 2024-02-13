import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filesApi } from './filesApi';
import { productsApi } from './productsApi';
import {
  reducer as shoppingCartReducer,
  name as shoppingCartName,
} from './slices/shopping-cart/shopping-cart';
import {
  reducer as viewportWidthReducer,
  name as viewportWidthName,
} from './slices/viewport-width/viewport-width';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [filesApi.reducerPath]: filesApi.reducer,
  [shoppingCartName]: shoppingCartReducer,
  [viewportWidthName]: viewportWidthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
    filesApi.middleware,
  ],
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
