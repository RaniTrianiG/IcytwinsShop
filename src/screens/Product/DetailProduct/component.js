import React from 'react';
import { View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import DetailProductForm from '../../../components/forms/ViewProduct';

import styles from './styles';

class DetailProduct extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleSubmit = () => {};

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _handleDelete = () => {};

  render() {
    const { profile } = this.props;
    return (
      <View style={styles.container}>
        <Navbar fullName={profile?.data?.name ?? null} mail={profile?.data.email ?? null} initialName={profile?.data.name.split(" ").map((i) => i[0]).join("").substring(0, 2)}/>

        <View style={styles.content}>
          <DetailProductForm
            onSubmit={this._handleSubmit}
            handleBack={this._handleBack}
            handleDelete={this._handleDelete}
          />
        </View>
      </View>
    );
  }
}

DetailProduct.defaultProps = {
  componentId: 'detailproductscreen'
  // actions: {}
};

DetailProduct.propTypes = {
  componentId: PropTypes.string
  // actions: PropTypes.object
};

export default DetailProduct;
