import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import appointmentService from './appointmentService';

export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}
export interface IDoctor {
  _id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}
export interface AppointmentDetails {
  _id: number;
  patient: number;
  appointmentNumber: string;
  appointmentDate: string;
  appointmentTime: string;
  concern: string;
  user: IUser;
  doctor: IDoctor;
}

interface userAppointment {
  appointmentDate: string;
  appointmentTime: string;
  concern: string;
}

export interface Appointment {
  totalNumberofAppointments: number;
  appointments: AppointmentDetails[];
  newAppointment: AppointmentDetails;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: any;
}

const initialState: Appointment = {
  totalNumberofAppointments: null,
  appointments: [],
  newAppointment: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const getAllAppointments = createAsyncThunk(
  'appointment/getAllAppointments',
  async (_, thunkAPI) => {
    try {
      return await appointmentService.getAllAppointments();
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

export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (appointment:userAppointment, thunkAPI) => {
    try {
      return await appointmentService.createAppointments(appointment);
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

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.appointments = action.payload;
      })
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newAppointment = action.payload;
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.newAppointment = null;
      });
  },
});

export const { reset } = appointmentSlice.actions;
export default appointmentSlice.reducer;
