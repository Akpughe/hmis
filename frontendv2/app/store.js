import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import patientReducer from '../features/patient/patientSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      patients: patientReducer,
    },
  });
}

const store = makeStore();

export default store;
