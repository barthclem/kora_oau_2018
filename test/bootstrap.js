const sails = require('sails');
//const _ = require('lodash');

global.chai = require('chai');
global.should = chai.should();
global._= require('lodash');
global.motherCompanyId = 2;

before(function (done) {

  this.timeout(20000);

  sails.lift({
    log: {
      level: 'verbose'
    },
    hooks: {
      grunt: false
    },
    models: {
      connection: 'default',
      migrate: 'drop'
    }
  }, (err) => {
    console.log(`\n\n Test Server Starting Error => ${JSON.stringify(err)}`);
    if(err) {return  done(err);}
    done(null, sails);
  });
});

after((done) => {
  if(sails && _.isFunction(sails.lower)) {
    sails.lower(done);
  }
});
