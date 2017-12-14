import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const RequireAuth = (props) => {
    const {
      auth,
    } = props;

    if (auth.isFetching) {
      return (
        <div>Loading...</div>
      );
    }

    if (!auth.isAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <WrappedComponent {...props} />
    );
  };

  RequireAuth.propTypes = {
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
      isFetching: PropTypes.bool,
    }).isRequired,
  };

  const mapStateToProps = ({ auth }) => ({
    auth,
  });

  return connect(mapStateToProps)(RequireAuth);
};

export default withAuth;
