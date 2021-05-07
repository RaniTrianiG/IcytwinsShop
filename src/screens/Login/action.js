/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

export const postLogin = (body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.POST_LOGIN_START });

  const options = {
    method: 'post',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  // eslint-disable-next-line no-undef
  fetch(API + URLS.LOGIN, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      const { data } = res;
      AsyncStorage.setItem('user-token', data.access_token);

      dispatch({ type: ACTIONS.POST_LOGIN_SUCCESS, data: data.access_token });
      successCallback(res);
    })
    .catch(error => {
      dispatch({ type: ACTIONS.POST_LOGIN_FAILED, error });
    });
};

export const getProfile = successCallback => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.SET_PROFILE_START });

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  // eslint-disable-next-line no-undef
  fetch(API + URLS.PROFILE, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      dispatch({ type: ACTIONS.SET_PROFILE_SUCCESS, data: res });
      successCallback(res);
    })
    .catch(error => {
      dispatch({ type: ACTIONS.SET_PROFILE_FAILED, error });
    });
};
