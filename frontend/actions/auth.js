import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/user');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//LOGIN USER
export const login = (userNumber, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ userNumber, password });

  try {
    const res = await axios.post('/api/user/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(console.log('error')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
