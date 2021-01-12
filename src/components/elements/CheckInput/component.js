import React from 'react';
import { CheckBox } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import style from './styles';

const Component = props => {
  const {
    label,
    input: { onChange, placeholder, ...restInput },
    ...rest
  } = props;
  return (
    <View style={style.container}>
      <CheckBox
        containerStyle={style.checkboxContainer}
        title={label}
        checked={false}
        checkedColor="blue"
        {...restInput}
        {...rest}
      />
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired
};

export default Component;
