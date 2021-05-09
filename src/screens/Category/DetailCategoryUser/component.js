import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Linking } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import { API } from 'react-native-dotenv';
import BackIcon from '../../../assets/png/icon-back.png';
import IconHome from '../../../assets/png/icon-home-red.png';
import IconBag from '../../../assets/png/icon-bag.png';
import productImage from '../../../assets/png/detailCategories.png';
import arow from '../../../assets/png/arow.png';
import IconUser from '../../../assets/png/icon-user.png';
import { SCREENS } from '../../../constants';
import styles from './styles';

class DetailCategoryUser extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getProfile();
  }

  _handleTabBtnPress = ({ route, item }) => () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: route,
                passProps: item,
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

  _handleSubmit = () => {
    // const { actions, selectedData } = this.props;
    // actions.getData();
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  openWA = () => {
    Linking.openURL(
      'https://api.whatsapp.com/send/?phone=62895412955704&text=Hi,%20saya%20tertarik%20dengan%20produk%20icytwins.beauty!&app_absent=0'
    );
  };

  render() {
    // const { selectedData, profile } = this.props;
    const { item } = this.props;
    const imgUrl = `${API}/category/${item.id}.jpg`;
    console.log(item);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity onPress={this._handleBack} style={styles.back}>
              <Image source={BackIcon} style={styles.img} />
            </TouchableOpacity>

            <Text style={styles.title}>{item.name}</Text>
            <View style={{ alignSelf: 'center', height: 300 }}>
              <Image source={{ uri: imgUrl }} style={styles.image} />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <View style={styles.buttons}>
                <Text style={styles.buttonTexts}>{}</Text>
              </View>
            </View>
            <View style={{ bottom: 10 }}>
              <Text style={{ color: '#222222', fontSize: 13, lineHeight: 15, fontFamily: 'serif' }}>
                {item.description}
              </Text>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <View>
                <TouchableOpacity onPress={this.openWA}>
                  <Text style={{ fontSize: 18, fontFamily: 'serif', fontWeight: 'bold' }}>
                    Customer Service
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewArow}>
                <Image source={arow} style={{ height: 20 }} />
              </View>
            </View>
            <View style={{ paddingBottom: 30 }}>
              <Button
                title="Products"
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
                onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME, item: { item } })}
              />
            </View>
          </ScrollView>
        </View>

        <View style={styles.bar}>
          <TouchableOpacity
            disabled
            onPress={this._handleTabBtnPress({ route: SCREENS.USER_HOME })}
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
            onPress={this._handleTabBtnPress({ route: SCREENS.USER_CART })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} source={IconBag} />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>Bag</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handleTabBtnPress({ route: SCREENS.HISTORY })}
            style={{ alignItems: 'center' }}
          >
            <View style={{ width: 30, aspectRatio: 1, marginBottom: 5 }}>
              <Image
                style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                source={IconUser}
              />
            </View>
            <Text style={{ fontSize: 10, lineHeight: 10 }}>History</Text>
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

DetailCategoryUser.defaultProps = {
  componentId: 'categoryuserscreen',
  // selectedData: {},
  actions: {}
};

DetailCategoryUser.propTypes = {
  componentId: PropTypes.string,
  // selectedData: PropTypes.object,
  actions: PropTypes.object
};

export default DetailCategoryUser;
