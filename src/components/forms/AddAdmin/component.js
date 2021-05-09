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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.inputContainer}>
        <Field component={InputField} name="username" placeholder="Username" label="Username" />
        <Field component={InputField} name="name" placeholder="Admin Name" label="Admin Name" />
        <Field component={InputField} name="email" placeholder="Admin Email" label="Admin Email" />
        <Field
          component={InputField}
          name="phone_number"
          placeholder="Admin Phone Number"
          label="Admin Phone Number"
        />
        <Field component={InputField} name="password" placeholder="Admin Password" label="Admin Password" />
      </ScrollView>

      <Button
        onPress={handleSubmit}
        title="Create"
        buttonStyle={style.button}
        titleStyle={style.buttonText}
      />
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
