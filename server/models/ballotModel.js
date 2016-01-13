var Ballot = Bookshelf.model('Todo', {

  topic : req.body.text,
  choices :[{choice:'choice1'},{choice:'choice2'},{choice:'choice3'}];
  
  addNewChoice: function(){
    var newItemNo = $scope.choices.length + 1;
    this.choices.push({'choice':'choice' + newItemNo});
  };
});