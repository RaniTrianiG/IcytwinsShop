import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { API } from 'react-native-dotenv';
import BackIcon from '../../../assets/png/icon-back.png';

import IconHome from '../../../assets/png/icon-home-red.png';
import IconBag from '../../../assets/png/icon-bag.png';
import IconUser from '../../../assets/png/iconUser.png';
import { SCREENS } from '../../../constants';

import styles from './styles';

class CategoryUser extends React.Component {
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

  _handleSubmit = () => {
    // const { actions, selectedData } = this.props;
    // actions.getData();
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _renderFlatList = item => {
    const imgUrl = `${API}/category/${item.item.id}.jpg`;
    console.log(imgUrl);
    return (
      <TouchableOpacity
        onPress={this._handleTabBtnPress(SCREENS.DETAIL_CATEGORY_USER)}
        style={styles.category}
      >
        <View style={styles.titleCategory}>
          <Text style={styles.menuLongNum}>{item.item.name}</Text>
        </View>
        <View style={styles.menuIcon}>
          <Image
            style={styles.icon}
            source={{
              uri: imgUrl
            }}
          />
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

            <Text style={styles.title}>Categories</Text>
            <Button
              title="SUMMER SALES Up to 50% off"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
            <FlatList
              data={category?.data ?? []}
              keyExtractor={(_, idx) => `item-${idx}`}
              renderItem={this._renderFlatList}
            />
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

CategoryUser.defaultProps = {
  componentId: 'categoryuserscreen',
  selectedData: {},
  actions: {},
  category: {}
};

CategoryUser.propTypes = {
  componentId: PropTypes.string,
  selectedData: PropTypes.object,
  actions: PropTypes.object,
  category: PropTypes.object
};

export default CategoryUser;
