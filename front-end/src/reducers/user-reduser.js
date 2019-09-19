import { GET_USER_ACTION } from '../constants/action_types';

const initialState = null;

/**
 * Auth reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case `REQUEST_${GET_USER_ACTION}`: {
      return {
        ...initialState
      };
    }
    case `SUCCESS_${GET_USER_ACTION}`: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}
