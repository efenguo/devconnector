const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  const errors = {};
  const localData = {};

  localData.title = !isEmpty(data.title) ? data.title : '';
  localData.company = !isEmpty(data.company) ? data.company : '';
  localData.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(localData.title)) {
    errors.title = 'Job title field is required';
  }

  if (Validator.isEmpty(localData.company)) {
    errors.company = 'Company field is required';
  }

  if (Validator.isEmpty(localData.from)) {
    errors.from = 'From field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
