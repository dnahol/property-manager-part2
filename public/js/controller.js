'use strict';

var app = angular.module('propertyApp');


app.controller('homeCtrl', function() {
  console.log('homeCtrl!');
});
app.controller('propertiesCtrl', function(allProps, $scope) {
  $scope.properties = allProps;
});
app.controller('tenantsCtrl', function($scope, allTenants) {
  console.log('tenantsCtrl!');
  console.log('allTenants: ', allTenants);
  $scope.tenants = allTenants;

});
app.controller('propertyDetailCtrl', function(property, $scope) {
  $scope.property = property;
});
app.controller('tenantDetailCtrl', function(tenant) {
  console.log('tenantDetailCtrl!');
  console.log('tenant: ', tenant);
});
app.controller('summmaryCtrl', function() {
  console.log('summmaryCtrl!');
});
