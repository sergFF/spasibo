import { combineReducers } from 'redux';
// import reducer from './default-reducer';
import userReducer from './user-reduser';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  userReducer,
  form: formReducer
});

export default rootReducer;
