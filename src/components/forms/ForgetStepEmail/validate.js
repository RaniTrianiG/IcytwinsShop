import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { username } = values;
  const errors = {
    username: validateInput(username, [
      {
        rule: 'required',
        message: 'Email required'
      },
      {
        rule: 'email',
        message: 'Incorrect email format'
      }
    ])
  };
  return errors;
};

export default validate;
