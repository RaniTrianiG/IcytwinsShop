import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

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

  render() {
    // const { selectedData, profile } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity onPress={this._handleBack} style={styles.back}>
              <Image source={BackIcon} style={styles.img} />
            </TouchableOpacity>

            <Text style={styles.title}>Bouquet</Text>
            <View style={{ alignSelf: 'center', height: 300 }}>
              <Image
                source={productImage}
                style={styles.image}
              />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <View style={styles.buttons}>
                <Text style={styles.buttonTexts}>Bouquet</Text>
                <Text style={{ color: '#9B9B9B', fontSize: 12, fontFamily: 'serif' }}>Snacks 12 with varian mix</Text>
              </View>
              <View style={styles.viewChange}>
                <Text style={styles.textChange}>200.000</Text>
              </View>
            </View>
            <View style={{ bottom: 10 }}>
              <Text style={{ color: '#222222', fontSize: 13, lineHeight: 15, fontFamily: 'serif' }}>
                Sweet Bouqet for your beloved can contain from snacks, makeup, skincare, and even flowers be it dry or ordinary flowers
                , frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.
              </Text>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 18, fontFamily: 'serif', fontWeight: 'bold' }}>Customer Service</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewArow}>
                <Image source={arow} style={{ height: 20 }} />
              </View>
            </View>
            <View style={{ paddingBottom: 30 }}>
              <Button title="Add To Cart" buttonStyle={styles.button} titleStyle={styles.buttonText} />
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
