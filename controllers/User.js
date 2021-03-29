const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctors');

exports.getUserById = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId)
      .select('-password')
      .populate('appointment');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllUsers = async (req, res, next) => {
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

    const users = await User.find().select('-password');

    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Sever Error' });
  }
};
exports.getAllDocs = async (req, res, next) => {
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

    const doctors = await Doctor.find().select('-password');

    res.status(200).json(doctors);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Sever Error' });
  }
};

exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    password,
    maritalStatus,
    gender,
    dateOfBirth,
    userNumber,
    accountType,
    address,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !phoneNumber ||
    !gender ||
    !dateOfBirth ||
    !maritalStatus ||
    !accountType ||
    !address
  )
    return res
      .status(400)
      .json({ errors: [{ msg: 'Please fill all fields' }] });

  var possible = '0123456789';
  var newUserNumber = 'user';

  for (i = 0; i < 4; i++) {
    newUserNumber += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }

  try {
    let user = await User.findOne({
      email,
      userNumber: newUserNumber,
    });
    let patient = await Patient.find();
    let doctor = await Doctor.find();

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Email address has already been used' }] });
    }

    //Encrypt password
    let encryptedPassword;
    const salt = await bcrypt.genSalt(10);

    encryptedPassword = await bcrypt.hash(password, salt);

    user = new User({
      firstname,
      lastname,
      email,
      phoneNumber,
      maritalStatus,
      dateOfBirth,
      gender,
      password: encryptedPassword,
      userNumber: newUserNumber,
      accountType,
      address,
    });
    if (accountType === 'Patient') {
      patient = new Patient({
        firstname,
        lastname,
        email,
        phoneNumber,
        maritalStatus,
        dateOfBirth,
        gender,
        password: encryptedPassword,
        userNumber: newUserNumber,
        accountType,
        address,
      });
      await patient.save();
      await user.save();
    } else if (accountType === 'Doctor') {
      doctor = new Doctor({
        firstname,
        lastname,
        email,
        phoneNumber,
        maritalStatus,
        dateOfBirth,
        gender,
        password: encryptedPassword,
        userNumber: newUserNumber,
        accountType,
        address,
      });
      await doctor.save();
      await user.save();
    }

    res.json({ msg: 'User created successfully' + ' ' + newUserNumber });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Sever Error' });
  }
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userNumber, password } = req.body;

  try {
    let user = await User.findOne({ userNumber });

    if (!user)
      return res
        .status(404)
        .json({ errors: [{ msg: 'User Number does not exist' }] });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });

    const token = jwt.sign(
      {
        userNumber: user.userNumber,
        userId: user._id.toString(),
      },
      config.get('jwtSecret')
    );

    res.status(200).json({
      token: token,
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        accountType: user.accountType,
        userNumber: user.userNumber,
        _id: user._id,
      },
      msg: 'Login successful',
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ msg: 'Sever Error' });
  }
};
