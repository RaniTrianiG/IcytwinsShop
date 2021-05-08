import { ACTIONS } from '../../constants';
import { objectUpdater } from '../../utils';

const initialState = {
  data: null,
  error: null,
  profile: null
};

const reducers = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case ACTIONS.GET_DASHBOARD:
      return objectUpdater(state, { data });
    case ACTIONS.SET_PROFILE_SUCCESS:
      return objectUpdater(state, { profile: data });
    default:
      return state;
  }
};

export default reducers;
