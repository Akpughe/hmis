import React, { useState } from 'react';
import { MainLayout, EnterVitals, Diagnosis } from '../../components/common';
import { createVitalReport } from '../../actions/vitals';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { getUsers, getPatientById } from '../../actions/patient';
import axios from 'axios';
import Link from 'next/link';

const RecentVital = (prop) => {
  return (
    <>
      <div className="flex flex-col p-10 w-96 h-80 bg-white border rounded-3xl mr-8 ">
        <div className="main_one flex">
          <h2 className="font-bold text-2xl">Recent Vitals</h2>
        </div>
        <div className="main_one flex justify-between">
          <div className="mt-8"></div>
          <div className="mt-8 ml-4"></div>
        </div>
        <div className="main_one flex justify-between">
          <div className="mt-8"></div>
          <div className="mt-8 ml-4"></div>
        </div>
      </div>
    </>
  );
};

const PatientDetails = (props) => {
  return (
    <>
      {/* <MainLayout> */}
      <div className="flex flex-col flex-grow pl-16 pr-8 pt-20 mb-10 bg-gray-100 h-screen">
        <Link href="/patients"> Back</Link>
        <div className="flex p-9">
          <div className="flex flex-col items-center w-96 h-auto mr-8  bg-white border rounded-3xl ">
            <div className="img h-20 w-20 mb-4 mt-6 rounded-full bg-gray-400"></div>
            <h2 className="font-semibold text-xl">
              {props.user.firstname} {props.user.lastname}
            </h2>
            <div className="flex justify-center w-full p-10 ">
              <div className="flex flex-1">
                <div className="main_one flex flex-col">
                  <div className="mb-8">
                    <small>Date of Birth</small>
                    <h3 className="font-semibold">{props.user.dateOfBirth}</h3>
                  </div>
                  <div className="mb-8">
                    <small>Hospital Number</small>
                    <h3 className="font-semibold">{props.user.userNumber}</h3>
                  </div>
                  <div className="mb-8">
                    <small>Address</small>
                    <h3 className="font-semibold">{props.user.address}</h3>
                  </div>
                  <div className="mb-8">
                    <small>Marital Status</small>
                    <h3 className="font-semibold">
                      {props.user.maritalStatus}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="main_one flex flex-1 flex-col text-right">
                  <div className="mb-8">
                    <small>Phone</small>
                    <h3 className="font-semibold">{props.user.phoneNumber}</h3>
                  </div>
                  <div className="mb-8">
                    <small>Hospital Number</small>
                    <h3 className="font-semibold">{props.user.gender}</h3>
                  </div>
                  <div className="mb-8">
                    <small>E-mail</small>
                    <h3 className="font-semibold">{props.user.email}</h3>
                  </div>
                  <div className="mb-8">
                    <small>Marital Status</small>
                    <h3 className="font-semibold">
                      {props.user.maritalStatus}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* appoitment */}
          <div className="flex flex-col p-10 w-96 h-80 bg-white border rounded-3xl mr-8 ">
            <div className="main_one flex">
              <h2 className="font-bold text-2xl">Recent Appointment</h2>
            </div>
            
            <div className="main_one flex justify-between">
              <div className="mt-8">
                <small>Date</small>
                <h3 className="font-semibold">
                  {/* {props.user.appointment[0].appointmentTime} */}
                </h3>
              </div>
              <div className="mt-8 text-right">
                <small>Time</small>
                <h3 className="font-semibold">
                  {/* {props.user.appointment[0].appointmentDate} */}
                </h3>
              </div>
            </div>
            <div className="main_one flex justify-between">
              <div className="mt-8">
                <small>Concern</small>
                <h3 className="font-semibold">
                  {/* {props.user.appointment[0].concern} */}
                </h3>
              </div>
              <div className="mt-8 text-right">
                <small>Appointment Number</small>
                <h3 className="font-semibold">
                  {/* {props.user.appointment[0].appointmentNumber} */}
                </h3>
              </div>
            </div>
          </div>
          {/* vitals */}
          <EnterVitals userId={props.user._id} />
        </div>
        <div style={{ marginLeft: '450px', marginTop: '-200px' }}>
          <Diagnosis userId={props.user._id} />
        </div>
      </div>
      {/* </MainLayout> */}
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data } = await axios.get('/api/user/get-all-users');

  console.log(data);

  const users = data;

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { data } = await axios.get(`/api/user/${params.id}`);

  const user = data;

  // console.log(user)

  // Pass post data to the page via props
  return { props: { user } };
}

export default PatientDetails;
