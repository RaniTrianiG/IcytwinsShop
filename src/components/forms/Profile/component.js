import React from 'react';
import { View, Text } from 'react-native';

import { Field } from 'redux-form';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import InputField from '../../elements/TextInput';

import styles from './styles';

const Component = props => {
  const { handleSubmit } = props;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Field component={InputField} name="name" placeholder="Full Name" label="Full Name" />
        <Field component={InputField} name="email" placeholder="Email" label="Email" disabled />
        <View style={styles.button}>
          <Text style={styles.buttonText}>Password</Text>
        </View>
        <View style={styles.viewChange}>
          <Text style={styles.textChange}>Change</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Field
            component={InputField}
            name="old_password"
            placeholder="Old Password"
            label="Old Password"
            type="password"
            secureTextEntry
          />
          <Field
            component={InputField}
            name="password"
            placeholder="New Password"
            label="New Password"
            type="password"
            secureTextEntry
          />
        </View>
        <Button
          onPress={handleSubmit}
          title="UPDATE PROFILE"
          buttonStyle={styles.buttons}
          titleStyle={styles.buttonTexts}
        />
      </View>
    </View>
  );
};

Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Component;
