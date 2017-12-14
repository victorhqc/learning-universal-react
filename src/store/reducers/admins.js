import compose from 'lodash/fp/compose';

import {
  FETCH_ADMINS_PENDING,
  FETCH_ADMINS_FULFILLED,
  // FETCH_ADMINS_FAILED
} from '../constants/admins';

import {
  merge,
  isFulfilled,
  isFetching,
} from '../../helpers/object';

const defaultState = () => ({
  list: [],
});

const admins = (state = defaultState(), action = {}) => {
  switch (action.type) {
    case FETCH_ADMINS_PENDING:
      // Set isFetching as true
      return isFetching(state);

    case FETCH_ADMINS_FULFILLED:
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

export default admins;

export const selectAdmins = state =>
  state.admins.list;
