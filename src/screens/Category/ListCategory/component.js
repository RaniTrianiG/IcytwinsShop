import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';
import { SCREENS } from '../../../constants';

import styles from './styles';

class ListCategory extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getData();
    actions.getProfile();
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

  _renderActions = data => (
    <TouchableOpacity onPress={this._handleViewDetail(data)}>
      <Text style={[styles.tableText, { textDecorationLine: 'underline' }]}>View</Text>
    </TouchableOpacity>
  );

  _renderItem = ({ item, index }) => (
    <View style={[styles.tableRow, { flexDirection: 'row' }]}>
      <Text style={[styles.tableText, { flex: 0.5 }]}>{index + 1}</Text>
      <Text style={[styles.tableText, { flex: 3 }]}>{item?.name ?? ''}</Text>
      <View style={{ flex: 1 }}>{this._renderActions(item)}</View>
    </View>
  );

  render() {
    const { category, profile } = this.props;

    return (
      <View style={styles.container}>
        <Navbar fullName={profile?.data?.name ?? null} mail={profile?.data.email ?? null} initialName={profile?.data?.name?.split(" ").map((i) => i[0]).join("").substring(0, 2) ?? null} />

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

          <View style={[styles.tableHead, styles.table, { flexDirection: 'row' }]}>
            <Text style={[styles.tableHeadText, { flex: 0.5 }]}>#</Text>
            <Text style={[styles.tableHeadText, { flex: 3 }]}>Category</Text>
            <Text style={[styles.tableHeadText, { flex: 1 }]}>Action</Text>
          </View>

          <FlatList
            data={category?.data ?? []}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={this._renderItem}
          />
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
