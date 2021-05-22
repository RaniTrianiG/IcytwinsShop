import React from 'react';
import { View, Text, ScrollView } from 'react-native';

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
        <Text style={style.instruction}>
          Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <Field
          autoCapitalize="none"
          component={InputField}
          name="username"
          placeholder="Email"
          label="Email"
        />
      </ScrollView>

      <Button onPress={handleSubmit} title="Send" buttonStyle={style.button} titleStyle={style.buttonText} />
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
