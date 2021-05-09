/* eslint-disable camelcase */
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import { Navigation } from 'react-native-navigation';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import Icon from '../../../assets/png/img-bags.png';

import styles from './styles';

class ListProduct extends React.Component {
  state = {
    status: ['New Order', 'Pending', 'Approved', 'Delivered', 'Canceled'],
    active: undefined,
    no_resi: null
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _handleSubmit = () => {
    const { actions, selectedData, lastStatus } = this.props;
    const { active, no_resi } = this.state;

    const selectedStatus = active === undefined ? lastStatus : active;

    actions.updateTransactions(
      selectedData.id,
      { status: selectedStatus.toString(), no_resi },
      actions.getTransactions(lastStatus, this._handleBack)
    );
  };

  _handleChangeActive = newActive => () => {
    this.setState({ active: newActive });
  };

  _handleChangeNoResi = value => {
    this.setState({ no_resi: value });
  };

  _renderRadio = active => (item, idx) => {
    const { lastStatus } = this.props;
    const selectedStatus = active === undefined ? lastStatus : active;

    return (
      <TouchableOpacity
        disabled={active === idx}
        onPress={this._handleChangeActive(idx)}
        key={idx}
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
      >
        <View
          style={{
            width: 20,
            aspectRatio: 1,
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.1)',
            borderRadius: 10,
            marginRight: 10
          }}
        >
          {selectedStatus === idx && (
            <View
              style={{
                flex: 1,
                aspectRatio: 1,
                backgroundColor: '#DB3022',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#fff'
              }}
            />
          )}
        </View>
        <Text style={{ fontSize: 15 }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { profile, selectedData, lastStatus } = this.props;
    const { status, active } = this.state;

    const selectedStatus = active === undefined ? lastStatus : active;

    const iconSize = Image.resolveAssetSource(Icon);

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
          <Text style={styles.title}>Transaction Detail</Text>

          <ScrollView contentContainerStyle={{ paddingHorizontal: 34 }}>
            <View
              style={{
                backgroundColor: '#fff',
                marginTop: 20,
                marginBottom: 20,
                elevation: 2,
                borderRadius: 5,
                paddingVertical: 53
              }}
            >
              <View
                style={{
                  alignSelf: 'center',
                  width: 190,
                  aspectRatio: iconSize.width / iconSize.height,
                  marginBottom: 20
                }}
              >
                <Image source={Icon} style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} />
              </View>

              <Text style={{ fontSize: 18, textAlign: 'center' }}>{'Order needs confirm from\nyou!'}</Text>

              <View style={{ marginHorizontal: 50, marginTop: 20 }}>
                {status.map(this._renderRadio(active))}
              </View>

              {selectedStatus === 2 && (
                <View
                  style={{
                    marginHorizontal: 45,
                    borderWidth: 1.5,
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderRadius: 3,
                    marginTop: 5
                  }}
                >
                  <TextInput
                    defaultValue={selectedData?.no_resi}
                    placeholder="No. Resi"
                    onChangeText={this._handleChangeNoResi}
                    style={{ padding: 0, paddingHorizontal: 8 }}
                  />
                </View>
              )}

              <TouchableOpacity
                onPress={this._handleSubmit}
                style={{
                  backgroundColor: '#DB3022',
                  paddingVertical: 8,
                  borderRadius: 3,
                  marginTop: 20,
                  marginHorizontal: 45
                }}
              >
                <Text style={{ textAlign: 'center', color: '#fff' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

ListProduct.defaultProps = {
  componentId: 'detailtransactionscreen',
  profile: {},
  lastStatus: 0,
  selectedData: {},
  actions: {}
};

ListProduct.propTypes = {
  componentId: PropTypes.string,
  profile: PropTypes.object,
  lastStatus: PropTypes.number,
  selectedData: PropTypes.object,
  actions: PropTypes.object
};

export default ListProduct;
