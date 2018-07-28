/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class DebitStatusService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.debitstatus;
  }

}

module.exports = new DebitStatusService();

