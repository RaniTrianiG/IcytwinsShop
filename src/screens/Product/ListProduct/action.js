/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const getData = successCallback => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.GET_PRODUCT_START });

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  fetch(API + URLS.PRODUCT, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      const { data } = res;

      dispatch({ type: ACTIONS.GET_PRODUCT_SUCCESS, data });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.GET_PRODUCT_FAILED, error });
    });
};
