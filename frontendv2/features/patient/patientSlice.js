import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import patientService from './patientService';
const initialState = {
  totalNumberofPatients: null,
  patients: [],
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
      });
  },
});

export const { reset } = patientSlice.actions;
export default patientSlice.reducer;
