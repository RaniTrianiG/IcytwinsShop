/* eslint-disable import/prefer-default-export */
import { ACTIONS, API } from '../../constants';
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
