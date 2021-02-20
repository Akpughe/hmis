import React, { useState } from 'react';
// import { stateOfOrigin, nationality } from '../common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { createPatient } from '../../actions/patient';

const PatientRegisterForm = ({ createPatient }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    regNumber: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    password: '',
    maritalStatus: '',
    nationality: '',
    state: '',
    lga: '',
    occupation: '',
    address: '',
  });

  const {
    firstName,
    lastName,
    regNumber,
    gender,
    dateOfBirth,
    email,
    phoneNumber,
    password,
    maritalStatus,
    nationality,
    state,
    lga,
    occupation,
    address,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createPatient(formData);
  };
  return (
    <>
      <div className="mb-20">
        <div className="max-w-xl mx-auto md:max-w-4xl">
          {/* <h2 className="text-2xl font-bold">Patient Form</h2>
          <p className="mt-2 text-lg text-gray-500">
            Fill all the details below
          </p> */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* 1 */}
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Firstname</span>
                  <input
                    name="firstName"
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Registration Number</span>
                  <input
                    name="regNumber"
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="patient1234"
                    value={regNumber}
                    onChange={(e) => onChange(e)}
                    disabled
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Date of Birth</span>
                  <input
                    name="dateOfBirth"
                    type="date"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="patient1234"
                    value={dateOfBirth}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Phone Number</span>
                  <input
                    name="phoneNumber"
                    type="number"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="09012345678"
                    value={phoneNumber}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Marital Status</span>
                  <select
                    name="maritalStatus"
                    className="block w-full mt-1 py-4 px-2"
                    value={maritalStatus}
                    onChange={(e) => onChange(e)}
                  >
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">State of Origin</span>
                  <select
                    name="state"
                    className="block w-full mt-1 py-4 px-2"
                    value={state}
                    onChange={(e) => onChange(e)}
                  >
                    <option>Lagos</option>
                    <option>Delta</option>
                    <option>Ogun</option>
                    <option>Edo</option>
                    <option>Ibadan</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Occupation</span>
                  <input
                    name="occupation"
                    type="text"
                    className="mt-1 block w-full py-4 px-2"
                    value={occupation}
                    onChange={(e) => onChange(e)}
                  />
                </label>
              </div>
              {/* 2 */}
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Lastname</span>
                  <input
                    name="lastName"
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Gender</span>
                  <select
                    name="gender"
                    className="block w-full mt-1 py-4 px-2"
                    value={gender}
                    onChange={(e) => onChange(e)}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Email Address</span>
                  <input
                    name="email"
                    type="email"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="johndoe@email.com"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Password</span>
                  <input
                    name="password"
                    type="password"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Nationality</span>
                  <select
                    name="nationality"
                    className="block w-full mt-1 py-4 px-2"
                    value={nationality}
                    onChange={(e) => onChange(e)}
                  >
                    <option>Nigeria</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>China</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Local Government Area</span>
                  <input
                    name="lga"
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="LGA"
                    value={lga}
                    onChange={(e) => onChange(e)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Address</span>
                  <textarea
                    name="address"
                    className="mt-1 block w-full h-24"
                    rows="3"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => onChange(e)}
                  ></textarea>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-indigo-500 py-4 px-8 rounded text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

PatientRegisterForm.propTypes = {
  createPatient: PropTypes.func.isRequired,
};

export default connect(null, { createPatient })(
  withRouter(PatientRegisterForm)
);
