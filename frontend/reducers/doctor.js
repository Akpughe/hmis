import {GET_DOCTORS, GET_DOCTOR, DOCTOR_ERROR } from '../actions/types'

const initialState = {
    doctor: null,
    doctors: [],
    loading: true,
    error: {},
  };

  export default function Docc(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_DOCTOR:
        // case UPDATE_PROFILE:
          return {
            ...state,
            doctor: payload,
            loading: false,
          };
      case GET_DOCTORS:
        return {
          ...state,
          doctors: payload,
          loading: false,
        };
      case DOCTOR_ERROR:
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