/**
	Generated by sails-inverse-model
	Date:Tue Jul 10 2018 06:32:59 GMT+0100 (WAT)
*/

module.exports = {
  attributes: {
    user: {
      model: 'ClientUser',
      required: true
    },
    payment_ref: {
      type: 'String',
      required: true
    },
    amount: {
      type: 'number',
      required: true
    },
    transaction_type: {
      model: 'TransactionType',
      required: true
    },
    visible: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
