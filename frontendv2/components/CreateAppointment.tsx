import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  createAppointment,
  reset,
} from '../features/appointment/appointmentSlice';

const CreateAppointment = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    appointmentDate: '',
    appointmentTime: '',
    concern: '',
  });
  const { appointmentDate, concern, appointmentTime } = formData;
  const { newAppointment, isLoading, isError, isSuccess, message } =
    useAppSelector((state) => state.appointment);

  useEffect(() => {
    if (isError) {
      //   toast.error(message);
      alert(message);
    }

    dispatch(reset());
  }, [newAppointment, isError, message, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAppointment(formData));

    isSuccess ? alert(message) : '';
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div>
      CreateAppointment
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6 ">
          <label
            htmlFor="appointmentDate"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Appointment Date
          </label>

          <input
            type="date"
            name="appointmentDate"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="John"
            value={appointmentDate}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="appointmentTime"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Appointment Time
          </label>

          <input
            type="time"
            name="appointmentTime"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder=""
            value={appointmentTime}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="concern"
            className="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Concern
          </label>

          <input
            type="text"
            name="concern"
            className="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="I have headache"
            value={concern}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <button type="submit">Create appointment</button>
      </form>
    </div>
  );
};

export default CreateAppointment;
