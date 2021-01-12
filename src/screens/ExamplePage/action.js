/* eslint-disable  import/prefer-default-export */
import { ACTIONS } from '../../constants';

export const testActions = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.GET_DATA_START });
    setTimeout(() => {
      dispatch({ type: ACTIONS.GET_DATA_START });
    }, 3000);
  };
};
