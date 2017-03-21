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


var books = [
   { name: 'Da vinci', author: { 'first_name': 'Bob', last_name: "White" }}, 
   { name: '50 shades of blue', author: { 'first_name': 'Bob', last_name: "Heinzeberg" }}
]; 

// Create table with json data column
var schemaCreation =function() {

    return knex.schema.dropTableIfExists('books')
        .then(function() {
            return knex.schema.createTable('books',function(table){
               table.increments();
               table.timestamps();
               table.json('data').nullable();
            });
         });

};


// Insert the books
var inserts = function() {
   var insertPromises = [];
   books.forEach(function(book) {
   
      insertPromises.push(
         knex('books')
            .insert({data: JSON.stringify(book), created_at : new Date(), updated_at: new Date() })
      );
   });

   return Promise.all(insertPromises);
};



// Perform some selects  on json 
var selects = function() {

   return knex('books').select(knex.raw("data->'author' as author")).whereRaw("data->'author'->>'first_name'=? ",[books[0].author.first_name])
      .then(function(rows) {
         console.log("Found "+rows.length+" books with authors first_name "+books[0].author.first_name);
         rows.forEach(function(row){
            console.log(row);
         });
      })
     .then(function() {
      return knex('books').select(knex.raw("data->'author' as book")).whereRaw("data->'author'->>'last_name'=? ",[books[0].author.last_name])
             .then(function(rows) {
                 console.log("Found "+rows.length+" book(s) with last_name "+books[0].author.last_name);
                 console.log(rows[0]);
             });
   });

};

// Main flow
schemaCreation()
   .then(function() {
      console.log('Table created');
   })
   .then(inserts)
   .then(function() {
      console.log('Inserts done');
   })
   .then(selects)
   .then(function() {
      process.exit(0);
   
   })
   .catch(function(error){
      console.log(error);
   });
 