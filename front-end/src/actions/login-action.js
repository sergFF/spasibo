// import { push } from 'react-router-redux';
import { GET_USER_URL, USER_URL, GET_CURRENT_USER_URL } from '../constants/endpoints';
import { GET_CURRENT_USER_ACTION } from '../constants/action_types';
import { fetchApi } from '../helpers/fetch';

export default function getUser(username, password) {
   return dispatch => dispatch(fetchApi(
    GET_USER_URL,
    GET_CURRENT_USER_ACTION,
    'POST',
    { username, password }
  )).catch(err => err);
}
