var express = require('express');

var mainController = require('../app/controllers/main_controller');

var router = express.Router();

router.route('/')
  .get(mainController.index);

module.exports = router;
