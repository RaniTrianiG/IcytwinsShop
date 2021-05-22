import React from 'react';
import { View, ScrollView } from 'react-native';

import { Field } from 'redux-form';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';

import style from './styles';

const Component = props => {
  const { handleSubmit } = props;

  return (
    <View>
      <ScrollView contentContainerStyle={style.inputContainer}>
        <Field component={InputField} name="otp" placeholder="OTP" label="OTP" />
      </ScrollView>

      <Button onPress={handleSubmit} title="Send" buttonStyle={style.button} titleStyle={style.buttonText} />
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
