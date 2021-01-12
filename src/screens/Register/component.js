import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import FormRegister from '../../components/forms/Register';
import styles from './styles';
import Logo from '../../assets/svg/login-illustration.svg';

class Register extends React.Component {
  state = {
    isModalVisible: false
  };

  _handleSubmit = async data => {
    const { actions } = this.props;
    actions.postRegister(data);
  };

  _handleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.logoContainer}>
          <Logo width="100%" height="100%" />
        </View>
        <FormRegister onSubmit={this._handleSubmit} />
        <Modal isVisible={isModalVisible} onBackdropPress={this._handleModal}>
          <View style={styles.modalContainer}>
            <Text>Success Modal</Text>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

Register.defaultProps = {
  actions: {}
};

Register.propTypes = {
  actions: PropTypes.object
};

export default Register;
