/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';
import { SCREENS } from '../../../constants';

import IconHome from '../../../assets/png/icon-home-red.png';
import IconBag from '../../../assets/png/icon-bag.png';

import styles from './styles';

const DUMMY_DATA = [{}, {}, {}, {}, {}];

class Home extends React.Component {
  _navigateToDetail = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.USER_DETAIL_PRODUCT,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

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

  _renderItem = () => (
    <TouchableOpacity
      onPress={this._navigateToDetail}
      style={{ width: 150, aspectRatio: 1, backgroundColor: '#aaa', marginRight: 16, borderRadius: 5 }}
    >
      <View>
        <Image />
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView nestedScrollEnabled={true}>
            <ImageBackground
              style={{
                width: '100%',
                height: 534,
                backgroundColor: '#aaaaaa',
                justifyContent: 'flex-end',
                paddingVertical: 32,
                paddingHorizontal: 12,
                alignItems: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 48, lineHeight: 59, fontWeight: 'bold', color: '#ffff' }}>
                Bouqet sale
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: '#DB3022',
                  minWidth: 160,
                  minHeight: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 12,
                  borderRadius: 36
                }}
              >
                <Text style={{ color: '#fff', fontFamily: 'serif', fontSize: 14, fontWeight: '700' }}>
                  Check
                </Text>
              </TouchableOpacity>
            </ImageBackground>

            <View>
              <View
                style={{ marginHorizontal: 14, marginTop: 33, flexDirection: 'row', alignItems: 'center' }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 34, fontWeight: 'bold', lineHeight: 45.05 }}>New</Text>
                  <Text style={{ fontFamily: 'serif', fontSize: 11, color: '#9B9B9B' }}>
                    You’ve never seen it before!
                  </Text>
                </View>
              </View>

              <FlatList
                horizontal={true}
                nestedScrollEnabled={true}
                data={DUMMY_DATA}
                keyExtractor={(_, idx) => `item-${idx}`}
                renderItem={this._renderItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginHorizontal: 14, marginVertical: 22 }}
              />
            </View>
            <View />
          </ScrollView>
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
            disabled={true}
            onPress={this._handleTabBtnPress(SCREENS.USER_HOME)}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconHome}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10, color: '#DB3022' }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handleTabBtnPress(SCREENS.USER_CART)}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} source={IconBag} />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Home.defaultProps = {
  componentId: 'usehomescreen'
  // actions: {}
};

Home.propTypes = {
  componentId: PropTypes.string
  // actions: PropTypes.object
};

export default Home;
