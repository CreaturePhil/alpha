var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /about', function() {
  it('should return 404 Page Not Found', function(done) {
    request(app)
      .get('/about')
      .expect(404, done);
  });
});
