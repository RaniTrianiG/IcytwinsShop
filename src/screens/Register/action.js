/* eslint-disable import/prefer-default-export */
import { ACTIONS, API } from '../../constants';
import { AXIOS } from '../../configs';
import { reqOption } from '../../utils';

export const postRegister = (data, successCallback) => async dispatch => {
  const option = await reqOption();
  dispatch({ type: ACTIONS.POST_REGISTER_START });
  AXIOS.post(API.REGISTER, data, option)
    .then(resp => {
      dispatch({ type: ACTIONS.POST_REGISTER_SUCCESS, data: resp });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.POST_REGISTER_FAILED, error });
    });
};
