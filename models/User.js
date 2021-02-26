const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  userNumber: {
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
  address: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
    enum: ['Administrator','Doctor', 'Nurse', 'Patient'],
  },
});

module.exports = User = mongoose.model('User', UserSchema);
