'use strict';

var app = angular.module('propertyApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'html/home.html',
    controller: 'homeCtrl',
  })
  .state('properties', {
    url: '/properties',
    templateUrl: 'html/properties.html',
    controller: 'propertiesCtrl',
    // resolve: {
    //   allProperties:
    //   //  function(Property) {
    //   //    return Property.getAll();
    //   //    }
    // }
  })

  .state('tenants', {
    url: '/tenants',
    templateUrl: 'html/tenants.html',
    controller: 'tenantsCtrl',
    // resolve: {
    //   allTenants:
    //   //  function(Tenant) {}
    // }
  })

  .state('propertyDetail', {
    url: '/property/detail',
    templateUrl: 'propertyDetail.html',
    controller: 'propertyDetailCtrl',
    // resolve: {
    //   property:
    //   //  function(Tenant) {}
    // }
  })

  .state('tenantDetail', {
    url: '/tenants/detail',
    templateUrl: 'tenantDetail.html',
    controller: 'tenantDetailCtrl',
    // resolve: {
    //   tenant:
    //   //    function(Tenant){}
    // }
  })

  $urlRouterProvider.otherwise('/');
});
