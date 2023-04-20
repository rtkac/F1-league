import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux';

import { apiClient } from './apiClient';

function createStore() {
  return configureStore({
    devTools: { maxAge: 500 }, // !!! TODO
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiClient.middleware);
    },
    reducer: {
      [apiClient.reducerPath]: apiClient.reducer,
    },
  });
}

function reduxStoreFactory() {
  let store: ReturnType<typeof createStore>;

  return function () {
    if (store) {
      return store;
    }

    store = createStore();
    return store;
  };
}

let internalStore: ReturnType<typeof getStore>;

export const getStore = reduxStoreFactory();

export type RootState = ReturnType<typeof internalStore.getState>;
export type AppDispatch = typeof internalStore.dispatch;

export const useDispatch = () => _useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
