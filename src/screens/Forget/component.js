import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Modal from 'react-native-modal';

import PropTypes from 'prop-types';

import FormForgetStepEmail from '../../components/forms/ForgetStepEmail';
import FormForgetStepOTP from '../../components/forms/ForgetStepOTP';
import FormForgetStepPassword from '../../components/forms/ForgetStepPassword';

import BackIcon from '../../assets/png/icon-back.png';

import styles from './styles';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

class Forget extends React.Component {
  state = {
    isLoading: false,
    step: 0,
    data: {
      email: null,
      reset_code: null,
      password: null,
      confirm_password: null
    }
  };

  _handleSubmit = submitData => {
    const { actions } = this.props;
    const { step, data } = this.state;

    this.setState({ isLoading: true });

    if (step === 0) {
      actions.postForgetEmail(submitData.username.toLowerCase(), res => {
        this.setState({
          step: step + 1,
          data: { ...data, email: submitData.username.toLowerCase(), reset_code: res?.data?.result ?? '' }
        });
        this.setState({ isLoading: false });
      });
    } else if (step === 1) {
      if (submitData.otp === data.reset_code) {
        this.setState({ step: step + 1 });
      }
      this.setState({ isLoading: false });
    } else if (step === 2) {
      actions.postResetPassword({ ...data, ...submitData }, ({ httpStatus }) => {
        if (httpStatus === 200) {
          ToastAndroid.show('Success Reset Password', ToastAndroid.SHORT);
          return this._handleBack();
        }

        ToastAndroid.show('Failed, Try again', ToastAndroid.SHORT);
      });
    }
  };

  _handleBack = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  };

  _renderForm = idx => {
    if (idx === 1) {
      return <FormForgetStepOTP onSubmit={this._handleSubmit} />;
    }

    if (idx === 2) {
      return <FormForgetStepPassword onSubmit={this._handleSubmit} />;
    }

    return <FormForgetStepEmail onSubmit={this._handleSubmit} />;
  };

  render() {
    const { step, isLoading } = this.state;

    return (
      <>
        <View style={styles.loginScreen}>
          <TouchableOpacity style={styles.back} onPress={this._handleBack}>
            <Image source={BackIcon} style={styles.img} />
          </TouchableOpacity>

          <Text style={styles.title}>Forget Password</Text>

          {this._renderForm(step)}
        </View>

        <Modal isVisible={isLoading} deviceHeight={SCREEN_HEIGHT} animationIn="fadeIn" animationOut="fadeOut">
          <ActivityIndicator size="large" />
        </Modal>
      </>
    );
  }
}

Forget.defaultProps = {
  componentId: 'forgetscreen',
  actions: {}
};

Forget.propTypes = {
  componentId: PropTypes.string,
  actions: PropTypes.object
};

export default Forget;
