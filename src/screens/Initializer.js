import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: 70
  }
});
class Initializer extends Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
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
                      backgroundColor: 'white',
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
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={25} />
      </View>
    );
  }
}

export default Initializer;
