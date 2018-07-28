/**
 * Debit Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const DebitController = {
  createDebit: (req, res) => {
    DebitService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new Debit created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Debit: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllDebits: (req, res) => {
    DebitService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of Debits`, result);
    }) .catch(err => {
      sails.log.debug(`Debit: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchDebit: (req, res) => {
    const DebitId = req.params.DebitId;
    DebitService.getById(DebitId)
    .then(result => {
      return ResponseService.json(200, res, `Fetched Debit Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Debit: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateDebit: (req, res) => {
    const DebitId = req.params.DebitId;
    const body = req.body;
    DebitService.update(DebitId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated Debit Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Debit: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteDebit: (req, res) => {
    const DebitId = req.params.DebitId;
    DebitService.delete(DebitId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted Debit Successfully`);
    }) .catch(err => {
      sails.log.debug(`Debit: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = DebitController;

