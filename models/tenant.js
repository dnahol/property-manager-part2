'use strict';

var mongoose = require('mongoose');
var tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  children: { type: Number, defualt: 0 },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' }
})



var Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
