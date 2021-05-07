import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from '../action';
import { ACTIONS } from '../../../constants';

jest.mock('jwt-decode');
jest.useFakeTimers();

describe('Login actions', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  const body = {
    username: 'user@email.com',
    password: 'password123'
  };
  let mockResponse;
  beforeEach(() => {
    store.clearActions();
  });

  it('Retrieve data when POST_LOGIN_SUCCESS', async () => {
    mockResponse = {
      success: true,
      data: {
        token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9'
      },
      message: 'Successfully Login',
      code: 200
    };
    axios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));
    const assert = [
      { type: ACTIONS.POST_LOGIN_START, data: undefined },
      { type: ACTIONS.POST_LOGIN_SUCCESS, data: undefined }
    ];
    await store.dispatch(actions.postLogin(body));
    jest.runAllTimers();
    expect(store.getActions()).toEqual(assert);
  });

  it('Dispatches error with message account not registered', async () => {
    mockResponse.message = 'Account not registered';
    axios.post.mockImplementation(() => Promise.reject(mockResponse));
    await store.dispatch(actions.postLogin(body));
    const assert = [
      { type: 'POST_LOGIN_START' },
      {
        type: 'POST_LOGIN_FAILED',
        error: {
          success: true,
          data: { token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9' },
          message: 'Account not registered',
          code: 200
        }
      }
    ];
    expect(store.getActions()).toEqual(assert);
  });

  it('Dispatched auto login ', () => {
    // store.dispatch(actions.autoLogin('token'));
    const assert = [{ type: 'POST_LOGIN_SUCCESS' }];
    expect(store.getActions()).toEqual(assert);
  });
});
