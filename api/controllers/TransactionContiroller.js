/**
 * Transaction Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const TransactionController = {

  createTransaction: (req, res) => {

    TransactionService.create(req.body)
    .then(result => {
      return ResponseService.json(201, res, `new Transaction created successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Transaction: Create Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'E_INVALID_NEW_RECORD':
          return ResponseService.json(400, res, 'Bad Request Body', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  fetchAllTransactions: (req, res) => {
    TransactionService.getAll()
    .then(result => {
      return ResponseService.json(200, res, `the list of Transactions`, result);
    }) .catch(err => {
      sails.log.debug(`Transaction: Fetch All Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  fetchTransaction: (req, res) => {
    const transactionId = req.params.transactionId;
    TransactionService.getById(transactionId)
    .then(result => {
      return ResponseService.json(200, res, `Fetched Transaction Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Transaction: Fetch Error -> ${JSON.stringify(err)}`);
      return ResponseService.json(500, res, 'Internal Server Error, please try again');
    });
  },

  updateTransaction: (req, res) => {
    const transactionId = req.params.transactionId;
    const body = req.body;
    TransactionService.update(transactionId, body)
    .then(result => {
      return ResponseService.json(200, res, `Updated Transaction Successfully`, result);
    }) .catch(err => {
      sails.log.debug(`Transaction: Update Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },

  deleteTransaction: (req, res) => {
    const transactionId = req.params.transactionId;
    TransactionService.delete(transactionId)
    .then(() => {
      return ResponseService.json(200, res, `Deleted Transaction Successfully`);
    }) .catch(err => {
      sails.log.debug(`Transaction: Delete Error -> ${JSON.stringify(err)}`);
      switch(err.type || err.code) {
        case 'NO_RECORD_FOUND':
          return ResponseService.json(400, res, 'Bad Request', err);
        default:
          return ResponseService.json(500, res, 'Internal Server Error, please try again');
      }
    });
  },


};
module.exports = TransactionController;

