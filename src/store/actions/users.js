import axios from 'axios';

import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  // FETCH_USERS_FAILED
} from '../constants/users';

const fetchUsersPending = () => ({
  type: FETCH_USERS_PENDING,
});

const fetchusersFulfilled = data => ({
  type: FETCH_USERS_FULFILLED,
  payload: data,
});

const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersPending());
  const { data } = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch(fetchusersFulfilled(data));
};

export default fetchUsers;
