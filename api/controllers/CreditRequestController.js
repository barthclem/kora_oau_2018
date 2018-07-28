/**
 * CreditRequest Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const CreditRequestController = {
  createCreditRequest: (req, res) => {
    CreditRequestService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new CreditRequest created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`CreditRequest: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllCreditRequests: (req, res) => {
    CreditRequestService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of CreditRequests`, result);
    }) .catch(err => {
      sails.log.debug(`CreditRequest: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchCreditRequest: (req, res) => {
    const creditRequestId = req.params.creditRequestId;
    CreditRequestService.getById(creditRequestId, 'status')
    .then(result => {
      return ResponseService.json(200, res, `Fetched CreditRequest Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`CreditRequest: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  requestInterest: (req, res) => {
    const {clientId, amount, duration} = req.query;
    if(!clientId || !amount || !duration) {
      return ResponseService.json(400, res, 'Bad Request', {message: 'ensure that clientId, amount and duration are in the request query '});
    }
    CreditRequestService.requestInterest(clientId,amount, duration)
    .then(result => {
      return ResponseService.json(200, res, `Fetched CreditRequest Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`CreditRequest: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateCreditRequest: (req, res) => {
    const creditRequestId = req.params.creditRequestId;
    const body = req.body;
    CreditRequestService.update(creditRequestId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated CreditRequest Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`CreditRequest: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteCreditRequest: (req, res) => {
    const creditRequestId = req.params.creditRequestId;
    CreditRequestService.delete(creditRequestId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted CreditRequest Successfully`);
    }) .catch(err => {
      sails.log.debug(`CreditRequest: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = CreditRequestController;

