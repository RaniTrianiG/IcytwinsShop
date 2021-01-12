import React from 'react';
import { Field } from 'redux-form';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import InputField from '../../elements/TextInput';
import CheckInput from '../../elements/CheckInput';
import style from './styles';

const Component = props => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field component={InputField} name="username" placeholder="Email" label="Email" />
      <Field component={InputField} name="password" placeholder="Password" label="Password" secureTextEntry />
      <View style={style.checkboxContainer}>
        <Field component={CheckInput} name="remember" label="Ingat Saya" />
        <Text>Lupa Password?</Text>
      </View>
      <Button onPress={handleSubmit} title="Masuk" style={{ color: 'red' }} />
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
