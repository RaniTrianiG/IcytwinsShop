import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

import Icon from '../../../assets/png/img-bags.png';

import styles from './styles';
import { SCREENS } from '../../../constants';

class SuccessCheckout extends React.Component {
  _handleTabBtnPress = ({ route }) => () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: route,
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
  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.USER_HOME,
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

    const iconSize = Image.resolveAssetSource(Icon);

    return (
      <View style={styles.container}>

        <View style={styles.content}>
          <View>
            <View style={{ width: 250, aspectRatio: iconSize.width / iconSize.height, marginBottom: 20, alignSelf: 'center' }}>
              <Image source={Icon} style={{ width: null, height: null, flex: 1, resizeMode: 'contain', padding: 10 }} />
            </View>
            <Text style={{ fontSize: 18, textAlign: 'center', color: '#222222', fontWeight: 'bold', fontFamily: 'serif', padding: 10 }}>Success!</Text>
            <Text style={{ fontSize: 14, textAlign: 'center', fontFamily: 'serif', width: 260, alignSelf: 'center', padding: 10 }}>
              Your order will be delivered soon.
              Thank you for order at @icytwins.beauty!
              Please check your email to complete the process!</Text>

            <TouchableOpacity
              onPress={this._handleBack}
              style={{
                backgroundColor: '#DB3022',
                width: '65%',
                paddingVertical: 8,
                borderRadius: 3,
                marginTop: 20,
                height: 45,
                borderRadius: 20, alignSelf: 'center',
               top: 30
              }}
            >
              <Text style={{ textAlign: 'center', color: '#fff', textAlign: 'center', fontFamily: 'serif', fontSize: 13, marginTop: 4 }}>CONTINUE SHIPPING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

SuccessCheckout.defaultProps = {
  profile: {}
};

SuccessCheckout.propTypes = {
  profile: PropTypes.object
};

export default SuccessCheckout;
