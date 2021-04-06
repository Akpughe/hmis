import {
    GET_HEALTH,
    GET_HEALTHS,
    HEALTH_ERROR,
  } from '../actions/types';
  
  const initialState = {
    health: null,
    healths: [],
    loading: true,
    error: {},
  };
  
  export default function Hlh(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_HEALTH:
        // case GET_PATIENT:
        return {
          ...state,
          health: payload,
          loading: false,
        };
      case GET_HEALTHS:
        return {
          ...state,
          healths: payload,
          loading: false,
        };
      case HEALTH_ERROR:
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
  