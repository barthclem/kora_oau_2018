/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class DebitService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.debit;
  }

}

module.exports = new DebitService();

