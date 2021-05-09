import { ACTIONS } from '../../../constants';
import { objectUpdater } from '../../../utils';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  transactions: [],
  profile: null
};

const reducers = (state = initialState, action) => {
  const { data, error } = action;

  switch (action.type) {
    case ACTIONS.GET_TRANSACTION_START:
      return objectUpdater(state, { isLoading: true, transactions: [] });
    case ACTIONS.GET_TRANSACTION_SUCCESS:
      return objectUpdater(state, { isLoading: false, transactions: data });
    case ACTIONS.GET_TRANSACTION_FAILED:
      return objectUpdater(state, { isLoading: false, error });
    case ACTIONS.SET_PROFILE_SUCCESS:
      return objectUpdater(state, { profile: data });
    default:
      return state;
  }
};

export default reducers;
