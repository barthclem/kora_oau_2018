/**
 * ClientUser Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const ClientUserController = {
  createClientUser: (req, res) => {
    ClientUserService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new ClientUser created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`ClientUser: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllClientUsers: (req, res) => {
    ClientUserService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of ClientUsers`, result);
    }) .catch(err => {
      sails.log.debug(`ClientUser: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchClientUser: (req, res) => {
    const ClientUserId = req.params.ClientUserId;
    ClientUserService.getById(ClientUserId)
    .then(result => {
      return ResponseService.json(200, res, `Fetched ClientUser Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`ClientUser: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateClientUser: (req, res) => {
    const ClientUserId = req.params.ClientUserId;
    const body = req.body;
    ClientUserService.update(ClientUserId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated ClientUser Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`ClientUser: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteClientUser: (req, res) => {
    const ClientUserId = req.params.ClientUserId;
    ClientUserService.delete(ClientUserId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted ClientUser Successfully`);
    }) .catch(err => {
      sails.log.debug(`ClientUser: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = ClientUserController;

