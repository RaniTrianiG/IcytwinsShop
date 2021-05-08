/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';

import Navbar from '../../components/elements/Navbar';

import styles from './styles';

import MenuOne from '../../assets/png/menu-1.png';
import MenuTwo from '../../assets/png/menu-2.png';
import MenuThree from '../../assets/png/menu-3.png';

class Home extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getDashboard();
  }

  _openSideMenu = () => {};

  convertToRupiah(angka) {
    let rupiah = '';
    const angkarev = angka
      .toString()
      .split('')
      .reverse()
      .join('');
    for (let i = 0; i < angkarev.length; i += 1) if (i % 3 === 0) rupiah += `${angkarev.substr(i, 3)}.`;
    return `Rp. ${rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')}`;
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <Text style={styles.title}>Dashboard</Text>

          <View style={styles.menuContainer}>
            <View style={[styles.menu, styles.menuLong]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuLongNum}>{this.convertToRupiah(data?.revenue ?? 0)}</Text>
                <Text style={styles.menuLongDesc}>Revenue was made this month</Text>
              </View>

              <View style={styles.menuIcon}>
                <Image style={styles.icon} source={MenuOne} />
              </View>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#0A6008' }]}>New Order</Text>
              <Text style={styles.menuNum}>{data?.transactions?.new_order ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#C9A23E' }]}>Process Needed</Text>
              <Text style={styles.menuNum}>{data?.transactions?.process_needed ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#13A310' }]}>Completed</Text>
              <Text style={styles.menuNum}>{data?.transactions?.completed ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#9F1D25' }]}>Canceled</Text>
              <Text style={styles.menuNum}>{data?.transactions?.canceled ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={styles.menuName}>Today</Text>
              <Text style={styles.menuNum}>{data?.transactions?.today ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={styles.menuName}>This Week</Text>
              <Text style={styles.menuNum}>{data?.transactions?.this_week ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={styles.menuName}>This Month</Text>
              <Text style={styles.menuNum}>{data?.transactions?.this_month ?? 0}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={[styles.menu, styles.menuMedium]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuNum}>{data?.products ?? 0}</Text>
                <Text style={styles.menuDescTwo}>Product</Text>
              </View>

              <View style={styles.menuIcon}>
                <Image style={styles.icon} source={MenuTwo} />
              </View>
            </View>
            <View style={[styles.menu, styles.menuMedium]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuNum}>{data?.users ?? 0}</Text>
                <Text style={styles.menuDescTwo}>Users</Text>
              </View>

              <View style={styles.menuIcon}>
                <Image style={styles.icon} source={MenuThree} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

Home.defaultProps = {
  data: {},
  actions: {}
};

Home.propTypes = {
  data: PropTypes.object,
  actions: PropTypes.object
};

export default Home;
