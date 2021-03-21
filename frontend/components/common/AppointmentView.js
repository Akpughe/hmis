import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAppointments } from '../../actions/appointment';
import { Table, Tag, Space, Input, Button } from 'antd';

const AppointmentView = ({
  getAppointments,
  appointment: {
    // patient:{lastName},
    patient,
    appointments,
    loading,
<<<<<<< HEAD
=======
    user,
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
  },
}) => {
  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  const columns = [
    {
      title: 'Time',
      dataIndex: 'appointmentTime',
      key: 'appointmentTime',
    },
    {
      title: 'Date',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
    },
    {
      title: 'Patient',
<<<<<<< HEAD
      dataIndex: 'lastName',
      key: 'lastName',
=======
      dataIndex: 'lastname',
      key: 'lastname',
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
    },
    {
      title: 'Appointment Nø',
      dataIndex: 'appointmentNumber',
      key: 'appointmentNumber',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Concern',
      dataIndex: 'concern',
      key: 'concern',
    },
<<<<<<< HEAD
  ];

  console.log(patient);
=======
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];

  // console.log(appointments);
>>>>>>> 95f11d63a115ebab00424479156ece426e1fb78f
  return (
    <>
      <Table columns={columns} dataSource={appointments} className="w-full" />
    </>
  );
};

AppointmentView.propTypes = {
  getAppointments: PropTypes.func.isRequired,
  appointment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  appointment: state.appointment,
});

export default connect(mapStateToProps, { getAppointments })(AppointmentView);
