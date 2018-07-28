/**
 * ClientConfiguration Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const ClientConfigurationController = {
  createClientConfiguration: (req, res) => {
    ClientConfigurationService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new ClientConfiguration created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`ClientConfiguration: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllClientConfigurations: (req, res) => {
    ClientConfigurationService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of ClientConfigurations`, result);
    }) .catch(err => {
      sails.log.debug(`ClientConfiguration: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchClientConfiguration: (req, res) => {
    const clientConfigurationId = req.params.clientConfigurationId;
    ClientConfigurationService.getById(clientConfigurationId)
    .then(result => {
      return ResponseService.json(200, res, `Fetched ClientConfiguration Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`ClientConfiguration: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateClientConfiguration: (req, res) => {
    const clientConfigurationId = req.params.clientConfigurationId;
    const body = req.body;
    ClientConfigurationService.update(clientConfigurationId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated ClientConfiguration Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`ClientConfiguration: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteClientConfiguration: (req, res) => {
    const clientConfigurationId = req.params.clientConfigurationId;
    ClientConfigurationService.delete(clientConfigurationId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted ClientConfiguration Successfully`);
    }) .catch(err => {
      sails.log.debug(`ClientConfiguration: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = ClientConfigurationController;

