import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import renderer from 'react-test-renderer';
import Login from '../component';

jest.mock('@react-native-community/netinfo');
jest.mock('react-native-navigation');

describe('Login Tests', () => {
  const mockStore = configureMockStore([thunk]);
  let initialState;
  let store;
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      actions: {
        postLogin: jest.fn(),
        autoLogin: jest.fn()
      },
      isLoading: false
    };
    initialState = {
      form: formReducer
    };
    wrapper = shallow(<Login {...props} />);
  });

  afterEach(() => {
    store.clearActions();
  });

  it('renders correctly with initial state', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test go to register screen action', () => {
    const spy = jest.spyOn(wrapper.instance(), '_handleRegister');
    wrapper.instance().forceUpdate();
    wrapper
      .find('Text')
      .at(1)
      .simulate('press');
    expect(spy).toBeCalled();
  });

  it('test simulate submit action', () => {
    const spy = jest.spyOn(wrapper.instance(), '_handleSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('ReduxForm').simulate('submit');
    expect(spy).toBeCalled();
  });
});
