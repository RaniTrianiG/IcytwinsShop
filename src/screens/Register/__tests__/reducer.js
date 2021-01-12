import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Register reducer', () => {
  it('returns desired state when given POST_REGISTER_START action', () => {
    const action = {
      type: ACTIONS.POST_REGISTER_START,
      data: {
        name: 'My Fullname',
        email: 'test@email.com',
        password: 'password123',
        confirmPass: 'password123'
      }
    };
    const assert = {
      isLoading: true
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given POST_REGISTER_SUCCESS action', () => {
    const action = {
      type: ACTIONS.POST_REGISTER_SUCCESS,
      data: {
        name: 'My Fullname',
        email: 'test@email.com',
        password: 'password123',
        confirmPass: 'password123'
      }
    };
    const assert = {
      isLoading: false,
      data: {
        name: 'My Fullname',
        email: 'test@email.com',
        password: 'password123',
        confirmPass: 'password123'
      }
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given POST_REGISTER_FAILED action', () => {
    const action = {
      type: ACTIONS.POST_REGISTER_FAILED,
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
