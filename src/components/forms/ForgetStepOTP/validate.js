import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { otp } = values;
  const errors = {
    otp: validateInput(otp, [
      {
        rule: 'required',
        message: 'Email required'
      }
    ])
  };
  return errors;
};

export default validate;
