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
        <Field component={InputField} name="product_name" placeholder="Product Name" label="Product Name" />
        <Field component={InputField} name="price" label="Price" placeholder="Price" />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, marginRight: 15 }}>
            <Field component={InputField} name="stock" placeholder="Stock" label="Stock" />
          </View>
          <View style={{ flex: 1 }}>
            <Field component={InputField} name="discount" placeholder="Discount" label="Discount" />
          </View>

          <View style={{ flex: 1 }} />
        </View>
        <Field
          component={InputField}
          name="description"
          label="Description"
          placeholder="Description"
          multiline
          inputStyle={{ height: 150, textAlignVertical: 'top' }}
        />
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
