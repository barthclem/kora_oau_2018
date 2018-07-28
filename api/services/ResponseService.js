/**
 * ResponseService.js
 * The Service formats the response object
 */

module.exports = {
  json: function (status, res, message, data, meta) {
    const response = {
      message: message
    };

    response.success = `${status}`.match('^([23]0[0-9])$') ? true : false;
    if(typeof data !== 'undefined' && !(data instanceof Error)) {
      response.data = data;
    }
    if(typeof meta !== 'undefined') {
      response.meta = meta;
    }

    if( data instanceof Error) {
      response.error = data;
      sails.log.debug();
    }

    return res.status(status).json(response);
  }
};
