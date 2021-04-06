import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createHealthReport } from '../../actions/healthr';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

const Diagnosis = ({ createHealthReport, userId }) => {
  const [formData, setFormData] = useState({
    dignosis: '',
    prescription: '',
    userId: userId,
  });

  const { diagnosis, prescription } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('I submitted');
    createHealthReport(formData);
  };
  return (
    <>
      <div className="flex flex-col p-10 w-3/4 h-auto bg-white border rounded-3xl mr-8 ">
        <div className="main_one flex">
          <h2 className="font-bold text-2xl">Health Diagnosis</h2>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="main_one flex">
            <div className="mt-8 w-1/2">
              <label className="block">
                <small className="text-gray-700">Diagnosis</small>
                <textarea
                  name="diagnosis"
                  value={diagnosis}
                  onChange={(e) => onChange(e)}
                  className="mt-1 p-1 block w-full border border-gray-500"
                  rows="8"
                ></textarea>
              </label>
            </div>
            <div className="mt-8 ml-4">
              <label className="block">
                <small className="text-gray-700">Presciption</small>
                <textarea
                  name="prescription"
                  value={prescription}
                  onChange={(e) => onChange(e)}
                  className="mt-1 p-1 block w-full border border-gray-500"
                  rows="8"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="flex ">
            <button
              type="submit"
              className="p-3 px-8 mt-6 bg-blue-500 text-white uppercase rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              record
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Diagnosis.propTypes = {
  createHealthReport: PropTypes.func.isRequired,
};

export default connect(null, { createHealthReport })(withRouter(Diagnosis));

// export default Diagnosis;
