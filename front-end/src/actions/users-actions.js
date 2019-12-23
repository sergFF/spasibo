import {fetchApi} from "../helpers/fetch";
import {CURRENT_USER_URL, USER_URL, UPDATE_CURRENT_USER_PASSWORD_URL} from "../constants/endpoints";
import {
  GET_CURRENT_USER_ACTION,
  GET_USERS_LIST_ACTION,
  GET_USER_ACTION,
  CREATE_USER_ACTION
} from "../constants/action_types";
import {error} from "winston";

export function refreshUser(username, password) {
  return dispatch => dispatch(fetchApi(
    CURRENT_USER_URL,
    GET_CURRENT_USER_ACTION,
    'GET'
  )).catch(err => err);
}

export function updateCurrentUser(userEntity) {
  return dispatch => dispatch(fetchApi(
    `${CURRENT_USER_URL}`,
    GET_CURRENT_USER_ACTION,
    'PUT',
    userEntity
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

export function loadUsers() {
  return dispatch => dispatch(fetchApi(
    USER_URL,
    GET_USERS_LIST_ACTION,
    'GET',
  )).catch(err => err);
}

export function createUser(userEntity) {
  return dispatch => dispatch (fetchApi(
    USER_URL,
    CREATE_USER_ACTION,
    'POST',
    userEntity
    ))
    .catch(err => err)
}

export function updatePassword (payload) {
  return dispatch => dispatch(fetchApi(
    UPDATE_CURRENT_USER_PASSWORD_URL,
    GET_CURRENT_USER_ACTION,
    'POST',
    payload
    ));
}
