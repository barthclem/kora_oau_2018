/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class ClientService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.clientuser;
  }

}

module.exports = new ClientService();

