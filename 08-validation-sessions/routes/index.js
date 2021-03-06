var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success:false, errors: req.session.errors });
  req.session.errors = null;
});

router.post('/submit',function(req,res,next){
  req.check('email','Invalid email address').isEmail();
  req.check('password','Password is invalid').isLength({min:4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if(errors){
    res.session.errors = errors;
    console.log("ERRRRRRRR");
  }

  res.redirect('/')
});


module.exports = router;
