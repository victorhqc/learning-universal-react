import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  // FETCH_USERS_FAILED
} from '../constants/users';

import {
  selectUsers,
} from '../reducers/users';

const fetchUsersPending = () => ({
  type: FETCH_USERS_PENDING,
});

const fetchUsersFulfilled = data => ({
  type: FETCH_USERS_FULFILLED,
  payload: data,
});

const isFetchRequired = (state, force) => {
  if (force) {
    return true;
  }

  return selectUsers(state).length <= 0;
};

const fetchUsers = (force = false) => async (dispatch, getState, api) => {
  if (!isFetchRequired(getState(), force)) {
    return;
  }

  dispatch(fetchUsersPending());
  const { data } = await api.get('/users');

  dispatch(fetchUsersFulfilled(data));
};

export default fetchUsers;
