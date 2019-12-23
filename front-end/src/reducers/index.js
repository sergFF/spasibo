import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import reducer from './default-reducer';
import userReducer from './user-reduser';
import usersList from './user-list-reduser';
import errorsReducer from './errors-reduser';


const rootReducer = combineReducers({
  userReducer,
  form: formReducer,
  usersList,
  errorsReducer
});

export default rootReducer;
