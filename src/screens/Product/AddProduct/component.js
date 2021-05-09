import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';
import { SCREENS } from '../../../constants';

import AddProductForm from '../../../components/forms/AddProduct';

import styles from './styles';

class AddProduct extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleViewDetail = () => () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.HOME,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  _handleSubmit = () => {};

  _renderNames = data => (
    <View style={styles.tableRow}>
      <Text style={styles.tableText}>{data}</Text>
    </View>
  );

  _renderActions = (_, index) => (
    <TouchableOpacity style={styles.tableRow} onPress={this._handleViewDetail(index)}>
      <Text style={[styles.tableText, { textDecorationLine: 'underline' }]}>View</Text>
    </TouchableOpacity>
  );

  _renderCustom = (cellData, cellIndex, index) => {
    if (cellIndex === 1) {
      return this._renderNames(cellData, index);
    }

    if (cellIndex === 4) {
      return this._renderActions(cellData, index);
    }

    return cellData;
  };

  render() {
    const { profile } = this.props;

    return (
      <View style={styles.container}>
        <Navbar
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
          <AddProductForm onSubmit={this._handleSubmit} />
        </View>
      </View>
    );
  }
}

AddProduct.defaultProps = {
  componentId: 'addcategoryscreen',
  profile: {},
  actions: {}
};

AddProduct.propTypes = {
  componentId: PropTypes.string,
  profile: PropTypes.object,
  actions: PropTypes.object
};

export default AddProduct;
