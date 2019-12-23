import { SET_API_ERROR, REMOVE_API_ERROR } from '../constants/action_types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_API_ERROR : {
      const newState = [...state];
      newState.push({ id:state.length, e: action.error} );
      return newState;
    }
    case REMOVE_API_ERROR: {
      const index = state.findIndex(e => e.id === action.id);
      if (index !== -1) {
        const newState = state.slice();
        newState.splice(index, 1)
        return newState;
      }
      return state;
    }
    default: return state
  }
}
