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

User.where('users', '').fetch({}).then(function(user) {
  console.log('user', user);
}).catch(function(err) {
  console.error('err', err);
});

module.exports = knex;

