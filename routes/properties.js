'use strict';

var express = require('express');
var router = express.Router();

var Property = require('../models/property.js');

router.route('/')
  .get((req, res) => {
    Property
    .find({})
    .exec(res.handle);
  })
  .post((req, res) => {
    Property.create(req.body, res.handle);
  });

router.route('/:id')
  .get((req, res) => {
    Property
      .findById(req.params.id)
      .populate('tenants')
      .exec(res.handle)
  })
  .delete((req, res) => {
    Property.findByIdAndRemove(req.params.id, res.handle);
  })
  .put((req, res) => {
    Property.findByIdAndUpdate(req.params.id, req.body, {new:true}, res.handle);
  });


router.route('/:propId/tenants/:tenantId')
  .post((req, res) => {
    var propId = req.params.propId;
    var tenantId = req.params.tenantId;
    Property.addTenant(propId, tenantId, res.handle);
  })
  .delete((req, res) => {
    var propId = req.params.propId;
    var tenantId = req.params.tenantId;
    Property.removeTenant(propId, tenantId, res.handle);
  })




module.exports = router;
