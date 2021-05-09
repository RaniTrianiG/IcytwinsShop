import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../components/elements/Navbar';
import { SCREENS } from '../../constants';

import AddAdminForm from '../../components/forms/AddAdmin';

import styles from './styles';

class AddCategory extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleGotoHome = () => {
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

    actions.postRegister({ ...data, password_confirmation: data.password, role: 1 }, this._handleGotoHome);
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
          <AddAdminForm onSubmit={this._handleSubmit} />
        </View>
      </View>
    );
  }
}

AddCategory.defaultProps = {
  actions: {},
  profile: {}
};

AddCategory.propTypes = {
  actions: PropTypes.object,
  profile: PropTypes.object
};

export default AddCategory;
