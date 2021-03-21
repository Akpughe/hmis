const express = require('express');
const { check, body } = require('express-validator');

const appointmentController = require('../controllers/Appointment');

const isAuth = require('../middleware/auth');

const router = express.Router();

<<<<<<< HEAD
router.get('/get-by-id', isAuth ,appointmentController.getAppointmentById);
=======
router.get('/get-by-id/:id', isAuth ,appointmentController.getAppointmentById);
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
router.get('/get-all-appointments', isAuth ,appointmentController.getAllAppoinments);

router.post(
  '/book-appointment',
  isAuth,
  [
    check('appointmentDate', 'Appointment Date is required').not().isEmpty(),
    check('concern', 'Concern is required').not().isEmpty(),
  ],
  appointmentController.bookAppointment
);

module.exports = router;
