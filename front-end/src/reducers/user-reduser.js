import { GET_CURRENT_USER_ACTION, LOGOUT_CURRENT_USER } from '../constants/action_types';

const initialState = {
  userData: {
    id: null,
    fullName: '',
    email: '',
    password: '',
    login:'',
    role: null,
    isActive: false,
    passwordChange: null
  },
  status: 'PRISTINE'
};

/**
 * Auth reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case `REQUEST_${GET_CURRENT_USER_ACTION}`: {
      return {
        ...state,
        status: 'LOADING'
      };
    }
    case `SUCCESS_${GET_CURRENT_USER_ACTION}`: {
      const status = action.payload.passwordChange ? 'CHANGE_PASSWORD' : 'DONE';
      return {
        userData: action.payload,
        status
      };
    }
    case `ERROR_${GET_CURRENT_USER_ACTION}`: {
      return {
        ...state,
        status: 'ERROR'
      };
    }
    case `SUCCESS_${LOGOUT_CURRENT_USER}`: {
      return initialState;
    }
    default:
      return state;
  }
}
