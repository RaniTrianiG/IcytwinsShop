import validateInput from '../validateInput';

describe('Test Validator', () => {
  let rules;
  beforeEach(() => {
    rules = [{ rule: 'required', message: 'required' }];
  });
  it('Should return message (string) when value is empty or rule is required', () => {
    expect(validateInput('', rules)).toEqual(expect.any(String));
    expect(validateInput('test', rules)).toEqual('');
  });
  it("Should return message (string) when value isn't valid email", () => {
    rules[0].rule = 'email';
    expect(validateInput('testemail', rules)).toEqual(rules[0].message);
    expect(validateInput('testemail@email.com', rules)).toEqual(expect.any(String));
  });

  it('Length should exactly the same', () => {
    rules[0].rule = 'length';
    rules[0].lengthValue = 3;
    expect(validateInput('testemail', rules)).toEqual(rules[0].message);
    expect(validateInput('com', rules)).toEqual(expect.any(String));
  });

  it('Minimum length', () => {
    rules[0].rule = 'minLength';
    rules[0].lengthValue = 3;
    expect(validateInput('te', rules)).toEqual(rules[0].message);
    expect(validateInput('123', rules)).toBeFalsy();
  });

  it('Maximum length', () => {
    rules[0].rule = 'maxLength';
    rules[0].lengthValue = 3;
    expect(validateInput('testemail', rules)).toEqual(rules[0].message);
    expect(validateInput('123', rules)).toBeFalsy();
  });

  it('Pin', () => {
    rules[0].rule = 'pin';
    expect(validateInput('testemail', rules)).toEqual(rules[0].message);
    expect(validateInput('123', rules)).toBeFalsy();
  });

  it('mobilePhone', () => {
    rules[0].rule = 'mobilePhone';
    expect(validateInput('5364234', rules)).toEqual(rules[0].message);
    expect(validateInput('0857', rules)).toBeFalsy();
  });
  it('Just taking default switch case', () => {
    rules[0].rule = '';
    expect(validateInput('testemail', rules)).toBeFalsy();
  });
});
