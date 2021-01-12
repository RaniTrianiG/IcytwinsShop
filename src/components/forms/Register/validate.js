import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { name, email, phoneNum, password, confirmPass } = values;
  const errors = {
    name: validateInput(name, [
      {
        rule: 'required',
        message: 'PIN tidak boleh kosong'
      }
    ]),
    email: validateInput(email, [
      {
        rule: 'required',
        message: 'PIN tidak boleh kosong'
      }
    ]),
    phoneNum: validateInput(phoneNum, [
      {
        rule: 'required',
        message: 'PIN tidak boleh kosong'
      }
    ]),
    password: validateInput(password, [
      {
        rule: 'required',
        message: 'PIN tidak boleh kosong'
      }
    ]),
    confirmPass: validateInput(confirmPass, [
      {
        rule: 'required',
        message: 'PIN tidak boleh kosong'
      }
    ])
  };
  return errors;
};

export default validate;
