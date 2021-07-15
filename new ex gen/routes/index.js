var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  const person={name:"hilal",comments:{comment:"this is nice", Date:"10-04-1978"}};

  const values=["hilal", "H3H3", "na#l"];
  const user={name:"hilal",admin:true}
  res.render('index',{values, person,user});
});

module.exports = router;
