'use strict';

var app = angular.module('propertyApp');


app.controller('homeCtrl', function() {
  console.log('homeCtrl!');
});
app.controller('propertiesCtrl', function(allProps, $scope) {
  console.log('propertiesCtrl!');
  console.log('allProps: ', allProps);

  $scope.properties = allProps;


});
app.controller('tenantsCtrl', function(allTenants) {
  console.log('tenantsCtrl!');
    console.log('allTenants: ', allTenants);
});
app.controller('propertyDetailCtrl', function(property) {
  console.log('propertyDetailCtrl!');
  console.log('property: ', property);
});
app.controller('tenantDetailCtrl', function(tenant) {
  console.log('tenantDetailCtrl!');
  console.log('tenant: ', tenant);
});
app.controller('summmaryCtrl', function() {
  console.log('summmaryCtrl!');
});
