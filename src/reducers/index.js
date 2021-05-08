import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from '../screens/Login/reducer';
import registerReducer from '../screens/Register/reducer';
import homeReducer from '../screens/Home/reducer';
import categoryReducer from '../screens/Category/ListCategory/reducer';
import userHomeReducer from '../screens/User/Home/reducer';
import userCartReducer from '../screens/User/Cart/reducer';

const appReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  form: formReducer,
  home: homeReducer,
  category: categoryReducer,
  userHome: userHomeReducer,
  cart: userCartReducer
});
export default appReducers;
