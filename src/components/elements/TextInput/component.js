import React from 'react';
import { View, Text } from 'react-native';
import { Input as TextInput } from 'react-native-elements';

import PropTypes from 'prop-types';

import style from './styles';

const Component = ({
  label,
  meta: { touched, error },
  input: { onChange, inputStyle, ...restInput },
  ...rest
}) => {
  return (
    <View style={style.container}>
      <TextInput
        label={label}
        inputContainerStyle={style.input}
        onChangeText={onChange}
        containerStyle={[
          style.inputContainer,
          error && touched && { borderColor: '#DB3022', marginBottom: 0 }
        ]}
        inputStyle={[style.innerInput, inputStyle]}
        labelStyle={[style.label, error && touched && { color: '#DB3022' }]}
        {...restInput}
        {...rest}
      />
      {error && touched && (
        <Text style={[style.label, style.error, error && touched && { marginBottom: 8 }]}>
          {error && touched ? error : null}
        </Text>
      )}
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
};

export default Component;
