// import { push } from 'react-router-redux';
import { GET_USER_URL, USER_URL, GET_CURRENT_USER_URL } from '../constants/endpoints';
import { GET_USER_ACTION } from '../constants/action_types';
import { fetchApi } from '../helpers/fetch';

export default function getUser(username, password) {
   return dispatch => dispatch(fetchApi(
    GET_USER_URL,
    GET_USER_ACTION,
    'POST',
    { username, password }
  )).catch(err => err);
}


export function refreshUser(username, password) {
  return dispatch => dispatch(fetchApi(
    GET_CURRENT_USER_URL,
    GET_USER_ACTION,
    'GET'
  )).catch(err => err);
}

export function updateUser(userEntity, user_id) {
  return dispatch => dispatch(fetchApi(
    `${USER_URL}/${user_id}`,
    GET_USER_ACTION,
    'PUT',
    userEntity
  )).catch(err => err);
}
