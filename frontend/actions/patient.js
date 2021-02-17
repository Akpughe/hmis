import axios from 'axios'
import {GET_PATIENTS, PATIENT_ERROR} from './types'

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