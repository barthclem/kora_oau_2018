const Joi = require('joi');

module.exports = {
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
  id: Joi.string().optional(),
  name: Joi.string().required(),
  login_id: Joi.string().required(),
  email: Joi.string().allow('').required(),
  phone: Joi.string().allow('').required(),
  institution_id: Joi.string().required(),
  password: Joi.string().optional(),
  role_id: Joi.string().required()
};
