import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { Button } from 'react-native-elements';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';
import { SCREENS } from '../../../constants';

import styles from './styles';

const DUMMY_DATA = {
  tableFlex: [0.5, 2, 1, 1.1, 1],
  tableHead: ['#', 'Name', 'Stock', 'Category', 'Action'],
  tableData: []
};

class ListProduct extends React.Component {
  _handleViewDetail = () => () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.DETAIL_PRODUCT,
        options: {
          statusBar: {
            style: 'dark',
            backgroundColor: '#F9F9F9'
          }
        }
      }
    });
  };

  _handleAddData = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.ADD_PRODUCT,
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
      <Text style={[styles.tableText, { textDecorationLine: 'underline' }]}>View</Text>
    </TouchableOpacity>
  );

  _renderCustom = (cellData, cellIndex, index) => {
    if (cellIndex === 1) {
      return this._renderNames(cellData, index);
    }

    if (cellIndex === 4) {
      return this._renderActions(cellData, index);
    }

    return cellData;
  };

  render() {
    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <Text style={styles.title}>Products</Text>

          <View style={{ alignItems: 'flex-end' }}>
            <Button
              title="New Product"
              onPress={this._handleAddData}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>

          <Table style={styles.table}>
            <Row
              style={styles.tableHead}
              data={DUMMY_DATA.tableHead}
              flexArr={DUMMY_DATA.tableFlex}
              textStyle={styles.tableHeadText}
            />

            {DUMMY_DATA.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.tableRow}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    textStyle={styles.tableText}
                    flex={DUMMY_DATA.tableFlex[cellIndex]}
                    data={this._renderCustom(cellData, cellIndex, index)}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
      </View>
    );
  }
}

ListProduct.defaultProps = {
  componentId: 'listproductscreen'
  // actions: {}
};

ListProduct.propTypes = {
  componentId: PropTypes.string
  // actions: PropTypes.object
};

export default ListProduct;
