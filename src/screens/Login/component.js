import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import FormLogin from '../../components/forms/Login';
import { SCREENS } from '../../constants';
import styles from './styles';
import Logo from '../../assets/svg/login-illustration.svg';

class Login extends React.Component {
  _handleSubmit = data => {
    const { actions } = this.props;
    actions.postLogin(data);
  };

  _handleRegister = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: {
        name: SCREENS.REGISTER,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#f2f2f2'
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.loginScreen}>
        <View
          style={{
            height: 250,
            alignItems: 'center'
          }}
        >
          <Logo width="100%" height="100%" />
        </View>
        <FormLogin onSubmit={this._handleSubmit} />
        <View style={styles.footer}>
          <Text>Belum punya akun, </Text>
          <Text onPress={this._handleRegister} style={styles.anchor}>
            Daftar disini
          </Text>
        </View>
      </View>
    );
  }
}

Login.defaultProps = {
  componentId: 'loginscreen',
  actions: {}
};

Login.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default Login;
