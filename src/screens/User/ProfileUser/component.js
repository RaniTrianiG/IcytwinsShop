import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Navigation } from 'react-native-navigation';

// import PropTypes from 'prop-types';

// import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';
import { ToastAndroid } from 'react-native';
import FormProfile from '../../../components/forms/Profile';

import BackIcon from '../../../assets/png/icon-back.png';

import IconHome from '../../../assets/png/icon-home.png';
import IconBag from '../../../assets/png/icon-bag.png';
import IconUser from '../../../assets/png/icon-user-red.png';
import IconHistory from '../../../assets/png/icon-history.png';

import { SCREENS } from '../../../constants';

import styles from './styles';

class ProfileUser extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleSubmit = data => {
    const { actions } = this.props;
    actions.postUpdateProfile(data, this._handleFinishSubmit);
  };

  _handleFinishSubmit = res => {
    ToastAndroid.showWithGravityAndOffset('Profile updated!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
  };

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

  render() {
    const { profile } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity
              onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME })}
              style={styles.back}
            >
              <Image source={BackIcon} style={styles.img} />
            </TouchableOpacity>

            <Text style={styles.h1}>Settings</Text>
            <Text style={styles.title}>Personal Information</Text>

            <FormProfile
              initialValues={profile.data}
              onSubmit={this._handleSubmit}
              handleForget={this._handleForget}
            />
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingHorizontal: 26,
            justifyContent: 'space-evenly',
            paddingVertical: 12,
            borderRadius: 15
          }}
        >
          <TouchableOpacity
            onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconHome}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handleTabBtnPress({ route: SCREENS.USER_CART })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} source={IconBag} />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Bag</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handleTabBtnPress({ route: SCREENS.HISTORY })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconHistory}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled style={{ alignItems: 'center' }}>
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconUser}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10, color: '#DB3022' }}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ProfileUser.defaultProps = {
  componentId: 'profileuserscreen',
  actions: {}
};

ProfileUser.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default ProfileUser;
