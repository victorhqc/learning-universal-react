// Startup point for the client side application

import 'babel-polyfill';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import createStore from '../store/createStore.client';
import Routes from './Routes';

const store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'),
);
