import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import patientService from './patientService';
import { IPatient } from '../../types';

export interface PatientDetails {
  id: number;
  firstname: string;
  lastname: string;
  age: string;
  gender: string;
  address: string;
}

export interface Patient{
  totalNumberofPatients: number,
  patients: PatientDetails[],
  newPatient: IPatient,
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean,
  message: any,
}

const initialState: Patient = {
  totalNumberofPatients: null,
  patients: [],
  newPatient: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const getPatients = createAsyncThunk(
  'patient/getPatients',
  async (_, thunkAPI) => {
    try {
      return await patientService.getPatients();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTotalPatients = createAsyncThunk(
  'patient/getTotalPatients',
  async (_, thunkAPI) => {
    try {
      return await patientService.getTotalPatients();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createPatient = createAsyncThunk(
  'patient/createPatient',
  async (patient, thunkAPI) => {
    try {
      return await patientService.addPatient(patient);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.patients = action.payload;
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTotalPatients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTotalPatients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.totalNumberofPatients = action.payload;
      })
      .addCase(getTotalPatients.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newPatient = action.payload;
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.newPatient = null;
      })
  },
});

export const { reset } = patientSlice.actions;
export default patientSlice.reducer;
