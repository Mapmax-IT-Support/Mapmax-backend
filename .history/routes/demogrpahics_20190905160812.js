var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Demographics' });
});

router.get('/population/city/:lat/:lng', async (req, res) => {
  let data = await city.getCityPopulation(req.params.lat, req.params.lng).then(data => data)
  res.header("Access-Control-Allow-Origin", ORIGIN)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
})

// get age info
router.get('/age/:range/:lat/:lng', async (req, res) => {
  let data = await city.getAge(req.params.range, req.params.lat, req.params.lng).then(data => data)
  res.header("Access-Control-Allow-Origin", ORIGIN)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
})

// get income 
router.get('income/:range/:lat/:lng', async (req, res) => {
  let data = await city.getIncome(req.params.range, req.params.lat, req.params.lng).then(data => data)
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", ORIGIN)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.send(data);
})

// get social
router.get('social/:range/:lat/:lng', async (req, res) => {
  let data = await city.getSocial(req.params.range, req.params.lat, req.params.lng).then(data => data)
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", ORIGIN)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.send(data);
})

// get basic
router.get('basic/:range/:lat/:lng', async (req, res) => {
  let data = await city.getBasic(req.params.range, req.params.lat, req.params.lng).then(data => data)
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", ORIGIN)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.send(data);
})

// get tract
router.get('/tract/:lat/:lng', async (req, res) => {
  let data = await city.getTract(req.params.lat, req.params.lng).then(data => data)
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", ORIGIN)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.send(data);
})

module.exports = router;