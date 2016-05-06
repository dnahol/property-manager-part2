'use strict';

var app = angular.module('propertyApp');

app.service('Properties', function($http, $q) {
  this.getAll = () => {
    return $http.get('/api/properties')
    .then(res => {
      return $q.resolve(res.data);
    });
  };

  this.getById = id => {
    return $http.get(`/api/properties/${id}`)
    .then(res => {
      return $q.resolve(res.data);
    })
  };

  this.create = propInfo => {
    return $http.post('/api/properties', propInfo)
    .then(res => {
      return $q.resolve(res.data);
    })
  };

  this.update = (id, propEdit) => {
    return $http.put(`/api/cards/${id}`, propEdit)
    .then(res => {
      return $q.resolve(res.data);
    })
  };

  this.delete = id => {
    return $http.delete(`/api/properties/${id}`);
  };

  this.addTenant = (propId, tenantId) => {
    return $http.post(`/api/${propId}/tenants/${tenantId}`)
    .then(res => {
      return $q.resolve(res.data);
    })
  };

  this.removeTenant = (propId, tenantId) => {
    return $http.delete(`/api/${propId}/tenants/${tenantId}`);
  };

  this.summary = () => {
    return $http.get('/api/summary')
    .then(res => {
      return $q.resolve(res.data);
    });
  };
});

app.service('Tenants', function($http, $q) {
  this.getAll = () => {
    return $http.get('/api/tenants')
    .then(res => {
      return $q.resolve(res.data);
    });
  };

  this.getById = id => {
    return $http.get(`/api/tenants/${id}`)
    .then(res => {
      console.log('res.data: ', res.data)
      return $q.resolve(res.data);
    })
  };

  this.create = tenantInfo => {
    return $http.post('/api/tenants')
    .then(res => {
      return $q.resolve(res.data);
    })
  };

  this.update = (id, tenantEdit) => {
    return $http.put(`/api/tenants/${id}`, tenantEdit)
    .then(res => {
      return $q.resolve(res.data);
    })
  };

  this.delete = id => {
    return $http.delete(`/api/tenants/${id}`);
  };

});
