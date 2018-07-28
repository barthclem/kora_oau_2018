
class CustomError extends Error {

  constructor(name, code, message, attrName) {
    super(message);
    this.code = code;
    this.type = name;
    this.description = message;
    this.fields = attrName;
  }

}


module.exports = {

  INVALID_CREDENTIALS: 'AUTHENTICATION_ERR',

  invalidCredentialsError: () => {
    const error = new CustomError(
         'AUTHENTICATION_ERR',
          400,
          'Invalid Email or Password'
    );
    return error;
  },

  INVALID_TOKEN: 'INVALID_TOKEN_ERR',

  invalidTokenError: () => {
    const error = new CustomError(
         'INVALID_TOKEN_ERR',
          400,
          'The supplied token is invalid|expired'
    );
    return error;
  },

  INVALID_PARAMETER: 'INVALID_PARAMETER_ERR',

  invalidParameterError: (field, param) => {
    const error = new CustomError(
         'INVALID_PARAMETER_ERR',
         400,
         `Invalid Field: No ${field} exists with the value of ${param}`
    );
    return error;
  },

  UNIQUE_CONSTRAINT: 'UNIQUE_CONSTRAINT_ERR',

  uniqueConstraintsError: (field1, field2) => {
    const error = new CustomError(
        'UNIQUE_CONSTRAINT_ERR',
        400,
      `an entity with ${field1} and ${field2} exists`
    );
    return error;
  },

  CREATE_ENTITY: 'FIELDS_VALIDATION_ERR',

  createEntityError: (message) => {
    const error = new CustomError(
         'FIELDS_VALIDATION_ERR',
         400,
         `One or more fields raised constraints error. ${message? message : ''}`
    );
    return error;
  },

  NO_RECORD_FOUND: 'NO_RECORD_FOUND',

  noRecordFoundError: (id, operation) => {
    const error = new CustomError(
         'NO_RECORD_FOUND_ERR',
         400,
         `You are trying to perform ${operation} operation on a record with id ${id} that does not exist`
    );
    return error;
  },

  NO_ENTITY: 'NO_ERR',

  noEntityErr: (entity, set) => {
    const error = new CustomError(
         'NON_EXISTENCE_ENTITY_ERR',
         400,
         `This ${entity} does not exist ${set ? 'in '+ set : ''}`
    );
    return error;
  },


  INVALID_EXTERNAL_ADDRESS: 'INVALID_ADDRESS_ERR',

  invalidAddressError: (message) => {
    const error = new CustomError(
         'INVALID_ADDRESS_ERR',
         400,
         `This check ${message} in the link and sure that it is correct`
    );
    return error;
  },



  AUTHORIZATION_HEADER: 'AUTHORIATION_HEADER_ERR',

  authorizationHeaderError: (message) => {
    const error = new CustomError(
         'AUTHORIATION_HEADER_ERR',
         401,
        `Authorization header is missing in this request ${message ? ':' + message: ''}`
    );
    return error;
  },

  LINK_ACCSS: 'LINK_AUTHENTICATION_ERR',

  linkAccessError: (link) => {
    const error = new CustomError(
         'LINK_AUTHENTICATION_ERR',
         403,
         `You don't sufficient priveledge to use this company ${link} link. Contact the admin`
    ); return error;
  },

  AUTHORIZATION_MISSING: 'MISSING_AUTHORIZATION_ERR',

  authorizationError: (resource, action) => {
    const error = new CustomError(
        'MISSING_AUTHORIZATION_ERR',
         401,
         `You don't have the authorization ${resource ? 'to access this ' + resource: ''}${action ? 'to perform ' + action + 'action': ''}.` );
    return error;
  },

  internalError: (error, httpStatus) => {
    const customError = new CustomError(
        error.code, httpStatus, error.message, error.attrNames
    );
    return customError;
  }
};

