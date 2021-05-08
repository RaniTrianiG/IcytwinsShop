import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { Button } from 'react-native-elements';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';
import FormProfile from '../../components/forms/Profile';

import PropTypes from 'prop-types';

import Navbar from '../../components/elements/Navbar';
import { SCREENS } from '../../constants';

import styles from './styles';

class Profile extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }
  
  _handleSubmit = () => {
    handleNavigate({ route: SCREENS.PRODUCT });
  }

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
        <Navbar fullName={profile?.data?.name ?? null} mail={profile?.data.email ?? null} initialName={profile?.data?.name?.split(" ").map((i) => i[0]).join("").substring(0, 2) ?? null} />

        <View style={styles.content}>
          <Text style={styles.h1}>Settings</Text>
          <Text style={styles.title}>Personal Information</Text>
          
          <FormProfile onSubmit={this._handleSubmit} handleForget={this._handleForget} />
        </View>
      </View>
    );
  }
}

Profile.defaultProps = {
  componentId: 'profilescreen'
  // actions: {}
};

Profile.propTypes = {
  componentId: PropTypes.string
  // actions: PropTypes.object
};

export default Profile;
