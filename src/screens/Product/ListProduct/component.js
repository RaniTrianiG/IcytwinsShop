import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';
import { SCREENS } from '../../../constants';

import styles from './styles';

class ListProduct extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getData();
  }

  _handleViewDetail = data => () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: SCREENS.DETAIL_PRODUCT,
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

  _renderActions = data => (
    <TouchableOpacity style={styles.tableRow} onPress={this._handleViewDetail(data)}>
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

  _renderItem = ({ item, index }) => (
    <View style={[styles.tableRow, { flexDirection: 'row' }]}>
      <Text style={[styles.tableText, { flex: 0.5 }]}>{index + 1}</Text>
      <Text style={[styles.tableText, { flex: 2 }]}>{item?.name ?? ''}</Text>
      <Text style={[styles.tableHeadText, { flex: 1 }]}>{item?.stock ?? ''}</Text>
      <Text style={[styles.tableHeadText, { flex: 2 }]}>{item?.category?.name ?? ''}</Text>
      <View style={{ flex: 1 }}>{this._renderActions(item)}</View>
    </View>
  );

  render() {
    const { product, profile } = this.props;
    return (
      <View style={styles.container}>
        <Navbar
          fullName={profile?.data?.name ?? null}
          mail={profile?.data.email ?? null}
          initialName={
            profile?.data?.name
              ?.split(' ')
              .map(i => i[0])
              .join('')
              .substring(0, 2) ?? null
          }
        />

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

          <View style={[styles.tableHead, styles.table, { flexDirection: 'row' }]}>
            <Text style={[styles.tableHeadText, { flex: 0.5 }]}>#</Text>
            <Text style={[styles.tableHeadText, { flex: 2 }]}>Name</Text>
            <Text style={[styles.tableHeadText, { flex: 1 }]}>Stock</Text>
            <Text style={[styles.tableHeadText, { flex: 2 }]}>Category</Text>
            <Text style={[styles.tableHeadText, { flex: 1 }]}>Action</Text>
          </View>

          <FlatList
            data={product?.data ?? []}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

ListProduct.defaultProps = {
  componentId: 'listproductscreen',
  actions: {},
  product: {},
  profile: {}
};

ListProduct.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object,
  product: PropTypes.object,
  profile: PropTypes.object
};

export default ListProduct;
