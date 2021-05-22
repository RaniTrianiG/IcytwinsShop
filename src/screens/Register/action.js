/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

export const postRegister = (data, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.POST_REGISTER_START });

  const options = {
    method: 'post',
    headers: defaultOpt.headers,
    ...(data ? { body: JSON.stringify(data) } : null)
  };

  fetch(API + URLS.REGISTER, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      const { httpStatus } = res;

      if (httpStatus !== 200) {
        return;
      }

      dispatch({ type: ACTIONS.POST_REGISTER_SUCCESS, data: res });
      successCallback(res);
    })
    .catch(error => {
      dispatch({ type: ACTIONS.POST_REGISTER_FAILED, error });
    });
};

export const logout = () => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.AUTH_LOGOUT_START });

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  fetch(API + URLS.LOGOUT, options)
    .then(() => {
      dispatch({ type: ACTIONS.AUTH_LOGOUT_SUCCESS });
      AsyncStorage.removeItem('user-token');
    })
    .catch(error => {
      dispatch({ type: ACTIONS.AUTH_LOGOUT_FAILED, error });
    });
};
