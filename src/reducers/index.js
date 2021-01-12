import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from '../screens/Login/reducer';
import registerReducer from '../screens/Register/reducer';
import homeReducer from '../screens/Home/reducer';

const appReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  form: formReducer,
  home: homeReducer
});
export default appReducers;
