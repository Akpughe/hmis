import { GET_PATIENTS, PATIENT_ERROR, GET_PATIENT, } from '../actions/types';

const initialState = {
  patient: null,
  patients: [],
  loading: true,
  error: {},
};

export default function Pat(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
      case GET_PATIENT:
      // case UPDATE_PROFILE:
        return {
          ...state,
          patient: payload,
          loading: false,
        };
    case GET_PATIENTS:
      return {
        ...state,
        patients: payload,
        loading: false,
      };
    case PATIENT_ERROR:
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
