import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import AddCategoryForm from '../../../components/forms/AddCategory';

import styles from './styles';

class AddCategory extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }
  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _handleSubmit = data => {
    const { actions } = this.props;

    actions.addData({ name: data.category, description: '' }, actions.getData(this._handleBack));
  };

  render() {
    const { profile } = this.props;
    return (
      <View style={styles.container}>
        <Navbar fullName={profile?.data?.name ?? null} mail={profile?.data.email ?? null} initialName={profile?.data?.name?.split(" ").map((i) => i[0]).join("").substring(0, 2) ?? null} />

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
