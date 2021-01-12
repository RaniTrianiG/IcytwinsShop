import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Login reducer', () => {
  it('returns desired state when given POST_LOGIN_START action', () => {
    const action = {
      type: ACTIONS.POST_LOGIN_START,
      data: { username: 'test@email.com', password: 'password123' }
    };
    const assert = {
      isLoading: true
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given POST_LOGIN_SUCCESS action', () => {
    const action = {
      type: ACTIONS.POST_LOGIN_SUCCESS,
      data: { username: 'test@email.com', password: 'password123' }
    };
    const assert = {
      isLoading: false,
      data: { username: 'test@email.com', password: 'password123' }
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given POST_LOGIN_FAILED action', () => {
    const action = {
      type: ACTIONS.POST_LOGIN_FAILED,
      error: { message: 'error' }
    };
    const assert = {
      isLoading: false,
      error: { message: 'error' }
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
