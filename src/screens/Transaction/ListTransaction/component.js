import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';

import PropTypes from 'prop-types';

import { ScrollView } from 'react-native';
import Navbar from '../../../components/elements/Navbar';
import { SCREENS } from '../../../constants';

import styles from './styles';

const DUMMY_DATA = {
  tableFlex: [0.5, 1, 2, 1.2, 1],
  tableHead: ['#', 'Invoice', 'Total', 'Status', 'Action'],
  tableData: [
    ['1', 'INV-XX', 'Rp. 120.000,00', 'Payment Confirmation', ''],
    ['2', 'INV-XX', 'Rp. 120.000,00', 'Process Needed', '']
  ]
};

class ListProduct extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getTransactions();

    actions.getProfile();
  }

  _handleViewDetail = () => () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.HOME,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  _renderNames = data => (
    <View style={styles.tableRow}>
      <Text style={styles.tableText}>{data}</Text>
    </View>
  );

  _renderActions = (_, index) => (
    <TouchableOpacity style={styles.tableRow} onPress={this._handleViewDetail(index)}>
      <Text style={styles.tableText}>View</Text>
    </TouchableOpacity>
  );

  _renderStatus = status => {
    const statusText = ['New Order', 'Pending', 'Approved', 'Delivered', 'Canceled'];

    return statusText[status];
  };

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

          <ScrollView>
            <Table style={styles.table}>
              <Row
                style={styles.tableHead}
                data={DUMMY_DATA.tableHead}
                flexArr={DUMMY_DATA.tableFlex}
                textStyle={styles.tableHeadText}
              />

              {transactions?.map((rowData, index) => (
                <TableWrapper key={index} style={styles.tableRow}>
                  <Cell key={rowData.id} textStyle={styles.tableText} flex={0.5} data={rowData.id} />
                  <Cell textStyle={styles.tableText} flex={1.5} data={`#${rowData.invoice}`} />
                  <Cell textStyle={styles.tableText} flex={2} data={rowData.total} />
                  <Cell textStyle={styles.tableText} flex={1.2} data={this._renderStatus(rowData.status)} />
                  <Cell
                    textStyle={styles.tableText}
                    flex={1.2}
                    data={this._renderActions(rowData.id, index)}
                  />
                </TableWrapper>
              ))}
            </Table>
          </ScrollView>
        </View>
      </View>
    );
  }
}

ListProduct.defaultProps = {
  componentId: 'listproductscreen',
  actions: {},
  transactions: {}
};

ListProduct.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object,
  transactions: PropTypes.object
};

export default ListProduct;
