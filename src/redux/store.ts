import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filesApi } from './filesApi';
import { productsApi } from './productsApi';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  reducer as bucketReducer,
  name as bucketName,
} from './slices/bucket/bucket';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [filesApi.reducerPath, productsApi.reducerPath],
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [filesApi.reducerPath]: filesApi.reducer,
  [bucketName]: bucketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
    filesApi.middleware,
  ],
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
