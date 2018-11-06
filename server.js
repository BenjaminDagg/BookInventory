var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routes/routes');


app.use(routes);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//app.use(routes);

//static index file
app.use(express.static(__dirname + '/dist/book-inventory'));

//return index file
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/dist/book-inventory/index.html'));
});

app.listen(process.env.port || 8080,() => {
  console.log('server started');
});