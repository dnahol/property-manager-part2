'use strict';

var express = require('express');
var router = express.Router();

var Tenant = require('../models/tenant.js')

/* GET tenants listing. */
router.route('/')
  .get((req, res) => {
    Tenant
    .find({})
    .exec(res.handle);
  })
  .post((req, res) => {
    Tenant.create(req.body, res.handle);
  });

router.route('/:id')
  .get((req, res) => {
    Tenant
    .findById(req.params.id)
    .populate('tenants')
    .exec(res.handle)
  })
  .delete((req, res) => {
    Tenant.findByIdAndRemove(req.params.id, res.handle);
  })
  .put((req, res) => {
    Tenant.findByIdAndUpdate(req.params.id, req.body, {new:true}, res.handle);
  })

module.exports = router;
