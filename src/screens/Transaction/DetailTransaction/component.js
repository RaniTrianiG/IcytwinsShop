import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import PropTypes from 'prop-types';

import Navbar from '../../../components/elements/Navbar';

import Icon from '../../../assets/png/img-bags.png';

import styles from './styles';

class ListProduct extends React.Component {
  render() {
    const { profile } = this.props;

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

          <View
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 8,
              paddingVertical: 53,
              alignItems: 'center',
              marginTop: 59,
              elevation: 4,
              borderRadius: 5
            }}
          >
            <View style={{ width: 190, aspectRatio: iconSize.width / iconSize.height, marginBottom: 20 }}>
              <Image source={Icon} style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }} />
            </View>

            <Text style={{ fontSize: 18, textAlign: 'center' }}>{'Order needs confirm from\nyou!'}</Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#DB3022',
                width: '65%',
                paddingVertical: 8,
                borderRadius: 3,
                marginTop: 20
              }}
            >
              <Text style={{ textAlign: 'center' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

ListProduct.defaultProps = {
  profile: {}
};

ListProduct.propTypes = {
  profile: PropTypes.object
};

export default ListProduct;
