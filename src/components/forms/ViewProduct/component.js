import React from 'react';
import { View, ScrollView } from 'react-native';

import { Field } from 'redux-form';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';

import style from './styles';

const Component = props => {
  const { handleSubmit, handleBack, handleDelete } = props;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.inputContainer}>
        <Field
          component={InputField}
          name="product_name"
          input={{ placeholder: 'Product Name' }}
          label="Product Name"
        />
        <Field component={InputField} name="price" label="Price" input={{ placeholder: 'Price' }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, marginRight: 15 }}>
            <Field component={InputField} name="stock" input={{ placeholder: 'Stock' }} label="Stock" />
          </View>
          <View style={{ flex: 1 }}>
            <Field
              component={InputField}
              name="discount"
              input={{ placeholder: 'Discount' }}
              label="Discount"
            />
          </View>

          <View style={{ flex: 1 }} />
        </View>
        <Field
          component={InputField}
          name="description"
          label="Description"
          input={{
            placeholder: 'Description',
            multiline: true,
            inputStyle: { height: 150, textAlignVertical: 'top' }
          }}
        />
      </ScrollView>

      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <View style={{ flex: 2 }}>
          <Button
            onPress={handleSubmit}
            title="Update"
            buttonStyle={style.button}
            titleStyle={style.buttonText}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={handleBack}
            title="Back"
            buttonStyle={style.button}
            titleStyle={style.buttonText}
          />
        </View>

        <Button
          onPress={handleDelete}
          title="Delete"
          buttonStyle={style.button}
          titleStyle={style.buttonText}
        />
      </View>
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
};

export default Component;
