/* eslint-disable camelcase */
import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { username, name, email, phone_number, password } = values;
  const errors = {
    username: validateInput(username, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    name: validateInput(name, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    email: validateInput(email, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    phone_number: validateInput(phone_number, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    password: validateInput(password, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ])
  };
  return errors;
};

export default validate;
