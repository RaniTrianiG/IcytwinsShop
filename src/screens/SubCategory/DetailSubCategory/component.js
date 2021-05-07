import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';
import DetailSubCategoryForm from '../../../components/forms/ViewSubCategory';

import styles from './styles';

class DetailSubCategory extends React.Component {
  _handleSubmit = () => {};

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _handleDelete = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <DetailSubCategoryForm
            handleSubmit={this._handleSubmit}
            handleBack={this._handleBack}
            handleDelete={this._handleDelete}
          />
        </View>
      </View>
    );
  }
}

DetailSubCategory.defaultProps = {
  componentId: 'detailsubcategoryscreen'
  // actions: {}
};

DetailSubCategory.propTypes = {
  componentId: PropTypes.string
  // actions: PropTypes.object
};

export default DetailSubCategory;
