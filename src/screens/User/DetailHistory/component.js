import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Linking } from 'react-native';

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

class DetailHistory extends React.Component {
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
  openWA = () => {
    Linking.openURL('https://api.whatsapp.com/send/?phone=62895412955704&text=Hi,%20saya%20tertarik%20dengan%20produk%20icytwins.beauty!&app_absent=0')
  }

  _handleSubmit = () => {
    // const { actions, selectedData } = this.props;
    // actions.getData();
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
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

            <Text style={styles.title}>Orders Details </Text>
            <View style={styles.categorys}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Order №1947034</Text>
                <Text style={styles.textChange}>Tracking Number:</Text>
              </View>
              <View style={styles.viewChange}>
                <Text style={styles.textChange}>05-12-2019</Text>
                <Text style={styles.textBold}>IW3475453455</Text>

                <Text style={styles.textStatus}>Delivered</Text>
              </View>
            </View>
            <View style={styles.viewTxt}>
              <TouchableOpacity
                onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME })}
                style={styles.category}
              >
                <View style={styles.titleCategory}>
                  <Image
                    style={styles.icon}
                    source={IconHome}
                  />
                </View>
                <View style={styles.menuIcon}>

                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Bouquet</Text>
                    <Text style={styles.textChange}>Category: Flower</Text>
                    <Text style={styles.textChange}>Units: 1</Text>
                  </View>
                  <View style={styles.positionPrice}>
                    <Text style={styles.buttonText}>Rp385.000</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.categoryse}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Order Information</Text>
              <Text style={styles.textChange}>Payment Method:</Text>
              <Text style={styles.textChange}>Payment Method:</Text>
              <Text style={styles.textChange}>Payment Method:</Text>
              <TouchableOpacity onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME })} style={styles.buttonDetail}>
                <Text style={styles.buttonText}>Reorder</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.viewChange}>
              <Text style={styles.textChange}></Text>
              <Text style={styles.textBold}>Transfer Manual</Text>
              <Text style={styles.textBold}>Transfer Manual</Text>
              <Text style={styles.textBold}>Transfer Manual</Text>
              <TouchableOpacity onPress={this.openWA} style={styles.buttonDetailFeedback}>
                <Text style={styles.buttonTextFeedback}>Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
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

DetailHistory.defaultProps = {
  componentId: 'categoryuserscreen',
  selectedData: {},
  actions: {},
  category: {}
};

DetailHistory.propTypes = {
  componentId: PropTypes.string,
  selectedData: PropTypes.object,
  actions: PropTypes.object,
  category: PropTypes.object
};

export default DetailHistory;
