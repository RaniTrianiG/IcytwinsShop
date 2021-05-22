/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

export const postForgetEmail = (email, successCallback) => async dispatch => {
  dispatch({ type: ACTIONS.AUTH_FORGET_START });
  const defaultOpt = await reqOption();

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  fetch(`${API + URLS.FORGETSENDCODE}/${email}`, options)
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

      dispatch({ type: ACTIONS.AUTH_FORGET_SUCCESS });
      successCallback(res);
    })
    .catch(error => {
      dispatch({ type: ACTIONS.AUTH_LOGOUT_FAILED, error });
    });
};

export const postResetPassword = (body, successCallback) => async dispatch => {
  dispatch({ type: ACTIONS.AUTH_FORGET_START });
  const defaultOpt = await reqOption();

  const options = {
    method: 'post',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  fetch(API + URLS.FORGETRESETPASSWORD, options)
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

      dispatch({ type: ACTIONS.AUTH_FORGET_SUCCESS });
      successCallback(res);
    })
    .catch(error => {
      dispatch({ type: ACTIONS.AUTH_LOGOUT_FAILED, error });
      successCallback(error);
    });
};
