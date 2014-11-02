var homeController = (function() {
  var controller = {};

  controller.index = {
    get: function(req, res) {
      res.render('index', {
        title: 'Alpha'
      });
    }
  };

  return controller;
})();

module.exports = homeController;
