import { reduxForm } from 'redux-form';
import Component from './component';
import validate from './validate';

export default reduxForm({
  form: 'category',
  validate
})(Component);
