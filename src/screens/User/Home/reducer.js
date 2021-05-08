import { ACTIONS } from '../../../constants';
import { objectUpdater } from '../../../utils';

const initialState = {
  data: null
};

const reducers = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case ACTIONS.GET_PRODUCT_SUCCESS:
      return objectUpdater(state, { data });
    default:
      return state;
  }
};

export default reducers;
