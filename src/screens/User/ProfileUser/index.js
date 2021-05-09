import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getProfile } from '../../Login/action';
import * as actions from '../../Profile/action';
import Component from './component';
import { getProfile } from '../../Login/action';

const mapStateToProps = state => {
  return {
    ...state.home
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
