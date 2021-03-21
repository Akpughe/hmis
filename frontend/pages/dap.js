import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../components/common';
import { getAppointments } from '../actions/appointment';
import { Table, Tag, Space, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const dap = ({
  getAppointments,
  appointment: {
    // patient:{lastName},
    patient,
    appointments,
    loading,
    user,
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
      dataIndex: 'lastname',
      key: 'lastname',
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
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];
  console.log(appointments);
  return (
    <MainLayout>
      <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
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
        {appointments.map((item, index) => {
          return (
            <div
              key={item._id}
              className="flex justify-between bg-white shadow-xl rounded-md border mr-4 mt-5 pr-20 pl-4 py-4 text-sm font-medium"
            >
              <>
                <div>
                  <h2>{item.appointmentTime}</h2>
                </div>
                <div className="flex">
                  <h2>{item.appointmentDate}</h2>
                </div>
                <div>
                  <h2>{item.appointmentNumber}</h2>
                </div>
                <div>
                  <h2>{item.concern}</h2>
                </div>
                <div>
                  <button type="submit"  className="bg-green-500 p-1 rounded">Check In</button>
                </div>
              </>
            </div>
          );
        })}
        {/* <Table columns={columns} dataSource={appointments} className="w-full" /> */}
      </div>
    </MainLayout>
  );
};

dap.propTypes = {
  getAppointments: PropTypes.func.isRequired,
  appointment: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  appointment: state.appointment,
});
export default connect(mapStateToProps, { getAppointments })(dap);
