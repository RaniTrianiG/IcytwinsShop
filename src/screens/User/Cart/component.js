/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';
import { SCREENS } from '../../../constants';

import IconHome from '../../../assets/png/icon-home.png';
import IconBag from '../../../assets/png/icon-bag-red.png';

import styles from './styles';

class Detail extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleTabBtnPress = route => () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: route,
                options: {
                  statusBar: {
                    style: 'dark',
                    backgroundColor: '#F9F9F9',
                    drawBehind: false
                  }
                }
              }
            }
          ],
          options: {
            topBar: {
              visible: false
            }
          }
        }
      }
    });
  };

  _handleCheckout = () => {
    const { actions } = this.props;

    actions.checkout(
      {
        courier: 'JNE',
        delivery_address: 'Jl. Sampora'
      },
      this._handleTabBtnPress(SCREENS.USER_HOME)
    );
  };

  _renderItem = ({ item }) => (
    <View
      style={{
        overflow: 'hidden',
        height: 104,
        marginBottom: 24,
        backgroundColor: '#fff',
        marginRight: 16,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 2
      }}
    >
      <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#aaa' }}>
        <Image />
      </View>
      <View style={{ flex: 1, padding: 12 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{item?.product?.name ?? ''}</Text>
            <Text numberOfLines={2} style={{ fontSize: 11, marginTop: 4 }}>
              {item?.product?.description ?? ''}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <Text style={{ fontFamily: 'serif', fontSize: 14, fontWeight: '700' }}>{`Rp.${item?.product
            ?.price ?? ''}`}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    const { profile } = this.props;
    const total = (profile?.data?.carts ?? []).reduce((val, item) => {
      return val + item?.product?.price;
    }, 0);

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={profile?.data?.carts ?? []}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={this._renderItem}
            ListHeaderComponent={
              <Text
                style={{
                  paddingBottom: 24,
                  paddingTop: 62,
                  fontSize: 34,
                  lineHeight: 45.05,
                  fontWeight: 'bold'
                }}
              >
                My Bag
              </Text>
            }
          />
        </View>

        <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
          <View style={{ marginBottom: 24, alignItems: 'center', flexDirection: 'row' }}>
            <Text
              style={{
                color: '#9B9B9B',
                fontWeight: '700',
                fontFamily: 'serif',
                fontSize: 14,
                flex: 1
              }}
            >
              Total amount:
            </Text>
            <Text style={{ fontSize: 18 }}>{`Rp.${total}`}</Text>
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#DB3022',
              paddingVertical: 14,
              borderRadius: 50
            }}
            onPress={this._handleCheckout}
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
              Check out
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingHorizontal: 26,
            justifyContent: 'space-evenly',
            paddingVertical: 12,
            borderRadius: 15
          }}
        >
          <TouchableOpacity
            onPress={this._handleTabBtnPress(SCREENS.USER_HOME)}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconHome}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            onPress={this._handleTabBtnPress(SCREENS.USER_CART)}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} source={IconBag} />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10, color: '#DB3022' }}>Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Detail.defaultProps = {
  actions: {},
  profile: {}
};

Detail.propTypes = {
  actions: PropTypes.object,
  profile: PropTypes.object
};

export default Detail;
