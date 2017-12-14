import {
  FETCH_ADMINS_PENDING,
  FETCH_ADMINS_FULFILLED,
  // FETCH_ADMINS_FAILED
} from '../constants/admins';

import {
  selectAdmins,
} from '../reducers/users';

const fetchAdminsPending = () => ({
  type: FETCH_ADMINS_PENDING,
});

const fetchusersFulfilled = data => ({
  type: FETCH_ADMINS_FULFILLED,
  payload: data,
});

const isFetchRequired = (state, force) => {
  if (force) {
    return true;
  }

  return selectAdmins(state).length <= 0;
};

const fetchAdmins = (force = false) => async (dispatch, getState, api) => {
  if (!isFetchRequired(getState(), force)) {
    return;
  }

  dispatch(fetchAdminsPending());
  const { data } = await api.get('/admins');

  dispatch(fetchusersFulfilled(data));
};

export default fetchAdmins;
