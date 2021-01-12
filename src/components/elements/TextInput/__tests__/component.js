import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../component';
// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const props = {
    meta: { touched: false, error: null },
    input: { onChange: jest.fn(), placeholder: 'placeholder' },
    label: 'some Label'
  };
  const wrapper = shallow(<TextInput {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly after touched and get some error', () => {
  const props = {
    meta: { touched: true, error: 'something wrong' },
    input: { onChange: jest.fn(), placeholder: 'placeholder' },
    label: 'some Label'
  };
  const wrapper = shallow(<TextInput {...props} />);
  expect(wrapper).toMatchSnapshot();
});
