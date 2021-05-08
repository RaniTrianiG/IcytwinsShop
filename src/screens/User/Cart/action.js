/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const checkout = (body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.CHECK_OUT_START });

  const options = {
    method: 'post',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  fetch(API + URLS.CHECKOUT, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(() => {
      dispatch({ type: ACTIONS.CHECK_OUT_START });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.CHECK_OUT_FAILED, error });
    });
};
