/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const updateData = (id, body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.UPDATE_CATEGORY_START });

  const options = {
    method: 'put',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  fetch(`${API + URLS.CATEGORY}/${id}`, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(() => {
      dispatch({ type: ACTIONS.UPDATE_CATEGORY_SUCCESS });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.UPDATE_CATEGORY_FAILED, error });
    });
};

export const deleteData = (id, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.DELETE_CATEGORY_START });

  const options = {
    method: 'delete',
    headers: defaultOpt.headers
  };

  fetch(`${API + URLS.CATEGORY}/${id}`, options)
    .then(() => {
      dispatch({ type: ACTIONS.DELETE_CATEGORY_SUCCESS });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.DELETE_CATEGORY_FAILED, error });
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