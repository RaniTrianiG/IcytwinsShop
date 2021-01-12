import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import renderer from 'react-test-renderer';
import Register from '../component';

jest.mock('@react-native-community/netinfo');
jest.mock('react-native-navigation');

describe('Register Tests', () => {
  const mockStore = configureMockStore([thunk]);
  let initialState;
  let store;
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      actions: {
        postRegister: jest.fn()
      },
      isLoading: false
    };
    initialState = {
      form: formReducer
    };
    wrapper = shallow(<Register {...props} />);
  });

  afterEach(() => {
    store.clearActions();
  });

  it('renders correctly with initial state', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Register {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Simulate Form Submission', () => {
    const spy = jest.spyOn(wrapper.instance(), '_handleSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('ReduxForm').simulate('submit');
    expect(spy).toBeCalled();
  });

  it('Simulate modal visibility', () => {
    const spy = jest.spyOn(wrapper.instance(), '_handleModal');
    wrapper.instance().forceUpdate();
    wrapper.find('ReactNativeModal').simulate('backdropPress');
    expect(spy).toBeCalled();
  });

  it('renders correctly with Modal state', () => {
    wrapper.setState({ isModalVisible: true });
    expect(wrapper).toMatchSnapshot();
  });
});
