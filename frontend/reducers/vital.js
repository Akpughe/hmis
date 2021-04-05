import {
    GET_VITAL,
    GET_VITALS,
    VITAL_ERROR,
  } from '../actions/types';
  
  const initialState = {
    vital: null,
    vitals: [],
    loading: true,
    error: {},
  };
  
  export default function Apt(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_VITAL:
        // case GET_PATIENT:
        return {
          ...state,
          vital: payload,
          loading: false,
        };
      case GET_VITALS:
        return {
          ...state,
          vitals: payload,
          loading: false,
        };
      case VITAL_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      //   case CLEAR_PROFILE:
      //     return {
      //       ...state,
      //       profile: null,
      //       repos: [],
      //       loading: false,
      //     };
  
      default:
        return state;
    }
  }
  