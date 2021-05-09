/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

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
