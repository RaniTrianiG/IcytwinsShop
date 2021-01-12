import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import { SCREENS } from '../../constants';
import ExampleImage from '../../assets/svg/login-illustration.svg';

class ExamplePage extends React.Component {
  _handleNavigate = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: {
        name: SCREENS.LOGIN
      }
    });
  };

  render() {
    return (
      <View style={styles.loginScreen}>
        <ExampleImage width="100%" height="50%" />
        <Text style={{ marginRight: 5, fontSize: 12 }}>Example Page</Text>
        <Button onPress={this._handleNavigate} title="Go To Auth Page" />
      </View>
    );
  }
}

ExamplePage.defaultProps = {
  componentId: 'exampleScreen'
};

ExamplePage.propTypes = {
  componentId: PropTypes.string
};

export default ExamplePage;
