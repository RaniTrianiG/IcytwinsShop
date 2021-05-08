/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

export const getDashboard = successCallback => async dispatch => {
  const defaultOpt = await reqOption();

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  // eslint-disable-next-line no-undef
  fetch(API + URLS.DASHBOARD, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      const { data } = res;

      dispatch({ type: ACTIONS.GET_DASHBOARD, data });
      successCallback(res);
    })
    .catch(() => {});
};
