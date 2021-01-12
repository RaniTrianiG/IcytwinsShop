const validate = (value, rules) => {
  let error = '';
  rules.forEach(rule => {
    switch (rule.rule) {
      case 'required':
        if (!value) error = rule.message;
        break;
      case 'email':
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = rule.message;
        }
        break;
      case 'pin':
        if (value && !Number(value)) {
          error = rule.message;
        }
        break;
      case 'length':
        if (value && value.length !== rule.lengthValue) {
          error = rule.message;
        }
        break;
      case 'minLength':
        if (value && value.length < rule.lengthValue) {
          error = rule.message;
        }
        break;
      case 'maxLength':
        if (value && value.length > rule.lengthValue) {
          error = rule.message;
        }
        break;
      case 'mobilePhone':
        if (value && !/^([08])\d+$/i.test(value)) {
          error = rule.message;
        }
        break;
      default:
        return null;
    }
  });
  return error;
};

export default validate;
