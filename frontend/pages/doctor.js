import React, { useState } from 'react';
import Head from 'next/head';
import { MainLayout, AddDoctor, ViewDoctors } from '../components/common';
const doctor = () => {
  const [show, setShow] = useState(false);
  const [showP, setShowP] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowP = () => {
    setShowP(!showP);
  };
  return (
    <>
      <Head>
        <title>Doctor</title>
      </Head>

      <MainLayout>
        <div className="flex flex-col flex-grow pl-80 pr-8 pt-20 mb-10 bg-gray-100 h-full">
          <div className="mb-8 mt-4 flex justify-evenly">
            <div>
              <button
                onClick={handleShow}
                className="bg-blue-500 py-4 px-8 rounded text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Add Doctor
              </button>
            </div>
            <div>
              <button
                onClick={handleShowP}
                className="bg-indigo-500 py-4 px-8 rounded text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              >
                View Doctors
              </button>
            </div>
          </div>

          {show && <AddDoctor show={show} />}
          {showP && <ViewDoctors showP={showP} />}
        </div>
      </MainLayout>
    </>
  );
};

export default doctor;
