import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getProfile } from '../../Login/action';
import * as actions from './action';
import Component from './component';

const mapStateToProps = state => {
  return {
    ...state.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
