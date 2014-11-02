var request = require('supertest');
var app = require('../index.js');

describe('GET / in development env', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /about in development env', function() {
  it('should return 404 Page Not Found', function(done) {
    request(app)
      .get('/about')
      .expect(404, done);
  });
});

app.set('env', 'production');

describe('GET / in production env', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /about in production env', function() {
  it('should return 404 Page Not Found', function(done) {
    request(app)
      .get('/about')
      .expect(404, done);
  });
});
