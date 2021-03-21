import axios from 'axios';
import { GET_APPOINTMENT, GET_APPOINTMENTS, APPOINTMENT_ERROR } from './types';

export const getAppointments = () => async (dispatch) => {
  // dispatch({type: CLEAR_PROFILE})
  try {
    const res = await axios.get('/api/schedule/get-all-appointments');

    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: APPOINTMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createAppointment = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post(
      '/api/schedule/book-appointment',
      formData,
      config
    );

    dispatch({
      type: GET_APPOINTMENT,
      payload: res.data,
    });

    dispatch(alert('appointment created'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach((error) => dispatch(alert('danger')));
      alert('danger');
    }
    dispatch({
      type: APPOINTMENT_ERROR,
      payload: { msg: 'errror', status: 'error status' },
    });
  }
};

export const myAppointments = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/schedule/get-by-id/:appointmentId');

    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: APPOINTMENT_ERROR,
      payload: { msg: 'error', status: 'error status' },
    });
  }
};
