import { ACTIONS } from '../../../constants';
import { objectUpdater } from '../../../utils';

const initialState = {
  isLoading: false,
  error: null,
  category: {}
};

const reducers = (state = initialState, action) => {
  const { data, error } = action;

  switch (action.type) {
    case ACTIONS.GET_CATEGORY_START:
      return objectUpdater(state, { isLoading: true });
    case ACTIONS.GET_CATEGORY_SUCCESS:
      return objectUpdater(state, { isLoading: false, category: data });
    case ACTIONS.GET_CATEGORY_FAILED:
      return objectUpdater(state, { isLoading: false, error });
    default:
      return state;
  }
};

export default reducers;
