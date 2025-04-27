const Joi = require('joi');

const login = Joi.object({
  email: Joi.any().required().messages({
    'any.required': 'Email is required',
  }),
  password: Joi.any().required().messages({
    'any.required': 'Password is required',
  }),
});

module.exports = {
  login
};
