import { ACTIONS } from '../../constants';
import { objectUpdater } from '../../utils';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

const reducers = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case ACTIONS.POST_LOGIN_START:
      return objectUpdater(state, { isLoading: true });
    case ACTIONS.POST_LOGIN_SUCCESS:
      return objectUpdater(state, { isLoading: false, data });
    case ACTIONS.POST_LOGIN_FAILED:
      return objectUpdater(state, { isLoading: false, error });
    default:
      return state;
  }
};

export default reducers;
