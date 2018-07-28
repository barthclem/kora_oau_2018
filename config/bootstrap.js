/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await CreditRequestStatus.count() > 0) {
    return done();
  }
  //
  await CreditRequestStatus.createEach([
    { name: 'fresh', rand: 'GDde8fR4h9FH94hr', },
    { name: 'granted', rand: 'GDde8fjkfkgR4h9FH94hr', },
  ]);

  await UserStatus.createEach([
    { name: 'active', rand: 'GDde8fR4h9FH94hr', },
    { name: 'banned', rand: 'GDde8fjkfkgR4h9FH94hr', },
  ]);

  await CreditStatus.createEach([
    { name: 'pending', rand: 'GDde8fR4h9FH94hr', },
    { name: 'refunded', rand: 'GDde8fjkfkgR4h9FH94hr', },
  ]);

  await DebitStatus.createEach([
    { name: 'cleared', rand: 'GDde8fR4h9FH94hr', },
    { name: 'default', rand: 'GDde8fjkfkgR4h9FH94hr', },
  ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
