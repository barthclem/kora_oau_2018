/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝


  /*************************************************
   *                Client EndPoints               *
   *************************************************/

  'POST /api/client': {
    controller: 'ClientController',
    action: 'createClient',

  },

  'GET /api/client': {
    controller: 'ClientController',
    action: 'fetchAllClients',

  },

  'GET /api/client/:clientId': {
    controller: 'ClientController',
    action: 'fetchClient',

  },

  'PUT /api/client/:clientId': {
    controller: 'ClientController',
    action: 'updateClient',

  },

  'DELETE /api/client/:clientId' : {
    controller: 'ClientController',
    action: 'deleteClient',

  },

  /*************************************************
   *              ClientUser EndPoints             *
   *************************************************/

  'POST /api/clientUser': {
    controller: 'ClientUserController',
    action: 'createClientUser',

  },

  'GET /api/clientUser': {
    controller: 'ClientUserController',
    action: 'fetchAllClientUsers',

  },

  'GET /api/clientUser/:clientUserId': {
    controller: 'ClientUserController',
    action: 'fetchClientUser',

  },

  'PUT /api/clientUser/:clientUserId': {
    controller: 'ClientUserController',
    action: 'updateClientUser',

  },

  'DELETE /api/clientUser/:clientUserId' : {
    controller: 'ClientUserController',
    action: 'deleteClientUser',

  },

  /*************************************************
   *              Credit EndPoints               *
   *************************************************/

  'POST /api/credit': {
    controller: 'CreditController',
    action: 'createCredit',

  },

  'GET /api/credit': {
    controller: 'CreditController',
    action: 'fetchAllCredits',

  },

  'GET /api/credit/:creditId': {
    controller: 'CreditController',
    action: 'fetchCredit',

  },

  'PUT /api/credit/:creditId': {
    controller: 'CreditController',
    action: 'updateCredit',

  },

  'DELETE /api/credit/:creditId' : {
    controller: 'CreditController',
    action: 'deleteCredit',

  },

  /*************************************************
   *              Debit EndPoints               *
   *************************************************/

  'POST /api/debit': {
    controller: 'DebitController',
    action: 'createDebit',

  },

  'GET /api/debit': {
    controller: 'DebitController',
    action: 'fetchAllDebits',

  },

  'GET /api/debit/:debitId': {
    controller: 'DebitController',
    action: 'fetchDebit',

  },

  'PUT /api/debit/:debitId': {
    controller: 'DebitController',
    action: 'updateDebit',

  },

  'DELETE /api/debit/:debitId' : {
    controller: 'DebitController',
    action: 'deleteDebit',

  },

  /*************************************************
   *           CreditRequest EndPoints             *
   *************************************************/

  'POST /api/creditRequest': {
    controller: 'CreditRequestController',
    action: 'createCreditRequest',

  },

  'GET /api/creditRequest': {
    controller: 'CreditRequestController',
    action: 'fetchAllCreditRequests',
  },

  'GET /api/creditRequest/:creditRequestId': {
    controller: 'CreditRequestController',
    action: 'fetchCreditRequest',

  },


  'GET /api/creditRequest/requestInterest': {
    controller: 'CreditRequestController',
    action: 'requestInterest',
  },

  'PUT /api/creditRequest/:creditRequestId': {
    controller: 'CreditRequestController',
    action: 'updateCreditRequest',

  },

  'DELETE /api/creditRequest/:creditRequestId' : {
    controller: 'CreditRequestController',
    action: 'deleteCreditRequest',

  },

  /*************************************************
   *        ClientConfiguration EndPoints          *
   *************************************************/

  'POST /api/clientConfiguration': {
    controller: 'ClientConfigurationController',
    action: 'createClientConfiguration',
  },

  'GET /api/clientConfiguration': {
    controller: 'ClientConfigurationController',
    action: 'fetchAllClientConfigurations',
  },

  'GET /api/clientConfiguration/:clientConfigurationId': {
    controller: 'ClientConfigurationController',
    action: 'fetchClientConfiguration',

  },

  'PUT /api/clientConfiguration/:clientConfigurationId': {
    controller: 'ClientConfigurationController',
    action: 'updateClientConfiguration',

  },

  'DELETE /api/clientConfiguration/:clientConfigurationId' : {
    controller: 'ClientConfigurationController',
    action: 'deleteClientConfiguration',

  },

  /*************************************************
   *             Transaction EndPoints             *
   *************************************************/

  'POST /api/transaction': {
    controller: 'TransactionController',
    action: 'createTransaction',
  },

  'GET /api/transaction': {
    controller: 'TransactionController',
    action: 'fetchAllTransactions',
  },

  'GET /api/transaction/:transactionId': {
    controller: 'TransactionController',
    action: 'fetchTransaction',
  },

  'PUT /api/transaction/:transactionId': {
    controller: 'TransactionController',
    action: 'updateTransaction',
  },

  'DELETE /api/transaction/:transactionId' : {
    controller: 'TransactionController',
    action: 'deleteTransaction',
  },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
