import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from '../action';
import { ACTIONS } from '../../../constants';

jest.mock('jwt-decode');
jest.useFakeTimers();

describe('Register actions', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  const body = {
    name: 'My Fullname',
    email: 'test@email.com',
    password: 'password123',
    confirmPass: 'password123'
  };
  let mockResponse;
  beforeEach(() => {
    store.clearActions();
  });

  it('Retrieve data when POST_REGISTER_SUCCESS', async () => {
    mockResponse = {
      success: true,
      data: null,
      message: 'Successfully register',
      code: 200
    };
    axios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));
    const assert = [
      { type: ACTIONS.POST_REGISTER_START, data: undefined },
      { type: ACTIONS.POST_REGISTER_SUCCESS, data: mockResponse }
    ];
    await store.dispatch(actions.postRegister(body, jest.fn()));
    jest.runAllTimers();
    expect(store.getActions()).toEqual(assert);
  });

  it('Dispatches error with message account not registered', async () => {
    mockResponse.message = 'Account not registered';
    mockResponse.code = 404;
    mockResponse.success = false;
    axios.post.mockImplementation(() => Promise.reject(mockResponse));
    await store.dispatch(actions.postRegister(body, jest.fn()));
    const assert = [
      { type: 'POST_REGISTER_START' },
      {
        type: 'POST_REGISTER_FAILED',
        error: mockResponse
      }
    ];
    expect(store.getActions()).toEqual(assert);
  });
});
