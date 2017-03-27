var expect = require('chai').expect;
var config = require('../knexfile')['test'];
var knex = require('knex')(config);

var User = require('../models/user');

describe('User Route', function () {
  it('runs a test function', function () {
    expect(1).to.equal(1);
  });
});