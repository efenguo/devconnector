const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  const errors = {};
  const localData = {};

  localData.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(localData.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }
  if (Validator.isEmpty(localData.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
