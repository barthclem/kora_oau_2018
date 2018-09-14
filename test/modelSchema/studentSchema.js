const Joi = require('joi');

module.exports = {
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
  id: Joi.string().required(),
  user_id: Joi.string().required(),
  level: Joi.string().allow('').optional()
};
