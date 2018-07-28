/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class CreditStatusService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.creditstatus;
  }

}

module.exports = new CreditStatusService();

