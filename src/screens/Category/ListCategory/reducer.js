import { ACTIONS } from '../../../constants';
import { objectUpdater } from '../../../utils';

const initialState = {
  category: null
};

const reducers = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case ACTIONS.GET_CATEGORY_SUCCESS:
      return objectUpdater(state, { category: data });
    default:
      return state;
  }
};

export default reducers;
