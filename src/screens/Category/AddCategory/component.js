import React from 'react';
import { View } from 'react-native';

// import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import AddCategoryForm from '../../../components/forms/AddCategory';

import styles from './styles';

class AddCategory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <AddCategoryForm />
        </View>
      </View>
    );
  }
}

AddCategory.defaultProps = {
  // actions: {}
};

AddCategory.propTypes = {
  // actions: PropTypes.object
};

export default AddCategory;
