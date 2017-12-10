import axios from 'axios';

import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  // FETCH_USERS_FAILED
} from '../constants/users';

const fetchUsersPending = () => ({
  type: FETCH_USERS_PENDING,
});

const fetchusersFulfilled = response => ({
  type: FETCH_USERS_FULFILLED,
  payload: response,
});

const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersPending());
  const response = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch(fetchusersFulfilled(response));
};

export default fetchUsers;
