import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authSlice from './authSlice';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    auth: authSlice,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // redux-persist uses non-serializable values
      }),
  });
  
  export const persistor = persistStore(store);