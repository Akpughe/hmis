import { combineReducers } from 'redux';
import auth from './auth'
import patient from './patient'
import appointment from './appointment'


export default combineReducers({
    auth,
    patient,
    appointment
})