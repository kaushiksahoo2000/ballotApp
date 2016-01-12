var express = require('express');
var bodyParser = require('body-parser');

var app = express();
console.log(__dirname );
app.use(express.static(__dirname + '/..' + '/client'))

app.listen(8000, function() {
  console.log("✔ Express server listening on port %d", 8000, app.get('env'));
});
