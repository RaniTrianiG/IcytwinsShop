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
    <View style={{ flex: 1 }}>
      <View style={style.inputContainer}>
        <Field component={InputField} name="category" placeholder="Category Name" label="Category Name" />
        <Field
          component={InputField}
          name="parent_category"
          placeholder="Parent Category"
          label="Parent Category"
        />
      </View>

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
