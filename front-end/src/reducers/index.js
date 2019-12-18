import { combineReducers } from 'redux';
// import reducer from './default-reducer';
import userReducer from './user-reduser';
import usersList from './user-list-reduser';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  userReducer,
  form: formReducer,
  usersList
});

export default rootReducer;
