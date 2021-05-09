/* eslint-disable import/prefer-default-export */
import { API } from 'react-native-dotenv';
import { ACTIONS, API as URLS } from '../../../constants';
import { reqOption } from '../../../utils';

export const updateTransactions = (id, body, successCallback) => async dispatch => {
  const defaultOpt = await reqOption();
  dispatch({ type: ACTIONS.UPDATE_TRANSACTION_START });

  const options = {
    method: 'put',
    headers: defaultOpt.headers,
    ...(body ? { body: JSON.stringify(body) } : null)
  };

  // eslint-disable-next-line no-undef
  fetch(`${API + URLS.TRANSACTIONS}/${id}`, options)
    .then(response =>
      response.text().then(resData => ({
        data: resData === '' ? {} : JSON.parse(resData),
        status: true,
        httpStatus: response.status
      }))
    )
    .then(() => {
      dispatch({ type: ACTIONS.UPDATE_TRANSACTION_SUCCESS });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: ACTIONS.UPDATE_TRANSACTION_FAILED, error });
    });
};
