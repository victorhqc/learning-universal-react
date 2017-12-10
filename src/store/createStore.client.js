import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const enhancer = () =>
  applyMiddleware(thunk.withExtraArgument(axiosInstance));

export default (initialStore = {}) => {
  const store = createStore(reducers, initialStore, enhancer());

  return store;
};
