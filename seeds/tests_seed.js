
exports.seed = function (knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return knex('users').insert({
        username: 'user1',
        password: '123'
      });
    })
    .then(function () { // Inserts seed entries one by one in series
      return knex('users').insert({
        username: 'user2',
        password: '456'
      });
    })
    .then(function () { // Inserts seed entries one by one in series
      return knex('users').insert({
        username: 'user3',
        password: '789'
      });
    });

};
