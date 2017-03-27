var knex = require('knex')(require('../knexfile')['test']);

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');

module.exports = Bookshelf;  