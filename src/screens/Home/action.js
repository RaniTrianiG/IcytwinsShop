/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../constants';
import { reqOption } from '../../utils';
import { AXIOS } from '../../configs';

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

export const getDashboard = (body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.GET_DASHBOARD });

  const options = {
    method: 'get',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
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
    .catch(error => {
      dispatch({ type: ACTIONS.POST_LOGIN_FAILED, error });
    });
};
