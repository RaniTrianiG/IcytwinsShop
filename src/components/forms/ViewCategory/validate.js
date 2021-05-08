import validateInput from '../../../utils/validateInput';

const validate = values => {
  const { category } = values;
  const errors = {
    category: validateInput(category, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ])
  };
  return errors;
};

export default validate;
