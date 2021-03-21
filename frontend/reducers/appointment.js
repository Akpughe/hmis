import {
  GET_APPOINTMENTS,
  GET_APPOINTMENT,
  APPOINTMENT_ERROR,
  GET_PATIENT
} from '../actions/types';

const initialState = {
  appointment: null,
  appointments: [],
  loading: true,
  error: {},
};

export default function Apt(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_APPOINTMENT:
      // case GET_PATIENT:
      return {
        ...state,
        appointment: payload,
        loading: false,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: payload,
        loading: false,
      };
    case APPOINTMENT_ERROR:
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
