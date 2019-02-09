const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  const errors = {};
  const localData = {};

  localData.handle = !isEmpty(data.handle) ? data.handle : '';
  localData.status = !isEmpty(data.status) ? data.status : '';
  localData.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(localData.handle, { min: 2, max: 40 })) {
    errors.handle = 'handle needs to between 2 and 4 characters';
  }

  if (Validator.isEmpty(localData.handle)) {
    errors.handle = 'Handle is required';
  }

  if (Validator.isEmpty(localData.status)) {
    errors.status = 'Status is required';
  }

  if (Validator.isEmpty(localData.skills)) {
    errors.skills = 'Skills is required';
  }

  if (!isEmpty(localData.website)) {
    if (!Validator.isURL(localData.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(localData.youtube)) {
    if (!Validator.isURL(localData.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(localData.twitter)) {
    if (!Validator.isURL(localData.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(localData.facebook)) {
    if (!Validator.isURL(localData.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(localData.linkedin)) {
    if (!Validator.isURL(localData.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(localData.instagram)) {
    if (!Validator.isURL(localData.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
