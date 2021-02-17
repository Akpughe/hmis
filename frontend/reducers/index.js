import { combineReducers } from 'redux';
import auth from './auth'
import patient from './patient'


export default combineReducers({
    auth,
    patient
})