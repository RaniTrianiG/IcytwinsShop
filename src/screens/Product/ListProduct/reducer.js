import { ACTIONS } from '../../../constants';
import { objectUpdater } from '../../../utils';

const initialState = {
  isLoading: false,
  error: null,
  product: null
};

const reducers = (state = initialState, action) => {
  const { data, error } = action;

  switch (action.type) {
    case ACTIONS.GET_PRODUCT_START:
      return objectUpdater(state, { isLoading: true });
    case ACTIONS.GET_PRODUCT_SUCCESS:
      return objectUpdater(state, { isLoading: false, product: data });
    case ACTIONS.GET_PRODUCT_FAILED:
      return objectUpdater(state, { isLoading: false, error });
    default:
      return state;
  }
};

export default reducers;
