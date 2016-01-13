var Ballot = require('ballotModel');

app.get('/api/ballot', function(req, res) {

  Ballot.find(function(err, ballot) {
    if (err) {
      es.send(err)
      res.json(ballot);
    }
  });
});

app.post('/ballotcreation.html', function(req, res) {

    // create a ballot, information comes from request from Angular
  Ballot.create({
    topic : req.body.text,
    choices :[{choice:'choice1'},{choice:'choice2'},{choice:'choice3'}];
    addNewChoice: function(){
      var newItemNo = $scope.choices.length + 1;
      this.choices.push({'choice':'choice' + newItemNo});
    };
  }, function(err, todo) {
      if (err) {
          res.send(err);
      }
      Ballot.find(function(err, ballot) {
        if (err) {
          res.send(err)
          res.json(ballot);
        }
      });
    });
});

app.get('*', function(req, res) {
  res.sendfile('../index.html');
});