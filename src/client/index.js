// Startup point for the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../store/createStore.client';
import Routes from './Routes';

const store = createStore();

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'),
);
