import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import fetchCurrentUser from '../store/actions/auth';

const AppWrapper = styled.div`
  font-family: Helvetica;
`;

const App = ({ route }) => (
  <AppWrapper>
    <Header />
    {renderRoutes(route.routes)}
  </AppWrapper>
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
