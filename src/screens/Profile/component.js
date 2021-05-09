import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import FormProfile from '../../components/forms/Profile';

import Navbar from '../../components/elements/Navbar';

import styles from './styles';

class Profile extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleSubmit = data => {
    const { actions } = this.props;
    actions.postUpdateProfile(data, this._handleFinishSubmit);
  };

  _handleFinishSubmit = () => {
    ToastAndroid.showWithGravityAndOffset('Profile updated!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
  };

  handleNavigate = ({ route }) => () => {
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
        <Navbar
          role={profile?.data?.role}
          fullName={profile?.data?.name ?? null}
          mail={profile?.data.email ?? null}
          initialName={
            profile?.data?.name
              ?.split(' ')
              .map(i => i[0])
              .join('')
              .substring(0, 2) ?? null
          }
        />

        <View style={styles.content}>
          <Text style={styles.h1}>Settings</Text>
          <Text style={styles.title}>Personal Information</Text>

          <FormProfile
            initialValues={profile.data}
            onSubmit={this._handleSubmit}
            handleForget={this._handleForget}
          />
        </View>
      </View>
    );
  }
}

Profile.defaultProps = {
  actions: {},
  profile: {}
};

Profile.propTypes = {
  actions: PropTypes.object,
  profile: PropTypes.object
};

export default Profile;
