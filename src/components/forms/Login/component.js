import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Field } from 'redux-form';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';
import Arrow from '../../../assets/png/icon-arrow.png';

import style from './styles';

const Component = props => {
  const { handleSubmit, handleForget } = props;

  return (
    <View>
      <ScrollView contentContainerStyle={style.inputContainer}>
        <Field component={InputField} name="email" placeholder="Email" label="Email" />
        <Field
          component={InputField}
          name="password"
          placeholder="Password"
          label="Password"
          secureTextEntry
        />
      </ScrollView>

      <View style={style.forget}>
        <Text style={style.forgetText}>Forgot your password?</Text>
        <TouchableOpacity onPress={handleForget} style={style.forgetBtn}>
          <Image style={style.forgetBtnImg} source={Arrow} />
        </TouchableOpacity>
      </View>

      <Button onPress={handleSubmit} title="Login" buttonStyle={style.button} titleStyle={style.buttonText} />
    </View>
  );
};

Component.defaultProps = {
  handleForget: () => {}
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleForget: PropTypes.func
};

export default Component;
