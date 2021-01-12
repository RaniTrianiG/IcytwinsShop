import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { API } from 'react-native-dotenv';
import styles from './styles';
import { SCREENS } from '../../constants';
import { Button } from 'react-native';

class ExamplePage extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getHomeData();
  }

  navigateToAuth = () => {
    const { componentId} = this.props;
    Navigation.push(componentId, {
      component: {
        name: SCREENS.EXAMPLE,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#f2f2f2'
          }
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is home screen with api {API}</Text>
        <Button onPress={this.navigateToAuth}
        title="Go To Example"/>
      </View>
    );
  }
}

ExamplePage.defaultProps = {
  actions: {}
};

ExamplePage.propTypes = {
  actions: PropTypes.object
};

export default ExamplePage;
