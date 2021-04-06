import axios from 'axios';
import { HEALTH_SUCCESS, HEALTH_ERROR, GET_HEALTHS } from './types';

// export const getAppointments = () => async (dispatch) => {
//   // dispatch({type: CLEAR_PROFILE})
//   try {
//     const res = await axios.get('/api/schedule/get-all-appointments');

//     dispatch({
//       type: GET_APPOINTMENTS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: APPOINTMENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

export const createHealthReport = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post(
      '/api/user/health',
      formData,
      config
    );

    dispatch({
      type: HEALTH_SUCCESS,
      payload: res.data,
    });

    dispatch(alert('HEALTH RECORD SUBMITTED'));
  } catch (err) {
    const errors = 'error';

    if (errors) {
      // errors.forEach((error) => dispatch(alert('danger')));
      alert('danger');
    }
    dispatch({
      type: HEALTH_ERROR,
      payload: { msg: 'errror', status: 'error status' },
    });
  }
};

// export const myAppointments = () => async (dispatch) => {
//   try {
//     const res = await axios.get('/api/schedule/get-by-id/:appointmentId');

//     dispatch({
//       type: GET_APPOINTMENTS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: APPOINTMENT_ERROR,
//       payload: { msg: 'error', status: 'error status' },
//     });
//   }
// };
