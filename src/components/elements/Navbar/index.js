import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Navigation } from 'react-native-navigation';

import Modal from 'react-native-modal';

import PropTypes from 'prop-types';
import { SCREENS } from '../../../constants';

import styles from './styles';

import BurgerMenu from '../../../assets/png/icon-menu.png';
import Bell from '../../../assets/png/icon-bell.png';
import Arrow from '../../../assets/png/arrow-right.png';

const MENU = [
  { name: 'Dashboard', route: SCREENS.HOME },
  { name: 'Master Data' },
  { name: 'Product', route: SCREENS.PRODUCT },
  { name: 'Category', route: SCREENS.CATEGORY },
  // { name: 'Sub Category', route: SCREENS.SUB_CATEGORY },
  { name: 'Transaction' },
  { name: 'Payment Confirmation', route: SCREENS.TRANSACTION, status: 1 },
  { name: 'Process Needed', route: SCREENS.TRANSACTION },
  { name: 'Completed', route: SCREENS.TRANSACTION },
  { name: 'Canceled', route: SCREENS.TRANSACTION }
];

const Component = ({ title, fullName, mail, initialName, onNotificationBtnPress }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toogleSideMenu = newIsVisible => () => {
    setIsVisible(newIsVisible);
  };

  const handleNavigate = ({ route }) => () => {
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

  const handleNavigation = () => {
    handleNavigate({ route: SCREENS.PROFILE })();
  };

  const handleLogOut = () => {
    handleNavigate({ route: SCREENS.REGISTER })();
  };

  const renderMenu = (item, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.menuItemContainer, !item?.route && { marginLeft: 0 }]}
      disabled={!item?.route}
      onPress={handleNavigate(item)}
    >
      <Text style={[styles.menuItem, !item?.route && styles.menuSubTitle]}>{item?.name}</Text>

      {item?.route && (
        <View style={styles.menuIcon}>
          <Image style={styles.headerBtnIcon} source={Arrow} />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={toogleSideMenu(true)}>
          <Image style={styles.headerBtnIcon} source={BurgerMenu} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={onNotificationBtnPress}>
          <Image style={styles.headerBtnIcon} source={Bell} />
        </TouchableOpacity>
      </View>

      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={isVisible}
        onBackdropPress={toogleSideMenu(false)}
        backdropOpacity={0.5}
        style={styles.modal}
        // eslint-disable-next-line react/jsx-boolean-value
        useNativeDriver={true}
      >
        <View style={styles.sideContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 23 }}>
            <View style={styles.sidePhoto}>
              <Text style={styles.headerBtnIcon}
              >{initialName}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={handleNavigation}>
                <Text style={styles.sideName}>{fullName}</Text>
                <Text style={styles.sideEmail}>{mail}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            {MENU.map(renderMenu)}
            <TouchableOpacity style={[styles.menuItemContainer, { marginLeft: 0 }]} onPress={handleLogOut}>
              <Text style={[styles.menuItem, { color: '#9F1D25' }]}>Logout</Text>

              <View style={styles.menuIcon}>
                <Image style={styles.headerBtnIcon} source={Arrow} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

Component.defaultProps = {
  title: 'Icytwins.beauty',
  fullName: 'Icytwins.beauty',
  mail: 'Icytwins.beauty@gmail.com',
  initialName: 'Icytwins.beauty',
  onNotificationBtnPress: () => { }
};

Component.propTypes = {
  title: PropTypes.string,
  fullName: PropTypes.string,
  mail: PropTypes.string,
  initialName: PropTypes.string,
  onNotificationBtnPress: PropTypes.func
};

export default Component;
