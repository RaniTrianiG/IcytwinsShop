import React from 'react';
import { Field } from 'redux-form';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import InputField from '../../elements/TextInput';
import style from './styles';

const Component = props => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field component={InputField} name="name" placeholder="Nama" label="Nama" />
      <Field component={InputField} name="email" placeholder="Email" label="Email" />
      <Field component={InputField} name="phoneNum" placeholder="Nomor Telepon" label="Nomor Telepon" />
      <Field component={InputField} name="password" placeholder="Password" label="Password" secureTextEntry />
      <Field
        component={InputField}
        name="confirmPass"
        placeholder="Ulangi Password"
        label="Ulangi Password"
        secureTextEntry
      />
      <View style={style.buttonFooter}>
        <Button containerStyle={{ flex: 1, margin: 2 }} onPress={handleSubmit} title="Daftar" />
      </View>
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
