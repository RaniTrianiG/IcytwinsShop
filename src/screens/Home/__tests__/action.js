import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../action';
import { ACTIONS } from '../../../constants';
import { AXIOS } from '../../../configs';

jest.mock('jwt-decode');
jest.useFakeTimers();

describe('Home actions', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  beforeEach(() => {
    store.clearActions();
  });

  it('Retrieve data when GET_HOME_SUCCESS', async () => {
    const mockResponse = {
      success: true,
      data: [],
      message: 'Successfully get Home data',
      code: 200
    };
    AXIOS.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
    const assert = [{ type: ACTIONS.GET_HOME_START }, { type: ACTIONS.GET_HOME_SUCCESS, data: mockResponse }];
    await store.dispatch(actions.getHomeData());
    jest.runAllTimers();
    expect(store.getActions()).toEqual(assert);
  });

  it('Retrieve data when GET_HOME_FAILED', async () => {
    const mockResponse = {
      success: true,
      data: [],
      message: 'Failed get Home data',
      code: 200
    };
    AXIOS.get.mockImplementationOnce(() => Promise.reject(mockResponse));
    const assert = [{ type: ACTIONS.GET_HOME_START }];
    await store.dispatch(actions.getHomeData());
    jest.runAllTimers();
    expect(store.getActions()).toEqual(assert);
  });
});
