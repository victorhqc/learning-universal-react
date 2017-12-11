import compose from 'lodash/fp/compose';

import {
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_FULFILLED,
} from '../constants/auth';

import {
  merge,
  isFulfilled,
  isFetching,
} from '../../helpers/object';

const isAuthenticated = action => state => ({
  ...state,
  isAuthenticated: !!action.payload,
});

const isNotAuthenticated = state => ({
  ...state,
  isAuthenticated: false,
});

const getDefaultState = () => isNotAuthenticated({});

const authReducer = (state = getDefaultState(), action = {}) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_PENDING:
      return compose(
        // 2. Set isFetching to true
        isFetching,
        // 1. Set isAuthenticated to false
        isNotAuthenticated,
      )(state);

    case FETCH_CURRENT_USER_FULFILLED:
      return compose(
        // 3. merge payload
        merge(action.payload),
        // 2. Set isFetching to false
        isFulfilled,
        // 1. Set is isAuthenticated to true (if data is in payload)
        isAuthenticated(action),
      )(state);

    default:
      return state;
  }
};

export default authReducer;
