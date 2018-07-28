/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class CreditRequestStatusService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.creditrequeststatusservice;
  }

}

module.exports = new CreditRequestStatusService();

