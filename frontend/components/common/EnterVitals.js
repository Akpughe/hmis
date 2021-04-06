import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { createVitalReport } from '../../actions/vitals';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

const EnterVitals = ({createVitalReport,  userId}) => {
  const [formData, setFormData] = useState({
    temperature: '',
    bloodPressure: '',
    weight: '',
    height: '',
    userId: userId
  });

  const { temperature, bloodPressure, weight, height } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('I submitted')
    createVitalReport(formData);
  };
  return (
    <>
      {/* vitals */}
      <div className="flex flex-col p-10 w-96 h-80 bg-white border rounded-3xl mr-8 ">
        <div className="main_one flex">
          <h2 className="font-bold text-2xl">Vitals</h2>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="main_one flex justify-between">
            <div className="mt-8">
              <label className="block">
                <small className="text-gray-700">Temperature (Celcuis)</small>
                <input
                  name="temperature"
                  value={temperature}
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                  placeholder=""
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
            <div className="mt-8 ml-4">
              <label className="block">
                <small className="text-gray-700">Blood Pressure</small>
                <input
                  name="bloodPressure"
                  value={bloodPressure}
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                  placeholder=""
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="main_one flex justify-between">
            <div className="mt-8">
              <label className="block">
                <small className="text-gray-700">Weight</small>
                <input
                  name="weight"
                  value={weight}
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                  placeholder=""
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
            <div className="mt-8 ml-4">
              <label className="block">
                <small className="text-gray-700">Height</small>
                <input
                  name="height"
                  value={height}
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                  placeholder=""
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="flex justify-">
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

EnterVitals.propTypes = {
  createVitalReport: PropTypes.func.isRequired,
};
export default connect(null, { createVitalReport })(withRouter(EnterVitals));

// export default EnterVitals;
