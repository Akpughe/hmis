import React, { useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createPatient, reset } from '../features/patient/patientSlice';
import { toast } from 'react-toastify';
import {IPatient} from '../types'

const AddPatienthtmlForm = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    maritalStatus: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    password: '',
    // confirmPassword: '',
    accountType: 'Patient',
  });

  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    maritalStatus,
    gender,
    dateOfBirth,
    address,
    password,
    // accountType,
  } = formData;

  const { newPatient, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.patients
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [newPatient, isError, message, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(createPatient(formData));
    // dispatch(createPatient());

    isSuccess ? toast.success(message) : ''
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="mb-6 ">
          <label
            htmlFor="firstname"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            First name
          </label>

          <input
            type="text"
            name="firstname"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="John"
            value={firstname}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="lastname"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Last name
          </label>

          <input
            type="text"
            name="lastname"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="Doe"
            value={lastname}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="jh@gmail.com"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phonenumber"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Phone number
          </label>

          <input
            type="text"
            name="phoneNumber"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="09055935918"
            value={phoneNumber}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="mb-6">
          <label
            htmlFor="gender"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Gender
          </label>

          <select
            name="gender"
            id="gender"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            value={gender}
            onChange={(e) => onChange(e)}
          >
            <option disabled defaultChecked>Select a gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="dob"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Date of Birth
          </label>

          <input
            type="date"
            name="dateOfBirth"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="24/11/2001"
            value={dateOfBirth}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="mb-6">
          <label
            htmlFor="maritalStatus"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Marital Status
          </label>

          <select
            name="maritalStatus"
            id="maritalStatus"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            value={maritalStatus}
            onChange={(e) => onChange(e)}
          >
            <option disabled>Select a Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Resident address
          </label>
          <input
            type="text"
            name="address"
            className="block bg-slate-200 p-4 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="House number, street, city, state, country"
            value={address}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-0.5 text-xs font-medium text-slate-900 "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          {/* <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-0.5 text-xs font-medium text-slate-900 "
            >
              Confirm password
            </label>

            <input
              type="password"
              name="confirmPassword"
              className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
              placeholder="••••••••••"
              required
            />
          </div> */}
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        // disabled={!htmlFormik.isValid}
      >
        Add patient
      </button>
    </form>
  );
};

export default AddPatienthtmlForm;
