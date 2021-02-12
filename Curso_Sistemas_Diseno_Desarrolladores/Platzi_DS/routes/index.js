var express = require('express');
var router = express.Router();
var version = require('../package-lock.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , version:version.version});
});

//-----------------------------------------------COMPONENTES
router.get('/navbar' , (req,res,next)=>{
  res.render('components/navbar' , {title:'Express'})
})

module.exports = router;
