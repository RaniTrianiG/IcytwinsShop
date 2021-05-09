import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';
import { SCREENS } from '../../../constants';

import styles from './styles';

class ListProduct extends React.Component {
  componentDidMount() {
    const { actions, status } = this.props;
    actions.getTransactions(status);

    actions.getProfile();
  }

  _handleViewDetail = data => () => {
    const { componentId, status } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.DETAIL_TRANSACTION,
        passProps: {
          selectedData: data,
          lastStatus: status
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

  _renderActions = data => (
    <TouchableOpacity
      style={[styles.tableRow, { backgroundColor: '#DB3022', justifyContent: 'center', borderRadius: 30 }]}
      onPress={this._handleViewDetail(data)}
    >
      <Text style={[styles.tableText, { color: '#fff' }]}>View</Text>
    </TouchableOpacity>
  );

  _renderStatus = status => {
    const statusText = ['New Order', 'Pending', 'Approved', 'Delivered', 'Canceled'];

    return <Text style={{ fontWeight: '700' }}>{statusText[status]}</Text>;
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={[styles.tableRow, { flexDirection: 'row' }]}>
        <Text style={[styles.tableText, { flex: 0.5 }]}>{index + 1}</Text>
        <Text style={[styles.tableText, { flex: 1.5 }]}>{item?.invoice ?? ''}</Text>
        <Text style={[styles.tableText, { flex: 1.5 }]}>{item?.total ?? ''}</Text>
        <Text style={[styles.tableText, { flex: 1.5 }]}>{this._renderStatus(item?.status ?? 0)}</Text>
        <View style={{ flex: 1 }}>{this._renderActions(item)}</View>
      </View>
    );
  };

  _renderEmpty = () => (
    <View style={{ alignItems: 'center', paddingVertical: 20 }}>
      <Text style={styles.tableText}>No Data</Text>
    </View>
  );

  render() {
    const { transactions, profile } = this.props;

    return (
      <View style={styles.container}>
        <Navbar
          fullName={profile?.data?.name ?? null}
          mail={profile?.data.email ?? null}
          initialName={profile?.data.name
            .split(' ')
            .map(i => i[0])
            .join('')
            .substring(0, 2)}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Transaction</Text>

          <View style={[styles.tableHead, styles.table, { flexDirection: 'row', paddingHorizontal: 26 }]}>
            <Text style={[styles.tableHeadText, { flex: 0.5 }]}>#</Text>
            <Text style={[styles.tableHeadText, { flex: 1.5 }]}>Invoice</Text>
            <Text style={[styles.tableHeadText, { flex: 1.5 }]}>Total</Text>
            <Text style={[styles.tableHeadText, { flex: 1.5 }]}>Status</Text>
            <Text style={[styles.tableHeadText, { flex: 1 }]}>Action</Text>
          </View>

          <FlatList
            data={transactions ?? []}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={this._renderItem}
            ListEmptyComponent={this._renderEmpty}
            contentContainerStyle={{ paddingHorizontal: 26 }}
          />
        </View>
      </View>
    );
  }
}

ListProduct.defaultProps = {
  componentId: 'listproductscreen',
  actions: {},
  transactions: [],
  profile: {},
  status: 0
};

ListProduct.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object,
  transactions: PropTypes.array,
  profile: PropTypes.object,
  status: PropTypes.number
};

export default ListProduct;
