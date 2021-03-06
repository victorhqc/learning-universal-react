import compose from 'lodash/fp/compose';

import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  // FETCH_USERS_FAILED
} from '../constants/users';

import {
  merge,
  isFulfilled,
  isFetching,
} from '../../helpers/object';

const defaultState = () => ({
  list: [],
});

const users = (state = defaultState(), action = {}) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      // Set isFetching as true
      return isFetching(state);

    case FETCH_USERS_FULFILLED:
      return compose(
        // Merge payload to state
        merge({ list: action.payload }),
        // 1. Set isFetching as false
        isFulfilled,
      )(state);

    default:
      return state;
  }
};

export default users;

export const selectUsers = state =>
  state.users.list;
