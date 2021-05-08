import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import DetailCategoryForm from '../../../components/forms/ViewCategory';

import styles from './styles';

class DetailCategory extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

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
    const { selectedData, profile } = this.props;

    return (
      <View style={styles.container}>
        <Navbar fullName={profile?.data?.name ?? null} mail={profile?.data.email ?? null} initialName={profile?.data.name.split(" ").map((i) => i[0]).join("").substring(0, 2)} />

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
