import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { MainLayout } from '../components/common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../actions/auth';

const profile = ({ loadUser, auth: { user, isAuthenticated } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <MainLayout>
        <div className="flex flex-row justify-evenly flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-screen">
          <div className="flex flex-col items-center w-60 h-80  bg-white border rounded-3xl ">
            <div className="img h-20 w-20 mb-4 mt-6 rounded-full bg-gray-400"></div>
            <h2 className="font-semibold text-xl">
              {user.firstname} {user.lastname}
            </h2>
          </div>
          <div className="flex p-10 w-96 h-80 justify-between bg-white border rounded-3xl ">
            <div className="main_one flex flex-1 flex-col">
              <div className="mb-8">
                <small>Date of Birth</small>
                <h3 className="font-semibold">{user.dateOfBirth}</h3>
              </div>
              <div className="mb-8">
                <small>Hospital Number</small>
                <h3 className="font-semibold">{user.userNumber}</h3>
              </div>
              <div className="mb-8">
                <small>Address</small>
                <h3 className="font-semibold">{user.address}</h3>
              </div>
              <div className="mb-8">
                <small>Marital Status</small>
                <h3 className="font-semibold">{user.maritalStatus}</h3>
              </div>
            </div>
            <div className="main_one flex flex-1 flex-col text-right">
              <div className="mb-8">
                <small>Phone</small>
                <h3 className="font-semibold">{user.phoneNumber}</h3>
              </div>
              <div className="mb-8">
                <small>Hospital Number</small>
                <h3 className="font-semibold">{user.gender}</h3>
              </div>
              <div className="mb-8">
                <small>Address</small>
                <h3 className="font-semibold">{user.address}</h3>
              </div>
              <div className="mb-8">
                <small>Marital Status</small>
                <h3 className="font-semibold">{user.maritalStatus}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-96 h-80  bg-white border rounded-lg shadow-md">
            <div className="img h-20 w-20 rounded-full bg-gray-400"></div>
            <h2>Marcus Rashford</h2>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

profile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { loadUser })(profile);
