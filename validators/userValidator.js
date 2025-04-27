const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().empty('').min(2).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().empty('').email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Must be a valid email address',
    'any.required': 'Email is required',
  }),
  age: Joi.number().integer().min(0).optional().messages({
    'number.base': 'Age must be a number',
    'number.min': 'Age must be a positive number',
  }),
  password: Joi.string().empty('').required().messages({
    'string.empty': 'Password is required',
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});

module.exports = {
  userSchema
};
