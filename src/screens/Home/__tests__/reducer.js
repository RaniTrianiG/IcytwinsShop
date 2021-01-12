import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Home reducer', () => {
  it('returns desired state when given GET_HOME_START action', () => {
    const action = {
      type: ACTIONS.GET_HOME_START
    };
    const assert = {
      isLoading: true,
      data: null
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given GET_HOME_SUCCESS action', () => {
    const action = {
      type: ACTIONS.GET_HOME_SUCCESS,
      data: []
    };
    const assert = {
      isLoading: false,
      data: []
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given GET_HOME_FAILED action', () => {
    const action = {
      type: ACTIONS.GET_HOME_FAILED,
      error: {}
    };
    const assert = {
      isLoading: false,
      error: {}
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns initial state when given other actions', () => {
    const action = { type: 'x' };
    const assert = {
      isLoading: false,
      data: null
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
});
