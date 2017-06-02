var supertest = require('supertest');
var should = require('should');

describe('loading express', function() {
  var server = supertest.agent("http://localhost:4200");
  beforeEach(function() {
    server = require('./server');
  });

  afterEach(function() {
    server.close();
  });
  it('responds to /api', function testSlash(done) {
      server
      .get('/api')
      .expect("Content-type", /json/)
      .expect(200) //this is HTTP response
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        done();
      })
  });

  it('404 everything else', function testPath(done) {
      server
      .get('/foo/bar')
      .expect(404, done);
  })
})
