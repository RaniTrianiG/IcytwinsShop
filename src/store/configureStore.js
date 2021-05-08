/* eslint-disable  no-param-reassign */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducers from '../reducers';

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT_SUCCESS') {
    state = undefined;
  }
  return appReducers(state, action);
};
let composeEnhancers = compose;

// eslint-disable-next-line no-undef
if (__DEV__) {
  // eslint-disable-next-line no-undef
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
