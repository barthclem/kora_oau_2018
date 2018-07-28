/**
 * Client Service
 *
 * @module      :: Service
 * @description :: this defines the service for the client model
 *
 */

const BaseService = require('./BaseService');
class TransactionService extends BaseService {

  constructor() {
    super();
  }

  getModel() {
    return sails.models.transaction;
  }

  async makeDeposit (transactionObj) {
    try {
      const userId = transactionObj.user;
      const transact = await Transaction.create(transactionObj).fetch();
      if(transactionObj.transaction_type === 2) {
        const userAccount = await UserAccount.findOne({user: userId});
        userAccount.balance += transactionObj.amount;
        delete userAccount.id;
        await UserAccount.update(userAccount.id, userAccount);
      }
      return transact;
    } catch (err) {
      throw err;
    }
  }

  async payDebt (transactionObj, creditId) {
    try {
      const {amount} = transactionObj;
      const credit = await Credit.findOne(creditId).populate('creditor_request');
      const creditAmount = credit.credit_request? credit.credit_request.amount : 0;
      if( amount < creditAmount) {
        throw new Error('Insuffient Fund Error');
      }
      credit.status = 2; // 2 is the paid status
      await Transaction.create(transactionObj).fetch();
      delete credit.id;
      await Credit.update(creditId, credit);
      return {message: 'Debt paid succcessfully'};
    } catch (err) {
      throw err;
    }
  }

  async grantCreditRequest (transactionObj, creditDetails) {
    try {
      const {creditRequestId, creditorId} = creditDetails;
      const creditRequest = await CreditRequest.findOne(creditRequestId);
      if(_.isEmpty(creditRequest)) {
        throw new Error ('Credit Request does not exist');
      }
      const credit = await Credit.find({user: creditorId, status: 1 }); // 1 is the available status
      if(_.isEmpty(credit)) {
        throw new Error ('You do not available credit to grant this request');
      }
      credit.status = 2;
      const debit = {
        user: creditRequest.user,
        credit_request: creditRequest.id,
        credit: credit.id,
        duration: creditRequest.duration,
        status: 1
      };
      const creditId = credit.id;
      delete credit.id;
      await Credit.update(creditId, credit);
      await Debit.create(debit);
    } catch (err) {
      throw err;
    }
  }




}

module.exports = new TransactionService();

