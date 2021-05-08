/* eslint-disable camelcase */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { API } from 'react-native-dotenv';

import PropTypes from 'prop-types';

import BackIcon from '../../../assets/png/icon-back.png';

import styles from './styles';

class Detail extends React.Component {
  _navigateToHome = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _renderItem = () => (
    <TouchableOpacity
      style={{ width: 150, aspectRatio: 1, backgroundColor: '#aaa', marginRight: 16, borderRadius: 5 }}
    >
      <View>
        <Image />
      </View>
    </TouchableOpacity>
  );

  _addToCart = () => {
    const { actions, selectedProduct } = this.props;

    actions.addToCart({ product_id: selectedProduct.id, qty: 1 }, () => {
      ToastAndroid.showWithGravityAndOffset(
        'Success Add To Cart',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    });
  };

  render() {
    const { selectedProduct } = this.props;
    const thumbnail = selectedProduct.imgs.find(({ is_thumbnail }) => is_thumbnail);
    const imgUrl = `${API}/storage/${selectedProduct.id}/${thumbnail?.img ?? ''}`;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView nestedScrollEnabled={true}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 8, paddingTop: 8, paddingBottom: 12 }}>
              <TouchableOpacity onPress={this._navigateToHome} style={{ width: 24, aspectRatio: 1 }}>
                <Image
                  source={BackIcon}
                  style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  lineHeight: 22,
                  flex: 1,
                  textAlign: 'center',
                  paddingHorizontal: 10
                }}
              >
                {selectedProduct?.name ?? ''}
              </Text>
              <View style={{ width: 24 }} />
            </View>

            <View
              style={{
                width: '100%',
                height: 420,
                backgroundColor: '#aaaaaa'
              }}
            >
              <Image
                source={{ uri: imgUrl }}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>

            <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, fontSize: 24, fontWeight: 'bold' }}>
                  {selectedProduct?.name ?? ''}
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{selectedProduct?.price ?? '-'}</Text>
              </View>
              <Text style={{ fontWeight: '300', color: '#9B9B9B', fontSize: 11 }}>Short black dress</Text>
              <Text style={{ fontSize: 14, marginTop: 8 }}>{selectedProduct?.description ?? ''}</Text>
            </View>
            <View />
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingVertical: 20
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#DB3022',
              paddingVertical: 14,
              borderRadius: 50
            }}
            onPress={this._addToCart}
          >
            <Text
              style={{
                fontFamily: 'serif',
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 20,
                textTransform: 'uppercase',
                color: '#fff'
              }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Detail.defaultProps = {
  componentId: 'userdetailproductscreen',
  selectedProduct: {},
  actions: {}
};

Detail.propTypes = {
  componentId: PropTypes.string,
  selectedProduct: PropTypes.object,
  actions: PropTypes.object
};

export default Detail;
