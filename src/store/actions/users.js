import axios from 'axios';

import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  // FETCH_USERS_FAILED
} from '../constants/users';

import selectUsers from '../selectors/users';

const fetchUsersPending = () => ({
  type: FETCH_USERS_PENDING,
});

const fetchusersFulfilled = data => ({
  type: FETCH_USERS_FULFILLED,
  payload: data,
});

const isFetchRequired = (state, force) => {
  if (force) {
    return true;
  }

  return selectUsers(state).length <= 0;
};

const fetchUsers = (force = false) => async (dispatch, getState) => {
  if (!isFetchRequired(getState(), force)) {
    return;
  }

  dispatch(fetchUsersPending());
  const { data } = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch(fetchusersFulfilled(data));
};

export default fetchUsers;
