/* eslint-disable camelcase */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { API } from 'react-native-dotenv';

import PropTypes from 'prop-types';
import { SCREENS } from '../../../constants';

import IconHome from '../../../assets/png/icon-home-red.png';
import IconBag from '../../../assets/png/icon-bag.png';
import Banner from '../../../assets/png/banner.png';
import IconUser from '../../../assets/png/icon-user.png';
import IconHistory from '../../../assets/png/icon-history.png';

import styles from './styles';

class Home extends React.Component {
  componentDidMount() {
    const { actions, item } = this.props;

    actions.getData(item?.id ?? null);
  }

  _navigateToDetail = item => () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.USER_DETAIL_PRODUCT,
        passProps: {
          selectedProduct: item
        },
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  _navigateToCategory = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.CATEGORYUSER,
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

  _renderItem = ({ item }) => {
    const thumbnail = item.imgs.find(({ is_thumbnail }) => is_thumbnail);
    const imgUrl = `${API}/storage/${item.id}/${thumbnail?.img ?? ''}`;

    return (
      <View>
        <TouchableOpacity
          onPress={this._navigateToDetail(item)}
          style={{
            overflow: 'hidden',
            width: 150,
            aspectRatio: 1,
            backgroundColor: '#aaa',
            marginRight: 16,
            borderRadius: 5
          }}
        >
          <Image
            style={{ width: null, height: null, flex: 1, resizeMode: 'cover' }}
            source={{ uri: imgUrl }}
          />
        </TouchableOpacity>
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    const { data, item } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView nestedScrollEnabled={true}>
            <View
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
              <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
                <Image source={Banner} style={{ width: null, height: null, resizeMode: 'cover', flex: 1 }} />
              </View>

              <TouchableOpacity
                onPress={this._handleTabBtnPress(SCREENS.REGISTER)}
                style={{ position: 'absolute', top: 12, right: 12 }}
              >
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#fff' }}>Log Out</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 48, lineHeight: 59, fontWeight: 'bold', color: '#ffff' }}>
                Bouquet sale
              </Text>

              <TouchableOpacity
                onPress={this._navigateToCategory}
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
            </View>

            <View>
              <View
                style={{ marginHorizontal: 14, marginTop: 33, flexDirection: 'row', alignItems: 'center' }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 34, fontWeight: 'bold', lineHeight: 45.05 }}>
                    {item?.name ?? 'New'}
                  </Text>
                  <Text style={{ fontFamily: 'serif', fontSize: 11, color: '#9B9B9B' }}>
                    {item?.description ?? 'You’ve never seen it before!'}
                  </Text>
                </View>
              </View>

              <FlatList
                horizontal={true}
                nestedScrollEnabled={true}
                data={data?.data ?? []}
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
          <TouchableOpacity
            onPress={this._handleTabBtnPress(SCREENS.HISTORY)}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconHistory}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handleTabBtnPress(SCREENS.PROFILE_USER)}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconUser}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Home.defaultProps = {
  componentId: 'usehomescreen',
  actions: {},
  data: {},
  item: {}
};

Home.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object,
  data: PropTypes.object,
  item: PropTypes.object
};

export default Home;
