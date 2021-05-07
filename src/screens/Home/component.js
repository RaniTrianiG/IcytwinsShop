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
  state = {
    dashboard: {
      products: 0,
      revenue: 0,
      transactions: {
        canceled: 0,
        completed: 0,
        new_order: 0,
        process_needed: 0,
        this_month: 0,
        this_week: 0,
        today: 0
      }
    }
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getDashboard(null, res => {
      this.setState(
        {
          dashboard: res.data
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }

  _openSideMenu = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <Text style={styles.title}>Dashboard</Text>

          <View style={styles.menuContainer}>
            <View style={[styles.menu, styles.menuLong]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuLongNum}>{this.state.dashboard.revenue}</Text>
                <Text style={styles.menuLongDesc}>Revenue was made this month</Text>
              </View>

              <View style={styles.menuIcon}>
                <Image style={styles.icon} source={MenuOne} />
              </View>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#0A6008' }]}>New Order</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.new_order}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#C9A23E' }]}>Process Needed</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.process_needed}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#13A310' }]}>Completed</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.completed}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={[styles.menuName, { color: '#9F1D25' }]}>Canceled</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.canceled}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={styles.menuName}>Today</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.today}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={styles.menuName}>This Week</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.this_week}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={styles.menu}>
              <Text style={styles.menuName}>This Month</Text>
              <Text style={styles.menuNum}>{this.state.dashboard.transactions.this_month}</Text>
              <Text style={styles.menuDesc}>Transaction</Text>
            </View>
            <View style={[styles.menu, styles.menuMedium]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuNum}>{this.state.dashboard.products}</Text>
                <Text style={styles.menuDescTwo}>Product</Text>
              </View>

              <View style={styles.menuIcon}>
                <Image style={styles.icon} source={MenuTwo} />
              </View>
            </View>
            <View style={[styles.menu, styles.menuMedium]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuNum}>{this.state.dashboard.users}</Text>
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
  actions: {}
};

Home.propTypes = {
  actions: PropTypes.object
};

export default Home;
