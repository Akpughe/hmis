const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const User = require('../models/User');
const { validationResult } = require('express-validator');

exports.getAllAppoinments = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const adminId = req.userId;

  try {
    let admin = await User.findById(adminId);
    if (!admin)
      return res.status(404).json({ errors: [{ msg: 'User does not exist' }] });

    if (admin.accountType !== 'Administrator')
      return res.status(404).json({
        errors: [{ msg: 'You do not have permission to perform this action' }],
      });

    const appointments = await Appointment.find();

    res
      .status(200)
      .json({ msg: 'Fetched appointment successfully', appointments });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Sever Error' });
  }
};

exports.getAppointmentById = async (req, res, next) => {};

exports.bookAppointment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { appointmentDate, concern } = req.body;

  if (!appointmentDate || !concern)
    return res
      .status(400)
      .json({ errors: [{ msg: 'Please fill all fields' }] });

  var possible = '0123456789';
  var newAppointmentNumber = 'appointment';

  for (i = 0; i < 4; i++) {
    newAppointmentNumber += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }
  const patientId = req.patientId;
  try {
    const patient = await Patient.findById(patientId);

    if (!patient)
      return res.status(404).json({ errors: [{ msg: 'account not found' }] });

    const appointment = new Appointment({
      appointmentDate,
      concern,
      appointmentNumber: newAppointmentNumber,
      patient: patient._id,
    });

    patient.appointment.push(appointment._id);

    await appointment.save();
    await patient.save();

    res
      .status(201)
      .json({ msg: 'Appointment booked successfully', appointment });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Sever Error' });
  }
};
