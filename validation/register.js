const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  const localData = {};

  localData.name = !isEmpty(data.name) ? data.name : '';
  localData.email = !isEmpty(data.email) ? data.email : '';
  localData.password = !isEmpty(data.password) ? data.password : '';
  localData.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(localData.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (!Validator.isLength(localData.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(localData.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(localData.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(localData.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(localData.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(localData.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(localData.password, localData.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
