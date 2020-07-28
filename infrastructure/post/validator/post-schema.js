const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.string().required().error(() => 'invalid or malformed input: id'),
  title: Joi.string().required().error(() => 'invalid or malformed input: title'),
  description: Joi.string().required().error(() => 'invalid or malformed input: description'),
  image: Joi.string().required().error(() => 'invalid or malformed input: image'),
  tags: Joi.string().required().error(() => 'invalid or malformed input: tags'),
});

module.exports = schema;
