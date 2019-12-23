import {REMOVE_API_ERROR, SET_API_ERROR} from '../constants/action_types';

export function registerError (error) {
  return {
    type: SET_API_ERROR,
    error
  }
}

export function unRegisterError (id) {
  return {
    type: REMOVE_API_ERROR,
    id
  }
}
