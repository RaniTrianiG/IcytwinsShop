/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const addToCart = (body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.ADD_TO_CART_START });

  const options = {
    method: 'post',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  fetch(API + URLS.ADDTOCART, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(() => {
      dispatch({ type: ACTIONS.ADD_TO_CART_SUCCESS });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.ADD_TO_CART_FAILED, error });
    });
};
