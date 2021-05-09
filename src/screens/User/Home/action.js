/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const getData = (categoryId = null, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.GET_PRODUCT_START });

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  const apiUrl =
    categoryId != null ? `${API + URLS.PRODUCT}?category_id=${categoryId}` : `${API + URLS.PRODUCT}`;
  console.log(apiUrl);
  fetch(apiUrl, options)
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
      successCallback(res);
    })
    .catch(error => {
      dispatch({ type: ACTIONS.GET_PRODUCT_FAILED, error });
    });
};
