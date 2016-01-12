'use strict'

//define module requirements
let express = require('express');
let bodyParser = require('body-parser');


//create instance of express app as app
let app = express();


//create database connection
let knex = require('knex')({
  client: 'mysql',
  connection: {
    host      : 'mysqlcluster7.registeredsite.com',
    user      : 'ballot_admin',
    password  : '!Qaz2wsx3edc',
    database  : 'greenfield_ballot',
    charset   : 'utf8'
  }
});

let Bookshelf = require('bookshelf')(knex);

//serve static assets
app.use(express.static(__dirname + '/..' + '/client'))


//start simple server listening
app.listen(8000, function() {
  console.log("✔ Express server listening on port %d", 8000, app.get('env'));
});
