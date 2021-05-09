import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { API } from 'react-native-dotenv';
import BackIcon from '../../../assets/png/icon-back.png';

import IconHome from '../../../assets/png/icon-home.png';
import IconBag from '../../../assets/png/icon-bag.png';
import IconUser from '../../../assets/png/icon-user.png';
import IconHistory from '../../../assets/png/icon-history-red.png';
import { SCREENS } from '../../../constants';

import styles from './styles';

class History extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getData();

    actions.getProfile();
  }

  _handleTabBtnPress = ({ route }) => () => {
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

  _navigateToDetailCategory = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.DETAIL_CATEGORY_USER,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _renderFlatList = item => {
    const status = ['New Order', 'Pending', 'Approved', 'Delivered'];
    return (
      <TouchableOpacity style={styles.category}>
        <View style={styles.viewTxt}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Order #{item.item.invoice}</Text>
            <Text style={styles.buttonText}>Tracking Number:</Text>
            <Text style={styles.buttonText}>Quantity:</Text>
            <Text style={styles.buttonText}>Total Amount:</Text>
            <TouchableOpacity onPress={this._handleTabBtnPress({ route: SCREENS.DETAIL_HISTORY })} style={styles.buttonDetail}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewChange}>
            <Text style={styles.textBold}>05-12-2019</Text>
            <Text style={styles.textChange}>{item.item.no_resi ?? '-'}</Text>
            <Text style={styles.textChange}>{item.item.items.length}</Text>
            <Text style={styles.textBold}>{item.item.total}</Text>

            <Text style={styles.textStatus}>{status[item.item.status]}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { selectedData, profile, category } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity onPress={this._handleBack} style={styles.back}>
              <Image source={BackIcon} style={styles.img} />
            </TouchableOpacity>

            <Text style={styles.title}>History Orders</Text>
            <FlatList
              data={profile?.data?.transactions ?? []}
              keyExtractor={(_, idx) => `item-${idx}`}
              renderItem={this._renderFlatList}
            />
          </ScrollView>
        </View>
        <View style={styles.bar}>
          <TouchableOpacity
            onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME })}
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
            onPress={this._handleTabBtnPress({ route: SCREENS.USER_CART })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} source={IconBag} />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Bag</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled
            onPress={this._handleTabBtnPress({ route: SCREENS.HISTORY })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconHistory}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10, color: '#DB3022' }}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handleTabBtnPress({ route: SCREENS.PROFILE_USER })}
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

History.defaultProps = {
  componentId: 'categoryuserscreen',
  selectedData: {},
  actions: {},
  category: {}
};

History.propTypes = {
  componentId: PropTypes.string,
  selectedData: PropTypes.object,
  actions: PropTypes.object,
  category: PropTypes.object
};

export default History;
