import React from 'react';
import { View } from 'react-native';

import { Field } from 'redux-form';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';

import style from './styles';

const Component = props => {
  const { handleSubmit } = props;

  return (
    <View>
      <View style={style.inputContainer}>
        <Field component={InputField} name="email" placeholder="Email" label="Email" />
        <Field
          component={InputField}
          name="password"
          placeholder="Password"
          label="Password"
          secureTextEntry
        />
      </View>

      <Button onPress={handleSubmit} title="Login" buttonStyle={style.button} titleStyle={style.buttonText} />
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
