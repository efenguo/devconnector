const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  const errors = {};
  const localData = {};

  localData.school = !isEmpty(data.school) ? data.school : '';
  localData.degree = !isEmpty(data.degree) ? data.degree : '';
  localData.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  localData.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(localData.school)) {
    errors.school = 'School field is required';
  }

  if (Validator.isEmpty(localData.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(localData.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
  }

  if (Validator.isEmpty(localData.from)) {
    errors.from = 'From field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
