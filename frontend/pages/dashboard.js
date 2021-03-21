import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import { MainLayout } from '../components/common';
import { Card } from '../components/common';
import { Banner, Chart, Table, newPatient, month } from '../components/common';
import { getPatients } from '../actions/patient';
import { loadUser } from '../actions/auth';
<<<<<<< HEAD
=======
import { getAppointments } from '../actions/appointment';
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f

const Viewmore = () => {
  return (
    <div className=" w-28 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
      <a
        href="#"
        className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        View more
      </a>
    </div>
  );
};

function Home({
  getPatients,
<<<<<<< HEAD
  patient: { patients, loading },
=======
  getAppointments,
  patient: { patients, loading },
  appointment: { appointments },
  
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
  loadUser,
  auth: { user, isAuthenticated },
}) {
  useEffect(() => {
    getPatients();
    loadUser();
<<<<<<< HEAD
  }, [getPatients, loadUser]);
=======
    getAppointments();
  }, [getPatients, loadUser, getAppointments]);
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f

  const [popMore, setPopMore] = useState(false);

  const popMe = () => {
    setPopMore(!popMore);
  };

  const size = 5;
  const items = patients.slice(0, size);
<<<<<<< HEAD
  console.log(user);
=======
  const appitem = appointments.slice(0, size);
  // console.log(appointments);
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
  return (
    <>
      <Head>
        <title>HMIS | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user.accountType === 'Administrator' ? (
        <>
          {' '}
          <MainLayout>
            <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
              <div className="mb-8 mt-4 flex">
                <div className="mr-8">
                  <Card
                    color="bg-gradient-to-r from-blue-800 to-blue-400"
                    figure={patients.length}
                    job="Total Patients"
                  />
                </div>
                <div className="mr-8">
                  <Card
                    color="bg-gradient-to-r from-green-800 to-green-400"
                    figure="25"
                    job="Doctors"
                  />
                </div>
                <div className="mr-8">
                  <Card
                    color="bg-gradient-to-r from-indigo-800 to-indigo-400"
<<<<<<< HEAD
                    figure="47"
=======
                    figure={appointments.length}
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                    job="Appointments"
                  />
                </div>
              </div>
              {/* Chart */}
              <div className="flex">
                <div className="w-auto shadow-md rounded-md bg-white mb-8">
                  <div className="flex justify-between p-8">
                    <div>
                      <h2 className="font-bold text-xl">Hospital Survey</h2>
                    </div>
                    <div className="p-1 border border-gray-400 rounded-full">
                      <select name="Month" id="">
                        Month
                        {month.map((m, idx) => {
                          return (
                            <>
                              <option key={m} value="">
                                {m}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="flex ml-4 mb-2">
                    <div className="flex">
                      <div className="bg-gradient-to-r from-blue-800 to-blue-500 w-4 h-4 rounded"></div>
                      <h3 className="-mt-1 ml-1.5 font-semibold text-gray-500">
                        General
                      </h3>
                    </div>
                    <div className="flex ml-4">
                      <div className="bg-gradient-to-r from-green-800 to-green-500 w-4 h-4 rounded"></div>
                      <h3 className="-mt-1 ml-1.5 font-semibold text-gray-500">
                        OPD Patient
                      </h3>
                    </div>
                  </div>
                  <Chart />
                </div>
                <div className="shadow-lg w-3/12 rounded-md ml-4 mb-8 bg-white">
                  <div>
                    <h2 className="p-8 font-bold text-gray-600 text-base">
                      Recent Patients
                    </h2>
                  </div>
                  <Table>
                    {items.map((item) => {
                      return (
                        <>
                          {loading ? (
                            <h1>Loading</h1>
                          ) : (
                            <>
                              <tr className="" key={item.id}>
                                <td className="px-8 py-2 font-semibold text-base text-gray-500">
                                  <div className="flex">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                    <div className="flex flex-col">
                                      <div>
                                        <h4 className="px-2 py-1">
<<<<<<< HEAD
                                          {item.firstName} {item.lastName}
                                        </h4>
                                      </div>
                                      <small className="px-2 -mt-2.5 font-light ">
                                        {item.regNumber}
=======
                                          {item.firstname} {item.lastname}
                                        </h4>
                                      </div>
                                      <small className="px-2 -mt-2.5 font-light ">
                                        {item.userNumber}
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                                      </small>
                                    </div>
                                  </div>
                                </td>
                                <td onClick={popMe}>
                                  {popMore && (
                                    <Viewmore popMore={popMore} popMe={popMe} />
                                  )}

                                  <span className="cursor-pointer font-bold">
                                    ...
                                  </span>
                                </td>
                              </tr>
                            </>
                          )}
                        </>
                      );
                    })}
                  </Table>
                </div>
              </div>
              <div className="flex mb-10">
                {/* Table */}

                <div className=" shadow-xl rounded-md w-2/5 mt-4 bg-white">
                  <div>
                    <h2 className="p-4 font-semibold text-lg">
                      Upcoming Appointments
                    </h2>
                  </div>
                  <Table>
<<<<<<< HEAD
                    {newPatient.map((item) => {
                      return (
                        <>
                          <tr className="" key={item.id}>
=======
                    {appitem.map((item) => {
                      return (
                        <>
                          <tr className="" key={item._id}>
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                            <td className="px-8 py-2 font-semibold text-base text-gray-500">
                              <div className="flex">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                                <div className="flex flex-col">
                                  <div>
<<<<<<< HEAD
                                    <h4 className="px-2 py-1">{item.name}</h4>
                                  </div>
                                  <small className="px-2 -mt-2.5 font-light ">
                                    {item.disease}
=======
                                    <h4 className="px-2 py-1">{item.user.firstname} {item.user.lastname}</h4>
                                  </div>
                                  <small className="px-2 -mt-2.5 font-light ">
                                    {item.concern}
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="cursor-pointer text-sm font-light mr-3">
<<<<<<< HEAD
                                Female
=======
                                {item.user.gender}
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                              </span>
                            </td>
                            <td>
                              <span className="cursor-pointer text-sm font-light mr-3">
                                35y
                              </span>
                            </td>
                            <td>
                              <span className="cursor-pointer text-green-600 text-sm font-light mr-3">
                                ✓
                              </span>
                            </td>
                            <td>
                              <span className="cursor-pointer text-red-600 text-sm font-light mr-3">
                                ✕
                              </span>
                            </td>
                            <td>
                              <span className="cursor-pointer font-bold mr-3">
                                ...
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </Table>
                </div>
              </div>
            </div>
          </MainLayout>
        </>
      ) : (
        <MainLayout>
          <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
            <div className="mb-8 mt-4 flex">
              <h1 className="text-2xl text-black font-semibold">
                Welcome, {user.lastname}
              </h1>
            </div>
          </div>
        </MainLayout>
      )}
    </>
  );
}

Home.propTypes = {
  getPatients: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
<<<<<<< HEAD
  loadUser: PropTypes.func.isRequired,
=======
  appointment: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  getAppointments: PropTypes.func.isRequired,
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
<<<<<<< HEAD
  auth: state.auth,
});

export default connect(mapStateToProps, { getPatients, loadUser })(Home);
=======
  appointment: state.appointment,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getPatients,
  loadUser,
  getAppointments,
})(Home);
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
