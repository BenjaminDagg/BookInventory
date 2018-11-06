var express = require('express');
const router = express.Router();



const books = [
  {
    title: 'C++ Bile',
    id: 400,
    price: 19.00,
    shipping: '1-3 Business Days',
    author: 'A.Z. Jazon',
    publisher:'Prentice Hall',
    availability: 12
  },
  {
    title: 'History of Hyposis',
    id: 100,
    price: 35.25,
    shipping: 'Overnight',
    author: 'A.P. Simmons',
    publisher: 'HarperCollins'
  }

];

var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://bdagg:myxboxname1996@ds153093.mlab.com:53093/bookinventory';
mongoClient.connect(dbUrl, {useNewUrlParser:true}, function(err,client) {
  if (err) {
    console.log(err);
  }

  var db = client.db('bookinventory');

  router.get('/books',(req,res) => {
    console.log('in books');
    db.collection('Books').find().toArray(function(err,result) {
      console.log(result);
      res.send(result);
  })
});

  router.get('/books/:id', (req,res) => {
    var id = req.param.id;
  res.send(req.params.id);
});
})




module.exports = router;

