import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import Component from './component';
import { getProfile } from '../../Login/action';
import { getTransactions } from '../ListTransaction/action';

const mapStateToProps = state => {
  return {
    ...state.transaction
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions, getProfile, getTransactions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
