import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { email, password } = values;

  const errors = {
    email: validateInput(email, [
      {
        rule: 'required',
        message: 'Email required'
      },
      {
        rule: 'email',
        message: 'Incorrect email format'
      }
    ]),
    password: validateInput(password, [
      {
        rule: 'required',
        message: 'Password required'
      }
    ])
  };
  return errors;
};

export default validate;
