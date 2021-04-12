import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import { MainLayout } from '../components/common';
import { loadUser } from '../actions/auth';

const healthr = ({ loadUser, auth: { user, isAuthenticated } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    // <MainLayout>
    <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
      <div className="mb-8 mt-4 flex flex-col">
        <h1 className="text-2xl text-black font-semibold">HEALTH RECORDS</h1>
      </div>
    </div>
    // </MainLayout>
  );
};

healthr.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loadUser,
})(healthr);
