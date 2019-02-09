const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  const errors = {};
  const localData = {};

  localData.email = !isEmpty(data.email) ? data.email : '';
  localData.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(localData.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(localData.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(localData.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
