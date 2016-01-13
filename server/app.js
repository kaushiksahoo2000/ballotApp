'use strict'

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

//define module requirements
let _ = require('lodash');
let Bookshelf = require('bookshelf')(knex);
let express = require('express');
let bodyParser = require('body-parser');

//create instance of express app as app
let app = express();

//application router
let router = express.Router();

//application body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//////////////////////
//      Models      //
//////////////////////
//ballot model

let Ballot = Bookshelf.Model.extend({
  tableName: 'ballot',

  hasTimestamps: true,

  ballotOption: function () {
    return this.hasMany(BallotOption, 'ballot_id');
  }

});

//////////////////////
//   Collections    //
//////////////////////
//Ballots collection
let Ballots = Bookshelf.Collection.extend({
  model: Ballot
});

//////////////////////
//   API Endpoints  //
//////////////////////
// //Ballots
// //Collection Ballots
// //Model Ballot
//
// /*
//     *GET       /ballots                              //fetch all ballots
//     *POST      /ballots                              //create a new ballots
//     TODO GET       /ballots/:id                          //fetch a single ballot by id
//     TODO GET       /ballots/:id                          //fetch a single ballot by ballot code
//     TODO GET       /ballots/user/:user_id                //fetch all ballots by user_id
//     TODO PUT       /ballots/:id                          //update ballot
//     TODO DELETE    /ballots/:id                          //delete ballot
// */
router.route('/ballots')
//GET       /ballots                              //fetch all ballots
.get(function (req, res) {
  Ballots.forge()
  .fetch()
  .then(function (ballots) {
    res.json({error: false, data: ballots.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
})
.post(function (req, res) {
  console.log('request => ', req);
  console.log('request.body => ', req.body);
  Ballot.forge({
    ballot_name: req.body.ballotName,
    user_id: req.body.userId,
    ballot_option_one: req.body.ballotOptionOne,
    ballot_option_two: req.body.ballotOptionTwo,
    ballot_option_three: req.body.ballotOptionThree,
    ballot_option_four: req.body.ballotOptionFour,
    ballot_option_five: req.body.ballotOptionFive,
    ballot_code: req.body.ballotCode
  })
  .save()
  .then(function (ballot) {
    res.json({error: false, data: {id: ballot.get('id')}});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
});


//serve static assets
app.use(express.static(__dirname + '/..' + '/client'));
app.use('/api', router);

//cors
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//start simple server listening
app.listen(8000, function() {
  console.log("✔ Express server listening on port %d", 8000, app.get('env'));
});
