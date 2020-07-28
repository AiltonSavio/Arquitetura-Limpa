const Joi = require('joi');

const postSchema = require('./post-schema');

const validator = (payload) => {
  const { error } = Joi.validate(payload, postSchema, { abortEarly: false });
  if (error) {
    const message = error.details.map((el) => el.message).join('\n');
    return {
      error: message,
    };
  }
  return true;
};

module.exports = validator;
