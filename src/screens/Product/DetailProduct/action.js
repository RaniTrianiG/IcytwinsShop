/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const updateData = (id, body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.UPDATE_PRODUCT_START });

  const options = {
    method: 'put',
    headers: { ...defaultOpt.headers, 'Content-Type': 'multipart/form-data' },
    ...(body ? { body } : null)
  };

  fetch(`${API + URLS.PRODUCT}/${id}`, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(() => {
      dispatch({ type: ACTIONS.UPDATE_PRODUCT_SUCCESS });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.UPDATE_PRODUCT_FAILED, error });
    });
};

export const deleteData = (id, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.DELETE_PRODUCT_START });

  const options = {
    method: 'delete',
    headers: defaultOpt.headers
  };

  fetch(`${API + URLS.PRODUCT}/${id}`, options)
    .then(() => {
      dispatch({ type: ACTIONS.UPDATE_PRODUCT_SUCCESS });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.UPDATE_PRODUCT_FAILED, error });
    });
};
