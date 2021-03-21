import React, { useState, useEffect } from 'react';
import { MainLayout, BookMe, Table } from '../components/common';
import { loadUser } from '../actions/auth';
import { myAppointments } from '../actions/appointment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const schedule = ({
  loadUser,
  myAppointments,
  auth: {
    user,
    isAuthenticated,
<<<<<<< HEAD
    user: { appointmentTime, appointmentDate, appointmentNumber, concern },
  },
  appointment: { appointments },
=======
    user: { appointment },
  },
  // appointment: { appointments },
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
}) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    loadUser();
    myAppointments();
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loadUser, myAppointments]);
<<<<<<< HEAD
  console.log(user);
=======
  // console.log(appointment);
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
  return (
    <>
      <MainLayout>
        <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
          <div className="mb-8 mt-4 flex">
            <BookMe />
          </div>
          <div className="flex justify-between bg-white shadow-xl border-t-2 border-b-2 pr-20 pl-4 py-4 mr-4 text-sm font-semibold">
            <div>
              <h2>Time</h2>
            </div>
            <div>
              <h2>Date</h2>
            </div>
            <div>
              <h2>Appointment Number</h2>
            </div>
            <div>
              <h2>Concern</h2>
            </div>
            <div>
              <h2>Status</h2>
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex justify-between bg-white shadow-xl rounded-md border mr-4 mt-5 pr-20 pl-4 py-4 text-sm font-medium">
            {appointments.map((item, index) => {
              return (
=======
          {appointment.map((item, index) => {
            return (
              <div key={item._id} className="flex justify-between bg-white shadow-xl rounded-md border mr-4 mt-5 pr-20 pl-4 py-4 text-sm font-medium">
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                <>
                  <div>
                    <h2>{item.appointmentTime}</h2>
                  </div>
                  <div className="flex">
<<<<<<< HEAD
                    {alert && (
                      <span className="bg-blue-200 px-2 py-1 mb-2 mr-2 rounded text-xs ">
                        New
                      </span>
                    )}
=======
                    {/* {alert && (
                      <span className="bg-blue-200 px-2 py-1 mb-2 mr-2 rounded text-xs ">
                        New
                      </span>
                    )} */}
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
                    <h2>{item.appointmentDate}</h2>
                  </div>
                  <div>
                    <h2>{item.appointmentNumber}</h2>
                  </div>
                  <div>
                    <h2>{item.concern}</h2>
                  </div>
                  <div>
                    <button className="bg-green-500 p-1 rounded">
                      Complete
                    </button>
                  </div>
                </>
<<<<<<< HEAD
              );
            })}
          </div>
=======
              </div>
            );
          })}
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
        </div>
      </MainLayout>
    </>
  );
};

schedule.propTypes = {
  loadUser: PropTypes.func.isRequired,
  myAppointments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  appointment: state.appointment,
});

export default connect(mapStateToProps, { loadUser, myAppointments })(schedule);
