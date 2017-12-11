import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import fetchCurrentUser from '../store/actions/auth';

const App = ({ route }) => (
  <Fragment>
    <Header />
    {renderRoutes(route.routes)}
  </Fragment>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
