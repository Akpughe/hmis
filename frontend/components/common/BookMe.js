import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { createAppointment } from '../../actions/appointment';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BookMe = ({ createAppointment }) => {
  const [formData, setFormData] = useState({
    appointmentTime: '',
    appointmentDate: '',
    concern: '',
  });
  const { appointmentTime, appointmentDate, concern } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createAppointment(formData);
  };
  return (
    <>
      <div className="flex flex-row w-5/6">
        <form className="flex" onSubmit={(e) => onSubmit(e)}>
          <label className="block mr-4 w-60">
            <span className="text-gray-700">Time</span>
            <select
              name="appointmentTime"
              value={appointmentTime}
              className="block w-full mt-1 p-4 rounded-md"
              onChange={(e) => onChange(e)}
            >
              <option value="" disabled>
                Select Time
              </option>
              <option>9:30am</option>
              <option>10:00am</option>
              <option>10:30am</option>
              <option>11:00am</option>
              <option>11:30am</option>
              <option>12:00noon</option>
              <option>12:30pm</option>
              <option>1:00pm</option>
              <option>2:00pm</option>
            </select>
          </label>
          <label className="block mr-4 w-60">
            <span className="text-gray-700">Date</span>
            <input
              name="appointmentDate"
              type="date"
              className="mt-1 block w-full p-3.5 rounded-md"
              value={appointmentDate}
              onChange={(e) => onChange(e)}
            />
          </label>
          <label className="block mr-4 w-80">
            <span className="text-gray-700">Concern</span>
            <input
              name="concern"
              type="text"
              className="mt-1 block w-full p-4 rounded-md"
              value={concern}
              onChange={(e) => onChange(e)}
            />
          </label>

          <button className="bg-purple-600 text-white rounded-md mt-6 px-6 font-semibold ">
            New appointment
          </button>
        </form>
      </div>
    </>
  );
};

BookMe.propTypes = {
  createAppointment: PropTypes.func.isRequired,
};
export default connect(null, { createAppointment })(withRouter(BookMe));
