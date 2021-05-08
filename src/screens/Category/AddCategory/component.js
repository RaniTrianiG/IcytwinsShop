import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import AddCategoryForm from '../../../components/forms/AddCategory';

import styles from './styles';

class AddCategory extends React.Component {
  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _handleSubmit = data => {
    const { actions } = this.props;

    actions.addData({ name: data.category, description: '' }, actions.getData(this._handleBack));
  };

  render() {
    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <AddCategoryForm onSubmit={this._handleSubmit} />
        </View>
      </View>
    );
  }
}

AddCategory.defaultProps = {
  componentId: 'addcategoryscreen',
  actions: {}
};

AddCategory.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default AddCategory;
