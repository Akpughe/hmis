import { combineReducers } from 'redux';
import auth from './auth'
import patient from './patient'
import appointment from './appointment'
import doctor from './doctor'
import vital from './vital'


export default combineReducers({
    auth,
    patient,
    appointment,
    doctor,
    vital
})