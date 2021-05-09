import React from 'react';
import { Field } from 'redux-form';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';
import Arrow from '../../../assets/png/icon-arrow.png';

import style from './styles';

const Component = props => {
  const { handleSubmit, handleLogin } = props;
  return (
    <View>
      <ScrollView contentContainerStyle={style.inputContainer}>
        <Field component={InputField} name="name" placeholder="Nama" label="Nama" />
        <Field component={InputField} name="email" placeholder="Email" label="Email" />
        <Field
          component={InputField}
          name="password"
          placeholder="Password"
          label="Password"
          secureTextEntry
        />
      </ScrollView>

      <View style={style.register}>
        <Text style={style.registerText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin} style={style.registerBtn}>
          <Image style={style.registerBtnImg} source={Arrow} />
        </TouchableOpacity>
      </View>

      <Button
        onPress={handleSubmit}
        title="Sign Up"
        buttonStyle={style.button}
        titleStyle={style.buttonText}
      />
    </View>
  );
};

Component.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
