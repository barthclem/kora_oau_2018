/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class UserStatusService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.userstatus;
  }

}

module.exports = new UserStatusService();

