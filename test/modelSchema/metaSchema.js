const Joi = require('joi');

module.exports = {
  limit: Joi.number().required(),
  previousPage: Joi.number().allow(null).required(),
  nextPage: Joi.number().allow(null).required(),
  pageCount: Joi.number().required(),
  total: Joi.number().required(),
  page: Joi.number().optional()
};
