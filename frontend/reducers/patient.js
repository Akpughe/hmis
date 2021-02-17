import {GET_PATIENTS, PATIENT_ERROR} from '../actions/types'

const initialState = {
    patient: null,
    patients: [],
    loading: true,
    error: {},
  };

  export default function Pat (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
    //   case GET_PROFILE:
    //   case UPDATE_PROFILE:
    //     return {
    //       ...state,
    //       profile: payload,
    //       loading: false,
    //     };
        case GET_PATIENTS:
          return {
            ...state,
            patients: payload,
            loading: false,
          }
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
        // case GET_REPOS:
        //   return{
        //     ...state,
        //     repos: payload,
        //     loading: false
        //   }
      default:
        return state;
    }
  }