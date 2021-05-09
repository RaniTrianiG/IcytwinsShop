/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

export const postForget = (email, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.AUTH_FORGET_START });

  const options = {
    method: 'get',
    headers: defaultOpt.headers
  };

  // eslint-disable-next-line no-undef
  fetch(`${API + URLS.FORGET}/${email}`, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      const { httpStatus } = res;

      if (httpStatus === 200) {
        dispatch({ type: ACTIONS.AUTH_FORGET_SUCCESS });
        successCallback();
      }
    })
    .catch(error => {
      dispatch({ type: ACTIONS.AUTH_LOGOUT_FAILED, error });
    });
};
