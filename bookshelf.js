// var connectionString = 'postgres://localhost:5432/postgres';
var Promise = require('bluebird');

var knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'postgres',
    database: 'dummy',
    port: 5432,
    host: 'localhost',
    password: ''
  },
  debug: false,
  pool: {
    min: 1,
    max: 2
  }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'dummy_users'
});

// Equivalent to "SELECT * FROM dummy_users"

function getAllUsers(cb) {

  User.where({}).fetch({}).then(function (user) {
    // console.log('user', user.get('users'));
    cb(user.get('users'));
  }).catch(function (err) {
    console.error('err', err);
  });
}

function printUser (aUser) {
  console.log('a User', aUser);
}

getAllUsers(printUser);

// Equivalent to "INSERT INTO dummy_users (users) VALUES ('aNewUser');
new User({ users: 'aNewUser' }).save().then(function (model) {
  // ...
  console.log('model', model);
}).catch(function (err) {
  console.log('err', err);
});

module.exports = knex;

