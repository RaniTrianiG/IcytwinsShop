import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import * as registerActions from '../Register/action';
import Component from './component';

const mapStateToProps = state => {
  return {
    ...state.category,
    ...state.register
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions, ...registerActions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
