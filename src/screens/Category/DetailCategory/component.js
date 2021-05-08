import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import DetailCategoryForm from '../../../components/forms/ViewCategory';

import styles from './styles';

class DetailCategory extends React.Component {
  _handleSubmit = data => {
    const { actions, selectedData } = this.props;
    const { id, description } = selectedData;

    actions.updateData(id, { name: data.category, description }, actions.getData(this._handleBack));
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _handleDelete = () => {
    const { actions, selectedData } = this.props;
    const { id } = selectedData;

    actions.deleteData(id, actions.getData(this._handleBack));
  };

  render() {
    const { selectedData } = this.props;

    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <DetailCategoryForm
            data={selectedData}
            onSubmit={this._handleSubmit}
            handleBack={this._handleBack}
            handleDelete={this._handleDelete}
          />
        </View>
      </View>
    );
  }
}

DetailCategory.defaultProps = {
  componentId: 'detailcategoryscreen',
  selectedData: {},
  actions: {}
};

DetailCategory.propTypes = {
  componentId: PropTypes.string,
  selectedData: PropTypes.object,
  actions: PropTypes.object
};

export default DetailCategory;
