var express = require('express');
const router = express.Router();



var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://bdagg:myxboxname1996@ds153093.mlab.com:53093/bookinventory';
mongoClient.connect(dbUrl, {useNewUrlParser:true}, function(err,client) {
  if (err) {
    console.log(err);
  }

  var db = client.db('bookinventory');

  router.get('/books',(req,res) => {

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

