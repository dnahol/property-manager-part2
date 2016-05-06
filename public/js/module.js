'use strict';

var app = angular.module('propertyApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl',
  })
  .state('properties', {
    url: '/properties',
    templateUrl: '/html/properties.html',
    controller: 'propertiesCtrl',
    resolve: {
      allProps:
      function(Properties) {
        return Properties.getAll();
      }
    }
  })

  .state('tenants', {
    url: '/tenants',
    templateUrl: '/html/tenants.html',
    controller: 'tenantsCtrl',
    resolve: {
      allTenants:
      function(Tenants) {
        return Tenants.getAll();
      }
    }
  })

  .state('propertyDetail', {
    url: '/property/detail/:id',
    templateUrl: '/html/propertyDetail.html',
    controller: 'propertyDetailCtrl',
    resolve: {
      property:
      function(Properties, $stateParams) {
        return Properties.getById($stateParams.id);
      }
    }
  })

  .state('tenantDetail', {
    url: '/tenant/detail/:id',
    templateUrl: '/html/tenantDetail.html',
    controller: 'tenantDetailCtrl',
    resolve: {
      tenant:
      function(Tenants, $stateParams) {
        console.log('$stateParams: ', $stateParams);
        return Tenants.getById($stateParams.id);
      }
    }
  })
  .state('summary', {
    url: '/summary',
    templateUrl: 'html/summary.html',
    controller: 'summmaryCtrl',
    // resolve: {
    //   summaryData:
    //   //    function(Tenant){}
    // }
  })

  $urlRouterProvider.otherwise('/');
});
