import 'react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import Login from '../index';

jest.mock('../action');
jest.mock('../component');

describe('Login Index', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      login: {}
    };
    const assert = {
      isLoading: false,
      error: null,
      data: null
    };
    initialState.login = {
      isLoading: false,
      data: null,
      error: null
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper.props()).toMatchObject(assert);
  });
});
