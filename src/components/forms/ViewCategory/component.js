import React from 'react';
import { View } from 'react-native';

import { Field } from 'redux-form';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';

import style from './styles';

const Component = props => {
  const { data, handleSubmit, handleBack, handleDelete } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={style.inputContainer}>
        <Field
          component={InputField}
          name="category"
          placeholder={data?.name ?? 'Category Name'}
          label="Category Name"
        />
      </View>

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

Component.defaultProps = {
  data: {}
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  data: PropTypes.object
};

export default Component;
