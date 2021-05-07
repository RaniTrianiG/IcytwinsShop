import React from 'react';
import { Button } from 'react-native';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { reducer as formReducer } from 'redux-form';

import renderer from 'react-test-renderer';
import Home from '../component';

jest.mock('@react-native-community/netinfo');
jest.mock('react-native-navigation');

describe('Home Tests', () => {
  const mockStore = configureMockStore([thunk]);
  let initialState;
  let store;
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      actions: {
        getHomeData: jest.fn()
      },
      isLoading: false
    };
    initialState = {
      form: formReducer
    };
    wrapper = shallow(<Home {...props} />);
  });

  afterEach(() => {
    store.clearActions();
  });

  it('renders correctly with initial state', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test home button', () => {
    const spy = jest.spyOn(wrapper.instance(), 'navigateToAuth');
    wrapper.instance().forceUpdate();
    wrapper
      .find(Button)
      .at(0)
      .props()
      .onPress();
    expect(spy).toBeCalled();
  });
});
