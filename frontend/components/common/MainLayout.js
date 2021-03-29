import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/auth';

const MainLayout = ({
  children,
  loadUser,
  auth: { user, isAuthenticated },
}) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <>
      <div className="w-full flex-grow h-full">
        <Navbar />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { loadUser })(MainLayout);
