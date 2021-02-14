import React from 'react';
import { stateOfOrigin, nationality } from '../common';
const PatientRegisterForm = () => {
  return (
    <>
      <div className="mb-20">
        <div className="max-w-xl mx-auto md:max-w-4xl">
          {/* <h2 className="text-2xl font-bold">Patient Form</h2>
          <p className="mt-2 text-lg text-gray-500">
            Fill all the details below
          </p> */}
          <form action="">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* 1 */}
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Firstname</span>
                  <input
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="John"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Registration Number</span>
                  <input
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="patient1234"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Date of Birth</span>
                  <input
                    type="date"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="patient1234"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Phone Number</span>
                  <input
                    type="number"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="09012345678"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Marital Status</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input type="radio" class="form-radio" value="single" />
                      <span class="ml-2">Single</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input type="radio" class="form-radio" value="married" />
                      <span class="ml-2">Married</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input type="radio" class="form-radio" value="divorced" />
                      <span class="ml-2">Divorced</span>
                    </label>
                  </div>
                </label>
                <label class="block">
                  <span class="text-gray-700">State of Origin</span>
                  <select class="block w-full mt-1 py-4 px-2">
                    {stateOfOrigin.map((states, idx) => {
                      return (
                        <>
                          <option key={states} value="">
                            {states}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Occupation</span>
                  <input type="text" className="mt-1 block w-full py-4 px-2" />
                </label>
              </div>
              {/* 2 */}
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Lastname</span>
                  <input
                    type="text"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="Doe"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Gender</span>
                  <select class="block w-full mt-1 py-4 px-2">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Email Address</span>
                  <input
                    type="email"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="johndoe@email.com"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Password</span>
                  <input
                    type="password"
                    className="form-input mt-1 block w-full py-4 px-2"
                    placeholder="Password"
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Nationality</span>
                  <select class="block w-full mt-1 py-4 px-2">
                    {nationality.map((nat, idx) => {
                      return (
                        <>
                          <option key={nat} value="">
                            {nat}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Address</span>
                  <textarea
                    className="mt-1 block w-full h-24"
                    rows="3"
                    placeholder="Address"
                  ></textarea>
                </label>
              </div>
              <div>
              <button  className="bg-indigo-500 py-4 px-8 rounded text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">Submit</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PatientRegisterForm;
