import 'react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import Home from '../index';

jest.mock('../action');
jest.mock('../component');

describe('Register Index', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      home: {}
    };
    const assert = {
      isLoading: false,
      error: null,
      data: null
    };
    initialState.home = {
      isLoading: false,
      data: null,
      error: null
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Home store={store} />).dive();
    expect(wrapper.props()).toMatchObject(assert);
  });
});
