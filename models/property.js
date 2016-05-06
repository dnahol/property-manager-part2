'use strict';

var Tenant = require('./tenant.js')

var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  rentPrice: { type: Number, required: true },
  utilitiesCost: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  baths: { type: Number, required: true },
  sq: { type: Number, required: true},
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }]
})


propertySchema.statics.addTenant = function(propId, tenantId, cb) {
  Property.findById(propId, (err1, prop) => {
    Tenant.findById(tenantId, (err2, tenant) => {
      if(err1 || err2) return res.status(400).send(err1 || err2);

      var propHasTenant = prop.tenants.indexOf(tenant) !== -1;
      var tenantHasProp = tenant.property == propId;

      if(propHasTenant || tenantHasProp) {
        return cb({error: "Property already has this tenant!"});
      }

      prop.tenants.push(tenantId);
      tenant.property = propId;

      prop.save((err1) => {
        tenant.save((err2) => {
          cb(err1 || err2);
        });
      });
    });
  });
};


propertySchema.statics.removeTenant = function(propId, tenantId, cb) {
  Property.findById(propId, (err, prop) => {
    if(err) return res.status(400).send(err);
    var index = prop.tenants.indexOf(tenantId);

    prop.tenants.splice(index, 1);

    prop.save(cb);
  });
};


var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
