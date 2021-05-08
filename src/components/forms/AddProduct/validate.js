import validateInput from '../../../utils/validateInput';

const validate = values => {
  // eslint-disable-next-line camelcase
  const { product_name, price, stock, discount, description } = values;

  const errors = {
    product_name: validateInput(product_name, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    price: validateInput(price, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    stock: validateInput(stock, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    discount: validateInput(discount, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ]),
    description: validateInput(description, [
      {
        rule: 'required',
        message: 'Field required'
      }
    ])
  };
  return errors;
};

export default validate;
