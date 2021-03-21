import { GET_DOCTORS, GET_DOCTOR, DOCTOR_ERROR } from './types';
import axios from 'axios'

export const getDocs = () => async (dispatch) => {
  // dispatch({type: CLEAR_PROFILE})
  try {
    const res = await axios.get('/api/user/get-all-docs');

    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DOCTOR_ERROR,
      payload: {
        msg: 'err.response.statusText',
        status: 'err.response.status',
      },
    });
  }
};
