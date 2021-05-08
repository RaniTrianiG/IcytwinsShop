import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { email, name } = values;

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
    name: validateInput(name, [
      {
        rule: 'required',
        message: 'Name required'
      }
    ])
  };
  return errors;
};

export default validate;
