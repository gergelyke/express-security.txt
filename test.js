const test = require('tape')
const express = require('express')
const supertest = require('supertest')

const securityTxt = require('./')

test('Security.txt support all the properties', function (t) {
  t.plan(1)
  const app = express()
  app.get('/robots.txt', securityTxt({
    contact: 'email@example.com',
    encryption: 'encryption',
    acknowledgements: 'acknowledgements'
  }))

  supertest(app)
    .get('/robots.txt')
    .expect(200)
    .end(function(err, res) {
      t.equal(res.text, `Contact: email@example.com\nEncryption: encryption\nAcknowledgements: acknowledgements`)
    });
})
