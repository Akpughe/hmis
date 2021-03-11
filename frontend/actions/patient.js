import axios from 'axios';
import { GET_PATIENTS, PATIENT_ERROR, GET_PATIENT } from './types';

export const getPatients = () => async (dispatch) => {
  // dispatch({type: CLEAR_PROFILE})
  try {
    const res = await axios.get('/api/patient/get-all-patients');

    dispatch({
      type: GET_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PATIENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPatientById = (patientId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/patient/get-by-id/${patientId}`);

    dispatch({
      type: GET_PATIENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PATIENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    console.log(patientId);
  }
};

export const createPatient = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const res = await axios.post('/api/user/register', formData, config);

    dispatch({
      type: GET_PATIENT,
      payload: res.data,
    });

    dispatch(alert('patient created'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = 'error';

    if (errors) {
      // errors.forEach((error) => dispatch( ('danger')));
      alert('danger');
    }
    dispatch({
      type: PATIENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
