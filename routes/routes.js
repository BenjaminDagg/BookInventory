var express = require('express');
const router = express.Router();



const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbUrl = username + ":" + password + process.env.DB_URL;

var mongoClient = require('mongodb').MongoClient;
//var dbUrl = 'mongodb://bdagg:myxboxname1996@ds153093.mlab.com:53093/bookinventory';
mongoClient.connect(dbUrl, {useNewUrlParser:true}, function(err,client) {
  if (err) {
    console.log(err);
  }

  var db = client.db('bookinventory');

  router.get('/books',(req,res) => {
    console.log('in books');
    db.collection('Books').find().toArray(function(err,result) {

      res.send(result);
  })
});

  router.get('/books/:id', (req,res) => {
    var id = req.param.id;
  res.send(req.params.id);
});
})




module.exports = router;

