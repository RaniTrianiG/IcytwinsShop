import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import { ACTIONS, API } from '../../constants';
import { AXIOS } from '../../configs';
import { reqOption } from '../../utils';

export const postLogin = body => async dispatch => {
  dispatch({ type: ACTIONS.POST_LOGIN_START });
  const option = await reqOption();
  AXIOS.post(API.LOGIN, body, option)
    .then(resp => {
      const { data } = resp;
      const userData = jwtDecode(data.token);
      AsyncStorage.setItem('user-token', data.token);
      // startTabs();
      dispatch({ type: ACTIONS.POST_LOGIN_SUCCESS, data: userData });
    })
    .catch(error => {
      dispatch({ type: ACTIONS.POST_LOGIN_FAILED, error });
    });
};

export const autoLogin = token => dispatch => {
  const data = jwtDecode(token);
  dispatch({ type: ACTIONS.POST_LOGIN_SUCCESS, data });
};
