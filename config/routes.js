var express = require('express');

var homeController = require('../app/controllers/homeController');

var router = express.Router();

router.route('/')
  .get(homeController.index.get);

module.exports = router;
