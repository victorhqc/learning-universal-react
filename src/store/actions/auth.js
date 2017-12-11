import {
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_FULFILLED,
} from '../constants/auth';

const fetchCurrentUserPending = () => ({
  type: FETCH_CURRENT_USER_PENDING,
});

const fetchCurrentUserFulfilled = data => ({
  type: FETCH_CURRENT_USER_FULFILLED,
  payload: data,
});

const fetchCurrentUser = () => async (dispatch, getState, api) => {
  dispatch(fetchCurrentUserPending());
  const { data } = await api.get('/current_user');

  dispatch(fetchCurrentUserFulfilled(data));
};

export default fetchCurrentUser;
