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
    return sails.models.creditrequest;
  }

  async requestInterest(clientId, cAmount, cDuration) {
    try {
      const client = await Client.findOne(clientId).populate('configuration');
      console.log(`CLient -> ${JSON.stringify(client, null, 3)}`);
      const {base_interest_rate, client_profit_percent, minimum_duration} = client.configuration;
      const rate = (cDuration/minimum_duration) * base_interest_rate;
      const amount = (rate * cAmount) + (client_profit_percent* cAmount);
      console.log(` Base Interest Rate: ${base_interest_rate}  Duration: ${cDuration} \n\nRate : ${rate}   Amount: ${amount}`)
      return {rate, amount};
    } catch (err) {
      throw err;
    }
  }

}

module.exports = new ClientService();

