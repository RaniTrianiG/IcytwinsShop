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
        <Field component={InputField} name="category" placeholder="Category Name" label="Category Name" />
      </ScrollView>

      <Button
        onPress={handleSubmit}
        title="Submit"
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
