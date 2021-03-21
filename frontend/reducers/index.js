import { combineReducers } from 'redux';
import auth from './auth'
import patient from './patient'
import appointment from './appointment'
<<<<<<< HEAD
=======
import doctor from './doctor'
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f


export default combineReducers({
    auth,
    patient,
<<<<<<< HEAD
    appointment
=======
    appointment,
    doctor
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
})