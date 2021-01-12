import React from 'react';
import { Input as TextInput } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import style from './styles';

const Component = ({
  label,
  meta: { touched, error },
  input: { onChange, placeholder, ...restInput },
  ...rest
}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        inputContainerStyle={style.inputContainer}
        errorMessage={error && touched ? error : null}
        errorStyle={style.errorMessage}
        // leftIcon={<Icon name="user" size={24} color="black" />}
        onChangeText={onChange}
        {...restInput}
        {...rest}
      />
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
};

export default Component;
