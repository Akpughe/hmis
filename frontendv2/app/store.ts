import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import patientReducer from '../features/patient/patientSlice';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      patients: patientReducer,
    },
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

// type AppDispatch = typeof store.dispatch;

// // Since we use typescript, lets utilize `useDispatch`
// export const useDispatch = () => useDispatchBase<AppDispatch>();

// // And utilize `useSelector`
// export const useSelector = <TSelected = unknown>(
//   selector: (state: RootState) => TSelected
// ): TSelected => useSelectorBase<RootState, TSelected>(selector);

const store = makeStore();

export default store;
