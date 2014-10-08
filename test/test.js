require('should');
var a = require('..');
var b = require('../server');

describe('Awesome module', function() {
  it('Should return the expected value', function() {
    a(1.050, 1.010).toFixed(2).should.equal('5.24');
  });
  it('Should throw error when given bad values', function() {
    a.bind().should.throw();
  });
});

describe('Awesome server', function() {
  it('Should respond as expected', function(done) {
    require('supertest')(b)
    .get('/gtoa/1.050/1.010')
    .end(function(e, r, b) {
      r.statusCode.should.equal(200);
      parseFloat(r.text, 10).toFixed(2).should.equal('5.24');
      done(e);
    });

  });

});
