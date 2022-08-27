import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import doctorService from './doctorService';
import { IDoctor } from '../../types';

export interface DoctorDetails {
  _id: number;
  userNumber: string;
  firstname: string;
  lastname: string;
  age: string;
  gender: string;
  address: string;
}

export interface Doctor{
  totalNumberofDoctors: number,
  doctors: DoctorDetails[],
  newDoctors: IDoctor,
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean,
  message: any,
}

// export interface RegData{
//   firstname: string,
//   lastname: string,
//   email: string,
//   phoneNumber: string,
//   maritalStatus: string,
//   gender: string,
//   dateOfBirth: string,
//   address: string,
//   password: string
// }

const initialState: Doctor = {
  totalNumberofDoctors: null,
  doctors: [],
  newDoctors: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const getDoctors = createAsyncThunk(
  'doctor/getDoctors',
  async (_, thunkAPI) => {
    try {
      return await doctorService.getDoctors();
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


export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.doctors = action.payload;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = doctorSlice.actions;
export default doctorSlice.reducer;
