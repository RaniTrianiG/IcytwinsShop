import { ACTIONS } from '../../constants';
import { objectUpdater } from '../../utils';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_START:
      return objectUpdater(state, { isLoading: true });
    default:
      return state;
  }
};

export default reducers;
