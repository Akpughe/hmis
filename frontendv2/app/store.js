import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
}

const store = makeStore();

export default store;
