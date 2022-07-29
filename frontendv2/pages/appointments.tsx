import React, { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  getAllAppointments,
  reset,
} from '../features/appointment/appointmentSlice';
import CreateAppointment from '../components/CreateAppointment';

const Appointment = () => {
  const dispatch = useAppDispatch();
  const { appointments, isLoading, isError, isSuccess, message } =
    useAppSelector((state) => state.appointment);

  useEffect(() => {
    if (isError) {
      // toast.error(message);
      alert(message);
    }

    // if (!patients) {
    //   router.push('/');
    // }

    // dispatch(getTotalPatients());
    dispatch(getAllAppointments());

    return () => {
      dispatch(reset());
    };
  }, []);

  console.log('appointments', appointments);
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Appointment</h1>
      
      <div>
        Appointment list

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment._id}>
                {appointment.appointmentDate} - {appointment.appointmentTime} - {appointment.concern}
              </li>
            ))}
          </ul>
        )}
      </div>

      <CreateAppointment />
    </MainLayout>
  );
};

export default Appointment;
