import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import FormForget from '../../components/forms/Forget';

import BackIcon from '../../assets/png/icon-back.png';

import styles from './styles';

class Forget extends React.Component {
  _handleSubmit = data => {
    const { actions } = this.props;

    actions.postForget(data.username, this._handleBack);
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  render() {
    return (
      <View style={styles.loginScreen}>
        <TouchableOpacity style={styles.back} onPress={this._handleBack}>
          <Image source={BackIcon} style={styles.img} />
        </TouchableOpacity>

        <Text style={styles.title}>Forget Password</Text>

        <FormForget onSubmit={this._handleSubmit} />
      </View>
    );
  }
}

Forget.defaultProps = {
  componentId: 'loginscreen',
  actions: {}
};

Forget.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default Forget;
