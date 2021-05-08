/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { AXIOS } from '../../configs';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';

export const getHomeData = () => dispatch => {
  dispatch({ type: ACTIONS.GET_HOME_START });
  AXIOS.get(API.POSTS)
    .then(resp => {
      dispatch({ type: ACTIONS.GET_HOME_SUCCESS, data: resp });
    })
    .catch(error => {
      dispatch({ type: ACTIONS.GET_HOME_FAILED, error });
    });
};

export const postUpdateProfile = (body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.UPDATE_PROFILE_START });
  body = {
    ...body,
    _method: 'PUT'
  };
  if (body.password) {
    body = {
      ...body,
      password_confirmation: body.password
    };
  }
  const options = {
    method: 'post',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  // eslint-disable-next-line no-undef
  fetch(`${API + URLS.USER}/${body.id}`, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(res => {
      const { data, httpStatus } = res;

      if (httpStatus === 200) {
        dispatch({ type: ACTIONS.UPDATE_PROFILE_SUCCESS, data });
        successCallback(res);
      }
    })
    .catch(error => {
      dispatch({ type: ACTIONS.UPDATE_PROFILE_FAILED, error });
    });
};
