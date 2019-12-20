import {
  GET_USERS_LIST_ACTION,
  GET_USER_ACTION,
  CREATE_USER_ACTION,
  LOGOUT_CURRENT_USER
} from '../constants/action_types';

const initialState = {
  list: [],
  status: 'PRISTINE'
};

/**
 * Auth reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case `REQUEST_${GET_USERS_LIST_ACTION}`: {
      return {
        ...state,
        status: 'LOADING'
      };
    }
    case `SUCCESS_${GET_USERS_LIST_ACTION}`: {
      return {
        list: action.payload,
        status: 'DONE'
      };
    }
    case `ERROR_${GET_USERS_LIST_ACTION}`: {
      return {
        ...state,
        status: 'ERROR'
      };
    }
    case `REQUEST_${GET_USER_ACTION}`: {
      return {
        ...state,
        status: 'LOADING'
      };
    }
    case `SUCCESS_${GET_USER_ACTION}`: {
      const newList = state.list.map(user => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      return {
        list: newList,
        status: 'DONE'
      };
    }
    case `ERROR_${GET_USER_ACTION}`: {
      return {
        ...state,
        status: 'ERROR'
      };
    }
    case `REQUEST_${CREATE_USER_ACTION}`: {
      return {
        ...state,
        status: 'LOADING'
      };
    }
    case `SUCCESS_${CREATE_USER_ACTION}`: {
      const newList = state.list.slice();
      newList.push(action.payload);
      return {
        list: newList,
        status: 'DONE'
      };
    }
    case `ERROR_${CREATE_USER_ACTION}`: {
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
