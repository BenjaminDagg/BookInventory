var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var cors = require('cors');
app.use(cors());

var routes = require('./routes/routes');


app.use(routes);


//static index file
app.use(express.static(__dirname + '/dist/book-inventory'));




app.listen(process.env.PORT || 8080,() => {
  console.log('server started');
});
