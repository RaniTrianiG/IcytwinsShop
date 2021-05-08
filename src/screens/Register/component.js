import React from 'react';
import { View, Text } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import FormRegister from '../../components/forms/Register';
import { SCREENS } from '../../constants';

import styles from './styles';

class Login extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.logout();
  }

  _handleSubmit = data => {
    const { actions } = this.props;

    actions.postRegister(
      {
        ...data,
        password_confirmation: data.password,
        username: data.name.replace(/ /g, '').toLowerCase(),
        role: 0,
        phone_number: ''
      },
      this._handleLogin
    );
  };

  _handleLogin = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.LOGIN,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.loginScreen}>
        <Text style={styles.title}>Sign Up</Text>

        <FormRegister onSubmit={this._handleSubmit} handleLogin={this._handleLogin} />
      </View>
    );
  }
}

Login.defaultProps = {
  componentId: 'registerscreen',
  actions: {}
};

Login.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default Login;
