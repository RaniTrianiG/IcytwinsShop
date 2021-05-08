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
  tableFlex: [0.5, 3, 1],
  tableHead: ['#', 'Category', 'Action']
};

class ListCategory extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getData();
  }

  _handleViewDetail = data => () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.DETAIL_CATEGORY,
        passProps: {
          selectedData: data
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

  _handleAddData = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.ADD_CATEGORY,
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

  _renderActions = data => (
    <TouchableOpacity style={styles.tableRow} onPress={this._handleViewDetail(data)}>
      <Text style={[styles.tableText, { textDecorationLine: 'underline' }]}>View</Text>
    </TouchableOpacity>
  );

  _renderCustom = (cellData, cellIndex, index) => {
    if (cellIndex === 2) {
      return this._renderActions(cellData, index);
    }

    return cellData;
  };

  render() {
    const { category } = this.props;

    return (
      <View style={styles.container}>
        <Navbar />

        <View style={styles.content}>
          <Text style={styles.title}>Category</Text>

          <View style={{ alignItems: 'flex-end' }}>
            <Button
              title="New Category"
              buttonStyle={styles.button}
              onPress={this._handleAddData}
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

            {(category?.data ?? []).map((rowData, index) => (
              <TableWrapper key={index} style={styles.tableRow}>
                <Cell
                  textStyle={styles.tableText}
                  flex={DUMMY_DATA.tableFlex[0]}
                  data={this._renderCustom(index + 1, 0, index)}
                />
                <Cell
                  textStyle={styles.tableText}
                  flex={DUMMY_DATA.tableFlex[1]}
                  data={this._renderCustom(rowData.name, 1, index)}
                />
                <Cell
                  textStyle={styles.tableText}
                  flex={DUMMY_DATA.tableFlex[2]}
                  data={this._renderCustom(rowData, 2, index)}
                />
              </TableWrapper>
            ))}
          </Table>
        </View>
      </View>
    );
  }
}

ListCategory.defaultProps = {
  componentId: 'listcategoryscreen',
  actions: {},
  category: {}
};

ListCategory.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object,
  category: PropTypes.object
};

export default ListCategory;
