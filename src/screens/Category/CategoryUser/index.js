import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../ListCategory/action';
import { getProfile } from '../../Login/action';
import Component from './component';

const mapStateToProps = state => {
  return {
    ...state.category
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
