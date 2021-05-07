import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../constants';

import logo from '../assets/png/logo.png';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginVertical: 30
  },
  footer: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 23
  },
  icon: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null
  },
  logo: {
    aspectRatio: 1,
    width: 132
  }
});
class Initializer extends Component {
  async _checkCredential() {
    const token = await AsyncStorage.getItem('user-token');

    return Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: token ? SCREENS.HOME : SCREENS.REGISTER,
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
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.logo}>
            <Image source={logo} style={styles.icon} onLoadEnd={this._checkCredential} />
          </View>
        </View>

        <Text style={styles.footer}>versi 0.0.1</Text>
      </View>
    );
  }
}

export default Initializer;
