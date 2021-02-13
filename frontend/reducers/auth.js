import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initailState = {
  token: process.browser ? localStorage.getItem('token') : null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function authy(state = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      process.browser ? localStorage.setItem('token', payload.token) : null;
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    // case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
