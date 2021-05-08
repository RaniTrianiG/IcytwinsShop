import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../../Login/action';
import * as actions from './action';
import Component from './component';

const mapStateToProps = state => {
  return {
    ...state.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions, getProfile }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
