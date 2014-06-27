var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Create a New Form'});
});

/* GET New Form Page. */
router.get('/formsubmit', function(req, res) {
  var db = req.db;
  var collection = db.get('formcollection');
  collection.find({},{},function(e,docs) {
    res.render('formsubmit', {
      "formcollection" : docs
    });
  });
});


/* GET Hello World page. */
router.get('/helloworld', function (req, res) {
  res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs) {
    res.render('userlist', {
      "userlist" : docs
     });
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
  var db = req.db;

  var userName = req.body.username;
  var userEmail = req.body.useremail;

  var collection = db.get('usercollection');

  collection.insert({
    "username" : userName,
    "email" : "userEmail"
  }, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database.")
    }
    else {
      res.location("userlist");
      res.redirect("userlist");
    }
  });
});

module.exports = router;
