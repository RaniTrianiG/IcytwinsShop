const initialState = {
  data: null,
  profile: null,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_PROFILE_SUCCESS:
      return objectUpdater(state, { profile: data });
    default:
      return state;
  }
};

export default reducers;
