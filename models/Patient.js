var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  regNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
    enum: ['Single', 'Divorced', 'Married'],
  },
  nationality: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  appointment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    },
  ],
  vitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PatientVitals'
    }
  ]
});

module.exports = mongoose.model('Patient', PatientSchema);
