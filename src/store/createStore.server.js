import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import reducers from './reducers';

const enhancer = (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  return applyMiddleware(thunk.withExtraArgument(axiosInstance));
};

export default (initialStore = {}, req) => {
  const store = createStore(reducers, initialStore, enhancer(req));

  return store;
};
