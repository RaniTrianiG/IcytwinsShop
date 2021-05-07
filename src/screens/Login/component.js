import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import FormLogin from '../../components/forms/Login';
import { SCREENS } from '../../constants';

import BackIcon from '../../assets/png/icon-back.png';

import styles from './styles';

class Login extends React.Component {
  _navigateToDashboard = () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: SCREENS.HOME,
                options: {
                  statusBar: {
                    style: 'dark',
                    backgroundColor: '#F9F9F9',
                    drawBehind: false
                  }
                }
              }
            }
          ],
          options: {
            topBar: {
              visible: false
            }
          }
        }
      }
    });
  };

  _handleSubmit = data => {
    const { actions } = this.props;

    actions.postLogin(data, this._navigateToDashboard);
  };

  _handleForget = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.FORGET,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  render() {
    return (
      <View style={styles.loginScreen}>
        <TouchableOpacity onPress={this._handleBack} style={styles.back}>
          <Image source={BackIcon} style={styles.img} />
        </TouchableOpacity>

        <Text style={styles.title}>Login</Text>

        <FormLogin onSubmit={this._handleSubmit} handleForget={this._handleForget} />
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
