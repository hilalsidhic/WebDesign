var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/submit",function(req, res){
  console.log(req.body);
  mongo.connect('mongodb://localhost:27017',function(err,client){
    if(err)
      console.log('error')
    else 
      client.db('sample').collection('user').insertOne(req.body)

  })
  res.send('OKhjjrsrs');

})

module.exports = router;
