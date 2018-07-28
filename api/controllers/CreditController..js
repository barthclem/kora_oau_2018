/**
 * Credit Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const CreditController = {
  createCredit: (req, res) => {
    CreditService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new Credit created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Credit: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllCredits: (req, res) => {
    CreditService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of Credits`, result);
    }) .catch(err => {
      sails.log.debug(`Credit: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchCredit: (req, res) => {
    const CreditId = req.params.CreditId;
    CreditService.getById(CreditId)
    .then(result => {
      return ResponseService.json(200, res, `Fetched Credit Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Credit: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateCredit: (req, res) => {
    const CreditId = req.params.CreditId;
    const body = req.body;
    CreditService.update(CreditId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated Credit Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Credit: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteCredit: (req, res) => {
    const CreditId = req.params.CreditId;
    CreditService.delete(CreditId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted Credit Successfully`);
    }) .catch(err => {
      sails.log.debug(`Credit: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = CreditController;

