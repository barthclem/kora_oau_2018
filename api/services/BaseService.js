/**
 * Base Service
 *
 * @module      :: Service
 * @description :: this defines the base services of all models
 *
 */

class BaseService {

  /**
     * Constructor of the Base Service
     */
  constructor() {

  }

  getModel() {
    return {};
  }

  /**
      * @name create
      * @description :: creates a record of a model
      * @param modelData :: the data of the model to be added to the database
      * @returns {Promise}
      */
  async create(modelData) {
    try {
      modelData.rand = this.generateRand();
      let newModel = await this.getModel().create(modelData).fetch();
      newModel = _.omit(newModel, ['visible']);
      return newModel;
    } catch (err) {
      throw err;
    }
  }

  /**
      * @name GetById
      * @description :: fetches a record of a model using its id
      * @param modelId :: the id of the model
      * @returns {Promise}
      */
  async getById(modelId, field) {
    try{
      let foundModel = await  this.getModel().findOne({id: modelId, visible:true}).populate(field || '');
      if (foundModel || !_.isEmpty(foundModel)) {
        foundModel = _.omit(foundModel, ['visible']);
      }
      return foundModel;
    }
    catch(err) {
      throw err;
    }
  }

  /**
      * @name exists
      * @description :: checks if a record of a model exist using its id
      * @param modelId :: the id of the model
      * @returns {Promise}
      */
  async exists(modelId) {
    try{
      const foundModel = await this.getModel().findOne({id: modelId, visible:true});
      if(!foundModel || _.isEmpty(foundModel)) {
        return false;
      }
      return true;
    }
    catch(err) {
      throw err;
    }
  }


  /**
      * @name CustomGetOne
      * @description :: fetches a record of a model using one of its properties
      * @param modelProp :: an query object e.g {name: 'ade', age: 5}
      * @returns {Promise}
      */
  async customGetOne(modelProp) {
    try{
      modelProp.visible = true;
      let foundModel = await this.getModel().findOne(modelProp);
      if (foundModel || !_.isEmpty(foundModel)) {
        foundModel = _.omit(foundModel, ['visible']);
      }
      return foundModel;
    }
    catch(err) {
      throw err;
    }
  }

  /**
      * @name CustomeGetAll
      * @description :: fetches many record of a model using one of its properties
      * @param modelProp :: an query object e.g {name: 'ade', age: 5}
      * @returns {Promise}
      */
  async customGetAll(modelProp) {
    try{
      modelProp.visible = true;
      let foundModels = await this.getModel().find(modelProp);
      if (foundModels || !_.isEmpty(foundModels)) {
        foundModels = foundModels.map( foundModel => {
          foundModel = _.omit(foundModel, ['visible']);
          return foundModel;
        });
      }
      return foundModels;
    }
    catch(err) {
      throw err;
    }
  }

  /**
      * @name GetAll
      * @description :: fetches all the records of a model
      * @returns {Promise}
      */
  async getAll() {
    try{
      let foundModels = await  this.getModel().find({visible:true});
      if (foundModels || !_.isEmpty(foundModels)) {
        foundModels = foundModels.map( foundModel => {
          foundModel = _.omit(foundModel, ['visible']);
          return foundModel;
        });
      }
      return foundModels;
    }
    catch(err) {
      throw err;
    }
  }

  /**
      * @name update
      * @description :: update a record of a model
      * @param modelId :: the id of the model to be updated
      * @param modelData :: an object holding the new data of the record
      * @returns void
      */
  async update(modelId, modelData){
    try{
      const model = await this.getModel().update({ id: modelId, visible: true}, modelData)
      .fetch();
      if(_.isEmpty(model)) {
        throw CustomError.noRecordFoundError(modelId, 'update');
      }
      let updatedModel = model[0];
      if (updatedModel) {
        updatedModel = _.omit(updatedModel, ['visible']);
      }
      return updatedModel;
    }
    catch(err) {
      throw err;
    }
  }

  /**
      * @name customUpdate
      * @description :: update a record of a model
      * @param modelProp :: custom query that defines the record to be updated e.g role - {name: 'Akinlat-Store-Admin', storeId: 2}
      * @param modelData :: an object holding the new data of the record
      * @returns void
      */
  async customUpdate(modelProp, modelData){
    try{
      modelProp.visible = true;
      const model = await this.getModel().update(modelProp, modelData)
        .fetch();
      if(_.isEmpty(model)) {
        throw CustomError.noRecordFoundError(modelId, 'update');
      }
      let updatedModel = model[0];
      if (updatedModel) {
        updatedModel = _.omit(updatedModel, ['visible']);
      }
      return updatedModel;
    }
    catch(err) {
      throw err;
    }
  }

  /**
      * @name delete
      * @description :: delete a record of a model
      * @param modelId :: the id of the model to be updated
      * @returns void
      */
  async  delete(modelId) {
    try{
      const model = await this.getModel().update({id: modelId, visible: true}, {visible : false}).fetch();
      if(!_.isEmpty(model)) {
        return null;
      }
      throw CustomError.noRecordFoundError(modelId, 'delete');
    }
    catch(err) {
      throw err;
    }
  }

  generateRand () {
    const uuid = require('uuid/v1'); // this uses timestamp
    const Chance = require('chance');
    const chance = new Chance();
    return `${uuid()}${chance.string()}`;
  }

  formatModelOutput (result) {
    if(Array.isArray(result)) {
      return result.map(item => this.formatModelOutput(item));
    }
    Object.keys(result).forEach(prop => {
      if (Array.isArray(result[prop]) && !_.isEmpty(result[prop])) {
        result[prop] = this.formatModelOutput(result[prop]);
      }
    });
    return _.omit(result, ['visible']);
  }
}

module.exports = BaseService;
