import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import * as categoryAction from '../ListCategory/action';
import Component from './component';

const mapStateToProps = state => {
  return {
    ...state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions, ...categoryAction }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
