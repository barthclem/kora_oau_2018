/**
 * Client Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const ClientController = {
  createClient: (req, res) => {
    ClientService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new Client created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Client: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllClients: (req, res) => {
    ClientService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of Clients`, result);
    }) .catch(err => {
      sails.log.debug(`Client: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchClient: (req, res) => {
    const ClientId = req.params.ClientId;
    ClientService.getById(ClientId)
    .then(result => {
      return ResponseService.json(200, res, `Fetched Client Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Client: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateClient: (req, res) => {
    const ClientId = req.params.ClientId;
    const body = req.body;
    ClientService.update(ClientId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated Client Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Client: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteClient: (req, res) => {
    const ClientId = req.params.ClientId;
    ClientService.delete(ClientId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted Client Successfully`);
    }) .catch(err => {
      sails.log.debug(`Client: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = ClientController;

