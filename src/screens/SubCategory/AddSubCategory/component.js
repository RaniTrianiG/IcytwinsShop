import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import AddSubCategoryForm from '../../../components/forms/AddSubCategory';

import styles from './styles';

class AddSubCategory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <AddSubCategoryForm />
        </View>
      </View>
    );
  }
}

AddSubCategory.defaultProps = {
  componentId: 'addsubcategoryscreen',
  actions: {}
};

AddSubCategory.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default AddSubCategory;
